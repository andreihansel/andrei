import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

const getSlug = (toolName: string) => {
    const slugs: { [key: string]: string } = {
        "HTML": "html5",
        "CSS": "css",
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "React": "react",
        "Next.js": "nextdotjs",
        "Tailwind CSS": "tailwindcss",
        "Git": "git",
        "GitHub": "github",
        "Unity": "unity",
        "C#": "csharp",
        "VSCode": "visualstudiocode",
        "Kali Linux": "kalilinux",
        "Metasploit": "metasploit",
        "Nmap": "nmap",
        "Nikto": "nikto",
        "Burp Suite": "burpsuite",
        "Bettercap": "bettercap",
        "Figma": "figma",
        "Slack": "slack",
        "Adobe XD": "adobexd",
        "Adobe Photoshop": "adobephotoshop",
        "Adobe Illustrator": "adobeillustrator",
        "Adobe Premiere Pro": "adobepremierepro",
        "Adobe After Effects": "adobeaftereffects",
        "Google Sheets": "googlesheets",
        "Microsoft Office": "microsoftoffice",
    };
    return slugs[toolName] || "";
};

interface DevelopmentItem {
    experience: string;
    toolName: string;
    description: string[];
}

interface CybersecurityItem {
    experience: string;
    toolName: string;
    description: string[];
}

interface OtherItem {
    experience: string;
    toolName: string;
    description: string[];
}

