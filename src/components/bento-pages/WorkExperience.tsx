
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface WorkExperienceItem {
    startDate: string;
    endDate: string;
    companyName: string;
    jobTitle: string;
    description: string[];
}

interface EducationItem {
    startDate: string;
    endDate: string;
    educationInstitute: string;
    educationTitle: string;
    description: string[];
}

interface OrganizationItem {
    year: string;
    organizationName: string;
    organizationPosition: string;
    description: string[];
}

const WorkExperienceData: WorkExperienceItem[] = [
    {
        startDate: "September 2024",
        endDate: "December 2024",
        companyName: "Luarsekolah",
        jobTitle: "💻 Web Developer Intern",
        description: [
            "Implemented HTML, CSS, JavaScript, and PHP for a front-end page revamping project at Luarsekolah.",
            "Collaborated effectively with a talented team to achieve project goals.",
            "Received praise and recognition from colleagues for contributions to the project.",
            "Scored 95/100 by supervisor on knowledge and skills criteria",
            "Scored 93/100 by supervisor on final collaboration project",
        ]
    },
    {
        startDate: "August 2023",
        endDate: "December 2024",
        companyName: "CV Perdana Raya",
        jobTitle: "🗃️ Part-Time Data Entry Specialist",
        description: [
            "Responsible for data entry and data reconfiguration across multiple spreadsheets.",
            "Successfully created a centralized data bank for hundreds of products and SKUs.",
            "Developed automated solutions using Google Sheets formulas and macros.",
            "Enabled quick access to data with a single button push across worksheets.",
            "Effectively reduced collective workload and time for colleagues through streamlined processes.",
        ]
    },
    {
        startDate: "December 2020",
        endDate: "July 2022",
        companyName: "SocialSoles",
        jobTitle: "👨🏻‍💼 Chief Technology Officer",
        description: [
            "Managed website project with external vendors by ensuring functional requirements with other board of directors.",
            "Designed website user interface design all by myself using Adobe XD.",
            "Managed product migration from Shopee and Tokopedia store page to WooCommerce in our website.",
            "Managed our technical and operational team to implement product data maintenance, such as implementing daily/seasonal promos, adding new products, and evaluating slow-moving inventory.",
        ]
    },
    {
        startDate: "December 2020",
        endDate: "July 2022",
        companyName: "SocialSoles",
        jobTitle: "📦 Operations Manager",
        description: [
            "Managed supply chains in the dropship business.",
            "Managed soft-selling and hard-selling chats/offers to customers.",
            "Managed customer sales from order to fulfillment as well as post-sales.",
            "Managed troubleshooting for customer complaints with team.",
        ]
    },
]

const EducationData: EducationItem[] = [
    {
        startDate: "August 2021",
        endDate: "January 2025",
        educationInstitute: "Universitas Brawijaya",
        educationTitle: "🎓 Bachelor's Degree in Information Systems",
        description: [
            "Graduated in 3.5 years with a GPA of 3.5/4.0, with a focus on Business Process and Cybersecurity.",
            "Participated in various organizations and events, such as the University Student Executive Board (EM UB).",
            "Won several debating competitions to bring honor to the university and my faculty.",
            "Scored an A on my final thesis project, which was about the evaluation and implementation of a business process in the cooking oil industry to mitigate the current supply and demand imbalance in Indonesia.",
            "Scored an A on my Cybersecurity class",
        ]
    },
    {
        startDate: "July 2018",
        endDate: "August 2021",
        educationInstitute: "SMAN 70 Jakarta",
        educationTitle: "🧪 Natural Sciences",
        description: [
            "Consistently ranked in the top 3 of my class and placed within the top 25% of students with the highest academic performance in my cohort.",
            "Won several debating competitions, including a gold medal in the National Bahasa Indonesia Debating Competition held by the Ministry of Education and Culture.",
            "Participated in the school's Student Council/Student Parliament as the Chairperson of Commision E, responsible for mentoring and preparing prospective leaders for the positions of Student Council President and Student Parliament Chairperson."
        ]
    },
    
]

