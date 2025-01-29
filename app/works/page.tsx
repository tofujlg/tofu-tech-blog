import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `${siteConfig.name} | works`,
  description: `${siteConfig.description}`,
};

export default async function WorksPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            My Works
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
      <section>
        <h2 className="text-2xl font-bold">growview</h2>
        <Image
          className="mt-4"
          src="/growview_icon.png"
          alt="growview"
          width={100}
          height={100}
        />
        <div className="mt-4">
        <p className="text-sm text-muted-foreground">2024</p>
          <p>React Native製の筋トレ記録アプリ。日々のトレーニングを記録し、成果を動画で出力することが可能。</p>
          <p className="text-sm text-muted-foreground mt-3">Platforms :</p>
          <p>iOS, Android</p>
          <p className="text-sm text-muted-foreground mt-3">Tech stack :</p>
          <p>React Native, Expo, TypeScript, NativeWind, React-Native-Reanimated, FFMpeg</p>
          {/* <div className="flex gap-4">
        <a href="https://astro-growview.netlify.app/">Official Site</a>
        </div> */}
          <div className="mt-4">
          <p className="text-sm text-muted-foreground">Download :</p>
          <div className="flex gap-4">
            <p>iOS :</p>
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://apps.apple.com/us/app/growview/id6737449909"
              >
              App Store
            </a>
          </div>
          <div className="flex gap-4">
            <p>Android :</p>
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.jujekebab.growview"
              >
              Play Store
            </a>
          </div>
        </div>
          </div>
        </section>
      </div>
    </div>
  );
}