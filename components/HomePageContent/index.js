import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";
import BlogGrid from "../Blogs/BlogGrid";
import Instagram from "../Instagram/Instagram";
import Service from "../Services/Service";
import ServiceSaven from "../Services/Service-Saven";
import TestimonialFour from "../Testimonials/Testimonial-Four";
import BannerSection from "../BannerSection";
import CategoriesSection from "../CategoriesSection";
import CounterSection from "../CounterSection";
import ServiceSection from "../ServiceSection";
import TestimonialSection from "../TestimonialSection";
import BlogSection from "../BlogSection";
import InstagramSection from "../InstagramSection";

const HomePageContent = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <BannerSection />
      <CategoriesSection />
      <CounterSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
      <InstagramSection />
    </>
  );
};

export default HomePageContent;
