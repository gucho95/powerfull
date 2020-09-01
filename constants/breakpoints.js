const breakpoints = { xs: "0px", sm: "640px", md: "768px", "lg-sm": "865px", lg: "1024px", xl: "1200px", };

const formatBreakpoints = (screens) => {
  let breakpointsNum = {};
  for (const i in breakpoints) {
    const breakpoint = breakpoints[i];
    const breakpointValue = breakpoint.substring(0, breakpoint.length - 2);
    breakpointsNum[i] = Number(breakpointValue);
  }
  return breakpointsNum;
};

module.exports = {
  px: breakpoints,
  number: formatBreakpoints(),
};
