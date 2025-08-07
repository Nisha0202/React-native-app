import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TaskProps = {
  children: ReactNode;
};

const Task = ({ children }: TaskProps) => (
  <View className="flex-row justify-between items-center bg-[#f5eef6] rounded-xl px-4 py-4 my-2 border border-[#ccc]">
    {/* Left Icon */}
    <Icon name="check-box-outline-blank" size={24} color="#9f6fff" />

    {/* Center Text */}
    <View className="flex-1">
      <Text className="text-[#333] text-base ms-2">{children}</Text>
    </View>

    {/* Right Icon */}
    <Icon name="radio-button-unchecked" size={24} color="#9f6fff" />
  </View>
);

export default Task;

