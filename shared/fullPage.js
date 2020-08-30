import React, { Fragment } from "react";
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
              <div className='flex flex-col justify-center items-center py-4 w-full' children={section} />
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  ) : (
    <div className='pt-12'>
      {sections.map((section, key) => (
        <div className='lg:py-4 xs:py-0 w-full' children={section} key={key} />
      ))}
    </div>
  );
};

export default FullPage;
