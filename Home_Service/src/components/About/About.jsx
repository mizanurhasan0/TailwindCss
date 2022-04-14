import React from "react";
import engineerBackground from "../../assets/Component Img/engineerbackground.jpg";
import headerImage from "../../assets/Component Img/header.jpg";

const About = () => {
  return (
    <div className="w-full h-screen flex ">
      <div
        className="w-full h-full flex text-gray-200 
        bg-cover bg-no-repeat bg-center object-fill
        "
        style={{ backgroundImage: `url(${engineerBackground})` }}
      >
        <div className="flex-[30%]"></div>
        <div className="flex-[70%] flex flex-col
         items-center px-10">
          <h1 className="text-4xl uppercase p-10 underline underline-offset-2">About Us</h1>
          <p className="w-[25rem] text-sm md:w-[32rem] xl:w-[35rem] xl:p-10 xl:tracking-[0.1em] xl:leading-8 bg-gray-800/70 p-5 rounded-xl shadow-2xl">
            Zen Home is 100% committed to cleaning your home in a way that
            supports your overall mood and health. That means using 100%
            all-natural cleaning products AND creating a Zen-like atmosphere.
            The kind you get when you stay at a 5-star hotel. We don’t just
            physically clean your home. We spiritually clean it as well, leaving
            good energy for you when you arrive home. We don’t just shove your
            things in the corner to clean. We organize them, with the labels
            forward so you can see them. We organize them according to height.
            We find your slippers and leave them right next to your bed, lined
            up together nicely. We diffuse essential oils and even leave an
            organic chocolate treat on your pillow. We do all the little things
            you only notice when they’re not done for you anymore. It’s the kind
            of cleaning only a home designer would think of. That’s what you get
            at Zen Home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
