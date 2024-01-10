
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
  tuition: {
    years: number,
    fees: number
  }
};

type TradeApprenticeship = {
  apprenticeship: {
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
      "percentile10": 80000,
      "percentile25": 95058,
      "median": 113410,
      "percentile75": 135000,
      "percentile90": 157984
    },
    "lastReviewed": "2024-01-09T10:14:55-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 5,
      "fees": 80000
    }
  },
  {
    "name": "Registered Nurse",
    "description": "Diagnose and coordinate all aspects of the birthing process, either independently or as part of a healthcare team. May provide well-woman gynecological care. Must have specialized, graduate nursing education.\n\n",
    "estimatedSalary": {
      "percentile10": 70163,
      "percentile25": 77544,
      "median": 82770,
      "percentile75": 95046,
      "percentile90": 125875
    },
    "lastReviewed": "2024-01-09T10:14:57-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "School Teacher",
    "description": "Teach one or more subjects to students at the secondary school level.\n\n",
    "estimatedSalary": {
      "percentile10": 62500,
      "percentile25": 82155,
      "median": 94500,
      "percentile75": 102338,
      "percentile90": 117045
    },
    "lastReviewed": "2024-01-09T10:14:59-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Accountant",
    "description": "Examine, analyze, and interpret accounting records to prepare financial statements, give advice, or audit and evaluate statements prepared by others. Install or advise on systems of recording costs or other financial and budgetary data.\n\n",
    "estimatedSalary": {
      "percentile10": 65000,
      "percentile25": 79752,
      "median": 95000,
      "percentile75": 110006,
      "percentile90": 125099
    },
    "lastReviewed": "2024-01-09T10:15:01-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Medical Doctor",
    "description": "Diagnose and provide nonsurgical treatment for a wide range of diseases and injuries of internal organ systems. Provide care mainly for adults and adolescents, and are based primarily in an outpatient care setting.\n\n",
    "estimatedSalary": {
      "percentile10": 74370,
      "percentile25": 90000,
      "median": 127057,
      "percentile75": 185250,
      "percentile90": 296400
    },
    "lastReviewed": "2024-01-09T10:15:02-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Physiotherapist",
    "description": "Assess, plan, organize, and participate in rehabilitative programs that improve mobility, relieve pain, increase strength, and improve or correct disabling conditions resulting from disease or injury.\n\n",
    "estimatedSalary": {
      "percentile10": 74753,
      "percentile25": 82500,
      "median": 93178,
      "percentile75": 104776,
      "percentile90": 120261
    },
    "lastReviewed": "2024-01-09T10:15:04-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Civil Engineer",
    "description": "Apply theory and principles of civil engineering in planning, designing, and overseeing construction and maintenance of structures and facilities under the direction of engineering staff or physical scientists.\n\n",
    "estimatedSalary": {
      "percentile10": 75441,
      "percentile25": 91434,
      "median": 112603,
      "percentile75": 135000,
      "percentile90": 174828
    },
    "lastReviewed": "2024-01-09T10:15:05-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Graphic Designer",
    "description": "Prepare detailed drawings of architectural and structural features of buildings or drawings and topographical relief maps used in civil engineering projects, such as highways, bridges, and public works. Use knowledge of building materials, engineering practices, and mathematics to complete drawings.\n\n",
    "estimatedSalary": {
      "percentile10": 65000,
      "percentile25": 75000,
      "median": 85358,
      "percentile75": 102346,
      "percentile90": 115000
    },
    "lastReviewed": "2024-01-09T10:15:06-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Mechanical Engineer",
    "description": "Apply theory and principles of mechanical engineering to modify, develop, test, or adjust machinery and equipment under direction of engineering staff or physical scientists.\n\n",
    "estimatedSalary": {
      "percentile10": 75000,
      "percentile25": 92188,
      "median": 113327,
      "percentile75": 145000,
      "percentile90": 175000
    },
    "lastReviewed": "2024-01-09T10:15:07-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Data Scientist",
    "description": "Conduct research dealing with the understanding of human diseases and the improvement of human health. Engage in clinical investigation, research and development, or other related activities.\n\n",
    "estimatedSalary": {
      "percentile10": 92360,
      "percentile25": 104937,
      "median": 119122,
      "percentile75": 145318,
      "percentile90": 185000
    },
    "lastReviewed": "2024-01-09T10:15:08-05:00",
    "type": "ACADEMIC",
    "tuition": {
      "years": 0,
      "fees": 0
    }
  },
  {
    "name": "Chef",
    "description": "Plan, direct, or coordinate activities of an organization or department that serves food and beverages.\n\n",
    "estimatedSalary": {
      "percentile10": 55000,
      "percentile25": 59520,
      "median": 68250,
      "percentile75": 77585,
      "percentile90": 95000
    },
    "lastReviewed": "2024-01-09T10:15:09-05:00",
    "type": "TRADE",
    "apprenticeship": {
      "years": 0,
      "income": 0
    }
  },
  {
    "name": "Plumber",
    "description": "Help plumbers, pipefitters, steamfitters, or pipelayers by performing duties requiring less skill. Duties include using, supplying, or holding materials or tools, and cleaning work area and equipment.\n\n",
    "estimatedSalary": {
      "percentile10": 61547,
      "percentile25": 66768,
      "median": 80000,
      "percentile75": 95458,
      "percentile90": 114608
    },
    "lastReviewed": "2024-01-09T10:15:09-05:00",
    "type": "TRADE",
    "apprenticeship": {
      "years": 0,
      "income": 0
    }
  },
  {
    "name": "Truck Driver",
    "description": "Drive a tractor-trailer combination or a truck with a capacity of at least 26,001 pounds Gross Vehicle Weight (GVW). May be required to unload truck. Requires commercial drivers' license. Includes tow truck drivers.\n\n",
    "estimatedSalary": {
      "percentile10": 54600,
      "percentile25": 59981,
      "median": 66768,
      "percentile75": 75088,
      "percentile90": 88920
    },
    "lastReviewed": "2024-01-09T10:15:10-05:00",
    "type": "TRADE",
    "apprenticeship": {
      "years": 0,
      "income": 0
    }
  },
  {
    "name": "Police Officer",
    "description": "Maintain order and protect life and property by enforcing local, tribal, state, or federal laws and ordinances. Perform a combination of the following duties: patrol a specific area; direct traffic; issue traffic summonses; investigate accidents; apprehend and arrest suspects, or serve legal processes of courts. Includes police officers working at educational institutions.\n\n",
    "estimatedSalary": {
      "percentile10": 60580,
      "percentile25": 64022,
      "median": 71340,
      "percentile75": 82690,
      "percentile90": 97396
    },
    "lastReviewed": "2024-01-09T10:15:11-05:00",
    "type": "TRADE",
    "apprenticeship": {
      "years": 0,
      "income": 0
    }
  },
  {
    "name": "Retail Salesperson",
    "description": "Sell merchandise, such as furniture, motor vehicles, appliances, or apparel to consumers.\n\n",
    "estimatedSalary": {
      "percentile10": 50700,
      "percentile25": 51500,
      "median": 52604,
      "percentile75": 59333,
      "percentile90": 100002
    },
    "lastReviewed": "2024-01-09T10:15:12-05:00",
    "type": "TRADE",
    "apprenticeship": {
      "years": 0,
      "income": 0
    }
  },
  {
    "name": "Electrician",
    "description": "Install, maintain, and repair electrical wiring, equipment, and fixtures. Ensure that work is in accordance with relevant codes. May install or service street lights, intercom systems, or electrical control systems.\n\n",
    "estimatedSalary": {
      "percentile10": 67072,
      "percentile25": 77862,
      "median": 93120,
      "percentile75": 116844,
      "percentile90": 147611
    },
    "lastReviewed": "2024-01-09T10:15:14-05:00",
    "type": "TRADE",
    "apprenticeship": {
      "years": 4,
      "income": 35000
    }
  }
];
