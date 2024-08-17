// imports
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unleash your creativity with Modifio – the ultimate online tool for
          unlimited and free multimedia conversion. Transform images, audio, and
          videos effortlessly, without restrictions. Start converting now and
          elevate your content like never before!
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
      {/* <div className="relative w-screen min-h-screen  flex justify-center px-6 pt-32 pb-40 pointer-events-none top-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(2,0,36,0)_0%,#fafafa_100%)] z-[2]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] filter invert z-[1]"></div>
        <div className="relative z-[3] w-full max-w-screen-md mx-auto bg-[radial-gradient(at_27%_37%,hsla(215,98%,61%,1)_0px,transparent_0%),radial-gradient(at_97%_21%,hsla(125,98%,72%,1)_0px,transparent_50%),radial-gradient(at_52%_99%,hsla(354,98%,61%,1)_0px,transparent_50%),radial-gradient(at_10%_29%,hsla(256,96%,67%,1)_0px,transparent_50%),radial-gradient(at_97%_96%,hsla(38,60%,74%,1)_0px,transparent_50%),radial-gradient(at_33%_50%,hsla(222,67%,73%,1)_0px,transparent_50%),radial-gradient(at_79%_53%,hsla(343,68%,79%,1)_0px,transparent_50%)] filter blur-[100px] saturate-[150%] opacity-15 top-[80px]"></div>
      </div> */}
    </div>
  );
}
