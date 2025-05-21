'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const templates = [
  { id: 'template1', image: 'https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/10/14644_1.jpg' },
  { id: 'template2', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9358/1_85824037_image_p1_common.jpg' },
  { id: 'template3', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9244/1_98102026_image_p1_common.jpg' },
  { id: 'template4', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9148/1_11609006_image_p1_common.jpg' },
  { id: 'template5', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9112/1_64732145_image_p1_common.jpg' },
  { id: 'template6', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9115/1_56233723_image_p1_common.jpg' },
  { id: 'template7', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9090/1_35637081_image_p1_common.jpg' },
  { id: 'template8', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9087/1_15217929_image_p1_common.jpg' },
  { id: 'template9', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9071/1_78148047_image_p1_common.jpg' },
  { id: 'template10', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9053/1_62817998_image_p1_common.jpg' },
  { id: 'template11', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9040/1_80294840_image_p1_common.jpg' },
  { id: 'template12', image: 'https://d3uzz8tw1vr5h1.cloudfront.net/templates2024/9044/1_54183322_image_p1_common.jpg' },
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

    router.push('/preview');
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="mb-6">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <h1 className="text-2xl font-bold mb-8 text-center">Choose Your Business Card Template</h1>

      <div className="max-w-5xl w-full h-[900px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
        {templates.map(template => (
          <div
            key={template.id}
            onClick={() => handleSelect(template.id)}
            className={`cursor-pointer border-4 rounded-2xl overflow-hidden transition-shadow duration-200 
              ${selectedTemplate === template.id ? 'border-purple-600 shadow-xl' : 'border-transparent shadow-md'}`}
          >
            <img
              src={template.image}
              alt={template.id}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
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
