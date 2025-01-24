import { useState, useEffect } from "react";
import { Product } from "@/types";

export const useProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getData() {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
    } catch (error) {
      setError("Error fetching products");
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, error };
};
