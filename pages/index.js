import Header from "shared/header";
import FullPage from "shared/fullPage";
import Footer from "shared/footer";

import Products from "shared/sections/products";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <FullPage sections={[<Products />, <h1>22</h1>]} />
      <Footer />
    </div>
  );
}
