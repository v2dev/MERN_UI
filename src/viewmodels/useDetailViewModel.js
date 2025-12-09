import { useEffect, useState } from "react";
import { getBooksByCategory } from "../api/booksApi";

export function useDetailViewModel(id, type, enabled = true) {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!enabled) return; // 🔥 Prevent API call when disabled

    async function fetchData() {
      try {
        console.log("Calling fetch data Type", type);
        console.log("Calling fetch data id", id);
        setLoading(true);
        // let response;
        // 🔥 Your API call here
        if(type === "Spritiual"){
          // Fetch spiritual data
          
          const response = await getBooksByCategory(id);
          // console.log("Calling fetch data response", response);
          const data = await response.data;
          setDetailedData(data);
          setLoading(false);
        }else if(type === "contact"){
          // Fetch contact data
          // console.log("Calling fetch data CONTACT response", response);
            const response = await getBooksByCategory(id);
            const data = await response.data;
            setDetailedData(data);
            setLoading(false);
        }

        // Fetch other types of data
        // const response = await fetch(`YOUR_API_URL/${id}`);
     
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, [id, type, enabled]);



  return { detailedData, loading, error };
}
