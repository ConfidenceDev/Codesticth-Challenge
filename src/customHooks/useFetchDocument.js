import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Products from "../db/Products.json";
import Orders from "../db/Orders.json";

const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  const getDocument = async () => {
    const selectedDoc = collectionName === "orders" ? Orders : Products;
    const item = findItemById(selectedDoc, documentID);
    if (item !== null) {
      setDocument(item);
    } else {
      toast.error("Document not found");
    }
  };

  function findItemById(data, itemId) {
    for (const item of data) {
      if (item.id === parseInt(itemId)) {
        return item;
      }
    }
    return null;
  }

  useEffect(() => {
    getDocument();
  }, []);

  return { document };
};

export default useFetchDocument;
