import { Stack } from "expo-router";
import "../global.css"
export default function RootLayout() {
  return (
    <Stack>
<Stack.Screen name="index" options={{title: "Home", headerTitleAlign: "center", headerShown: false  }}/>
<Stack.Screen name="login" options={{title: "Login", headerTitleAlign: "center", headerShown: false }}/>
    </Stack>
  )
   ;
}
