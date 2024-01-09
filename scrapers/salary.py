import requests
import json
from bs4 import BeautifulSoup, Comment

ACADEMIC_JOBS = (
    "Software Developer",
    "Registered Nurse",
    "School Teacher",
    "Accountant",
    "Medical Doctor",
    "Physiotherapist",
    "Civil Engineer",
    "Graphic Designer",
    "Mechanical Engineer",
    "Data Scientist"
)

TRADE_JOBS = (
    "Chef",
	"Plumber",
    "Truck Driver",
    "Police Officer",
    "Retail Salesperson",
    "Electrician"
)


TS_CONTENT = '''
export type EstimatedSalary = {
  percentile10: number;
  percentile25: number;
  median: number;
  percentile75: number;
  percentile90: number;
};

type ProfessionBase = {
  name: string;
  description: string;
  estimatedSalary: EstimatedSalary;
  lastReviewed: string;
};

type AcademicTuition = {
  tuition?: {
    years: number,
    fees: number
  }
};

type TradeApprenticeship = {
  apprenticeship?: {
    years: number,
    income: number
  }
};

export type Profession = (ProfessionBase & {type: "ACADEMIC"} & AcademicTuition) | (ProfessionBase & {type: "TRADE"} & TradeApprenticeship);

export const PROFESSIONS: Profession[] = %s;
'''


def get_job_json(job_name, job_type):
	print("Obtaining data for profession:", job_name)
	job_query = job_name.replace(" ", "+")
	req = requests.get(f"https://au.talent.com/salary?job={job_query}")
	soup = BeautifulSoup(req.content, 'html.parser')
	comment = soup.find(text=lambda text: isinstance(text, Comment) and "Estimaded Salary schema" in text)
	if comment:
		script_tag = comment.find_next('script', {'type': 'application/ld+json'})

		if script_tag:
			json_text = script_tag.string.strip()
			json_object = json.loads(json_text)

			json_object["lastReviewed"] = json_object["mainEntityOfPage"]["lastReviewed"]
			for key in ("@context", "@type", "mainEntityOfPage", "occupationLocation"):
				json_object.pop(key)
			for key in ("@type", "name", "currency", "duration"):
				json_object["estimatedSalary"][0].pop(key)
			
			# parse numeric strings to 2 decimal places
			json_object["estimatedSalary"] = json_object["estimatedSalary"][0]
			for key in ("percentile10", "percentile25", "median", "percentile75", "percentile90"):
				json_object["estimatedSalary"][key] = round(float(json_object["estimatedSalary"][key]), 2)

			json_object["type"] = job_type

			return json_object
		else:
			print("No script tag found after the comment.", job_name)
	else:
		print("Comment not found in the HTML content.", job_name)


if __name__ == "__main__":
	salaries = (
		[get_job_json(job, "ACADEMIC") for job in ACADEMIC_JOBS] + 
		[get_job_json(job, "TRADE") for job in TRADE_JOBS]
	)

	javascript_content = TS_CONTENT % json.dumps(salaries, indent=2)

	# Write to a JavaScript file
	with open('salaries.ts', 'w') as js_file:
		js_file.write(javascript_content)