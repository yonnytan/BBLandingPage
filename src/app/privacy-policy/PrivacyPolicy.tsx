"use client";
// pages/privacy-policy.js
import React from "react";
import Link from "next/link";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-[#EAEEFE]">
        {" "}
        {/* Adjust background color as needed */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>
              At BeatBytes, we take your privacy seriously. This policy
              describes how we collect, use, and protect your personal
              information.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, and information about your use of the app.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, and to communicate with you.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not share your personal information with third parties
              except as described in this policy.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              4. Data Security
            </h2>
            <p>
              We use reasonable measures to help protect your personal
              information from loss, theft, misuse, and unauthorized access.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              5. Your Choices
            </h2>
            <p>
              You can access and update certain information about you from
              within the app. You can also opt out of certain uses of your
              information.
            </p>
          </div>
          <Link
            href="/"
            className="mt-8 inline-block text-blue-600 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
