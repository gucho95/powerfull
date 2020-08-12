import React from "react";
// import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

export default function FullPage({ sections }) {
  return (
    <ReactFullpage
      navigation
      render={(comp) => (
        <ReactFullpage.Wrapper>
          {sections.map((section, key) => (
            <div className='section' key={key}>
              <div
                className='h-full pt-32  border-2 border-yellow-700 flex items-center  justify-center'
                children={section}
              />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
