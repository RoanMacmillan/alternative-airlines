import React from "react";
import affirm from "../assets/images/logos/affirm.png";
import afterpay from "../assets/images/logos/afterpay.png";
import klarna from "../assets/images/logos/klarna.png";
import laybuy from "../assets/images/logos/laybuy.png";
import mobileImage from "../assets/images/bnpl-mobile.png";
import tick from "../assets/icons/tick.svg";

const Payment = () => {
  return (
    <div className=" mx-auto mt-10 max-w-[1214px]  px-8 text-center md:px-[47px] md:text-left lg:mt-20">
      <div className=" group relative overflow-hidden rounded-xl bg-white p-8 md:p-0">
        <div className="md:w-[475px] md:p-14 lg:w-[560px]">
          <h2 className="mb-4 text-xl font-medium leading-[28px] text-customDarkBlue">
            Buy now, pay later
          </h2>
          <p className="mb-6 text-customGray">
            Book your flights today and spread the cost over time with one of
            our instalment options.
          </p>
          <div className="mt-10 hidden flex-col gap-4 text-customGray md:flex">
            <div className="flex items-center gap-2">
              <div className="hidden h-[22px] w-[22px] items-center justify-center rounded-full bg-customGreen md:flex">
                <img src={tick} alt="Tick Icon" />
              </div>
              <p>Make payments weekly or monthly</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-[22px] w-[22px] items-center justify-center rounded-full bg-customGreen md:flex">
                <img src={tick} alt="Tick Icon" />
              </div>

              <p>Interest free options</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden h-[22px] w-[22px] items-center justify-center rounded-full bg-customGreen md:flex">
                <img src={tick} alt="Tick Icon" />
              </div>

              <p>Fast approval</p>
            </div>
          </div>

          <div className=" mx-auto flex w-full items-center justify-center gap-12 md:hidden">
            <img className="ml-5 w-14" src={klarna} />
            <img className="mt-6 w-12" src={laybuy} />
            <img className="mb-8 w-10" src={affirm} />
            <img className="w-14" src={afterpay} />
          </div>

          <button className="mt-6 rounded-xl bg-customBlue px-5 py-4 text-sm text-white md:mt-10">
            Browse payment methods
          </button>
        </div>

        <div className="absolute right-[61px] top-[182px] hidden w-[196px] md:block lg:right-[90px] lg:top-[56px] lg:w-[294px] customLg:right-[132px]">
          <img
            className="ease relative z-10 transition duration-500 group-hover:translate-y-[10px] group-hover:scale-105"
            src={mobileImage}
            alt="Mobile Image"
          />

          <img
            className="absolute left-[-68px] top-[190px] ml-5 w-14 transition duration-500 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] lg:left-[-65px] lg:top-[288px] "
            src={klarna}
          />
          <img
            className="absolute left-[15px] top-[-66px] mt-6 w-12 transition duration-500 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] lg:left-[-95px] lg:top-[208px]"
            src={laybuy}
          />
          <img
            className="absolute right-[10px] top-[-63px] mb-8 w-10 transition duration-500 group-hover:translate-x-[10px] group-hover:translate-y-[-10px] lg:right-[-65px] lg:top-[198px]"
            src={affirm}
          />
          <img
            className="absolute right-[-40px] top-[60px] w-14 transition duration-500 group-hover:translate-x-[10px] group-hover:translate-y-[-10px]"
            src={afterpay}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
