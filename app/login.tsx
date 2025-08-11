import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-6">
      <Text className="text-3xl font-bold mb-8 text-gray-900">Login</Text>

      <TextInput
        className="w-full bg-white rounded-md px-4 py-3 mb-4 text-gray-800 border border-gray-300"
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full bg-white rounded-md px-4 py-3 mb-6 text-gray-800 border border-gray-300"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="w-full bg-blue-600 rounded-md py-3"
        onPress={handleLogin}
      >
        <Text className="text-white text-center text-lg font-semibold">Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

