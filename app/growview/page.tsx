// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growview Plivacy policy",
  description: "This page is used to show Growview Plivacy policy",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Growview Plivacy policy
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      
      <div className="prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
        <p className="text-sm text-muted-foreground mb-6">Last Updated: 2024/10/30</p>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
          <p className="mb-4">
            This Privacy Policy explains how our application (&quot;growview&quot;) handles your information. 
            We are committed to protecting your privacy and ensuring transparency about our data practices.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">2. Data Collection and Storage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our App does not collect any personal information from its users</li>
            <li>We do not track, store, or transmit any user data to external servers</li>
            <li>All data generated during the use of the App is stored locally on your device</li>
            <li>We do not use cookies or similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">3. Local Storage</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any information or settings created while using the App remains exclusively on your device</li>
            <li>You maintain full control over any locally stored data</li>
            <li>You can delete all App data at any time by uninstalling the App</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">4. Third-Party Services</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our App does not integrate with any third-party services</li>
            <li>We do not share any information with third parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">5. Data Security</h3>
          <p className="mb-4">
            While we don&apos;t collect any data, we recommend users:
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep their device&apos;s operating system updated</li>
              <li>Use device-level security features (such as screen lock)</li>
              <li>Regularly backup their device data</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">6. Children&apos;s Privacy</h3>
          <p className="mb-4">
            Our App is designed to be safe for users of all ages as it does not collect, store, or transmit any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h3>
          <p className="mb-4">
            We reserve the right to update this Privacy Policy. Any changes will be effective immediately upon posting the updated version.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">8. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="https://x.com/jujekebab" className="text-blue-600 hover:underline">
              x.com/jujekebab
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
