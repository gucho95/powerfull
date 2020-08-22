import { withTranslation } from "../../i18n";
import Heading from "shared/heading";
import { Fragment } from "react";

const Section1 = ({ t, i18n }) => {
  return (
    <Fragment>
      <div className='slide' data-anchor='slide1'>
        Two 1
      </div>
      <div className='slide' data-anchor='slide2'>
        Two 2
      </div>
    </Fragment>
  );
};

export default withTranslation("sections")(Section1);
