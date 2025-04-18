import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.jpeg" alt={siteConfig.author} />  
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-lg py-4">
            東京在住のソフトウェアエンジニアのブログです。業務ではネイティブアプリ、Web開発をしています。
            他には筋トレ、バスケ、ピラティスなどのボディーワーク、映画・映像に興味があります。
          </p>
          <p className="text-muted-foreground text-lg py-4">
            Software Developer in Tokyo. I build native apps and web apps at work.
            I like weight training , body work such as Pilates, basketball, and movies.
          </p>
          <p className="text-muted-foreground text-lg py-4">
            React Native, Next.js, TypeScript, Java
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col gap-4 justify-center sm:flex-row">
        <a
          href="/feed"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
          RSS Feed
        </a>
      </div>
    </div>
  );
}