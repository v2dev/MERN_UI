import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { deleteItem } from "../../src/api/commonApi";
import ConfirmModal from "../../src/components/ConfirmModal";

export default function DeleteItemScreen() {
  const { id, type } = useLocalSearchParams();
  const router = useRouter();

  const [visible, setVisible] = useState(true);

  const handleDelete = async () => {
    try {
      await deleteItem(id, type + "s");
      router.back();
    } catch (err) {
      console.error(err);
      alert("Delete failed. Please try again.");
    } finally {
    }
  };

  const closeModal = () => {
    setVisible(false);
    router.back();
  };

  return (
    <View style={{ flex: 1 }}>
      <ConfirmModal
        visible={visible}
        title="Delete Item"
        message={`Are you sure you want to delete this ${type}?`}
        onCancel={closeModal}
        onConfirm={handleDelete}
        emoji="🗑️"
      />
    </View>
  );
}
