import React from "react";
import { Link } from "react-router-dom";
const HomeBg = () => {
  return (
    <div className="bg shadow-transparent">
      <section className="sec1"></section>
      <section className="sec2 bg-fuchsia-50">
        <h2 className=" text-[2rem] mt-8 ml-6">
          We committed to give you the best
          <br /> and world class interior decoration.
        </h2>
        <span className=" text-xl ml-6 ">
          <i>We have new arrival in stock for your home delivery</i>
        </span>
        <Link to="CustomerPage">
          <button className=" mt-20 ml-12 p-4 text-lg bg-amber-700 text-white">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HomeBg;
