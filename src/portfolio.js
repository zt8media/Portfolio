/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zariyah Tate",
  title: "Hi I'm Zariyah Tate",
  subTitle: emoji(
    " My interest in technology stems from a desire to blend creative problem-solving with technical acumen to build solutions that make a difference. With a background in digital media and project management, I’ve been able to empower students as a Technology Teacher and drive brand growth as a Marketing Assistant. I am driven by the challenge of integrating my technical skills with leadership experience to push the boundaries in innovative tech environments. Let’s connect and explore how we can collaborate on future tech projects!."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zt8media",
  linkedin: "https://www.linkedin.com/in/zariyahtate/",
  gmail: "zt8media@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Languages",
  subTitle: "These are the languages I know for now!",
  skills: [
    emoji(
      "⚡ Develop interactive front-end and back-end architectures for web applications."
    ),
    emoji("⚡ Implement SQL connections and API integrations to enhance functionality."),
    emoji(
      "⚡ Commit to continuous learning to improve skills in existing and new programming languages."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
  
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Google Workspace",
      fontAwesomeClassname: "fab fa-google"
    },
  
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Wayne Community College",
      logo: require("./assets/images/WayneCommunity.png"),
      subHeader: "Associate in Arts",
      duration: "Augus 2013 - May 2017",
      desc: "Went to an early college, so graduated with my associate's and high school diploma at the same time.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "University of North Carolina Greensboro",
      logo: require("./assets/images/UNCG.webp"),
      subHeader: "Bachelor of Arts, Media Studies",
      duration: "August 2017 - May 2020",
      desc: "Particpated in multiple volunteer hours throughout my time here",
      descBullets: ["Worked on set as a Production Assistant for Quilla Saggetarius' music video."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Coding Apprentice",
      company: "Road to Hire",
      companylogo: require("./assets/images/R2H.jpeg"),
      date: "March 2024 – Present",
      desc: "As a Coding Apprentice at Road to Hire, I dove into a rigorous and intensive coding program, mastering a broad array of technologies. This comprehensive training sharpened my abilities to tackle complex problems and craft effective solutions. My experience has thoroughly prepared me to excel in dynamic and innovative tech environments.",
      
    },
    {
      role: "Technology/Computer Science Teacher",
      company: "Bonnie Cone Leadership Academy",
      companylogo: require("./assets/images/BonnieCone.png"),
      date: "Dec 2023 – March 2024",
      desc: "As a Technology Teacher at Bonnie Cone Academy, I specialized in teaching Microsoft Office, HTML, and CSS to empower students with essential web development skills. I developed a media literacy curriculum leveraging cutting-edge technology to prepare students for the digital world. Additionally, I enhanced their design and multimedia capabilities with Adobe applications and fostered keyboarding proficiency, laying a foundation for success in various technological fields."
    },
    {
      role: "Marketing Assistant",
      company: "The Schiele Museum of Natural History & Planetarium",
      companylogo: require("./assets/images/Schiele.jpeg"),
      date: "Dec 2022 – Dec 2023",
      desc: "I spearheaded media coordination and event planning, significantly boosting event exposure and visitor engagement. I managed the museum’s website development, enhancing its performance through regular maintenance and detailed analytics. Additionally, I produced engaging video content for social media, utilizing tools like Canva and Adobe Creative Cloud, which led to a 15% increase in positive audience sentiment."
    },
    {
      role: "Lead Counselor & Project Manager",
      company: "Airbnb",
      companylogo: require("./assets/images/GirlsRock.jpeg"),
      date: "May – August 2018-2022(Summers Only)",
      desc:"I directed and mentored a team of 10 staff members, overseeing the development and management of diverse camp programs. My leadership fostered a collaborative environment, significantly boosting staff performance and morale, reflected by a 97% positive review score. Additionally, I managed the coordination and execution of camp events and enhanced our online presence by sharing engaging photos and videos on social media."    },
    {
      role: "Media Consultant",
      company: "Univeristy of North Carolina Greensboro(Media Commons)",
      companylogo: require("./assets/images/uncgmedia.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc:"I organized and managed library-sponsored events, attracting over 50 students per event through meticulous planning and execution. I conducted training sessions on Adobe Creative Cloud, 3D printing, and Microsoft programming, boosting participants' digital competencies. Additionally, I collaborated with various university departments to enhance official university websites, improving user engagement and aesthetics." ,
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some Projects/Apps created within the Road to Hire Program",
  projects: [
    {
      image: require("./assets/images/Sprout.png"),
      projectName: "Sprout",
      projectDesc: "Ecommerce Project Version One. I created this using HTML,CSS, and Vanilla Javascript used a JSON file to populate products",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://main.d1uahb7ssip2in.amplifyapp.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/zt8media/SPROUT"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/FTR.png"),
      projectName: "For The Record",
      projectDesc: " Ecommerce Project Version Two: I created this using React.js powered by Vite. It includes a database connection using phpMyAdmin, as well as the Spotify API to power previews, and JavaScript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://for-the-record.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/zt8media/For-The-Record2"
        }
      ]
    },
    {
      image: require("./assets/images/BudgetTracker.png"),
      projectName: "Budget Tracker",
      projectDesc: " Personal Budget Tracker Application using HTML,CSS,Javasript and Javascript chartjs",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://main.d2e7bj70kypz19.amplifyapp.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/zt8media/Budget-Tracker"
        }
      ]
    }, {
      image: require("./assets/images/CC.png"),
      projectName: "Coastal Cleanup",
      projectDesc: "Team lead of a group project that placed first in the Hope Hacks Hackathon. Incorporated three APIs, including Voice Recognition, using HTML, Vanilla JavaScript, SASS, and a remote database with SQL, as well as JavaScript libraries and npm packages.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://coastal-cleanup.onrender.com/home/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/zt8media/Coastal-Cleanup"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    " Certifications I have completed",

  achievementsCards: [
    {
      title: "Agile Crash Course: Agile Project Management; Agile Delivery",
      subtitle:
        "The key concepts and tools of Agile Development, Agile Project Delivery and Agile Project Management",
      image: require("./assets/images/udemy.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
 
      ]
    },
    {
      title: "Growth Driven Design",
      subtitle:
        "I successfully completed the Growth-Driven Design certification on HubSpot, scoring 53 out of 54. This certification covers the fundamentals of a data-driven approach to web design that emphasizes iterative improvements based on user feedback and analytics to optimize website performance continuously.",
      image: require("./assets/images/GDDC.png"),
      imageAlt: "Growth Driven Design",
      footerLink: [
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's Connect",
  number: "(919)928-2225",
  email_address: "zt8media@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
