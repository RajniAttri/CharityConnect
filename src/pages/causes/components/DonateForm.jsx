import React from "react";

function DonateForm() {
  const amount = ["$20", "$50", "$200", "$200", "Custom"];
  return (
    <div className=" mx-6 md:mx-32   my-20 flex flex-col gap-8  bg-primary-color text-white p-6 rounded-md">
      <p className=" text-2xl md:text-3xl font-bold ">Donate Now</p>

      <form
        className="flex flex-col gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-row gap-8">
          {amount.map((item, index) => (
            <div className="border border-white py-2 px-8 h-fit"> {item}</div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold "> Payment Method</p>
          <div className="flex flex-row gap-8">
            {/* radio boxes */}
            <div className="cursor-pointer">
              <input
                type="radio"
                id="testDonation"
                name="testDonation"
                value="testDonation"
                className=" focus:outline-none"
              />
              <label className="ml-2" htmlFor="testDonation">
                Test Donation
              </label>
            </div>
            <div className="cursor-pointer">
              <input
                type="radio"
                id="offlineDonation"
                name="offlineDonation"
                value="offlineDonation"
              />
              <label className="ml-2" htmlFor="offlineDonation">
                Offline Donation
              </label>
            </div>
            <div className="cursor-pointer">
              <input
                type="radio"
                id="stripeCreditCard"
                name="stripeCreditCard"
                value="stripeCreditCard"
              />
              <label className="ml-2" htmlFor="stripeCreditCard">
                Stripe-Credit Card
              </label>
            </div>
          </div>
          <p className="font-bold"> Personal Method</p>
          <div className="flex flex-col gap-6">
            {/* row one */}
            <div className="flex flex-row items-center gap-8">
              <div className="flex flex-col w-1/2">
                <label className="text-sm my-2" htmlFor="fullName">
                  FullName
                </label>
                <input
                  className="bg-transparent w-full border border-white rounded-lg p-2 text-sm"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm my-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="bg-transparent w-full border border-white rounded-lg p-2 text-sm"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email address"
                />
              </div>
            </div>
            {/* row two  */}
            <div className="flex flex-row gap-8">
              <div className="flex flex-col w-1/2">
                <label className="text-sm my-2" htmlFor="tel">
                  Phone number
                </label>
                <input
                  className="bg-transparent w-full border border-white rounded-lg p-2 text-sm"
                  type="text"
                  id="tell"
                  name="tell"
                  placeholder="phone number"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm my-2" htmlFor="address">
                  Address
                </label>
                <input
                  className="bg-transparent w-full border border-white rounded-lg p-2 text-sm"
                  type="text"
                  id="address"
                  name="address"
                  placeholder=" address"
                />
              </div>
            </div>
            {/* row three */}
            <div className="flex flex-col w-full">
              <label className="text-sm my-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="bg-transparent w-full border border-white rounded-lg p-2 text-sm h-40 text-top "
                id="message"
                name="message"
                placeholder="enter message here..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>

        <button className="text-white py-2 px-4 flex flex-row gap-4 rounded-[.4rem] items-center w-fit border-solid border-white border bg-transparent hover:bg-white hover:text-primary-color">
          <p>Donate Now</p>
        </button>
      </form>
    </div>
  );
}

export default DonateForm;
