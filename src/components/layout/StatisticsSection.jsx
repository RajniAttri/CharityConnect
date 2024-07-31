import React from 'react';


function StatisticsSection() {
  return (
    <section className="px-6 md:px-32 flex flex-row  py-20 gap-8 items-center">
      <div className="flex flex-col w-1/3 gap-6 items-center">
        <p className=" text-3xl md:text-5xl font-bold ">520k</p>
        <p className="font-bold text-3xl">Poor People</p>
      </div>
      <div className="flex flex-col w-1/3 gap-6 items-center">
        <p className=" text-3xl md:text-5xl font-bold ">842M</p>
        <p className="font-bold text-3xl">Fund Rise</p>
      </div>
      <div className="flex flex-col w-1/3 gap-6 items-center">
        <p className=" text-3xl md:text-5xl font-bold ">24k</p>
        <p className="font-bold text-3xl">Active Member</p>
      </div>
    </section>
  );
}

export default StatisticsSection