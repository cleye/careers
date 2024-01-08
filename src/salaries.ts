export type EstimatedSalary = {
  percentile10: number;
  percentile25: number;
  median: number;
  percentile75: number;
  percentile90: number;
};

export type Profession = {
  name: string;
  description: string;
  estimatedSalary: EstimatedSalary;
  lastReviewed: string;
}

export const PROFESSIONS: Profession[] = [
  {
    "name": "Software Developer",
    "description": "Research, design, and develop computer and network software or specialized utility programs. Analyze user needs and develop software solutions, applying principles and techniques of computer science, engineering, and mathematical analysis. Update software or enhance existing software capabilities. May work with computer hardware engineers to integrate hardware and software systems, and develop specifications and performance requirements. May maintain databases within an application area, working individually or coordinating database development as part of a team.\n\n",
    "estimatedSalary":
      {
        "percentile10": 80000,
        "percentile25": 95000,
        "median": 113410,
        "percentile75": 133954.7,
        "percentile90": 160425
      }
    ,
    "lastReviewed": "2024-01-03T04:50:17-05:00"
  },
  {
    "name": "Registered Nurse",
    "description": "Diagnose and coordinate all aspects of the birthing process, either independently or as part of a healthcare team. May provide well-woman gynecological care. Must have specialized, graduate nursing education.\n\n",
    "estimatedSalary":
      {
        "percentile10": 70353.716517857,
        "percentile25": 77386.03125,
        "median": 82365.18287037,
        "percentile75": 95562.326613653,
        "percentile90": 126750
      }
    ,
    "lastReviewed": "2024-01-03T04:50:19-05:00"
  },
  {
    "name": "Sales Representative",
    "description": "Sell services to individuals or businesses. May describe options or resolve client problems.\n\n",
    "estimatedSalary":
      {
        "percentile10": 55000,
        "percentile25": 63484.375,
        "median": 78855.9625,
        "percentile75": 100000,
        "percentile90": 128830
      }
    ,
    "lastReviewed": "2024-01-03T04:50:20-05:00"
  },
  {
    "name": "School Teacher",
    "description": "Teach one or more subjects to students at the secondary school level.\n\n",
    "estimatedSalary":
      {
        "percentile10": 61873.5,
        "percentile25": 81510.375,
        "median": 94345.5,
        "percentile75": 102728.25,
        "percentile90": 119418
      }
    ,
    "lastReviewed": "2024-01-03T04:50:22-05:00"
  },
  {
    "name": "Accountant",
    "description": "Examine, analyze, and interpret accounting records to prepare financial statements, give advice, or audit and evaluate statements prepared by others. Install or advise on systems of recording costs or other financial and budgetary data.\n\n",
    "estimatedSalary":
      {
        "percentile10": 65000,
        "percentile25": 79797.055357143,
        "median": 95000,
        "percentile75": 110004.76273438,
        "percentile90": 125019.625
      }
    ,
    "lastReviewed": "2024-01-03T04:50:23-05:00"
  },
  {
    "name": "Medical Doctor",
    "description": "Diagnose and provide nonsurgical treatment for a wide range of diseases and injuries of internal organ systems. Provide care mainly for adults and adolescents, and are based primarily in an outpatient care setting.\n\n",
    "estimatedSalary":
      {
        "percentile10": 74370,
        "percentile25": 90000,
        "median": 127056.75,
        "percentile75": 185250,
        "percentile90": 296400
      }
    ,
    "lastReviewed": "2024-01-03T04:50:24-05:00"
  },
  {
    "name": "Customer Service Representative",
    "description": "Interact with customers to provide basic or scripted information in response to routine inquiries about products and services. May handle and resolve general complaints. Excludes individuals whose duties are primarily installation, sales, repair, and technical support.\n\n",
    "estimatedSalary":
      {
        "percentile10": 51129,
        "percentile25": 57500,
        "median": 63963.642857143,
        "percentile75": 68797.710503472,
        "percentile90": 75000
      }
    ,
    "lastReviewed": "2024-01-03T04:50:26-05:00"
  },
  {
    "name": "Marketing Manager",
    "description": "Plan, direct, or coordinate marketing policies and programs, such as determining the demand for products and services offered by a firm and its competitors, and identify potential customers. Develop pricing strategies with the goal of maximizing the firm's profits or share of the market while ensuring the firm's customers are satisfied. Oversee product development or monitor trends that indicate the need for new products and services.\n\n",
    "estimatedSalary":
      {
        "percentile10": 79756.8,
        "percentile25": 97394.115917969,
        "median": 116266.47174708,
        "percentile75": 136013.66071429,
        "percentile90": 159802
      }
    ,
    "lastReviewed": "2024-01-03T04:50:27-05:00"
  },
  {
    "name": "Electrician",
    "description": "Install, maintain, and repair electrical wiring, equipment, and fixtures. Ensure that work is in accordance with relevant codes. May install or service street lights, intercom systems, or electrical control systems.\n\n",
    "estimatedSalary":
      {
        "percentile10": 67314.76,
        "percentile25": 77999.46875,
        "median": 93600,
        "percentile75": 116583.34821429,
        "percentile90": 147420
      }
    ,
    "lastReviewed": "2024-01-03T04:50:28-05:00"
  },
  {
    "name": "Administrative Assistant",
    "description": "Provide high-level administrative support by conducting research, preparing statistical reports, and handling information requests, as well as performing routine administrative functions such as preparing correspondence, receiving visitors, arranging conference calls, and scheduling meetings. May also train and supervise lower-level clerical staff.\n\n",
    "estimatedSalary":
      {
        "percentile10": 54929.65,
        "percentile25": 60769.407552083,
        "median": 68288.9,
        "percentile75": 75723.05,
        "percentile90": 84428.5
      }
    ,
    "lastReviewed": "2024-01-03T04:50:29-05:00"
  },
  {
    "name": "Civil Engineer",
    "description": "Apply theory and principles of civil engineering in planning, designing, and overseeing construction and maintenance of structures and facilities under the direction of engineering staff or physical scientists.\n\n",
    "estimatedSalary":
      {
        "percentile10": 76418.0140625,
        "percentile25": 91107.400390625,
        "median": 112319.97767857,
        "percentile75": 135964.28571429,
        "percentile90": 174960.3
      }
    ,
    "lastReviewed": "2024-01-03T04:50:30-05:00"
  },
  {
    "name": "Retail Salesperson",
    "description": "Sell merchandise, such as furniture, motor vehicles, appliances, or apparel to consumers.\n\n",
    "estimatedSalary":
      {
        "percentile10": 50700,
        "percentile25": 51500,
        "median": 52604,
        "percentile75": 59332.875,
        "percentile90": 100002.4
      }
    ,
    "lastReviewed": "2024-01-03T04:50:32-05:00"
  },
  {
    "name": "Financial Analyst",
    "description": "Conduct quantitative analyses of information involving investment programs or financial data of public or private institutions, including valuation of businesses.\n\n",
    "estimatedSalary":
      {
        "percentile10": 80000,
        "percentile25": 93542.666666667,
        "median": 108962.28333333,
        "percentile75": 125000,
        "percentile90": 145000
      }
    ,
    "lastReviewed": "2024-01-03T04:50:33-05:00"
  },
  {
    "name": "Human Resources Specialist",
    "description": "Plan, direct, or coordinate human resources activities and staff of an organization.\n\n",
    "estimatedSalary":
      {
        "percentile10": 51391.1,
        "percentile25": 70352.25,
        "median": 90967,
        "percentile75": 108566,
        "percentile90": 117248.4
      }
    ,
    "lastReviewed": "2024-01-03T04:50:34-05:00"
  },
  {
    "name": "Graphic Designer",
    "description": "Prepare detailed drawings of architectural and structural features of buildings or drawings and topographical relief maps used in civil engineering projects, such as highways, bridges, and public works. Use knowledge of building materials, engineering practices, and mathematics to complete drawings.\n\n",
    "estimatedSalary":
      {
        "percentile10": 65000,
        "percentile25": 75000,
        "median": 85871,
        "percentile75": 102375,
        "percentile90": 115148
      }
    ,
    "lastReviewed": "2024-01-03T04:50:35-05:00"
  },
  {
    "name": "Truck Driver",
    "description": "Drive a tractor-trailer combination or a truck with a capacity of at least 26,001 pounds Gross Vehicle Weight (GVW). May be required to unload truck. Requires commercial drivers' license. Includes tow truck drivers.\n\n",
    "estimatedSalary":
      {
        "percentile10": 54600,
        "percentile25": 59932.071354167,
        "median": 66751.3828125,
        "percentile75": 75088,
        "percentile90": 88920
      }
    ,
    "lastReviewed": "2024-01-03T04:50:35-05:00"
  },
  {
    "name": "Police Officer",
    "description": "Maintain order and protect life and property by enforcing local, tribal, state, or federal laws and ordinances. Perform a combination of the following duties: patrol a specific area; direct traffic; issue traffic summonses; investigate accidents; apprehend and arrest suspects, or serve legal processes of courts. Includes police officers working at educational institutions.\n\n",
    "estimatedSalary":
      {
        "percentile10": 60580,
        "percentile25": 64022,
        "median": 70008,
        "percentile75": 80969.25,
        "percentile90": 102346.5
      }
    ,
    "lastReviewed": "2024-01-03T04:50:36-05:00"
  },
  {
    "name": "Mechanical Engineer",
    "description": "Apply theory and principles of mechanical engineering to modify, develop, test, or adjust machinery and equipment under direction of engineering staff or physical scientists.\n\n",
    "estimatedSalary":
      {
        "percentile10": 75000,
        "percentile25": 92646.6,
        "median": 114951.03333333,
        "percentile75": 145000,
        "percentile90": 175000
      }
    ,
    "lastReviewed": "2024-01-03T04:50:37-05:00"
  },
  {
    "name": "Chef",
    "description": "Plan, direct, or coordinate activities of an organization or department that serves food and beverages.\n\n",
    "estimatedSalary":
      {
        "percentile10": 55000,
        "percentile25": 59584.579411765,
        "median": 68664.443545387,
        "percentile75": 77872.6921875,
        "percentile90": 95080
      }
    ,
    "lastReviewed": "2024-01-03T04:50:38-05:00"
  },
  {
    "name": "Data Scientist",
    "description": "Conduct research dealing with the understanding of human diseases and the improvement of human health. Engage in clinical investigation, research and development, or other related activities.\n\n",
    "estimatedSalary":
      {
        "percentile10": 92150,
        "percentile25": 104747.5,
        "median": 119122,
        "percentile75": 145004,
        "percentile90": 185000
      }
    ,
    "lastReviewed": "2024-01-03T04:50:39-05:00"
  }
];
