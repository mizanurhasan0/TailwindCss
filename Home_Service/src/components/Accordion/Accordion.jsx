import React from "react";
import "./accordion.css";

const Accordion = () => {
  return (
    <div className="w-full container h-96 mb-10">
      <div className="accordion">
        <input
          type="radio"
          name="example_accordion"
          id="section1"
          className="accordion__input"
        />
        <label htmlFor="section1" className="accordion__label">
          Section #1
        </label>
        <div className="accordion__content">
          <p>
            The COST Executive Board has decided to extend our Action until
            September 30, 2021. This means that we until then can continue our
            collaboration supported by the COST organizational structure. We
            have funding htmlFor one postponed in-person meeting to be held probably
            in late July. The Grant is htmlFor a joint Management Committee /
            Working Group / Core Group meetings, and Final dissemination
            webinar. I’m sure this will help finalize our aims and boost htmlFor
            continued cooperation in the future.
          </p>
        </div>
      </div>
      {/* END */}
      {/* 2nd  */}
      <div className="accordion">
        <input
          type="radio"
          name="example_accordion"
          id="section2"
          className="accordion__input"
        />
        <label htmlFor="section2" className="accordion__label">
          Section #2
        </label>
        <div className="accordion__content">
          <p>
            The COST Executive Board has decided to extend our Action until
            September 30, 2021. This means that we until then can continue our
            collaboration supported by the COST organizational structure. We
            have funding htmlFor one postponed in-person meeting to be held probably
            in late July. The Grant is htmlFor a joint Management Committee /
            Working Group / Core Group meetings, and Final dissemination
            webinar. I’m sure this will help finalize our aims and boost htmlFor
            continued cooperation in the future.
          </p>
        </div>
      </div>
      {/* End */}
      {/* 2nd  */}
      <div className="accordion">
        <input
          type="radio"
          name="example_accordion"
          id="section3"
          className="accordion__input"
        />
        <label htmlFor="section3" className="accordion__label">
          Section #3
        </label>
        <div className="accordion__content">
          <p>
            The COST Executive Board has decided to extend our Action until
            September 30, 2021. This means that we until then can continue our
            collaboration supported by the COST organizational structure. We
            have funding htmlFor one postponed in-person meeting to be held probably
            in late July. The Grant is htmlFor a joint Management Committee /
            Working Group / Core Group meetings, and Final dissemination
            webinar. I’m sure this will help finalize our aims and boost htmlFor
            continued cooperation in the future.
          </p>
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default Accordion;
