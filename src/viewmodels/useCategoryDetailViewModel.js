import { getItemsByCategory } from "@/api/commonApi.js";
import { useCallback, useEffect, useState } from "react";

export function useCategoryDetailViewModel(id, type, enabled = true) {
  const [detailedData, setDetailedData] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);
    try {
      const response = await getItemsByCategory(id);
      setDetailedData(response.data || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [id, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData, type]); // type added only to re-run when type changes

  return { detailedData, loading, error, reload: fetchData };
}
