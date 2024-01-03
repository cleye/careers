import requests
import json
from bs4 import BeautifulSoup, Comment

JOBS = (
    "Software Developer",
    "Registered Nurse",
    "Sales Representative",
    "School Teacher",
    "Accountant",
    "Medical Doctor",
    "Customer Service Representative",
    "Marketing Manager",
    "Electrician",
    "Administrative Assistant",
    "Civil Engineer",
    "Retail Salesperson",
    "Financial Analyst",
    "Human Resources Specialist",
    "Graphic Designer",
    "Truck Driver",
    "Police Officer",
    "Mechanical Engineer",
    "Chef",
    "Data Scientist",
)


TS_CONTENT = '''
type Profession = {
  name: string;
  description: string;
  estimatedSalary: {
      percentile10: string;
      percentile25: string;
      median: string;
      percentile75: string;
      percentile90: string;
  }[];
  lastReviewed: string;
}

export const PROFESSIONS: Profession[] = %s;
'''


if __name__ == "__main__":
	salaries = []

	for job in JOBS:
		job_query = job.replace(" ", "+")
		req = requests.get(f"https://au.talent.com/salary?job={job_query}")

		# Parse the HTML content
		soup = BeautifulSoup(req.content, 'html.parser')

		# Find the comment
		comment = soup.find(text=lambda text: isinstance(text, Comment) and "Estimaded Salary schema" in text)

		if comment:
			# Get the script tag following the comment
			script_tag = comment.find_next('script', {'type': 'application/ld+json'})

			if script_tag:
				# Extract the text content of the script tag
				json_text = script_tag.string.strip()

				# Load the JSON object
				json_object = json.loads(json_text)

				# Reformat JSON
				json_object["lastReviewed"] = json_object["mainEntityOfPage"]["lastReviewed"]
				for key in ["@context", "@type", "mainEntityOfPage", "occupationLocation"]:
					json_object.pop(key)
				for key in ["@type", "name", "currency", "duration"]:
					json_object["estimatedSalary"][0].pop(key)

				# Print the JSON object
				salaries.append(json_object)
			else:
				print("No script tag found after the comment.")
		else:
			print("Comment not found in the HTML content.")

	# Convert Python dict to JavaScript-like object syntax
	javascript_content = TS_CONTENT % json.dumps(salaries, indent=2)

	# Write to a JavaScript file
	with open('salaries.ts', 'w') as js_file:
		js_file.write(javascript_content)