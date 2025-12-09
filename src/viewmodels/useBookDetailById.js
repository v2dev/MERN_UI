import { useEffect, useState } from "react";
import { getBookById } from "../api/booksApi";

export function useBookDetailById(id) {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const result = await getBookById(id);
      setDetailedData([result]);   // 🔥 wrap in array
      setLoading(false);
    }
    load();
  }, [id]);

  return { detailedData, loading };
}

