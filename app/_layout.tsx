import { Stack } from "expo-router";

const Homelayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="signup"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="verification"
        options={{ presentation: "modal", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen name="home" options={{ headerShown: false }} />

      <Stack.Screen
        name="finishSignup"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
};

export default Homelayout;
