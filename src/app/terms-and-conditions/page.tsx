// app/terms-and-conditions/page.tsx
"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

interface TermSection {
  title: string;
  content: string;
}

const termsAndConditions: TermSection[] = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Beatbytes. By using our app, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our app.",
  },
  {
    title: "2. Acceptance and Eligibility",
    content:
      "By using Beatbytes, you represent that you are of legal age to form a binding contract and meet all eligibility requirements. If you do not meet these requirements, you must not access or use Beatbytes.",
  },
  {
    title: "3. Modifications",
    content:
      "We reserve the right to modify these terms and the Beatbytes app at any time. Your continued use of the app after any modifications constitutes your acceptance of the changes.",
  },
  {
    title: "4. User Accounts",
    content:
      "To access certain features of the app, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
  },
  {
    title: "5. User Responsibilities and Restrictions",
    content:
      "You agree to use Beatbytes only for lawful purposes and in a manner that does not infringe upon the rights of others. You are prohibited from attempting to circumvent security measures, introducing malicious content, or using the app for any illegal activities.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content and materials available on Beatbytes, including but not limited to text, graphics, logos, images, and software, are the property of Beatbytes and are protected by intellectual property laws. You are granted a limited, non-commercial use license, subject to these terms.",
  },
  {
    title: "7. Privacy and Data Use",
    content:
      "By using Beatbytes, you consent to the collection, use, and disclosure of your personal information as outlined in our Privacy Policy. We reserve the right to use anonymized statistical data for various purposes.",
  },
  {
    title: "8. Third-Party Content and Links",
    content:
      "Beatbytes may include third-party content and links. We are not responsible for such content or linked sites, and you access them at your own risk.",
  },
  {
    title: "9. Termination",
    content:
      "We reserve the right to terminate or suspend your access to Beatbytes at any time, without notice, for any reason, including but not limited to a breach of these terms and conditions.",
  },
  {
    title: "10. Disclaimers and Limitations of Liability",
    content:
      'Beatbytes is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the app, including those caused by viruses or service interruptions, to the fullest extent permitted by law.',
  },
  {
    title: "11. Indemnification",
    content:
      "You agree to indemnify and hold harmless Beatbytes and its affiliates from any claim or demand made by any third party due to or arising out of your use of the app or violation of these terms.",
  },
  {
    title: "12. Governing Law and Jurisdiction",
    content:
      "These terms are governed by the laws of the state of Virginia and and the federal laws of the United States of America. Any legal action shall be brought exclusively in the courts of the state of Virginia.",
  },
  {
    title: "13. Contact Information",
    content:
      "If you have any questions about these terms or the Beatbytes app, please contact us at admin@beatbytes.app.",
  },
];
export default function TermsAndConditionsPage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header featuresRef={featuresRef} />
      <main className="min-h-screen bg-[#EAEEFE]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 pt-20">
            Terms and Conditions
          </h1>
          <div className="space-y-6">
            {termsAndConditions.map((section, index) => (
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
