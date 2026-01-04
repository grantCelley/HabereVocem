import { MessageScreen } from '@/components/MessageScreen';
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MessageScreen />
    </View>
  );
}
