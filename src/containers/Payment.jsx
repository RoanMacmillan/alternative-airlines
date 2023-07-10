import React from "react";

const Payment = () => {
  return (
    <div className="px-8 text-center mb-10">
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-customDarkBlue text-xl leading-[28px] font-medium mt-4 mb-4">Buy now, pay later</h2>
        <p className="text-customGray">
          Book your flights today and spread the cost over time with one of our
          instalment options.
        </p>
        <button className="bg-customBlue text-white text-sm rounded-xl px-5 py-4 mt-6">Browse payment methods</button>
      </div>
    </div>
  );
};

export default Payment;
