import { siteConfig } from "@/config/site";
import { Metadata } from "next";

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
        <p>2024</p>
        <p>React Native, Expo, TypeScript, NativeWind</p>
        <p>
          React Native で筋トレ記録アプリを作成しました。
        </p>
        {/* <div className="flex gap-4">
        <a href="https://astro-growview.netlify.app/">Official Site</a>
        </div> */}
        <div className="flex gap-4">
          <a href="https://apps.apple.com/us/app/growview/id6737449909">App Store</a>
        </div>
      </section>

      </div>
    </div>
  );
}