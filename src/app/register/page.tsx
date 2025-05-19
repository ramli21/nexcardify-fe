'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('personal');

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Logo */}
      <div className="mb-4">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Sign up for free!
      </h2>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Tabs inside card */}
        <div className="flex">
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium transition ${
              activeTab === 'personal'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('personal')}
          >
            Personal
          </button>
          <button
            className={`flex-1 px-4 py-3 text-sm font-medium transition ${
              activeTab === 'business'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('business')}
          >
            Business
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Register as {activeTab === 'personal' ? 'Personal' : 'Business'} User
            </button>
          </form>

          {/* Link to login */}
          <p className="text-center text-sm text-gray-500 mt-6">
            I already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
