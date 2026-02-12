interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Bachelor of Science in Computer Science",
        startDate: "2017-01-20",
        endDate: "2021-06-30",
        school: "Universidad Autonoma de Hidalgo",
        location: "Hidalgo, Mexico",
        description: "Formación sólida en diseño de sistemas de información para la automatización de procesos, aprenderás a configurar ambientes de servicios de cómputo y redes, dominio de herramientas de programación e ingeniería de software, además podrás desarrollar sistemas inteligentes que requieran obtener información que apoye la toma de decisiones. ",
        currentUni: false,
    },
    {
        title: "AWS Certified Cloud Practitioner",
        startDate: "2026-02-13",
        endDate: "2026-02-13",
        school: "University Name",
        location: "United States",
        description: "Developed and maintained web applications using React, NodeJs, and MongoDB.",
        currentUni: false,
    },
];

export default education;