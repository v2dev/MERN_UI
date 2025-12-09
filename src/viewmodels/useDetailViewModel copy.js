import { useEffect, useState } from "react";
import { getBooksByCategory } from "../api/booksApi";

export function useDetailViewModel(id, enable = true) {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("useDetailViewModel :: useDetail_ViewModel - ID:", id);

  useEffect(() => {
    if (!id) return;
    loadDetailedData();
  }, [id]);

  const loadDetailedData = async () => {
    try {
      setLoading(true);

      // console.log("Loading books for category ID:", id);

      const response = await getBooksByCategory(id);

      // console.log("Books Data Retrieved:", response);

      // Extract array from response
      setDetailedData(response.data);    // <-- use .data (array)
    } catch (err) {
      console.log("Error loading books:", err);
    } finally {
      setLoading(false);
    }
  };

  return { detailedData, loading };
}
