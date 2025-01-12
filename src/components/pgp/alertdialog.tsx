import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HoverCardDemo } from "./emailhover";
import CopyPGPKey from "./scriptcopy";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function AlertDialogDemo() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                    )}
                >
                    <KeyRound aria-label="PGP Key" className="size-12" />
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="font-[family-name:var(--font-geist-sans)]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Wanna Communicate Securely? 🔒</AlertDialogTitle>
                    <AlertDialogDescription className="text-justify">
                        <div>
                            If you need to send sensitive information, you can do so with complete peace of mind. By using my <span className="font-bold italic">PGP Public Key</span>, you ensure that your messages to <HoverCardDemo/> are encrypted and only readable by me.
                        </div>
                        <div className="w-full h-full">
                            <CopyPGPKey />
                            <p className="mt-2 italic">*Don&apos;t know how to use PGP? Learn more about how PGP works and how to send encrypted messages by reading my article <Link href="https://medium.com/@hmu.bisangonten/understanding-pgp-a-guide-to-encrypting-your-messages-with-kleopatra-eebbd70fd0c3"><Button variant="link" size="link" className="italic">here</Button></Link></p>
                        </div>
                        
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertDialogDemo;
