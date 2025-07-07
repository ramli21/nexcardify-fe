import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';

const Hero = () => {    
    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <div className='col-span-6 flex flex-col gap-8'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className='text-success text-sm font-semibold text-center lg:text-start'>
                                Get your first card for free!
                            </p>
                        </div>
                        <h1 className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'>
                            Create Professional Digital Business Cards with Nexcardify
                        </h1>
                        <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>
                            Design modern digital business cards, share instantly with a unique QR code, and grow your network effortlessly.
                        </h3>
                        <div className="pt-5 lg:pt-0">
                            <button className="bg-secondary text-white text-lg font-semibold py-4 px-8 rounded-full hover:bg-secondary/90 transition">
                                Create Your Card Now
                            </button>
                        </div>
                        <div className='flex flex-wrap gap-4 pt-10 lg:pt-4'>
                            <div className='flex gap-2 items-center'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Professional Design</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Unique QR Code</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Easy Sharing</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center'>
                        <Image src={`${getImagePrefix()}images/banner/mahila.png`} alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
