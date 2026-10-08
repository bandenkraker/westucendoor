import { notFound } from "next/navigation";
import { TextPageView } from "@/components/TextPageView";
import { aboutPages } from "@/content/pages";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return aboutPages.map((p) => ({ slug: p.slug }));
}

const find = async (params: Promise<{ slug: string }>) => {
  const { slug } = await params;
  return aboutPages.find((p) => p.slug === slug);
};

export async function generateMetadata({ params }: PageProps<"/over-ons/[slug]">) {
  const p = await find(params);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.description, path: `/over-ons/${p.slug}` });
}

export default async function AboutSubPage({ params }: PageProps<"/over-ons/[slug]">) {
  const p = await find(params);
  if (!p) notFound();
  return (
    <TextPageView
      page={p}
      crumbs={[
        { name: "Over ons", path: "/over-ons" },
        { name: p.name, path: `/over-ons/${p.slug}` },
      ]}
    />
  );
}
