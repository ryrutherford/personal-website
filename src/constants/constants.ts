import NuanceLogo from "../images/nuance-logo.png";
import IRCCLogo from "../images/ircc-logo.png";
import McGillLogo from "../images/mcgill-logo.png";
import UniMelbLogo from "../images/unimelb-logo.png";
import SuitsULogo from "../images/suitsu-logo.png";

export interface ResumeItem {
    experience?: Experience,
    language?: Language
}

export interface Experience {
    role: string,
    date: string,
    logo: string,
    description?: string[],
    company: string
}

export interface Language {
    name: string,
    proficiency: string
}

export interface ResumeBoxInfo {
    title: string,
    values: ResumeItem[]
}

const educationValues: ResumeItem[] = [{
        experience: {
            role: "BSc Computer Science",
            company: "McGill University",
            date: "September 2017 - Present",
            logo: McGillLogo,
            description: ["temp"]
        }
    }, {
        experience: {
            role: "Exchange Student",
            company: "University of Melbourne",
            date: "March 2020 - July 2020",
            logo: UniMelbLogo,
            description: ["temp"]
        }
    }
]

const workExpValues: ResumeItem[] = [{
        experience: {
            role: "Software Developer Intern",
            company: "Nuance Communications",
            date: "January 2021 - Present",
            logo: NuanceLogo,
            description: ["temp"]
        }
    }, {
        experience: {
            role: "Technical Analyst",
            company: "Immigration, Refugees and Citizenship Canada",
            date: "May 2019 - August 2019",
            logo: IRCCLogo,
            description: ["Supported implementation of Clarity PPM, an enterprise project and portfolio management tool, by developing a request for proposal and training documentation",
            "Configured Clarity PPM by creating custom objects, lookups, portlets, and queries to align with IRCC's requirements and practices",
            "Wrote a C program that generated a distribution list used to facilitate communication between executives and employees"
            ]
        }
    }
]

const volunteerValues: ResumeItem[] = [{
        experience: {
            role: "President | Formerly VP Marketing",
            company: "Suits U Montreal",
            date: "September 2017 - Present",
            logo: SuitsULogo,
            description: ["temp"]
        }
    }
]

const languageValues: ResumeItem[] = [{
        language: {
            name: "English",
            proficiency: "Native"
        }
        }, {
            language: {
            name: "French",
            proficiency: "Fluent"
        }
        }, {
            language: {
            name: "Spanish",
            proficiency: "Intermediate"
        }
    }
]

export const resumeDetails: ResumeBoxInfo[] = [{
        title: "Work Experience",
        values: workExpValues
    }, {
        title: "Education",
        values: educationValues
    }, {
        title: "Volunteer and Extracurricular",
        values: volunteerValues
    },
    {
        title: "Languages",
        values: languageValues
    }
]