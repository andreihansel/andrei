import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link";


interface DevelopmentItem {
    title: string;
    description: string;
    link: string;
    previewVideo: string;
    technologies: string[];
}

interface CybersecItem {
    title: string;
    description: string;
    link: string;
    previewVideo: string;
    technologies: string[];
}

interface OtherItem {
    title: string;
    description: string;
    link: string;
    previewVideo: string;
    technologies: string[];
}

const DevelopmentProjects: DevelopmentItem[] = [
    {
        title: "Luarsekolah Community and News Page",
        description: "A community and news page for Luarsekolah, a platform for Indonesian students to train and study vocational hard skills.",
        link: "https://github.com/alra-tech/app-luar-sekolah",
        previewVideo: "/videos/luarsekolah-project.mp4",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
    },
    {
        title: "Doomsday ID Generator",
        description: "A simple ID generator for Doomsday, where the user can input their credentials and get a unique ID. Implemented using vanilla JavaScript.",
        link: "https://github.com/andreihansel/doomsdayid",
        previewVideo: "/videos/doomsdayid.mp4",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
        ],
    },
    {
        title: "Bisa Ngonten Website",
        description: "My personal project for my Bisa Ngonten program, implemented a simple login form and logout button. No frameworks or libraries were used.",
        link: "https://github.com/andreihansel/bisangonten",
        previewVideo: "/videos/bisangonten.mp4",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
        ],
    },
]

const CybersecProjects: CybersecItem[] = [
    {
        title: "Pentest & Vuln Assessment on UB",
        description: "A penetration test and vulnerability assessment on one of Universitas Brawijaya's official website. The test was conducted using Nmap, Nikto, and OWASP ZAP. Identified CORS misconfiguration and CSRF vulnerabilities. Scored vulnerabilities with CVSS Base Metrics to give final report",
        link: "#",
        previewVideo: "/videos/nikto.mp4",
        technologies: [
            "Nmap",
            "Nikto",
            "OWASP ZAP",
            "CVSS"
        ],
    },
    {
        title: "Bad USB with Raspberry Pi",
        description: "A project to create a Bad USB using a Raspberry Pi Pico. The Bad USB will run a Ducky Script to disable Windows defender and run wget to download trojan and execute it.",
        link: "#",
        previewVideo: "/videos/badusb.mp4",
        technologies: [
            "Raspberry Pi",
            "Ducky Script",
        ],
    },
    {
        title: "Reverse Shell with Metasploit to MacOS, Windows, and Metasploitable",
        description: "A project to create a reverse shell using Metasploit to MacOS, Windows, and Metasploitable. The reverse shell will be used to gain access to the target machine. Successfully gained access to all target machines, even machines outside the local network ;)",
        link: "#",
        previewVideo: "/videos/reverseshell.mp4",
        technologies: [
            "Metasploit",
            "Ngrok",
            "Nmap",
        ],
    },
]

const OtherProjects: OtherItem[] = [
    {
        title: "My Digital Design Media",
        description: "A collection of my digital design portfolio, including logos, banners, UI/UX Designs, and other digital media.",
        link: "andreihansel",
        previewVideo: "/videos/designportfolio.mp4",
        technologies: [
            "Adobe Illustrator",
            "Adobe Photoshop",
            "Adobe XD",
            "Figma",
            "Adobe Premiere Pro",
            "Adobe After Effects",
        ],
    },
]

const MyProjects = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <Tabs defaultValue="development" className="w-full">
                <TabsList className="grid w-full h-full grid-cols-1 sm:grid-cols-3 gap-2">
                    <TabsTrigger value="development">
                        <h2 className="text-lg font-bold">Development</h2>
                    </TabsTrigger>
                    <TabsTrigger value="cybersecurity">
                        <h2 className="text-lg font-bold">Cybersecurity</h2>
                    </TabsTrigger>
                    <TabsTrigger value="other">
                        <h2 className="text-lg font-bold">Others</h2>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="development" className="mt-5 mx-5 text">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {DevelopmentProjects.map((item, index) => (
                            <div key={index} className="flex flex-col border rounded-md shadow-xl">
                                <div className="aspect-video w-full relative">
                                    <video 
                                        src={item.previewVideo} 
                                        autoPlay 
                                        muted 
                                        loop 
                                        className="absolute inset-0 w-full h-full object-cover"
                                    ></video>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, index) => (
                                            <div key={index} className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        <Link href={item.link}>
                                            <Button variant="default" size="sm">View Code</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="cybersecurity" className="mx-5 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CybersecProjects.map((item, index) => (
                            <div key={index} className="flex flex-col border rounded-md shadow-xl">
                                <div className="aspect-video w-full relative">
                                    <video 
                                        src={item.previewVideo} 
                                        autoPlay 
                                        muted 
                                        loop 
                                        className="absolute inset-0 w-full h-full object-cover"
                                    ></video>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, index) => (
                                            <div key={index} className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="other" className="mx-5 mt-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {OtherProjects.map((item, index) => (
                            <div key={index} className="flex flex-col border rounded-md shadow-xl">
                                <div className="aspect-video w-full relative">
                                    <video 
                                        src={item.previewVideo} 
                                        autoPlay 
                                        muted 
                                        loop 
                                        className="absolute inset-0 w-full h-full object-cover"
                                    ></video>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, index) => (
                                            <div key={index} className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex mt-2">
                                        <Link href="https://docs.google.com/presentation/d/16pNkQtuXk2URlD9PDvN9FvYTuyxqnDHhECJMkeDquwg/edit?usp=sharing">
                                            <Button variant="default">View</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default MyProjects;