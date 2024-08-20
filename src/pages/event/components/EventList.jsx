import React from "react";
import Button from "../../../components/Button";

function EventList(props) {
  const event = [{ id: 1, name: "Event 1" }];
  const image = props.image;
  const image1 = props.image1;

  return (
    <div className="mt-16 flex mb-9">
      <div className="flex mx-28 bg-slate-50 drop-shadow-xl w-[700px] ">
        <div>
          <img src={image} alt="" className="w-56 h-60 rounded-l-lg " />
        </div>

        <div className="mx-10">
          <h1 className="font-semibold text-xl pb-3">
            Use Hashtags To Support Online
          </h1>
          <p>JANUARY 17, 2024 @12:00AM-JANUARY 30, 2024 @ 11:59 PM</p>
          <h2 className="font-semibold text-xl pt-14">Event Location:</h2>

          <div className="flex justify-between">
            <p className="pt-5">Mitchell, 57301 United States</p>

            <Button
              key={event.id}
              type="primary-link"
              text="Jion Now"
              icon={<i className="fa fa-angle-right"></i>}
              href={`/event/${event.id}`}
            ></Button>
          </div>
        </div>
      </div>

      <div className="flex mx-28 bg-slate-50 drop-shadow-xl w-[700px] ">
        <div>
          <img src={image1} alt="" className="w-56 h-60 rounded-l-lg " />
        </div>

        <div className="mx-10">
          <h1 className="font-semibold text-xl pb-3">
            Use Hashtags To Support Online
          </h1>
          <p>JANUARY 17, 2024 @12:00AM-JANUARY 30, 2024 @ 11:59 PM</p>
          <h2 className="font-semibold text-xl pt-14">Event Location:</h2>

          <div className="flex justify-between">
            <p className="pt-5">Mitchell, 57301 United States</p>

            <Button
              key={event.id}
              type="primary-link"
              text="Jion Now"
              icon={<i className="fa fa-angle-right"></i>}
              href={`/event/${event.id}`}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventList;
