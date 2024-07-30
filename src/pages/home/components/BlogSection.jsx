import React from 'react'
import BlogCard from './BlogCard';
import image12 from "../../../assets/images/Rectangle 12.png";
import image13 from "../../../assets/images/Rectangle 13.png";
import image14 from "../../../assets/images/Rectangle 14.png";


function BlogSection() {
  return (
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
      <p className=" text-3xl md:text-5xl font-bold text-center ">
        Latest News From <br /> Givest Blog
      </p>
      <div className="flex flex-col gap-8 lg:flex-row">
        <BlogCard
          image={image12}
          day="25"
          month="Febuary"
          category="Water"
          title="Children Education Needs For Well The World."
          description="Children Education Needs For Well The World.Children Education Needs For Well The World.Children Education Needs For Well The World."
          author="Adam"
        ></BlogCard>
        <BlogCard
          image={image13}
          day="25"
          month="Febuary"
          category="Water"
          title="Children Education Needs For Well The World."
          description="Children Education Needs For Well The World."
          author="Adam"
        ></BlogCard>
        <BlogCard
          image={image14}
          day="25"
          month="Febuary"
          category="Education"
          title="Children Education Needs For Well The World."
          description="Children Education Needs For Well The World."
          author="Adam"
        ></BlogCard>
      </div>

      <div className="flex flex-row gap-1 ">
        <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
        <div className="w-16 h-4 rounded-lg bg-primary-color"></div>
        <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
      </div>
    </section>
  );
}

export default BlogSection