const about = {
  title: "Heyy 👋 , I am Ashik Sanyo.",
  description:
    "I'm a Tech enthusiast living in Bangalore, India. I love to solve problems and build things. Also an Ex-TCSer and presently a Post grad Data Science student at Christ University!",
  github: "https://github.com/ashiksanyo10",
  linkedin: "https://www.linkedin.com/in/ashiksanyo/",
  cv: "https://drive.google.com/file/d/1jwHQbdXU64bCLE7q1XYZ2IO3z7ZG3PMH/view?usp=sharing", 
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Dental Disease detection using Computer Vision",
      short:
        "YOLO V5 model to detect the Dental disorder",
      description:
        "The detection model is built on the YOLOv5 architecture, which is a state-of-the-art object detection algorithm. It has been trained on a custom dataset consisting of annotated dental radiographic images.",
      technologies: ["Python","Computer vision"],
      github: "hhttps://github.com/ashiksanyo10/DentalDetect",
      demo: "https://github.com/ashiksanyo10/DentalDetect",
    },
    {
      title: "Performance analysis of YOLOv7 & YOLOv8 model for drone detection",
      short:
        "Using YOLOv8 to Unmanned aerial vehicle",
      description:
        "This research delves into a comprehensive performance analysis aimed at comparing the efficiency and accuracy of YOLOv7 and YOLOv8 for drone image detection applications. ",
      technologies: ["Python","Deep Learning"],
      github: "https://github.com/ashiksanyo10/Performance-Analysis-of-YOLOv7-and-YOLOv8-for-Drone-Image-Detection-",
      demo: "https://ieeexplore.ieee.org/document/10276343",
    },
    {
      title: "Predictive Analytics for P2P Loan Defaults",
      short:
        " A robust machine learning model that assists in assessing the creditworthiness of borrowers, ultimately reducing the risk of defaults. ",
      description:
        "This predictive model empowers P2P platforms with informed lending choices, reducing risk, financial losses, and bolstering trust among stakeholders.",
      technologies: [
        "Machine Learning,",
        "MS Excel,",
      ],
      github: "https://github.com/ashiksanyo10/Loans-Predictor",
      demo: "https://github.com/ashiksanyo10/Loans-Predictor",

    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Data Scientist-Intern",
      company: "AppSnyergies",
      duration: "Nov 2023 - Present",
      description:
        "Contributing to end-to-end machine learning lifecycle: from model development and API integration to rigorous testing, deployment, and meticulous quality control. ",
    },
    {
      title: "System Engineer (SE)",
      company: "Tata Consultancy Services",
      duration: "Jun 2021 - July 2022",
      description:
        "Worked as an Assistant System Engineer with the core responsibility of supporting client projects with networks and server aspects.",
    },
    // Add any additional experiences here
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
    {
      title: "Programming Languages",
      skills: [

       "Python,",
        "C,",
        "HTML,",
        "CSS,",
        "JavaScript",
        "SQL"

      ],
    },
    {
      title: "Tools & IDE",
      skills: ["Anaconda Navigator,","Visual Studio Code,", "PowerBi,","Talend Studio",],
    },
    {
      title: "Others",
      skills: ["Adobe Creative Suit,", "Blender,", "SparkAR,",],
    },
  ],
};

export { about, projects, experience, skills };
