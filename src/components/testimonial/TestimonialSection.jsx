import React from 'react';
import styles from '@/styles/testimonial.module.scss';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';
import TestimonialGallery from './TestimonialGallery';

function Testimonials() {
  return (
    <section className={styles['section-testimonials']}>
      <TestimonialCard styles={styles} />
      <TestimonialGallery styles={styles} />
    </section>
  );
}

export default Testimonials;
