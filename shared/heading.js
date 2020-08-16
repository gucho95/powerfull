export default function Heading({ text, border = true }) {
  return (
    <div className='text-center pb-16'>
      <h2
        children={text}
        className={`'font-bold text-3xl inline-block py-4 px-8 border-primary-light  ${border ? "border-2" : ""}`}
      />
    </div>
  );
}
