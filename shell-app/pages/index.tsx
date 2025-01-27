import dynamic from "next/dynamic";
import Header from "@/components/Header";


const ProductsList = dynamic(
  () => import("products_app/Products").then((mod) => mod.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false
  }
);

const FooterApp = dynamic(
  () => import("footer_app/Footer").then((mod) => mod.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false
  }
);

export default function index() {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <Header />
      <div className="flex-grow">
        <ProductsList />
      </div>
      <FooterApp />
    </main>
  );
}
