// src/viewmodels/useContactDetailViewModel.js
import { useEffect, useState } from "react";
import { Contact } from "../models/Contact";

// Mock source (replace with API / SQLite later)
const mockContact = new Contact({
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  image: "https://i.pravatar.cc/300",
  videos: [
    {
      id: "1",
      type: "remote",
      uri: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "2",
      type: "local",
      source: require("@/assets/sample.mp4"),
    },
  ],
});

export const useContactDetailViewModel = (id) => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadContact(id);
  }, [id]);

  const loadContact = async (contactId) => {
    try {
      setLoading(true);

      // 🔁 Replace later:
      // - SQLite
      // - REST API
      // - Local JSON
      setContact(mockContact);
    } catch (err) {
      setError("Failed to load contact");
    } finally {
      setLoading(false);
    }
  };

  return {
    contact,
    loading,
    error,
  };
};
