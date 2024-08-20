import React from 'react'
import BlogCard from '../../home/components/BlogCard';
import image14 from "/assets/images/Rectangle 14.png";
import Pagination from '../../../components/Pagination';
function BlogList() {
const blogId=1
    const     day="25"
    const     month="Febuary"
    const       category="Education"
    const       title="Children Education Needs For Well The World."
    const      description="Children Education Needs For Well The World."
    const      author="Adam"
  return (
    <>
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
     
     <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
     {Array.from({ length: 12 }).map((_, index) => (
        
       <BlogCard key={index} 

       id={blogId}
       image={image14}
       day="25"
       month="Febuary"
       category="Education"
       title="Children Education Needs For Well The World."
       description="Children Education Needs For Well The World."
       author="Adam"
       />
     ))}
     
</div>

    <Pagination/>
   </section>
    </>
  )
}

export default BlogList
