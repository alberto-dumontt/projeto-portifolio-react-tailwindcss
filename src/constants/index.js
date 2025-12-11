import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I am a dedicated software developer focused on developing complete and efficient applications. I have experience with front-end technologies such as Vue.js and React, as well as back-end technologies like Node.js, PHP, Java, and both relational and non-relational databases. My focus is on creating innovative and scalable solutions that meet user needs and drive business results.`;

export const ABOUT_TEXT = `I am a software developer with a degree in Computer Science, passionate about developing efficient and scalable applications. My experience spans various roles and technologies, enabling me to deliver impactful solutions for diverse challenges.

Throughout my career, I have continuously honed my expertise in both front-end and back-end development, cloud services, database management, and IT infrastructure. My focus has always been on delivering value through innovative solutions and fostering collaboration to overcome complex challenges and drive results. I thrive in environments that allow me to solve complex problems while constantly learning and adapting to new technologies. In my free time, I enjoy going to the gym, running street races, and cheering for my football team, São Paulo FC. I also love playing video games and spending quality time with my family, balancing both personal and professional life to stay energized and motivated.`;

export const EXPERIENCES = [
  {
    year: "10/2025 - Present",
    role: "Mid-level Developer",
    company: "Imunisys",
    description: `Building and developing solutions in the cybersecurity domain, focusing on scalable, secure, and maintainable architecture. Designing UI/UX prototypes in Figma and implementing user-centric interfaces using Next.js, React, and Tailwind CSS. Developing backend services with Java and Spring Boot, making key architectural decisions for a robust multi-tenant system. Implementing multitenancy architecture and integrating MFA technologies to strengthen authentication and security layers. Managing CI/CD pipelines and version control workflows using GitLab to optimize deployment and development efficiency. Containerizing applications with Docker and orchestrating environments with Kubernetes for high scalability and reliability. Contributing to system architecture, technical specifications, and best practices to ensure high-quality, consistent, and maintainable solutions.`,
    technologies: ["Java", "Spring Boot", "Multitenancy", "MFA Integrations", "Next.js", "React", "Tailwind CSS", "Figma", "PostgreSQL", "Docker", "Kubernetes", "GitLab", "CI/CD", "Kanban"],
  },
  {
    year: "03/2024 - 10/2025",
    role: "Junior Developer",
    company: "E-Trust",
    description: `Maintaining and developing new features in the Horacius identity management system, using technologies such as Vue.js, jQuery, JavaScript, PHP, MySQL, SVN, and AWS (IAM). I implement agile Kanban methodologies in JIRA, optimizing team efficiency. I conduct tests and code reviews, improving code quality and promoting best development practices. I collaborate in creating solutions that enhance system usability, positively impacting user experience. I participate in bug identification and problem-solving, contributing to system stability. I adopt a customer-centric approach, ensuring that new features meet end-user needs. I improve internal processes through documentation of best practices and knowledge sharing with the team, fostering a collaborative and productive environment. Additionally, I have experience with GitLab for CI/CD pipelines and version control, MongoDB for scalable data management, and cross-review of issues in Java with Spring Framework. I also contribute to projects in Laravel and PHP, ensuring alignment with coding standards and system requirements.`,
    technologies: ["PHP", "Laravel", "Java", "Springboot", "Javascript", "JQuery", "Vue.js", "MySQL", "MongoDB", "SVN", "Git", "Gitlab"],
  },
  {
    year: "09/2023 - 03/2024",
    role: "AI & IT Infrastructure",
    company: "Cartório de Registro de Imóveis de Cabreúva",
    description: `I worked as a IT Manager at the Cabreúva Property Registry Office, assuming various responsibilities in the IT infrastructure and data management. I created and managed Linux servers, implementing and maintaining essential systems for the notary's operations. My experience with AWS was remarkable, involving the configuration and maintenance of services such as AWS Bedrock, AWS IAM, AWS S3 and AWS EC2. Developed Python scripts to automate processes and integrate third-party APIs, resulting in a significant improvement in operational efficiency and data security.
Additionally, I explored the Google Cloud platform, using services like Google Storage to store crucial registry data. This work included the configuration and management of cloud resources, contributing to the modernization of infrastructure and optimization of internal processes. I also worked on the implementation and standardization of the registry regarding the LGPD, actively contributing to the creation and documentation of the necessary standards to ensure compliance and data protection. I also highlight my experience with Artificial Intelligence, where I worked with platforms such as OpenAI, Gemini and Claude. I developed skills in prompt engineering, creating models and integrating AI APIs, optimizing automated processes and offering innovative solutions for data management and operations.`,
    technologies: ["Python", "AWS", "Google cloud", "Linux", "AI"],
  },
  {
    year: "03/2023 - 09/2023",
    role: "IT Support Technician",
    company: "Open Internet",
    description: `I worked as IT support, performing a variety of functions related to infrastructure and technical support. Configured and implemented monitoring using Zabbix 6, ensuring the integrity and performance of the systems. Developed scripts in Bash and Batch to automate routine tasks, increasing the area's operational efficiency. I was responsible for hardware maintenance, carrying out diagnostics and repairs on computers and peripheral devices. Installed and configured software, ensuring that systems were always up to date and functioning correctly.
I took care of the installation and configuration of printers, ensuring their integration with network systems. Led remote access, providing technical support to internal and external users whenever necessary. My experience covers both Windows environments and Linux servers, where I performed administration and maintenance tasks. Furthermore, I have skills in manipulating MySQL and PostgreSQL databases, contributing to effective data management.`,
    technologies: ["Linux", "Windows", "Zabbix", "PowerShell", "Grafana", "MySQL", "Postgresql", "Active Directory", "Looker Studios"],
  },
  {
    year: "12/2022 - 03/2023",
    role: "Intern Software Developer",
    company: "Open Dev",
    description: `I worked as a development intern at OpenDev, getting involved in software projects focused on creating innovative solutions to optimize processes. A significant part of my work was dedicated to the development of REST APIs using PHP/Laravel, essential for system integration and process automation, contributing to operational efficiency. I was responsible for integrating an API for sending messages via WhatsApp and developing a chatbot, expanding communication channels with customers.
In data management, I worked with MySQL and PostgreSQL databases, performing manipulation and optimization tasks to ensure fast and reliable access to information. In addition to developing APIs and integrations, I had the opportunity to create interactive reports with tools such as Grafana and Looker Studio, providing valuable insights into customer data and enabling more informed and strategic decision-making.`,
    technologies: ["PHP", "Laravel", "MySQL", "Postgresql", "Grafana", "Looker Studios"],
  },
];

export const PROJECTS = [
  {
    title: "Raccoon Technology Management System",
    image: project1,
    ref: "https://github.com/RaccoonTechnologyManagement/RaccoonTechnologyManagement",
    description:
      "A comprehensive solution to meet the needs of IT departments, developed for capstone project. The system offers features such as: IT Asset Management, Tickets Management, Notices, Business Intelligence and Monitoring.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express", "Postgresql"],
  },
  {
    title: "DevSpecAI",
    image: project2,
    ref: "https://github.com/AlbertoDumonttDev/DevSpecAI",
    description:
      "An AI-driven project specification generator. Built as a fullstack application with a backend focus on Spring Boot. Integrates with Cohere AI to generate tailored project ideas based on user profile, technologies, and career goals. Dockerized and deployed on Render.",
    technologies: ["Java", "Springboot", "React.js", "Docker", "Cohere AI", "Render"]
  }
];

export const CONTACT = {
  address: "São Paulo, Brazil ",
  phoneNo: "+55 (11) 97057-8775 ",
  email: "albertodumonttsf@outlook.com",
};