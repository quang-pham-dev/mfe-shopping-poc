import dynamic from "next/dynamic";
import { Suspense } from "react";

import Header from "@/components/Header";

const ProductsList = dynamic(
  () => import("products_app/Products").then((mod) => mod.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false
  }
);

const FooterApp = dynamic(
  () =>
    import("footer_app/Footer").then((module) => {
      console.log("Footer module loaded:", module);
      return module.default;
    }),
  {
    ssr: false,
    loading: () => <div>Loading Footer...</div>
  }
);

export default function index() {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <div className="flex-grow">
        <ProductsList />
      </div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <FooterApp />
      </Suspense>
    </main>
  );
}
