import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaMelt - Unlimited Free Conversion of Images, Videos, and Music",
  description: `MediaMelt is a free and unlimited web app that lets you easily convert images, videos, and music files into various formats such as PNG, WEBP, JPEG, MP4, MP3, and more. Whether you're optimizing media for web use, changing file formats for compatibility, or compressing files for storage, MediaMelt offers a seamless experience with fast and reliable conversions. Enjoy unlimited, free media transformations with MediaMelt!`,
  creator: "Winter Abdelrhman Ahmed",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter,",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
      <meta
        name="google-site-verification"
        content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          <Navbar />
          <Toaster />
          <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
