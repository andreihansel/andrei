

import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" size="link">me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="/images/fotoandrei.png" />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@andreihansel</h4>
            <p className="text-sm italic">
              hmu@tamesec.me
            </p>
            <p className="text-sm italic">
              hmu.bisangonten@gmail.com
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
