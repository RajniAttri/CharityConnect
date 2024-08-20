import React from "react";

function CareerSection(props) {
  const title = props.title;
  const location = props.location;
  const type = props.type;
  const applyLink = props.applyLink;

  return (
    <div>
      <div className="gap-4">
        <div className="bg-[#EEEAFC]  h-16 grid grid-cols-4 justify-between mt-8 mx-28 mr-28">
          <p className="px-4 mt-5">{title}</p>
          <p className="mt-5">{location}</p>
          <p className="mt-5">{type}</p>

          <div className="flex justify-center">
            <a
              href="/applycareer"
              className=" mt-3 mr-4 bg-white bg-transparent text-primary-color flex flex-row rounded-[.4rem]
              items-center border-solid border-primary-color border w-28 h-10 px-1"
            >
              {applyLink}
              <i className="fa fa-angle-right pr-2 px-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerSection;
