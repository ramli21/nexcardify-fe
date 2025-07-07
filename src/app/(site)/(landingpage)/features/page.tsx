'use client';
import FeatureCard from '@/components/Home/FeatureCard';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';

const FeaturesPage = () => {

    const FEATURES = [
        {
          icon: 'material-symbols:brush',
          title: 'Customizable Templates',
          desc: 'Choose from a variety of sleek templates to match your personal or company branding.',
        },
        {
          icon: 'solar:qr-code-bold',
          title: 'Unique QR Code',
          desc: 'Every card comes with a unique QR code for easy and instant sharing.',
        },
        {
          icon: 'solar:hand-money-bold',
          title: 'Lead Generation',
          desc: 'Collect contacts directly from your digital card with built-in forms.',
        },
        {
          icon: 'material-symbols:analytics',
          title: 'Analytics & Insights',
          desc: 'Track views, shares, and engagement with real-time analytics.',
        },
        {
          icon: 'solar:cloud-upload-bold',
          title: 'Easy Updates',
          desc: 'Update your card details anytime without reprinting or re-sharing QR.',
        },
        {
          icon: 'solar:shield-check-bold',
          title: 'Data Security',
          desc: 'Your information is protected with enterprise-grade security and privacy controls.',
        },
    ];

      
    return (
        <>
        <Header/>
        <main className="bg-white min-h-screen pt-20">
            <section className="bg-slateGray py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
                <h1 className="text-midnight_text text-4xl sm:text-5xl font-bold mb-6">
                    Explore Cardify’s Powerful Features
                </h1>
                <p className="text-black/70 text-lg max-w-3xl mx-auto">
                    Cardify helps you design stunning digital business cards, share them effortlessly, and grow your professional network faster than ever before.
                </p>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {FEATURES.map((feature, index) => (
                            <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-primary py-20 text-white text-center">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Create Your Digital Business Card?
                    </h2>
                    <Link href="/signin">
                        <button className="bg-white text-primary text-lg font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition">
                            Get Started Now
                        </button>
                    </Link>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  );
};

export default FeaturesPage;
