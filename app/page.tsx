// imports
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className=" text-[3.7rem] text-center font-black md:text-5xl">
          MediaMelt
        </h1>
        <h2 className="gradient-text text-[3.7rem] md:text-5xl font-medium text-center">
          Unlimited Free Media Converter.
        </h2>
        <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          MediaMelt is your ultimate, free, and unlimited tool for converting
          all your media files into various formats like PNG, WEBP, JPEG, MP4,
          and MP3. Whether optimizing for the web, adjusting formats, or
          compressing for storage, MediaMelt ensures smooth and reliable
          conversions. Enjoy limitless, hassle-free media transformations
          anytime with MediaMelt!
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
