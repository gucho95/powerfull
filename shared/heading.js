export default function Heading({ text, border = true }) {
  return (
    <div
      className={`text-center ${
        border
          ? "lg:text-3xl xs:text-2xl font-bold pb-24 lg:pt-0 h-md:pb-12 h-sm:pb-6 xs:pb-12 xs:pt-6"
          : "lg:text-2xl xs:text-lg pt-16 h-md:pt-8 h-sm:pt-4"
      }  `}
    >
      <h2
        children={text}
        className={`'font-bold inline-block py-2 px-8 border-primary-light ${border ? "border-2" : ""}`}
      />
    </div>
  );
}
