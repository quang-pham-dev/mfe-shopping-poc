import dynamic from "next/dynamic";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

const ProductsList = dynamic(
  () => import("products_app/Products").then((mod) => mod.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false
  }
);

export default function index() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar />
      <ProductsList />
      <Footer />
    </main>
  );
}
