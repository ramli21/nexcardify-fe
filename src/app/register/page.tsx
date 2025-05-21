'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agree) {
      alert('Anda harus menyetujui Syarat dan Ketentuan.');
      return;
    }

    // Simulasikan submit form (bisa ganti dengan API call)
    console.log('Submit data:', {
      email,
      password,
      type: activeTab,
    });

    router.push('/personal-info');
  };

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
                ? 'bg-purple-600 text-white cursor-not-allowed opacity-50'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('business')}
            disabled
          >
            Business
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="agree" className="text-gray-700">
                By signing up, I confirm that I have read and agree to the{' '}
                <a href="/terms-of-service" className="text-purple-600 hover:underline">Terms of Service</a> and{' '}
                <a href="/privacy-policy" className="text-purple-600 hover:underline">Privacy Policy</a>.
              </label>
            </div>
            <button
              type="submit"
              className={`bg-purple-600 text-white p-3 rounded-lg font-semibold transition ${
                !agree ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
              }`}
              disabled={!agree}
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
