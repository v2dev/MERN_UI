import { getContactById } from "@/api/contactsApi";
import { useEffect, useState } from "react";

export function useContactDetailById(id) {
  const [detailedData, setDetailedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getContactById(id);
        setDetailedData(response.contact);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { detailedData, loading };
}
