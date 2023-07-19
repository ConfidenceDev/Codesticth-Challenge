import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Products from "../db/Products.json";
import Orders from "../db/Orders.json";
import Reviews from "../db/Reviews.json";

//Fetch all items in a collection or db
const useFetchCollection = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = () => {
    setIsLoading(true);
    try {
      const selectedCol =
        collectionName === "orders"
          ? Orders
          : collectionName === "products"
          ? Products
          : Reviews;
      setData(selectedCol);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return { data, isLoading };
};

export default useFetchCollection;
