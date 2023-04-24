import Header from '@/components/header';
import HeroSection from '@/components/hero';
import Meals from '@/components/meal';
import Head from 'next/head';
import React from 'react';
import Features from '../components/features';
import HowItWork from '@/components/howItWork';
import Testomonials from '@/components/testomonials';
import Price from '@/components/price';
import CallToAction from '@/components/call-to-action';
import Footer from '@/components/footer';

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
      <Testomonials />
      <Price />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Index;
