'use client';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-slateGray py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Have questions, feedback, or need support? We’d love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <div className="bg-slateGray/10 rounded-xl p-8 shadow-md max-w-3xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-primary/90 transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Call-to-action Section */}
        <section className="bg-primary py-20 text-white text-center">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Prefer to talk to our team directly?
            </h2>
            <Link href="mailto:contact@nexcardify.com">
              <button className="bg-white text-primary text-lg font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition">
                Email Us Now
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
