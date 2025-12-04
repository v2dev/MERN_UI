import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { fetchContacts } from "../app/src/api/api";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const res = await fetchContacts();
        console.log("Full response:", res);             // prints Axios response
        console.log("API data:", res.data);             // prints JSON body
        console.log("Contacts list:", res.data.data.lists); // ✅ print only list

        setContacts(res.data.data.lists);              // save only the list
      } catch (err) {
        console.log("Error fetching contacts:", err);
      }
    };

    getContacts();
  }, []);

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/contact/${item._id}`)}>
          <Text style={{ padding: 20, fontSize: 18 }}>
            {item.username}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

