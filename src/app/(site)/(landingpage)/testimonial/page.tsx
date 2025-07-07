'use client';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

const TestimonialPage = () => {
  const TESTIMONIALS = [
    {
      name: 'Aditya Santoso',
      role: 'Freelance Designer',
      image: '/images/testimonials/testimonial1.jpg',
      quote:
        'Nexcardify makes sharing my portfolio easier than ever. Clients are impressed with my professional digital card!',
    },
    {
      name: 'Siti Rahmawati',
      role: 'Marketing Manager',
      image: '/images/testimonials/testimonial2.jpg',
      quote:
        'The analytics feature helped me track how many people viewed my card. Nexcardify is a must-have tool!',
    },
    {
      name: 'Budi Setiawan',
      role: 'Startup Founder',
      image: '/images/testimonials/testimonial3.jpg',
      quote:
        'With Nexcardify, I can update my contact info anytime without printing new cards. So convenient and eco-friendly!',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-slateGray py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-bold mb-6">
              What Our Users Say
            </h1>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Hear from professionals who transformed their networking with Nexcardify.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4 object-cover"
                  />
                  <p className="text-black/70 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <span className="text-black/50">{testimonial.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-action Section */}
        <section className="bg-primary py-20 text-white text-center">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to get started with Nexcardify?
            </h2>
            <Link href="/signup">
              <button className="bg-white text-primary text-lg font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition">
                Create Your Card Today
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TestimonialPage;
