import { View, Text, TextInput } from "react-native";

export default function DynamicForm({ fields, form, onChange }) {
  return (
    <View>
      {fields.map((field) => (
        <View key={field.name} style={{ marginBottom: 15 }}>
          <Text style={{ marginBottom: 5, fontWeight: "600" }}>
            {field.label}
          </Text>

          <TextInput
            value={form[field.name]}
            onChangeText={(t) => onChange(field.name, t)}
            keyboardType={field.keyboardType || "default"}
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 12,
            }}
          />
        </View>
      ))}
    </View>
  );
}
