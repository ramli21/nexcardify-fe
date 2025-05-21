'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PersonalInfoPage() {
  
  const [selectedField, setSelectedField] = useState('');
  const [otherField, setOtherField] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

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
    "Sales",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalField = selectedField === 'Other' ? otherField : selectedField;

    console.log('Full Name:', (document.getElementById('name') as HTMLInputElement).value);
    console.log('Profession:', finalField);
    console.log('Email:', email);
    console.log('Phone:', phone);

    router.push('/professional-info');
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
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select your area of profession
            </label>
            <div className="flex flex-wrap gap-2">
              {fields.map(field => (
                <label
                  key={field}
                  className={`cursor-pointer px-4 py-2 text-sm border rounded-lg ${
                    selectedField === field
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="radio"
                    name="profession"
                    className="hidden"
                    value={field}
                    checked={selectedField === field}
                    onChange={() => setSelectedField(field)}
                  />
                  {field}
                </label>
              ))}
            </div>

            {selectedField === 'Other' && (
              <input
                type="text"
                className="mt-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Please specify your profession"
                value={otherField}
                onChange={(e) => setOtherField(e.target.value)}
                required
              />
            )}
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
