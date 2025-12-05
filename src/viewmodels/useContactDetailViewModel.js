import { useEffect, useState } from "react";
import { getContactById } from "../api/contactsApi";

export function useContactDetailViewModel(id) {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    loadContact();
  }, [id]);

  const loadContact = async () => {
    setLoading(true);
    const data = await getContactById(id);
    setContact(data.contact);
    setLoading(false);
  };

  return { contact, loading };
}
