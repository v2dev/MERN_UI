import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createBook, editBook, getBookById } from "../../../src/api/booksApi";
import { createItem } from "../../../src/api/commonApi";
import { editContact, getContactById } from "../../../src/api/contactsApi.js";
import DynamicForm from "../../../src/components/DynamicForm";
import { FORM_SCHEMA } from "../../../src/config/formSchema";

export default function ItemScreen() {
  console.log("ItemScreen Called");
  const { id, type } = useLocalSearchParams();

  console.log("ItemScreen :: id => ", id);
  console.log("ItemScreen :: type => ", type);

  const normalizedType = type?.toLowerCase();
  const fields = FORM_SCHEMA[normalizedType];

  const router = useRouter();

  const isEdit = id !== "new"; // <---- key difference

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    async function load() {
      if (!isEdit) {
        const empty = {};
        fields.forEach((f) => (empty[f.name] = ""));
        setForm(empty);
        return;
      }

      try {
        let data;
        if (type === "book") data = await getBookById(id);
        if (type === "contact") data = await getContactById(id);

        setForm(data.book || data.contact);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id, type]);

  const handleSave = async () => {
    setSaving(true);
    console.log("TYPE ==> ", type);
    try {
      if (type === "book") form.category = "69324f33a04c9da3fad45a37";
      if (type === "contact") form.category = "69317c83043ba99b4046f7b9";

      console.log("FORM DATA TO SAVE ==> ", form);
      console.log("IS EDIT ==> ", isEdit);
      console.log("editing contact");

      if (isEdit) {
        if (type === "book") await editBook(id, form);
        if (type === "contact") await editContact(id, form);
      } else {
        if (type === "book") await createBook(form);
        if (type === "contact") await createItem(form, type + "s");
      }

      router.back();
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        {isEdit ? `Edit ${type}` : `Add ${type}`}
      </Text>

      <DynamicForm
        fields={fields}
        form={form}
        onChange={updateField}
        exclude={["genre"]}
      />

      <TouchableOpacity
        onPress={handleSave}
        disabled={saving}
        style={{
          backgroundColor: "green",
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        {saving ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            {isEdit ? "Save Changes" : "Add Item"}
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
