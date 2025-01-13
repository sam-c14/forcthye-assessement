// import React from 'react'
import Navbar from "../components/Navbar";
import HeroHeader from "../components/HeroHeader";
import ClientSuccessSection from "../components/ClientSuccessSection";
import HeroCarousel from "../components/HeroCarousel";
import Testimonials from "../components/Testimonials";
import Mission from "../components/Mission";
import ProductInnovation from "../components/ProductInnovation";
import ProductCount from "../components/ProductCount";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <ClientSuccessSection />
      <HeroCarousel />
      <Testimonials />
      <Mission />
      <ProductInnovation />
      <div className="bg-gradient-to-b to-[#030516] from-[#0c2645] via-[#030516] py-32">
        <ProductCount />
      </div>
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
