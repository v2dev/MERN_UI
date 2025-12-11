import { Text, TextInput, View } from "react-native";

export default function DynamicForm({
  fields = [],
  form = {},
  onChange,
  exclude = [],
}) {
  const visibleFields = fields.filter((field) => !exclude.includes(field.name));
  return (
    <View>
      {visibleFields.map((field) => (
        <View key={field.name} style={{ marginBottom: 15 }}>
          <Text style={{ marginBottom: 5, fontWeight: "600" }}>
            {field.label}
          </Text>

          <TextInput
            value={form[field.name]}
            onChangeText={(value) => onChange(field.name, value)}
            placeholder={`Enter ${field.label}`}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 8,
            }}
          />
        </View>
      ))}
    </View>
  );
}
