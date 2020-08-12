export const ImageLink = ({ href, src }) => (
  <a href={href} target='_blank'>
    <img src={src} alt='' className='w-16 xs:w-12 mx-2' />
  </a>
);
