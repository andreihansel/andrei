import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "nextdotjs",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "metasploit",
  "kalilinux",
  "csharp",
  "mysql",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg">
      <IconCloud images={images} />
    </div>
  );
}

export default IconCloudDemo;