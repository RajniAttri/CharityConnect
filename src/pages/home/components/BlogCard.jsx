import React from "react";
import Button from "../../../components/Button";

function BlogCard(props) {
  
  const { id,image, day, month, category, title, description, author } = props;
  const maxDescriptionLength = 60; // max letters
  console.log(id);
    const truncatedDescription =
    description.length > maxDescriptionLength
      ? `${description.substring(0, maxDescriptionLength)}...`
      : description;
  return (
    <section className="flex flex-col gap-6 pb-6 w-full lg:1/3 shadow-md">
      <div className=" relative w-full  ">
        <img src={image} alt="" className="w-full" />
        <div className="absolute top-[5%] left-[5%] ">
          <div className="relative border border-white left-10 top-10 ">
            <div className="bg-primary-color text-white text-center w-fit py-4 px-6 relative bottom-5 right-5">
              <p className=" text-3xl md:text-5xl font-bold text-center ">
                {day}
              </p>
              <p>{month}</p>
            </div>
          </div>
          {/* <div className=" relative top-[-40] bg-transparent p-10 border border-white">
            .
          </div> */}
        </div>
      </div>
      <div className="flex flex-row justify-between px-4 items-center">
        <p className="p-4 bg-[#D3CAF8] w-fit rounded-lg"> {category}</p>
        <i className="fa fa-share-alt"></i>
      </div>
      <div className=" px-4">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{truncatedDescription}</p>
      </div>

      <div className="px-4 flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4 ">
          <i className="fas fa-user-alt"></i>
          <p>{author}</p>
        </div>
        <Button
            type="secondary-link"
            text="Readmore"
            icon={<i className="fa fa-angle-right"></i>}
            href={`/blog/${id}`}
          ></Button>
      </div>
    </section>
  );
}

export default BlogCard;
