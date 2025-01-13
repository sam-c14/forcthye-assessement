// import React from "react";
import AiImage from "../assets/images/ai-art.webp";
import Cryptocurrency from "../assets/images/crytocurrency.webp";
import CryptocurrencyCrypto from "../assets/images/cryptocurrency-cypto.webp";

const BlogCard = ({
  href,
  imageSrc,
  altText,
  title,
  date,
}: {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  date: string;
}) => (
  <a
    href={href}
    className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
  >
    <div className="h-60 sm:h-56 relative mb-6">
      <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
      <p className="text-lg font-semibold mb-1">Blog</p>
      <div className="text-base text-darkGrey flex items-center mb-6">
        <span>The Reformist</span>
        <div className="h-2 w-2 rounded-full bg-white mx-[6px]" />
        <span>{date}</span>
      </div>
      <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
        {title}
      </h6>
    </div>
  </a>
);

const BlogGrid = () => {
  const blogs = [
    {
      href: "/blog/will-ai-take-over-art",
      imageSrc: AiImage,
      altText: "Will AI take over Art?",
      title: "Will AI take over Art?",
      date: "May 29th, 2024",
    },
    {
      href: "/blog/cryptocurrency-vs-tokens",
      imageSrc: Cryptocurrency,
      altText: "Cryptocurrency vs Tokens",
      title: "Cryptocurrency vs Tokens",
      date: "May 29th, 2024",
    },
    {
      href: "/blog/cryptocurrency-and-crypto-asset",
      imageSrc: CryptocurrencyCrypto,
      altText: "Cryptocurrency and Crypto asset",
      title: "Cryptocurrency and Crypto asset",
      date: "May 29th, 2024",
    },
  ];

  return (
    <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

export default BlogGrid;
