export default function Heading({ text, border = true }) {
  return (
    <div className={`text-center lg:pb-16 lg:pt-0 ${border ? "xs:pb-8 xs:pt-16" : "xs:pb-0"}  `}>
      <h2
        children={text}
        className={`'font-bold lg:text-3xl xs:text-2xl inline-block py-4 px-8 border-primary-light ${
          border ? "border-2" : ""
        }`}
      />
    </div>
  );
}
