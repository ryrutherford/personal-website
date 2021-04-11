import NuanceLogo from "../images/nuance-logo.png";
import IRCCLogo from "../images/ircc-logo2.png";
import McGillLogo from "../images/mcgill-logo2.png";
import UniMelbLogo from "../images/unimelb-logo2.png";
import SuitsULogo from "../images/suitsu-logo.png";
import JAVALOGO from '../images/java_logo.png';
import JSLOGO from '../images/javascript_logo.png';
import OCAMLLOGO from '../images/ocaml_logo.png';
import CLOGO from '../images/c_logo.jpg';
import PYTHONLOGO from '../images/python_logo.png';
import KUBERNETESLOGO from '../images/kubernetes_logo.png';
import DOCKERLOGO from '../images/docker_logo.png';
import LINUXLOGO from '../images/linux_logo.png';
import DARTLOGO from '../images/dart_logo.png';
import TSLOGO from '../images/typescript_logo.png';
import REACTLOGO from '../images/react_logo.png';
import SPRINGLOGO from '../images/spring_logo.png';
import MINIOLOGO from '../images/minio_logo.png';
import REDUXLOGO from '../images/redux_logo.png';
import FLASKLOGO from '../images/flask_logo.png';
import CSSLOGO from '../images/css_logo.png';
import JQUERYLOGO from '../images/jquery_logo.png';
import FLUTTERLOGO from '../images/flutter_logo.png';
import MYSQLLOGO from '../images/mysql_logo.png';
import FBLOGO from '../images/fb_logo.png';
import BASHLOGO from '../images/bash_logo.png';
import GRAPHQLLOGO from "../images/graphql_logo.png";
import MONGODBLOGO from "../images/mongodb_logo.png";
import HEROKULOGO from "../images/heroku_logo.png";
import AWSLOGO from "../images/aws_logo.png";
import NODEJSLOGO from "../images/nodejs_logo.png";
import SASSLOGO from "../images/sass_logo.png";
import SUPERCOLLIDERLOGO from "../images/supercollider_logo.png";
import CPPLOGO from "../images/cpp_logo.png";
import HTMLLOGO from "../images/html_logo.png";

//PROJECT CARD DATA
export interface ProjectCardInfo {
    title: string,
    video?: string,
    body?: string,
    titleImg: string,
    languages: Tool[],
    github: string,
    link?: string
}

