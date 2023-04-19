import Header from '@/components/header';
import HeroSection from '@/components/hero';
import Meals from '@/components/meal';
import Head from 'next/head';
import React from 'react';

function Index() {
  return (
    <>
      <Head>
        <title>Omnifood</title>
      </Head>
      <Header />
      <HeroSection />
      <Meals />
    </>
  );
}

export default Index;
