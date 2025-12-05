import { useEffect, useState } from "react";
import { getContactsByCategory } from "../api/contactsApi";

export function useCategoryFirstLevelViewModel(categoryId) {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categoryId) {
      loadContacts(categoryId);
    }
  }, [categoryId]);

  const loadContacts = async (categoryId) => {
    try {
      setLoading(true);
      const data = await getContactsByCategory(categoryId);
      setDataList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // console.log("Data List:", dataList);
  return { dataList, loading, error };
}
