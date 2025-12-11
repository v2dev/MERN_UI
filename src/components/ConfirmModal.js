import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function ConfirmModal({
  visible,
  title = "Confirm",
  message = "Are you sure?",
  onConfirm,
  onCancel,
  loading = false,
  emoji = "⚠️",
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      {/* Dim Background */}
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        {/* Modal Card */}
        <View
          style={{
            width: "100%",
            backgroundColor: "#ffffffee",
            borderRadius: 18,
            padding: 24,
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 8,
          }}
        >
          {/* Emoji Icon */}
          <Text style={{ fontSize: 42, marginBottom: 10 }}>{emoji}</Text>

          {/* Title */}
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              textAlign: "center",
              marginBottom: 8,
              color: "#222",
            }}
          >
            {title}
          </Text>

          {/* Message */}
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginBottom: 25,
              color: "#444",
              lineHeight: 22,
            }}
          >
            {message}
          </Text>

          {/* Buttons Row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Cancel */}
            <TouchableOpacity
              disabled={loading}
              onPress={onCancel}
              style={{
                flex: 1,
                backgroundColor: "#f1f1f1",
                paddingVertical: 12,
                borderRadius: 10,
                marginRight: 10,
                borderWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "#444" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>

            {/* Delete */}
            <TouchableOpacity
              disabled={loading}
              onPress={onConfirm}
              style={{
                flex: 1,
                backgroundColor: "#ff3b30",
                paddingVertical: 12,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "white" }}
              >
                {loading ? "Deleting..." : "Delete"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
