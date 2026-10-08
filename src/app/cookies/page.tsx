import { TextPageView } from "@/components/TextPageView";
import { legalPages } from "@/content/pages";
import { pageMeta } from "@/lib/meta";

const page = legalPages.find((p) => p.slug === "cookies")!;

export const metadata = pageMeta({ title: page.title, description: page.description, path: "/cookies" });

export default function CookiesPage() {
  return <TextPageView page={page} crumbs={[{ name: page.name, path: "/cookies" }]} cta={false} />;
}
