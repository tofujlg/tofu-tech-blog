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
      <p>Privacy Policy

Last Updated: [2024/10/30]

1. Introduction
This Privacy Policy explains how our application (&quot;growview&quot;) handles your information. We are committed to protecting your privacy and ensuring transparency about our data practices.

2. Data Collection and Storage
- Our App does not collect any personal information from its users
- We do not track, store, or transmit any user data to external servers
- All data generated during the use of the App is stored locally on your device
- We do not use cookies or similar tracking technologies

3. Local Storage
- Any information or settings created while using the App remains exclusively on your device
- You maintain full control over any locally stored data
- You can delete all App data at any time by uninstalling the App

4. Third-Party Services
- Our App does not integrate with any third-party services
- We do not share any information with third parties

5. Data Security
While we don&apos;t collect any data, we recommend users:
- Keep their device&apos;s operating system updated
- Use device-level security features (such as screen lock)
- Regularly backup their device data

6. Children&apos;s Privacy
Our App is designed to be safe for users of all ages as it does not collect, store, or transmit any personal information.

7. Changes to Privacy Policy
We reserve the right to update this Privacy Policy. Any changes will be effective immediately upon posting the updated version.

8. Contact Us
If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</p>
    </div>
  );
}
