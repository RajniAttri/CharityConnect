import React from 'react'
import image10 from "/assets/images/Image1.png";

function EventCard(props) {
  const title = props.title;
  const start_date = props.start_date;
  const start_time = props.start_time;
  const end_date = props.end_date;
  const end_time = props.end_time;
  const event_location = props.event_location;

  return (
    <div className="flex flex-row gap-6 shadow-lg p-4">
      <img src={image10} alt="" />
      <div>
        <p className="text-2xl font-medium">{title}</p>
        <p>
          {start_date} @ {start_time} - {end_date} @ {end_time}
        </p>
      </div>
      <div className=" border border-r-gray-400 border-r-2"></div>
      <div>
        <p className="text-2xl font-medium">Event Location:</p>
        <p>{event_location}</p>
      </div>
    </div>
  );
}

export default EventCard;
