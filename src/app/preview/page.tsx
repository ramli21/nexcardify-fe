'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CardPreviewPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [templateId, setTemplateId] = useState<string | null>(null);

  useEffect(() => {
    // const selected = searchParams.get('template');
    // if (selected) {
    //   setTemplateId(selected);
    // } else {
    //   // Jika tidak ada template, redirect ke pemilihan template
      // router.push('/template');
    // }
  }, [searchParams, router]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-10">
      <div className="mb-6">
        <img src="/images/logo/NexCardify.png" alt="Logo" className="h-12" />
      </div>
      <h1 className="text-2xl font-bold mb-4">Preview Your Business Card</h1>

        <div className="w-full max-w-md border-4 border-purple-600 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={`https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/mastertemplates/10/14644_1.jpg`}
            alt="Selected Template"
            className="w-full h-auto"
          />
        </div>

      <button
        onClick={() => router.push('/dashboard')}
        className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
      >
        Confirm & Save
      </button>
    </section>
  );
}