export const projectCardInfo: ProjectCardInfo[] = [
  {
    title: 'Suits U',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1610912703/adryan/SuitsUMontreal/Screenshot_106_uvacnw.png',
    github: 'https://github.com/ryrutherford/suits-u-frontend',
    link: 'https://suitsumontreal.ca',
    languages: [
      {
        data: 'React',
        img: REACTLOGO
      },
      {
        data: 'Node.js',
        img: NODEJSLOGO
      },
      {
        data: 'GraphQL',
        img: GRAPHQLLOGO
      },
      {
        data: 'MongoDB',
        img: MONGODBLOGO
      },
      {
        data: 'SASS',
        img: SASSLOGO
      },
      {
        data: 'Python',
        img: PYTHONLOGO
      },
      {
        data: 'Heroku',
        img: HEROKULOGO
      },
      {
        data: 'Firebase',
        img: FBLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1610912502/adryan/SuitsUMontreal/Suits_U_Montreal_-_Google_Chrome_2020-11-21_22-15-32_1_n4civc.mp4',
  },
  {
    title: 'Algorithmic Composition',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1610912872/adryan/AlgorithmicComposition/wolframtones_p39b1g.gif',
    body: 'Visit https://algorithmic-composition.web.app/ to learn more about the project.',
    github: 'https://github.com/ryrutherford/algorithmic-composition-sc',
    link: 'https://algorithmic-composition.web.app/',
    languages: [
      {
        data: 'Supercollider',
        img: SUPERCOLLIDERLOGO
      },
      {
        data: 'SASS',
        img: SASSLOGO
      },
      {
        data: "HTML5",
        img: HTMLLOGO
      },
      {
        data: 'Firebase',
        img: FBLOGO
      },
    ],
  },
  {
    title: 'Play That Song',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693179/adryan/PlayThatSong/song_request_ngwfzj.jpg',
    github: 'https://github.com/ryrutherford/play-that-song',
    link: 'https://play-that-song-fac18.firebaseapp.com/about',
    languages: [
      {
        data: 'React',
        img: REACTLOGO
      },
      {
        data: 'Redux',
        img: REDUXLOGO
      },
      {
        data: 'Firebase/Firestore',
        img: FBLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693197/adryan/PlayThatSong/PlayThatSong_og1fdy.mp4',
  },
  {
    title: 'Spyfall',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693142/adryan/Spyfall/spyfall_mxysj1.png',
    github: 'https://github.com/ryrutherford/spyfall',
    languages: [
      {
        data: 'Dart',
        img: DARTLOGO
      },
      {
        data: 'Flutter',
        img: FLUTTERLOGO
      },
      {
        data: 'Firebase/Firestore',
        img: FBLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693157/adryan/Spyfall/Spyfall_n0ekug.mp4',
  },
  {
    title: 'Tic Tac Toe',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693280/adryan/TicTacToe/tictactoe_cfyvbk.jpg',
    github: 'https://github.com/ryrutherford/TicTacToeWebApp',
    languages: [
      {
        data: 'Java',
        img: JAVALOGO
      },
      {
        data: 'JavaScript',
        img: JSLOGO
      },
      {
        data: 'CSS',
        img: CSSLOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693287/adryan/TicTacToe/TicTacToe_uogbsj.mp4',
  },
  //TODO: move shadow defend to github
  {
    title: 'Shadow Defend',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693217/adryan/ShadowDefend/shadow_defend_fqbbjf.png',
    github: 'https://github.com/ryrutherford/ShadowDefend',
    languages: [
      {
        data: 'Java',
        img: JAVALOGO
      },
    ],
    video: 'https://res.cloudinary.com/dpncams2q/video/upload/v1591693234/adryan/ShadowDefend/ShadowDefend_w1rvqx.mp4',
  },
  {
    title: 'Personal Website',
    titleImg: 'https://res.cloudinary.com/dpncams2q/image/upload/v1591693250/adryan/Adryan/adryan_bxsjuw.jpg',
    body: 'You\'re here now so I don\'t think you need a video but I\'ll quickly explain some of the tools I used to build this website. The website was built using JavaScript and the React library and deployed to Firebase. I used MaterialUI as the UI framework and a lot of the design comes from their base components. I used a few API\'s to make it easier to maintain the website and update it without having to redeploy. The photos on the Home page are fetched from the Imgur API, the Google Maps API was used to show the places I\'ve visited in the About section, and the YouTube API was used to display some of my recents beats/tracks in the Music section.',
    github: 'https://github.com/ryrutherford/adryan',
    languages: [
      {
        data: 'TypeScript',
        img: TSLOGO
      },
      {
        data: 'React',
        img: REACTLOGO
      },
      {
        data: 'Firebase/Firestore',
        img: FBLOGO
      },
    ],
  },
];

//ABOUT BOX DATA
export interface AboutBoxInfo {
    triggerOnce: boolean,
    gridClass?: string,
    titleText: string,
    svgId: string,
    side: string,
    bgImageClass: string,
    fontClass?: string,
    mwClass?: string,
    info: string,
}

export const aboutBoxInfo: AboutBoxInfo[] = [{
        triggerOnce: true,
        gridClass: "grid-full", 
        bgImageClass: "bgimage-moto",
        mwClass: "mw-33",
        side: "left",
        svgId: "icon-moto",
        titleText: "I like to ride", 
        info: "I started riding motorcycles in 2019 after visiting the BMW Motorrad factory in Berlin and ever since then I've fallen in love with the activity. I currently ride a Kawasaki Z400."
    }, {
        triggerOnce: true,
        gridClass: "grid-full", 
        bgImageClass: "bgimage-music",
        mwClass: "mw-33",
        side: "right",
        svgId: "icon-headphones",
        titleText: "I like to make music", 
        info: "I started producing music using FL Studio when I was 15 and have stuck with it ever since. I started off making simple hip hop beats but over time my tastes have expanded and I've started making songs in genres like RnB and Tech House as well."
    }, {
        triggerOnce: true,
        gridClass: "grid-full", 
        bgImageClass: "bgimage-powerlift",
        mwClass: "mw-50",
        side: "left",
        svgId: "icon-powerlifting",
        titleText: "I like to powerlift", 
        info: "I grew up playing soccer 6 times a week but when I stopped playing I felt the need to keep active. I started powerlifting in my first year of university and now spend a lot of time at the gym with my friends!"
    },{
        triggerOnce: true,
        gridClass: "grid-full", 
        bgImageClass: "bgimage-skiing",
        mwClass: "mw-33",
        side: "right",
        svgId: "icon-ski",
        titleText: "I like to ski", 
        info: "The first time I ever went skiing was in the Alps. Safe to say that was the peak of my skiing career!"
    }, {
        triggerOnce: true, 
        bgImageClass: "bgimage-ball",
        mwClass: "mw-66",
        side: "right",
        svgId: "icon-ball",
        titleText: "I like basketball", 
        fontClass: "xxlarge-font-size",
        info: "Toronto Raptors, 2019 NBA Champions. That is all."
    }, {
        triggerOnce: true,
        bgImageClass: "bgimage-soccer",
        mwClass: "mw-66",
        side: "left",
        svgId: "icon-soccer",
        titleText: "and soccer too", 
        fontClass: "xxlarge-font-size",
        info: "Soccer consumed my life from an early age but I now spend most of my time watching it rather than playing. Up the Toffees!"
    }, {
        triggerOnce: true,
        gridClass: "grid-full", 
        bgImageClass: "bgimage-travel",
        mwClass: "mw-33",
        side: "left",
        svgId: "icon-travel",
        titleText: "I like to travel", 
        info: "Thanks in large part to my dad and his work I've been able to visit many countries around the world and experience a variety of different cultures. Check out the map below to see the places I've visted."
    }
]

interface LatLong {
    lat: number,
    lng: number
}

export interface Location {
    country: string,
    location: LatLong,
    cities: string[],
    years: string[]
}

export const locationData: Location[] = [
    {
      country: 'Austria',
      location: {
        lat: 47.516,
        lng: 14.550,
      },
      cities: ['Vienna'],
      years: ['2010']
    },
    {
      country: 'Belgium',
      location: {
        lat: 50.503,
        lng: 4.469,
      },
      cities: ['Liege', 'Brussels'],
      years: ['2010', '2020']
    },
    {
      country: 'Czech Republic',
      location: {
        lat: 49.817,
        lng: 15.472,
      },
      cities: ['Liberec'],
      years: ['2019']
    },
    {
      country: 'Denmark',
      location: {
        lat: 56.263,
        lng: 9.501,
      },
      cities: ['Copenhagen'],
      years: ['2007']
    },
    {
      country: 'France',
      location: {
        lat: 46.227,
        lng: 2.213,
      },
      cities: ['Montpellier', 'Paris', 'Nimes', 'Lyon'],
      years: ['2007', '2020']
    },
    {
      country: 'Germany',
      location: {
        lat: 51.165,
        lng: 10.451,
      },
      cities: ['Berlin', 'Dresden', 'Leipzig', 'Aachen'],
      years: ['2007', '2018', '2019']
    },
    {
      country: 'Italy',
      location: {
        lat: 41.871,
        lng: 12.567,
      },
      cities: ['San Remo', 'Genoa'],
      years: ['2007']
    },
    {
      country: 'Monaco',
      location: {
        lat: 43.750,
        lng: 7.412,
      },
      cities: ['Monaco'],
      years: ['2007']
    },
    {
      country: 'Netherlands',
      location: {
        lat: 52.132,
        lng: 5.291,
      },
      cities: ['Amsterdam', 'Leiden'],
      years: ['2007', '2020']
    },
    {
      country: 'Poland',
      location: {
        lat: 51.919,
        lng: 19.145,
      },
      cities: ['Myslakowice'],
      years: ['2019']
    },
    {
      country: 'Spain',
      location: {
        lat: 40.463,
        lng: -3.749,
      },
      cities: ['Barcelona', 'Girona'],
      years: ['2007', '2012']
    },
    {
      country: 'Sweden',
      location: {
        lat: 60.128,
        lng: 18.643,
      },
      cities: ['Malmo'],
      years: ['2007']
    },
    {
      country: 'Switzerland',
      location: {
        lat: 46.818,
        lng: 8.227,
      },
      cities: ['Lausanne'],
      years: ['2007']
    },
    {
      country: 'United Kingdom',
      location: {
        lat: 55.378,
        lng: -3.435,
      },
      cities: ['London', 'Ipswich'],
      years: ['2007', '2013']
    },
    {
      country: 'Canada',
      location: {
        lat: 56.130,
        lng: -106.346,
      },
      cities: ['Ottawa', 'Toronto', 'Montreal', 'Quebec City', 'Winnipeg', 'Halifax', 'Regina', 'Vancouver', 'Edmonton'],
      years: ['Every year since 1999 :)'],
    },
    {
      country: 'United States',
      location: {
        lat: 37.090,
        lng: -95.712,
      },
      cities: ['New York City', 'Chicago', 'Austin', 'San Antonio', 'Phoenix', 'Orlando', 'Honolulu', 'Philadelphia', 'Asheville', 'Washington DC', 'San Francisco', 'Minneapolis', 'Cleveland'],
      years: ['Too many to count'],
    },
    {
      country: 'Cuba',
      location: {
        lat: 21.521,
        lng: -77.781,
      },
      cities: ['Cayo Coco'],
      years: ['2014'],
    },
    {
      country: 'Mexico',
      location: {
        lat: 23.634,
        lng: -102.552,
      },
      cities: ['Cancun, Merida'],
      years: ['2006'],
    },
    {
      country: 'Botswana',
      location: {
        lat: -22.328,
        lng: 24.68,
      },
      cities: ['Bobonong'],
      years: ['2010'],
    },
    {
      country: 'Ghana',
      location: {
        lat: 7.946,
        lng: -1.023,
      },
      cities: ['Accra', 'Tamale', 'Takoradi', 'Hohoe'],
      years: ['2013'],
    },
    {
      country: 'South Africa',
      location: {
        lat: -30.559,
        lng: 22.937,
      },
      cities: ['Johannesburg', 'Cape Town', 'Musina'],
      years: ['2010'],
    },
    {
      country: 'Zimbabwe',
      location: {
        lat: -19.015,
        lng: 29.154,
      },
      cities: ['Harare'],
      years: ['1999'],
    },
    {
      country: 'Togo',
      location: {
        lat: 8.619,
        lng: 0.824,
      },
      cities: ['Unnamed village on the Ghanaian border'],
      years: ['2013'],
    },
    {
      country: 'Malaysia',
      location: {
        lat: 4.210,
        lng: 101.975,
      },
      cities: ['Kuala Lumpur', 'Georgetown'],
      years: ['2020'],
    },
    {
      country: 'Vietnam',
      location: {
        lat: 14.058,
        lng: 108.277,
      },
      cities: ['Ho Chi Minh City', 'Duong Dong', 'Hanoi', 'Bai Tu Long Bay', 'Sapa', 'Ban Ho'],
      years: ['2020'],
    },
    {
      country: 'Australia',
      location: {
        lat: -25.274,
        lng: 133.775,
      },
      cities: ['Melbourne', 'Rye', 'Apollo Bay', 'Port Campbell'],
      years: ['2020'],
    },
]


//RESUME DATA
export interface ResumeItem {
    experience?: Experience,
    language?: Language,
    tool?: Tool
}

export interface Tool {
  data: string,
  img: string
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

const toolingValues: ResumeItem[] =[{
        tool: {
          data: 'React',
          img: REACTLOGO
        }
      }, {
        tool: {
          data: "GraphQL",
          img: GRAPHQLLOGO
        }
      }, {
        tool: {
          data: "Redux",
          img: REDUXLOGO
        }
      }, {
        tool: {
          data: "Node.js",
          img: NODEJSLOGO
        }
      }, {
        tool: {
          data: 'Sass',
          img: SASSLOGO
        }
      }, {
        tool: {
          data: 'jQuery',
          img: JQUERYLOGO
        }
      }, {
        tool: {
          data: "Spring",
          img: SPRINGLOGO
        }
      }, {
        tool: {
          data: "Flask",
          img: FLASKLOGO
        }
      }, {
        tool: {
          data: "MinIO",
          img: MINIOLOGO
        }
      }, {
        tool: {
          data: "Kubernetes",
          img: KUBERNETESLOGO
        }
      }, {
        tool: {
          data: "Docker",
          img: DOCKERLOGO
        }
      }, {
        tool: {
          data: "AWS",
          img: AWSLOGO
        }
      }, {
        tool: {
          data: "Heroku",
          img: HEROKULOGO
        }
      }, {
        tool: {
          data: "Linux/Unix",
          img: LINUXLOGO
        }
      }, {
        tool: {
          data: 'MySQL',
          img: MYSQLLOGO
        }
      }, {
      tool: {
        data: "MongoDB",
        img: MONGODBLOGO
      }
      }, {
      tool: {
        data: 'Firebase/Firestore',
        img: FBLOGO
      }
    }, {
      tool: {
        data: "Flutter",
        img: FLUTTERLOGO
      }
    }
]

const programingValues: ResumeItem[] =[{
          tool: {
            data: 'Java',
            img: JAVALOGO
          }
        }, {
          tool: {
            data: 'JavaScript',
            img: JSLOGO
          }
        }, {
          tool: {
            data: 'TypeScript',
            img: TSLOGO
          }
        }, {
          tool: {
            data: 'Python',
            img: PYTHONLOGO
          }
        }, {
          tool: {
            data: 'OCaml',
            img: OCAMLLOGO
          }
        }, {
          tool: {
            data: 'C',
            img: CLOGO
          }
        }, {
          tool: {
            data: "C++",
            img: CPPLOGO
          }
        }, {
          tool: {
            data: 'Bash',
            img: BASHLOGO
          }
        }, {
        tool: {
          data: 'Dart',
          img: DARTLOGO
        }
      }, {
        tool: {
          data: 'SuperCollider',
          img: SUPERCOLLIDERLOGO
        }
      }
]

const educationValues: ResumeItem[] = [{
        experience: {
            role: "BSc Computer Science",
            company: "McGill University",
            date: "September 2017 - Present",
            logo: McGillLogo,
            description: ["Commerce 1955 Scholarship for outstanding achievement and extracurricular involvement",
                "Dean’s Honour List for being part of the top 10% of students in the faculty", "CGPA: 3.97/4.0"]
        }
    }, {
        experience: {
            role: "Exchange Student",
            company: "University of Melbourne",
            date: "March 2020 - July 2020",
            logo: UniMelbLogo,
            description: ["Melbourne University Weightlifting & Powerlifting Club", "Melbourne University Soccer Club", "H1 WAM"]
        }
    }
]

const workExpValues: ResumeItem[] = [{
        experience: {
            role: "Software Developer Intern",
            company: "Nuance Communications",
            date: "January 2021 - Present",
            logo: NuanceLogo,
            description: ["Developed numerous features for an internal application used by Developers, QA Analysts and Speech Scientists to manage, monitor, and update their Interactive Voice Response and Virtual Assistant applications",
            "Worked on numerous speech enabled applications for customers like UPS and Wells Fargo"]
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
            description: ["Planned, promoted, and executed multiple suit sales which raised over $3000 for charity and provided students with easy access to affordable business wear",
                "Directed club operations including recruitment, financial planning, client outreach, and digital transformation during COVID",
                "Managed a team of 3 people to categorize, itemize, and organize inventory to facilitate the tracking of suit sales",
                `Developed the Suits U website which allows students to browse our inventory and order items for pickup`
                ]
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
    }, {
        title: "Programming Languages",
        values: programingValues
    }, {
        title: "Tools and Frameworks",
        values: toolingValues
    }, {
        title: "Languages",
        values: languageValues
    }
]