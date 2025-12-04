import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { fetchContactsById } from "../src/api/api";

export default function ContactDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [contact, setContact] = useState(null);

  useEffect(() => {
   fetchContactsById(id)
      .then(res => {
        console.log("FULL RES:", res.data.data);
        setContact(res.data.data.contact);
      })
     .catch(err => {
        console.log("Error fetching contact by ID:", err);
      });
  }, []);

  if (!contact) return null;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>
        Name: {contact.username}
      </Text>

      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
