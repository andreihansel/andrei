
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AwardItem {
    year: string;
    awardTitle: string;
    eventName: string;
    description: string[];
}

interface CertItem {
    year: string;
    certTitle: string;
    certIssuer: string;
    description: string[];
}

interface OtherItem {
    year: string;
    honorTitle: string;
    honorIssuer: string;
    description: string[];
}

const AwardData: AwardItem[] = [
    {
        year: "2024",
        awardTitle: "🥇 1st Place",
        eventName: "KDMI Universitas Brawijaya",
        description: [
            "Awarded by Universitas Brawijaya",
            "Won by preparing only for a week after my 3 year hiatus from debating.",
            "Set a new milestone for Faculty of Computer Science by becoming champion in Universitas Brawijaya's annual Bahasa Indonesia debating competition.",
        ]
    },
    {
        year: "2021",
        awardTitle: "🥈 2nd Best Speaker",
        eventName: "Lomba Debat Bahasa Indonesia JSAC 2021",
        description: [
            "Debated against a range of universities all across Indonesia.",
            "Awarded by Universitas Jambi Accounting Student Association Faculty of Economics and Business",
        ]
    },
    {
        year: "2020",
        awardTitle: "🥇 Gold Medal",
        eventName: "LDBI 2020",
        description: [
            "Awarded by the National Achievement Center, Ministry of Education and Culture of Indonesia",
            "Competed against the best of the best high school debaters across Indonesia.",
            "This is the highest achievement in Bahasa Indonesia debating for high school students.",
        ]
    },
]

const CertData: CertItem[] = [
    {
        year: "2024",
        certTitle: "🔍 Explore Emerging Tech",
        certIssuer: "IBM",
        description: [
            "Completed an online course by IBM on emerging technologies.",
            "Learned about Blockchain, Cybersecurity, Cloud Computing, IoT, and AI.",
        ]
    },
    {
        year: "2024",
        certTitle: "📘 633/677 TOEFL ITP",
        certIssuer: "Brawijaya Language Center",
        description: [
            "Issued by Brawijaya Language Center",
            "Scored 633 out of 677 on the TOEFL ITP.",
            "While this is an unofficial scoring, it still gives an estimate of my capabilities and proficiency in English."
        ]
    },
    {
        year: "2024",
        certTitle: "🛡️ Introduction to Cybersecurity",
        certIssuer: "Cisco",
        description: [
            "Completed an online course by Cisco on the basics of Cybersecurity.",
            "Learned about the importance of cybersecurity, common threats, and how to protect against them.",
            "This course is part of the Cisco Networking Academy program."
        ]
    },
    {
        year: "2016",
        certTitle: "🎮 Basic Game Creator",
        certIssuer: "GG Campus",
        description: [
            "Completed a course on game development by GG Campus.",
            "Learned about the basics of 2D and 3D game development, including game design, programming, and art.", 
            "This course was a stepping stone for my interest in programming and technology since secondary school.",
            "Passed with flying colors and got a scholarship and jumped to Intermediate 1 Class afterwards, effectively skipping Basic 2 Class",
        ]
    },
    
]

const OtherData: OtherItem[] = [
    {
        year: "2021",
        honorTitle: "🗣️ Invited Speaker",
        honorIssuer: "\"Achievements and Resilience of Students in the Pandemic Era\"",
        description: [
            "Invited to speak at an online FGD hosted by Media Indonesia.",
            "Shared my experiences and insights on how students can thrive in the pandemic era.",
        ]
    },
]


const MyHonors = () => {
    return (
        <div className="flex flex-col gap-4">
            <Tabs defaultValue="award" className="w-full">
                <TabsList className="grid w-full h-full grid-cols-1 sm:grid-cols-3 gap-2">
                    <TabsTrigger value="award">
                        <h2 className="text-base font-bold">Awards</h2>
                    </TabsTrigger>
                    <TabsTrigger value="certification">
                        <h2 className="text-base font-bold">Certifications</h2>
                    </TabsTrigger>
                    <TabsTrigger value="others">
                        <h2 className="text-base font-bold">Others</h2>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="award" className="mx-5 mt-5 text">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {AwardData.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.awardTitle} @ {item.eventName}</h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
                <TabsContent value="certification" className="mx-5 mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {CertData.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.certTitle} @ {item.certIssuer}</h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
                <TabsContent value="others" className="mx-5 mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {OtherData.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.honorTitle} @ {item.honorIssuer}</h3>
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

export default MyHonors;