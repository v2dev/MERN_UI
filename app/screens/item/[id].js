import { createBook, editBook, getBookById } from "@/api/booksApi";
import { createItem } from "@/api/commonApi";
import { editContact, getContactById } from "@/api/contactsApi.js";
import DynamicForm from "@/components/DynamicForm";
import { FORM_SCHEMA } from "@/config/formSchema";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ItemScreen() {
  const { id, type } = useLocalSearchParams();

  const normalizedType = type?.toLowerCase();
  const fields = FORM_SCHEMA[normalizedType];

  const router = useRouter();

  // Differeentiate between edit and add mode
  const isEdit = id !== "new";

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);

  // Update form fields
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

  const handleSaveOrAdd = async () => {
    setSaving(true);
    try {
      //Todo: set dynamic category for book and contact
      if (type === "book") form.category = "69324f33a04c9da3fad45a37";
      if (type === "contact") form.category = "69317c83043ba99b4046f7b9";

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
        onPress={handleSaveOrAdd}
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
