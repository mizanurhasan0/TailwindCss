import React from "react";
import { ImHome, ImBlogger } from "react-icons/im";
import { MdPerson, MdEmail, MdOutlineCode } from "react-icons/md";
import "./TabSlider.css";

const TabSlider = () => {
  return (
    <div className="w-full container h-96 bg-cyan-600 mt-5 relative">
      <div className="wrapper ">
        <header>Pure Css Tabs</header>
        <input type="radio" name="slider" id="home" checked/>
        <input type="radio" name="slider" id="code" />
        <input type="radio" name="slider" id="help" />
        <input type="radio" name="slider" id="about" />
        <input type="radio" name="slider" id="blog" />
        <nav>
          <label className="home" htmlFor="home">
            <ImHome />
            Home
          </label>
          <label className="code" htmlFor="code">
            <MdOutlineCode />
            Code
          </label>
          <label className="help" htmlFor="help">
            <MdEmail />
            Help
          </label>
          <label className="about" htmlFor="about">
            <MdPerson />
            About
          </label>
          <label className="blog" htmlFor="blog">
            <ImBlogger />
            Blog
          </label>
          <div className="slider"></div>
        </nav>
        <section>
          <div className="content content-1">
            <div className="title">This is a Home content-1</div>
            <p>
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
          {/*  */}
          <div className="content content-2">
            <div className="title">This is a Code content-2</div>
            <p>
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
          {/*  */}
          <div className="content content-3">
            <div className="title">This is a Help content-3</div>
            <p>
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
          {/*  */}
          <div className="content content-4">
            <div className="title">This is a About content-4</div>
            <p>
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
          {/*  */}
          <div className="content content-5">
            <div className="title">This is a Blog content-5</div>
            <p>
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

export default TabSlider;
