//import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//import { db } from "../firebase/config";
import Products from "../db/Products.json";
import Orders from "../db/Orders.json";

const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  const getDocument = async () => {
    /*const docRef = doc(db, collectionName, documentID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const obj = {
        id: documentID,
        ...docSnap.data(),
      };
      
    } else {
      toast.error("Document not found");
    }*/
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
