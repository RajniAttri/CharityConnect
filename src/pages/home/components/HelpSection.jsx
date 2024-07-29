import React from "react";
import icon from "../../../assets/images/Icon.png";
import icon2 from "../../../assets/images/Icon2.png";
import icon3 from "../../../assets/images/Icon3.png";
import HelpCard from "./HelpCard";

function HelpSection() {
  const helpSections = [
    {
      icon: icon,
      title: "Become a Volunteer",
      description:
        "You can contribute your time, skills and knowledge through volunteering with the UN.",
    },
    {
      icon: icon2,
      title: "Become a Donation",
      description:
        "You can contribute your time, skills and knowledge through volunteering with the UN.",
    },
    {
      icon: icon3,
      title: "Send Donation",
      description:
        "You can contribute your time, skills and knowledge through volunteering with the UN.",
    },
  ];
  return (
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
      <p className=" text-3xl md:text-5xl font-bold ">How Could You Help</p>
      <div className="flex flex-col gap-8 lg:flex-row">
        {helpSections.map((section) => (
          <HelpCard
            icon={section.icon}
            title={section.title}
            description={section.description}
          ></HelpCard>
        ))}
      </div>
    </section>
  );
}

export default HelpSection;
