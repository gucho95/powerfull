const hamburger = (
  <svg className='fill-current h-5 w-5' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
);

const close = (
  <svg className='fill-current h-5 w-5' viewBox='0 0 20 20' fill='currentColor' className='x w-6 h-6'>
    <path
      fillRule='evenodd'
      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
      clipRule='evenodd'
    ></path>
  </svg>
);

export default {
  hamburger,
  close,
};
