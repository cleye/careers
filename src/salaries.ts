
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

export const PROFESSIONS: Profession[] = [
  {
    "name": "Software Developer",
    "description": "Research, design, and develop computer and network software or specialized utility programs. Analyze user needs and develop software solutions, applying principles and techniques of computer science, engineering, and mathematical analysis. Update software or enhance existing software capabilities. May work with computer hardware engineers to integrate hardware and software systems, and develop specifications and performance requirements. May maintain databases within an application area, working individually or coordinating database development as part of a team.\n\n",
    "estimatedSalary": {
      "percentile10": 80000.0,
      "percentile25": 95000.0,
      "median": 113410.0,
      "percentile75": 135000.0,
      "percentile90": 158297.8
    },
    "lastReviewed": "2024-01-09T07:44:35-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Registered Nurse",
    "description": "Diagnose and coordinate all aspects of the birthing process, either independently or as part of a healthcare team. May provide well-woman gynecological care. Must have specialized, graduate nursing education.\n\n",
    "estimatedSalary": {
      "percentile10": 70163.458333333,
      "percentile25": 77543.707741477,
      "median": 82770.300202546,
      "percentile75": 95046.023741883,
      "percentile90": 125875.0
    },
    "lastReviewed": "2024-01-09T07:44:36-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "School Teacher",
    "description": "Teach one or more subjects to students at the secondary school level.\n\n",
    "estimatedSalary": {
      "percentile10": 62500.0,
      "percentile25": 82155.0,
      "median": 94500.0,
      "percentile75": 102338.19921875,
      "percentile90": 117045.0
    },
    "lastReviewed": "2024-01-09T07:44:38-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Accountant",
    "description": "Examine, analyze, and interpret accounting records to prepare financial statements, give advice, or audit and evaluate statements prepared by others. Install or advise on systems of recording costs or other financial and budgetary data.\n\n",
    "estimatedSalary": {
      "percentile10": 65000.0,
      "percentile25": 79751.57421875,
      "median": 95000.0,
      "percentile75": 110006.29991319,
      "percentile90": 125098.6
    },
    "lastReviewed": "2024-01-09T07:44:40-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Medical Doctor",
    "description": "Diagnose and provide nonsurgical treatment for a wide range of diseases and injuries of internal organ systems. Provide care mainly for adults and adolescents, and are based primarily in an outpatient care setting.\n\n",
    "estimatedSalary": {
      "percentile10": 74370.0,
      "percentile25": 90000.0,
      "median": 127056.75,
      "percentile75": 185250.0,
      "percentile90": 296400.0
    },
    "lastReviewed": "2024-01-09T07:44:41-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Physiotherapist",
    "description": "Assess, plan, organize, and participate in rehabilitative programs that improve mobility, relieve pain, increase strength, and improve or correct disabling conditions resulting from disease or injury.\n\n",
    "estimatedSalary": {
      "percentile10": 74752.9,
      "percentile25": 82500.0,
      "median": 93178.289950284,
      "percentile75": 104775.55555556,
      "percentile90": 120261.3
    },
    "lastReviewed": "2024-01-09T07:44:42-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Civil Engineer",
    "description": "Apply theory and principles of civil engineering in planning, designing, and overseeing construction and maintenance of structures and facilities under the direction of engineering staff or physical scientists.\n\n",
    "estimatedSalary": {
      "percentile10": 75441.0,
      "percentile25": 91433.650390625,
      "median": 112602.68181818,
      "percentile75": 135000.0,
      "percentile90": 174827.96666667
    },
    "lastReviewed": "2024-01-09T07:44:44-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Graphic Designer",
    "description": "Prepare detailed drawings of architectural and structural features of buildings or drawings and topographical relief maps used in civil engineering projects, such as highways, bridges, and public works. Use knowledge of building materials, engineering practices, and mathematics to complete drawings.\n\n",
    "estimatedSalary": {
      "percentile10": 65000.0,
      "percentile25": 75000.0,
      "median": 85357.75,
      "percentile75": 102346.5,
      "percentile90": 114999.55
    },
    "lastReviewed": "2024-01-09T07:44:45-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Mechanical Engineer",
    "description": "Apply theory and principles of mechanical engineering to modify, develop, test, or adjust machinery and equipment under direction of engineering staff or physical scientists.\n\n",
    "estimatedSalary": {
      "percentile10": 75000.0,
      "percentile25": 92187.5,
      "median": 113327.33333333,
      "percentile75": 145000.0,
      "percentile90": 175000.0
    },
    "lastReviewed": "2024-01-09T07:44:45-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Data Scientist",
    "description": "Conduct research dealing with the understanding of human diseases and the improvement of human health. Engage in clinical investigation, research and development, or other related activities.\n\n",
    "estimatedSalary": {
      "percentile10": 92360.0,
      "percentile25": 104936.875,
      "median": 119122.0,
      "percentile75": 145318.5,
      "percentile90": 185000.0
    },
    "lastReviewed": "2024-01-09T07:44:47-05:00",
    "type": "ACADEMIC"
  },
  {
    "name": "Chef",
    "description": "Plan, direct, or coordinate activities of an organization or department that serves food and beverages.\n\n",
    "estimatedSalary": {
      "percentile10": 55000.0,
      "percentile25": 59519.75,
      "median": 68250.0,
      "percentile75": 77584.615384615,
      "percentile90": 95000.0
    },
    "lastReviewed": "2024-01-09T07:44:47-05:00",
    "type": "TRADE"
  },
  {
    "name": "Plumber",
    "description": "Help plumbers, pipefitters, steamfitters, or pipelayers by performing duties requiring less skill. Duties include using, supplying, or holding materials or tools, and cleaning work area and equipment.\n\n",
    "estimatedSalary": {
      "percentile10": 61546.866666667,
      "percentile25": 66768.0,
      "median": 80000.0,
      "percentile75": 95458.333333333,
      "percentile90": 114608.0
    },
    "lastReviewed": "2024-01-09T07:44:48-05:00",
    "type": "TRADE"
  },
  {
    "name": "Truck Driver",
    "description": "Drive a tractor-trailer combination or a truck with a capacity of at least 26,001 pounds Gross Vehicle Weight (GVW). May be required to unload truck. Requires commercial drivers' license. Includes tow truck drivers.\n\n",
    "estimatedSalary": {
      "percentile10": 54600.0,
      "percentile25": 59981.25,
      "median": 66768.0,
      "percentile75": 75088.0,
      "percentile90": 88920.0
    },
    "lastReviewed": "2024-01-09T07:44:49-05:00",
    "type": "TRADE"
  },
  {
    "name": "Police Officer",
    "description": "Maintain order and protect life and property by enforcing local, tribal, state, or federal laws and ordinances. Perform a combination of the following duties: patrol a specific area; direct traffic; issue traffic summonses; investigate accidents; apprehend and arrest suspects, or serve legal processes of courts. Includes police officers working at educational institutions.\n\n",
    "estimatedSalary": {
      "percentile10": 60580.0,
      "percentile25": 64022.0,
      "median": 71340.0,
      "percentile75": 82689.5,
      "percentile90": 97395.5
    },
    "lastReviewed": "2024-01-09T07:44:50-05:00",
    "type": "TRADE"
  },
  {
    "name": "Retail Salesperson",
    "description": "Sell merchandise, such as furniture, motor vehicles, appliances, or apparel to consumers.\n\n",
    "estimatedSalary": {
      "percentile10": 50700.0,
      "percentile25": 51500.0,
      "median": 52604.0,
      "percentile75": 59332.875,
      "percentile90": 100002.4
    },
    "lastReviewed": "2024-01-09T07:44:51-05:00",
    "type": "TRADE"
  },
  {
    "name": "Electrician",
    "description": "Install, maintain, and repair electrical wiring, equipment, and fixtures. Ensure that work is in accordance with relevant codes. May install or service street lights, intercom systems, or electrical control systems.\n\n",
    "estimatedSalary": {
      "percentile10": 67072.0,
      "percentile25": 77862.388888889,
      "median": 93120.200120192,
      "percentile75": 116843.75558036,
      "percentile90": 147610.66666667
    },
    "lastReviewed": "2024-01-09T07:44:51-05:00",
    "type": "TRADE"
  }
];
