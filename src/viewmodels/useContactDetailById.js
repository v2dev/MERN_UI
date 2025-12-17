import { getContactById } from "@/api/contactsApi";
import { useEffect, useState } from "react";

export function useContactDetailById(id) {
  const [detailedData, setDetailedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getContactById(id);
        // setDetailedData(response.contact);
        setDetailedData({
          ...response.contact,
          videos: [
            {
              id: "1",
              type: "remote",
              uri: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
              id: "2",
              type: "remote",
              uri: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
              id: "3",
              type: "remote",
              uri: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
            {
              id: "4",
              type: "remote",
              uri: "https://www.w3schools.com/html/mov_bbb.mp4",
            },
          ],
        });
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
