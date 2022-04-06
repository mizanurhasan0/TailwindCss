import React from 'react';

const Accordion_Horizon = () => {
    return (
        <div className="h-96 w-full bg-gray-500 pt-2">
          <div className="w-full flex ">
            {/* Frist One */}
            <div className="accordon bg-[#529990] flex-auto">
              <input
                type="radio"
                className="accordon__input hidden"
                name="example_accordion"
                id="section1"
              />
              <label
                htmlFor="section1"
                className="accordon__label relative text-white block 
            hover:bg-[#407770] cursor-pointer p-5
            shadow-xl"
              >
                Section #1
              </label>
              <div className="accordon__content p-5 bg-white hidden">
                <p>
                  The COST Executive Board has decided to extend our Action until
                  September 30, 2021. This means that we until then can continue our
                  collaboration supported by the COST organizational structure. We
                  have funding for one postponed in-person meeting to be held
                  probably in late July. The Grant is for a joint Management
                  Committee / Working Group / Core Group meetings, and Final
                  dissemination webinar. I’m sure this will help finalize our aims
                  and boost for continued cooperation in the future.
                </p>
              </div>
            </div>
               {/* ENd One */}
                  {/* Second One */}
            <div className="accordon bg-[#529990] flex-auto">
              <input
                type="radio"
                className="accordon__input hidden"
                name="example_accordion"
                id="section2"
              />
              <label
                htmlFor="section2"
                className="accordon__label relative text-white block 
            hover:bg-[#407770] cursor-pointer p-5
            shadow-xl"
              >
                Section #2
              </label>
              <div className="accordon__content p-5 bg-white hidden">
                <p>
                  The COST Executive Board has decided to extend our Action until
                  September 30, 2021. This means that we until then can continue our
                  collaboration supported by the COST organizational structure. We
                  have funding for one postponed in-person meeting to be held
                  probably in late July. The Grant is for a joint Management
                  Committee / Working Group / Core Group meetings, and Final
                  dissemination webinar. I’m sure this will help finalize our aims
                  and boost for continued cooperation in the future.
                </p>
              </div>
            </div>
               {/* second One */}
                  {/* third One */}
            <div className="accordon bg-[#529990] flex-auto">
              <input
                type="radio"
                className="accordon__input hidden"
                name="example_accordion"
                id="section3"
              />
              <label
                htmlFor="section3"
                className="accordon__label relative text-white block 
            hover:bg-[#407770] cursor-pointer p-5
            shadow-xl"
              >
                Section #3
              </label>
              <div className="accordon__content p-5 bg-white hidden">
                <p>
                  The COST Executive Board has decided to extend our Action until
                  September 30, 2021. This means that we until then can continue our
                  collaboration supported by the COST organizational structure. We
                  have funding for one postponed in-person meeting to be held
                  probably in late July. The Grant is for a joint Management
                  Committee / Working Group / Core Group meetings, and Final
                  dissemination webinar. I’m sure this will help finalize our aims
                  and boost for continued cooperation in the future.
                </p>
              </div>
            </div>
               {/* Third One */}
          </div>
        </div>
      );
    };
export default Accordion_Horizon;
