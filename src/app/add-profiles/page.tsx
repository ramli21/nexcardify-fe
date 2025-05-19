'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InterestPage() {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const router = useRouter();

  const handleToggle = (field: string) => {
    setSelectedFields(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const fields = [
    "Software Engineer",
    "UI/UX Designer",
    "Product Manager",
    "Digital Marketing",
    "Customer Support",
    "Data Analyst",
    "Content Writer",
    "Finance",
    "Human Resources",
    "Sales"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();

    router.push('/add-contact');
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <div className="mb-4">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name/Business Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Interest field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select your area of profession
            </label>
            <div className="flex flex-wrap gap-2">
              {fields.map(field => (
                <label
                  key={field}
                  className={`cursor-pointer px-4 py-2 text-sm border rounded-lg ${
                    selectedFields.includes(field)
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedFields.includes(field)}
                    onChange={() => handleToggle(field)}
                  />
                  {field}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
