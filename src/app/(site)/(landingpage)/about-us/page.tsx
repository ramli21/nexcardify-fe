'use client';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <section className="py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Story
              </h1>
              <p className="text-black/70 text-lg">
                Born from the need for professionals to make a lasting impression in a digital-first world, Nexcardify provides a powerful tool to create, share, and manage business cards effortlessly.
                We believe connections should be seamless, eco-friendly, and impactful.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/about/story.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-slateGray/20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-black/70 text-lg">
              To empower individuals and organizations to build better connections by combining sleek design, smart technology, and secure sharing — eliminating the limitations of traditional paper cards.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Nexcardify?
            </h2>
            <p className="text-black/70 text-lg">
              With customizable templates, unique QR codes, real-time analytics, and enterprise-grade security, Nexcardify sets a new standard for modern networking.
            </p>
          </div>
        </section>

        <section className="bg-primary py-20 text-white text-center">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to elevate your professional connections?
            </h2>
            <Link href="/signup">
              <button className="bg-white text-primary text-lg font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition">
                Get Started with Nexcardify
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
