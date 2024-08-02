import React from "react";

import Button from "../../../components/Button";
import EventCard from "./EventCard";
function EventSection() {
  return (
    <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center ">
      <div className="flex flex-col w-1/3 gap-6 ">
        <p className=" text-3xl md:text-5xl font-bold ">
          Multiple Event & Conference
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry ore
        </p>
        <Button
          type="primary-button"
          text="Donate Now"
          icon={<i class="fa fa-angle-right"></i>}
        ></Button>
      </div>
      <div>
        <EventCard
          title="Use Hashtags To Support Online"
          start_date="JANUARY 17, 2024 "
          start_time="12:00 AM"
          end_date="JANUARY 30, 2024"
          end_time="11:59 PM"
          event_location="Mitchell, 57301 United States"
        ></EventCard>
        <EventCard
          title="Use Hashtags To Support Online"
          start_date="JANUARY 17, 2024 "
          start_time="12:00 AM"
          end_date="JANUARY 30, 2024"
          end_time="11:59 PM"
          event_location="Mitchell, 57301 United States"
        ></EventCard>
      </div>
    </section>
  );
}

export default EventSection;
