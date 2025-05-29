import AuthMessage from "@/components/auth-message";
import { CollapsibleHeaderLayout } from "@/components/collapsible-header-layout";
import Content from "@/components/content";
import FloatingAction from "@/components/floating-action";
import News from "@/components/news";
import BlurProvider from "@/providers/blur-provider";
import { SafeArea } from "@/providers/safe-area";
import { ScrollProvider } from "@/providers/scroll-provider";

export default function Index() {
  return (
    <BlurProvider>
      <ScrollProvider>
        <SafeArea>
          <CollapsibleHeaderLayout>
            <AuthMessage />
            <News />
            <Content />
          </CollapsibleHeaderLayout>
          <FloatingAction />
        </SafeArea>
      </ScrollProvider>
    </BlurProvider>
  );
}