const DevelopmentTools: DevelopmentItem[] = [
    {
        experience: "6 months experience",
        toolName: "HTML",
        description: [
            "Designed and structured the content of web applications with clean and semantic markup."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "CSS",
        description: [
            "Styled and optimized responsive web interfaces using modern CSS techniques, including Flexbox and Grid."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "JavaScript",
        description: [
            "Built dynamic functionalities for interactive user experiences across multiple web projects."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "TypeScript",
        description: [
            "Developed scalable and maintainable web applications with TypeScript."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "React",
        description: [
            "Developed scalable and reusable components for modern web applications using React.",
            "Able to use libraries such as Shadcn and MagicUI to create beautiful web apps."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Next.js",
        description: [
            "Built performant web applications with server-side rendering using Next.js."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Tailwind CSS",
        description: [
            "Styled web applications with utility-first CSS framework for rapid UI development."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Git",
        description: [
            "Managed version control and collaborated with team members on various projects using Git."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "GitHub",
        description: [
            "Collaborated with team members on various projects using GitHub."
        ]
    },
    {
        experience: "2 years experience",
        toolName: "Unity",
        description: [
            "Developed interactive 2D and 3D games with Unity."
        ]
    },
    {
        experience: "2 years experience",
        toolName: "C#",
        description: [
            "Developed interactive 2D and 3D games with C#."
        ]
    },
    {
        experience: "4 years experience",
        toolName: "VSCode",
        description: [
            "The swiss army knife for my coding"
        ]
    },
]

const CybersecurityTools: CybersecurityItem[] = [
    {
        experience: "6 months experience",
        toolName: "Kali Linux",
        description: [
            "Conducted penetration testing and vulnerability assessments using pre-installed security tools.",
            "Explored CTF challenges to enhance problem-solving skills in Digital Forensics, Web Exploitation, etc."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Metasploit",
        description: [
            "Explored and tested network and system vulnerabilities to strengthen security defenses.",
            "Successfully tested reverse shell backdoors and other exploits.",
            "Flawlessly gained persistence by privilege escalation exploits",
            "Able to maintain reverse shell connections to target systems outside LAN over ngrok tunneling."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Nmap",
        description: [
            "Conducted network scanning and mapping to identify open ports and services.",
            "Successfully identified vulnerabilities in target systems."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Nikto",
        description: [
            "Conducted web server scanning to identify vulnerable scripts and outdated software.",
            "Successfully identified CSRF and CORS vulnerabilities in target systems."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Burp Suite",
        description: [
            "Conducted web application security testing to identify vulnerabilities in web applications.",
            "Successfully identified SQL injection and XSS vulnerabilities in target systems."
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Bettercap",
        description: [
            "Successfully simulated MiTM attacks to spy, intercept, and manipulate network traffic.",
            "Practiced DNS Spoofing and ARP Spoofing to redirect network traffic to malicious sites."
        ]
    },
]

const OtherTools: OtherItem[] = [
    {
        experience: "1 year experience",
        toolName: "Figma",
        description: [
            "Designed high-fidelity prototypes and wireframes for user-friendly interfaces.",
            "Collaborated with developers and stakeholders to create interactive designs."
        ]
    },
    {
        experience: "1 year experience",
        toolName: "Slack",
        description: [
            "Communicated and collaborated with team members on various projects.",
        ]
    },
    {
        experience: "6 months experience",
        toolName: "Adobe XD",
        description: [
            "Created interactive prototypes and design systems for collaborative workflows.",
            "Designed user interfaces for web and mobile applications."
        ]
    },
    {
        experience: "7 years experience",
        toolName: "Adobe Photoshop",
        description: [
            "Edited and optimized images and designs for web and print media projects.",
            "Created visual content for social media and marketing campaigns."
        ]
    },
    {
        experience: "5 years experience",
        toolName: "Adobe Illustrator",
        description: [
            "Created vector graphics and illustrations for branding and marketing materials.",
            "Designed logos, icons, and infographics for various projects."
        ]
    },
    {
        experience: "5 years experience",
        toolName: "Adobe Premiere Pro",
        description: [
            "Edited and produced video content for social media and marketing campaigns.",
        ]
    },
    {
        experience: "2 years experience",
        toolName: "Adobe After Effects",
        description: [
            "Created motion graphics and visual effects for video content.",
            "Designed animated logos and intros for various projects."
        ]
    },
    {
        experience: "6 years experience",
        toolName: "Google Sheets",
        description: [
            "Created and managed spreadsheets for data entry, analysis, and reporting.",
            "Automated data entry tasks using formulas and scripts."
        ]
    },
    {
        experience: "10 years experience",
        toolName: "Microsoft Office",
        description: [
            "Created documents, presentations, and spreadsheets for various projects.",
            "Managed email communications and scheduled appointments using Outlook."
        ]
    },
]

const MyTools = () => {
    return (
        <div className="flex flex-col gap-4 w-full p-4">
            <Tabs defaultValue="development" className="w-full">
                <TabsList className="grid w-full h-full grid-cols-1 sm:grid-cols-3 gap-2">
                    <TabsTrigger value="development">
                        <h2 className="text-lg font-bold">Development</h2>
                    </TabsTrigger>
                    <TabsTrigger value="cybersecurity">
                        <h2 className="text-lg font-bold">Cybersecurity</h2>
                    </TabsTrigger>
                    <TabsTrigger value="others">
                        <h2 className="text-lg font-bold">Others</h2>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="development" className="mx-2 mt-5 text">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {DevelopmentTools.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.experience}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                                    <Image src={`/images/${getSlug(item.toolName)}.png`} alt="Tool Icon" width={24} height={24} className="mr-2" />
                                    {item.toolName}
                                </h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
                <TabsContent value="cybersecurity" className="mx-2 mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {CybersecurityTools.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.experience}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                                    <Image src={`/images/${getSlug(item.toolName)}.png`} alt="Tool Icon" width={24} height={24} className="mr-2" />
                                    {item.toolName}
                                </h3>
                                <ul className="list-disc ml-6">
                                    {item.description.map((desc, index) => <li key={index} className="text-gray-600 dark:text-gray-400">{desc}</li>)}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </TabsContent>
                <TabsContent value="others" className="mx-2 mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                        {OtherTools.map((item, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.experience}</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                                    <Image src={`/images/${getSlug(item.toolName)}.png`} alt="Tool Icon" width={24} height={24} className="mr-2" />
                                    {item.toolName}
                                </h3>
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

export default MyTools;