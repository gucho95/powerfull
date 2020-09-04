import Link from "next/link";

const Internal = ({ href, target, children }) => (
  <Link href={href} as={href}>
    <a target={target} children={children} />
  </Link>
);

const External = ({ href, children }) => <a href={href} target='_blank' children={children} />;

export default {
  Internal,
  External,
};
