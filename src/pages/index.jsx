import Features from '@/components/Features';
import CallToAction from '@/components/call-to-action';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero/HeroSection';
import HowItWork from '@/components/howItWork/HowItWork';
import Meals from '@/components/meals/MealSection';
import Price from '@/components/price/PriceSection';
import Testimonials from '@/components/testimonial/TestimonialSection';
import Head from 'next/head';

function Index() {
  return (
    <>
      <Head>
        <title>Omnifood</title>
      </Head>
      <Header />
      <HeroSection />
      <Features />
      <HowItWork />
      <Meals />
      <Testimonials />
      <Price />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Index;
