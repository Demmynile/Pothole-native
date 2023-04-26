import { useRouter } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { SplashScreen } from "expo-router";

export default function Page() {
  const [step, setStep] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    setTimeout(async () => {
      setStep(true);
      router.push("/welcome");
    }, 500);
  }, []);

  return <>{!step && <SplashScreen />}</>;
}
