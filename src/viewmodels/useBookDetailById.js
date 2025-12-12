import { getBookById } from "@/api/booksApi";
import { useEffect, useState } from "react";

export function useBookDetailById(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let isActive = true; // Prevent state update after unmount

    const load = async () => {
      try {
        setLoading(true);
        const result = await getBookById(id);

        if (isActive) {
          setData(result); // Store object → let UI decide array or object
        }
      } catch (err) {
        if (isActive) setError(err.message || "Failed to load book");
      } finally {
        if (isActive) setLoading(false);
      }
    };

    load();

    return () => {
      isActive = false;
    };
  }, [id]);

  return { data, loading, error };
}
