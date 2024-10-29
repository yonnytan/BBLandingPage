// app/PrivacyPolicy/page.tsx
"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

interface PrivacySection {
  title: string;
  content: string;
}

const PrivacyPolicy: PrivacySection[] = [
  {
    title: "1. Introduction",
    content:
      'This Privacy Policy explains how Beatbytes ("we," "us," or "our") collects, uses, and discloses your personal information when you use our mobile application (the "App"). By using the App, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy.',
  },
  {
    title: "2. Information We Collect",
    content:
      "2.1 Personal Information: When you create an account, we collect your email address and username. We may also collect other personal information you choose to provide, such as your name or profile picture.\n\n2.2 Non-Personal Information: We automatically collect certain non-personal information when you use the App, including your device information, IP address, usage data, and information about your interactions with the App.\n\n2.3 Information from Third-Party Services: We may collect information about you from third-party services when you choose to connect them to the App, such as YouTube or YouTube Music. The information we collect may include your account information, playlists, and listening history.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use the information we collect to provide, maintain, and improve the App, personalize your experience, communicate with you, and deliver targeted advertising. We may also use aggregated or de-identified information for analytics and research purposes.",
  },
  {
    title: "4. Information Sharing and Disclosure",
    content:
      "We may share your information with third-party service providers who assist us in operating the App and providing services to you. We may also share your information with advertisers and advertising networks for targeted advertising purposes. We will not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide the App's services.",
  },
  {
    title: "5. Data Security",
    content:
      "We take reasonable measures to protect the security of your personal information. However, no data transmission over the internet or electronic storage method is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Rights and Choices",
    content:
      "You may access, update, or delete your account information at any time through the App's settings. You may also opt out of targeted advertising by adjusting your device's advertising settings or using opt-out tools provided by advertising networks.",
  },
  {
    title: "7. Children's Privacy",
    content:
      "The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete the information as soon as possible.",
  },
  {
    title: "8. International Data Transfers",
    content:
      "Your information may be transferred to and processed in countries other than your country of residence, including the United States. These countries may have data protection laws that are different from those in your country. By using the App, you consent to the transfer of your information to these countries.",
  },
  {
    title: "9. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App. Your continued use of the App after any modifications constitutes your acceptance of the updated Privacy Policy.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at team@beatbytes.app.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header featuresRef={undefined} />
      <main className="min-h-screen bg-[#EAEEFE]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 pt-20">Privacy Policy</h1>
          <div className="space-y-6">
            {PrivacyPolicy.map((section, index) => (
              <section key={index}>
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
