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
import {
  createContact,
  editContact,
  getContactById,
} from "../../../src/api/contactsApi";
import DynamicForm from "../../../src/components/DynamicForm";
import { FORM_SCHEMA } from "../../../src/config/formSchema";

export default function ItemScreen() {
  console.log("ItemScreen Called");
  const { id, type } = useLocalSearchParams();

  console.log("ItemScreen :: id => ", id);
  console.log("ItemScreen :: type => ", type);

  let type1 = "book";
  const normalizedType = type1?.toLowerCase();
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
        if (type1 === "book") data = await getBookById(id);
        if (type1 === "contact") data = await getContactById(id);

        setForm(data.book || data.contact);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id, type1]);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (isEdit) {
        console.log("Category updatedr");
        form.category = "69324f33a04c9da3fad45a37";
        if (type1 === "book") await editBook(id, form);
        if (type1 === "contact") await editContact(id, form);
      } else {
        form.category = "69324f33a04c9da3fad45a37";
        if (type1 === "book") await createBook(form);
        if (type1 === "contact") await createContact(form);
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
        {isEdit ? `Edit ${type1}` : `Add ${type1}`}
      </Text>

      <DynamicForm fields={fields} form={form} onChange={updateField} />

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
