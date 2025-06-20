// pages/privacy.js atau components/PrivacyPolicy.jsx

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>

      <p className="mb-4 text-gray-700">
        This Privacy Policy describes how NexCardify ("we", "our", or "us")
        collects, uses, and protects your personal information when you use our
        digital business card platform ("Service").
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, job title, company name, and any data you provide in your
          digital card.
        </li>
        <li>
          <strong>Usage Data:</strong> Information on how you interact with our
          platform, including device information and IP address.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>To create and manage your digital business card.</li>
        <li>To personalize your experience and improve our services.</li>
        <li>To send important updates and respond to your inquiries.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        3. Sharing of Information
      </h2>
      <p className="mb-4 text-gray-700">
        We do not sell, trade, or rent your personal information. Your data may
        be shared only with trusted third-party services that help us operate
        our platform, under strict confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        4. Data Security
      </h2>
      <p className="mb-4 text-gray-700">
        We implement industry-standard security measures to protect your
        personal information from unauthorized access, disclosure, or
        destruction.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        5. Your Rights
      </h2>
      <p className="mb-4 text-gray-700">
        You have the right to access, update, or delete your personal
        information at any time by contacting us at{' '}
        <a
          href="mailto:support@nexcardify.com"
          className="text-purple-600 hover:underline"
        >
          support@nexcardify.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        6. Changes to This Policy
      </h2>
      <p className="mb-4 text-gray-700">
        We may update this Privacy Policy from time to time. All changes will be
        posted on this page with a revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2 text-gray-800">
        7. Contact Us
      </h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about this Privacy Policy, please contact us
        at{' '}
        <a
          href="mailto:support@nexcardify.com"
          className="text-purple-600 hover:underline"
        >
          support@nexcardify.com
        </a>
        .
      </p>
    </div>
  )
}
