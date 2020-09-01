import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { useBreakpoints } from "hooks/useBreakpoints";

const FullPage = ({ sections }) => {
  const { desktopMode } = useBreakpoints();

  return desktopMode ? (
    <ReactFullpage
      navigation={true}
      scrollingSpeed={500}
      render={(comp) => (
        <ReactFullpage.Wrapper>
          {sections.map((section, key) => (
            <div className='section' key={key}>
              <div
                className='container flex flex-col justify-center items-center py-4 w-full h-full a'
                children={section}
              />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  ) : (
    <div className='pt-32 px-2'>
      {sections.map((section, key) => (
        <div className='w-full a' children={section} key={key} />
      ))}
    </div>
  );
};

export default FullPage;
