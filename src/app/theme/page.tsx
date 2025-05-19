'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const templates = [
  { id: 'template1', name: 'Classic Blue', description: 'Simple and elegant blue theme' },
  { id: 'template2', name: 'Modern Minimal', description: 'Clean and minimal look' },
  { id: 'template3', name: 'Creative Splash', description: 'Colorful and artistic' },
  { id: 'template4', name: 'Professional Grey', description: 'Formal and business style' },
  { id: 'template5', name: 'Elegant Gold', description: 'Luxurious gold accents' },
  { id: 'template6', name: 'Bold Red', description: 'Strong and eye-catching red theme' },
  { id: 'template7', name: 'Nature Green', description: 'Fresh and natural green tones' },
  { id: 'template8', name: 'Tech Blue', description: 'Modern tech-inspired blue palette' },
  { id: 'template9', name: 'Pastel Pink', description: 'Soft and gentle pastel colors' },
  { id: 'template10', name: 'Dark Mode', description: 'Sleek dark background design' },
];

export default function TemplateSelectionPage() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedTemplate(id);
  };

  const handleContinue = () => {
    if (!selectedTemplate) {
      alert('Please select a template first.');
      return;
    }
    router.push(`/dashboard`);
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="mb-6">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <h1 className="text-2xl font-bold mb-8">Choose Your Business Card Template</h1>

      {/* Scrollable container */}
      <div className="max-w-4xl w-full h-[400px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {templates.map(template => (
          <div
            key={template.id}
            onClick={() => handleSelect(template.id)}
            className={`cursor-pointer border rounded-xl p-6 shadow-md hover:shadow-xl transition
              ${selectedTemplate === template.id ? 'border-purple-600 bg-purple-50' : 'border-gray-300 bg-white'}`}
          >
            <h2 className="text-lg font-semibold mb-2">{template.name}</h2>
            <p className="text-sm text-gray-600">{template.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="mt-10 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Continue
      </button>
    </section>
  );
}
