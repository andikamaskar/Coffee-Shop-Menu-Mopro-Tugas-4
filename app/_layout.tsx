import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf")
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Coffee Menu",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#6F4E37"},
          headerTitleStyle: { fontFamily: "Poppins-Bold", fontSize: 25 },
        }}
      />
      <Stack.Screen
        name="[id]/index"
        options={{
          title: "Detail Coffee",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#6F4E37"},
          headerTitleStyle: { fontFamily: "Poppins-Bold", fontSize: 25 },
        }}
      />
    </Stack>
  );

}
