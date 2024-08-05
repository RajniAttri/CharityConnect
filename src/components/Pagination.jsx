import React from "react";

function Pagination() {
  return (
    <section className="flex flex-row gap-2 items-center justify-center py-6">
      <div className="py-1 px-2 rounded-lg border border-primary-color w-fit">
        <i className="fas fa-angle-left"></i>
      </div>
      <div className="py-1 px-2 rounded-lg bg-primary-color text-white w-fit">
        <p> 01</p>
      </div>
      <div className="py-1 px-2 w-fit">02</div>
      <div className="py-1 px-2 w-fit">03</div>
      <div className="py-1 px-2 w-fit">---</div>
      <div className="py-1 px-2 w-fit">10</div>
      <div className="py-1 px-2 rounded-lg bg-primary-color text-white w-fit">
        <i className="fas fa-angle-right"></i>
      </div>
    </section>
  );
}

export default Pagination;
