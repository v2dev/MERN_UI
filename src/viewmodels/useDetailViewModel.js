import { useEffect, useState } from "react";
import { getBooksByCategory } from "../api/booksApi";

export function useDetailViewModel(id, type, enabled = true) {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  async function fetchData() {
      try {
        setLoading(true);
        if(type === "Books"){
          const response = await getBooksByCategory(id);
          const data = await response.data;
          setDetailedData(data);
          setLoading(false);
        }else if(type === "contact"){
          // Fetch contact data
            const response = await getBooksByCategory(id);
            const data = await response.data;
            setDetailedData(data);
            setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
  }
  
  useEffect(() => {
    fetchData();
  }, [id, type]);

  return { detailedData, loading, error, reload: fetchData };
}
