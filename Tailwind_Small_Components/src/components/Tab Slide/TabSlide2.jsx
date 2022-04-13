import React from "react";
import { ImHome, ImBlogger } from "react-icons/im";
import { MdPerson, MdEmail, MdOutlineCode } from "react-icons/md";
import "./tabslide2.css";

const TabSlide2 = () => {
  return (
    <div className="container w-full h-96 bg-pink-200 mt-5 relative p-0">
      <div className="w-full h-auto bg-white top-5 absolute p-0">
        <input type="radio" name="slider" id="home" defaultChecked/>
        <input type="radio" name="slider" id="blog" />
        <input type="radio" name="slider" id="person" />
        <input type="radio" name="slider" id="email" />
        <input type="radio" name="slider" id="code" />
        <nav className="flex h-full space-x-10 text-xl relative">
          <label htmlFor="home" className="home">
            <ImHome />
            Home
          </label>
          <label htmlFor="blog" className="blog">
            <ImBlogger />
            Blog
          </label>
          <label htmlFor="person" className="person">
            <MdPerson />
            Person
          </label>
          <label htmlFor="email" className="email">
            <MdEmail />
            Email
          </label>
          <label htmlFor="code" className="code">
            <MdOutlineCode />
            Code
          </label>
          <div
            className="activeBar absolute w-[10%] h-full bg-green-600 
          -left-6 z-0 rounded-sm transition-all duration-1000 ease-out"
          ></div>
        </nav>
        <section className="absolute">
          <div className="content content-1">
            <div className="title">This is home</div>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="content content-2">
            <div className="title">This is Blog</div>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="content content-3">
            <div className="title">This is Person</div>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="content content-4">
            <div className="title">This is Email</div>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="content content-5">
            <div className="title">This is Code</div>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TabSlide2;
