import { TextPageView } from "@/components/TextPageView";
import { legalPages } from "@/content/pages";
import { pageMeta } from "@/lib/meta";

const page = legalPages.find((p) => p.slug === "algemene-voorwaarden")!;

export const metadata = pageMeta({ title: page.title, description: page.description, path: "/algemene-voorwaarden" });

export default function VoorwaardenPage() {
  return (
    <TextPageView page={page} crumbs={[{ name: page.name, path: "/algemene-voorwaarden" }]} cta={false} />
  );
}