const OrganizationData: OrganizationItem[] = [
    {
        year: "2024",
        organizationName: "#2024BISANGONTEN Training",
        organizationPosition: "🌟 Creator",
        description: [
            "Spearheaded the #2024BISANGONTEN training program in Banjararum Village, Malang Regency, to empower residents with digital skills.",
            "Facilitated hands-on workshops on using ChatGPT, CapCut, and Google Sheets for creative content creation.",
            "Enabled local communities to explore unlimited creativity and embrace digital transformation to create excellent content in a matter of minutes.",
            "#2024BISANGONTEN Training was part of my program in the University Community Service Program (KKN) designed to empower rural communities.",
        ]
    },
    {
        year: "2022 - 2023",
        organizationName: "Eksekutif Mahasiswa Universitas Brawijaya",
        organizationPosition: "🏢 Expert HRD Ministry Staff",
        description: [
            "Led event management as Vice Coordinator for the Brawijaya Leadership Bootcamp, a leadership training program for university students.",
            "Successfully rebranded the Bootcamp, significantly increasing participant interest and registrations.",
            "Played a crucial role in maintaining team solidarity and productivity throughout the event planning and execution process.",
            "Helped organized Lingkar PSDM, a forum and ministry visit involving the Human Resource Development Ministries (PSDM) across BEM in Universitas Brawijaya.",
            "Collaborated cross-functionally with various departments to ensure smooth execution of events and aligned all team efforts toward shared goals.",
        ]
    },
    {
        year: "2022 - 2023",
        organizationName: "Brawijaya Disaster Response 2022",
        organizationPosition: "🚨 Volunteer Leader",
        description: [
            "Led the first cohort of Brawijaya Disaster Response program as volunteer leader",
            "Underwent training in disaster response and management, including first aid, mental trauma response, and disaster relief.",
            "Successfully held a community clean-up program in collaboration with locals at Kampung Putih, Malang."
        ]
    },
    {
        year: "2021",
        organizationName: "Information Systems Student Executive Board",
        organizationPosition: "📊 Intern Staff",
        description: [
            "Underwent intern training in the Information Systems Student Executive Board.",
        ]
    },
    {
        year: "2021",
        organizationName: "IKALUMNI 70 Jakarta Vaccination Center Committee",
        organizationPosition: "🎨 Design Section & Public Relations Section",
        description: [
            "Designed banners, shirts, and other promotional materials for the vaccination center.",
            "Managed emailing public relations for the vaccination center."
        ]
    },
    {
        year: "2019 - 2020",
        organizationName: "Student Council SMAN 70 Jakarta",
        organizationPosition: "🗳️ Chairperson of Commission E",
        description: [
            "Mentored and prepared prospective leaders for the positions of Student Council President and Student Parliament Chairperson.",
            "Collaborated with other commission chairpersons to ensure the success of the Student Council's initiatives and activities.",
        ]
    },
    {
        year: "2019 - 2020",
        organizationName: "English Community SMAN 70 Jakarta",
        organizationPosition: "🗣️ Founding Member",
        description: [
            "Founded the English Community with my colleagues to help students improve and channel their English proficiency.",
            "Organized English learning activities, mainly English debates.",
        ]
    },
    
]

const WorkExperience = () => {
    return (
        <div className="flex flex-col gap-4">
            <Tabs defaultValue="work" className="w-full">
                <TabsList className="grid w-full h-full grid-cols-1 sm:grid-cols-3 gap-2">
                    <TabsTrigger value="work">
                        <h2 className="text-base font-bold">Work</h2>
                    </TabsTrigger>
                    <TabsTrigger value="education">
                        <h2 className="text-base font-bold">Education</h2>
                    </TabsTrigger>
                    <TabsTrigger value="organization">
                        <h2 className="text-base font-bold">Others</h2>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="work" className="mx-5 mt-5 text">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {WorkExperienceData.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.jobTitle} @ {item.companyName}</h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
                <TabsContent value="education" className="mx-5 mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {EducationData.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.educationTitle} @ {item.educationInstitute}</h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
                <TabsContent value="organization" className="mx-5 mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {OrganizationData.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.organizationPosition} @ {item.organizationName}</h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default WorkExperience;