import React from "react";
// import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

const FullPage = ({ sections }) => {
  return (
    <ReactFullpage
      navigation
      scrollingSpeed={500}
      render={(comp) => (
        <ReactFullpage.Wrapper>
          {sections.map((section, key) => (
            <div className='section' key={key}>
              <div className='flex flex-col justify-center items-center py-4 w-full' children={section} />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPage;
