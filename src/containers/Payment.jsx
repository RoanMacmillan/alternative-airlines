import React from "react";

const Payment = () => {
  return (
    <div className="mx-auto mt-10 max-w-[1214px] px-8 text-center md:px-[47px] lg:mt-20">
      <div className="rounded-xl bg-white p-8">
        <h2 className="mb-4 mt-4 text-xl font-medium leading-[28px] text-customDarkBlue">
          Buy now, pay later
        </h2>
        <p className="text-customGray">
          Book your flights today and spread the cost over time with one of our
          instalment options.
        </p>
        <button className="mt-6 rounded-xl bg-customBlue px-5 py-4 text-sm text-white">
          Browse payment methods
        </button>
      </div>
    </div>
  );
};

export default Payment;
