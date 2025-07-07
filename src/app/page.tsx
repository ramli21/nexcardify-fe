import React from 'react'
import Hero from '@/components/Home/Hero'
import Companies from '@/components/Home/Companies'
import Courses from '@/components/Home/Courses'
import Mentor from '@/components/Home/Mentor'
import Testimonial from '@/components/Home/Testimonials'
import Newsletter from '@/components/Home/Newsletter'
import { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
export const metadata: Metadata = {
  title: 'NexCardify',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Companies /> */}
        <Courses />
        {/* <Mentor /> */}
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
