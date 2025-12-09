import { Text } from 'react-native';

export const RENDER_MAP = {
  contact: (item) => (
    <>
      <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
      {/* add more contact fields here */}
    </>
  ),

  Spritiual: (item) => (
    <>
      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      <Text>{item.author}</Text>
    </>
  ),
};
