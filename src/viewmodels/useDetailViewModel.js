import { useEffect, useState } from "react";
import { getContactById } from "../api/contactsApi";

export function useDetailViewModel(id) {
  const [detailedData, setDetailedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    loadDetailedData();
  }, [id]);

  const loadDetailedData = async () => {
    setLoading(true);
    const data = await getContactById(id);
    setDetailedData(data.contact);
    setLoading(false);
  };

  return { detailedData, loading };
}
