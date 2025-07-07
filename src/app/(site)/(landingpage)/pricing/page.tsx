'use client';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';

const PricingPage = () => {
  const PACKAGES = [
    {
      title: 'Free',
      price: 'Rp0',
      desc: 'Perfect for individuals starting out.',
      features: [
        '1 Digital Business Card',
        'Basic Templates',
        'Limited QR Code Designs',
      ],
      cta: 'Get Started',
      href: '/signup',
    },
    {
      title: 'Premium',
      price: 'Rp125.000/month',
      desc: 'Ideal for professionals who want more.',
      features: [
        'Unlimited Cards',
        'Premium Templates',
        'Custom QR Codes',
        'Analytics Dashboard',
      ],
      cta: 'Upgrade to Premium',
      href: '/signup',
      highlight: true,
    },
    {
      title: 'Exclusive',
      price: 'Rp150.000/month',
      desc: 'Best for teams and organizations.',
      features: [
        'Team Management',
        'Custom Branding',
        'Advanced Security',
        'Dedicated Support',
      ],
      cta: 'Contact Sales',
      href: '/contact',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <section className="bg-slateGray py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-bold mb-6">
              Choose the Right Plan for You
            </h1>
            <p className="text-black/70 text-lg max-w-3xl mx-auto">
              Cardify offers flexible pricing to match your needs, whether you’re an individual professional or an entire team.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {PACKAGES.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-md flex flex-col items-center text-center transition ${
                    pkg.highlight
                      ? 'bg-primary text-white scale-105 hover:scale-110'
                      : 'bg-white text-black hover:shadow-xl'
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
                  <p className="text-4xl font-extrabold mb-4">{pkg.price}</p>
                  <p className="text-base mb-6">{pkg.desc}</p>
                  <ul className="space-y-2 mb-6 text-left w-full max-w-xs">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">✔️</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={pkg.href}>
                    <button
                      className={`w-full py-3 px-6 rounded-full font-semibold transition ${
                        pkg.highlight
                          ? 'bg-white text-primary hover:bg-white/90'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                    >
                      {pkg.cta}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-white text-center">
          <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Have questions about our plans?
            </h2>
            <Link href="/contact">
              <button className="bg-white text-primary text-lg font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
