import Safari from "@/components/ui/safari";

export function SafariDemo() {
  return (
    <div className="relative">
      <Safari
        url="andreihansel"
        className="size-full"
        videoSrc="/videos/reverseshell.mp4"
      />
    </div>
  );
}

export default SafariDemo;
