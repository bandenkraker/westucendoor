import { TextPageView } from "@/components/TextPageView";
import { legalPages } from "@/content/pages";
import { pageMeta } from "@/lib/meta";

const page = legalPages.find((p) => p.slug === "privacy")!;

export const metadata = pageMeta({ title: page.title, description: page.description, path: "/privacy" });

export default function PrivacyPage() {
  return <TextPageView page={page} crumbs={[{ name: page.name, path: "/privacy" }]} cta={false} />;
}
