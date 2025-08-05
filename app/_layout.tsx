import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
<Stack.Screen name="index" options={{title: "Home", headerTitleAlign: "center" }}/>
<Stack.Screen name="login" options={{title: "Login", headerTitleAlign: "center" }}/>
    </Stack>
  )
   ;
}
