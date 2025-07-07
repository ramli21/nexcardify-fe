import Link from "next/link";
import { getImagePrefix } from "@/utils/util";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section>
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className={`col-span-12 bg-newsletter-bg bg-contain bg-no-repeat`}>
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24 text-center">
              <h3 className="text-4xl md:text-5xl font-semibold text-white mb-3">
                Ready to Create Your Card?
              </h3>
              <h3 className="text-base font-normal text-white/75 mb-8">
                Join Nexcardify today and make your professional digital business card in minutes.
              </h3>
              <div className="flex justify-center">
                <Link href="/signup" passHref legacyBehavior>
                <button
                    type="button"
                    aria-label="Register Now"
                    className="group flex items-center gap-2 px-8 py-3 bg-ultramarine hover:bg-midnightblue border-2 border-white transition duration-200 ease-in-out rounded-full text-white text-lg font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ultramarine/50"
                >
                    <span>Register Now</span>
                    <Image
                        src={`${getImagePrefix()}images/newsletter/send.svg`}
                        alt=""
                        width={24}
                        height={24}
                        className="transform transition-transform duration-200 group-hover:translate-x-1"
                    />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;
