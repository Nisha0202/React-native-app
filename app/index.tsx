import { View, Text } from "react-native";
import Task from "../components/Task";

export default function Index() {
  return (
    <View className="flex-1 bg-violet-100 p-4 max-w-screen-lg mx-auto w-full">
      {/* Today's Task */}
      <View className="">
        <Text className="text-2xl py-3 font-bold text-[#02040f]">Today's tasks</Text>
        <View>
          <Task>hello</Task>
          <Task>hellogyyyyuuuuuuuuuuyuuu</Task>
        </View>
      </View>
    </View>
  );
}
