import UnderConstruction from "@/components/under-construction";
import BlurProvider from "@/providers/blur-provider";
import { SafeArea } from "@/providers/safe-area";

export default function Four() {
  return (
    <BlurProvider>
      <SafeArea>
        <UnderConstruction />
      </SafeArea>
    </BlurProvider>
  );
}
