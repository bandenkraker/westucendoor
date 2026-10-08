import { notFound } from "next/navigation";
import { ServiceTemplate } from "@/components/ServiceTemplate";
import { expertiseServices, getService } from "@/content/services";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return expertiseServices.map((s) => ({
    slug: s.path.replace("/expertises/", "").split("/"),
  }));
}

const lookup = async (params: Promise<{ slug: string[] }>) => {
  const { slug } = await params;
  return getService(`/expertises/${slug.join("/")}`);
};

export async function generateMetadata({
  params,
}: PageProps<"/expertises/[...slug]">) {
  const s = await lookup(params);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: s.path });
}

export default async function ExpertisePage({
  params,
}: PageProps<"/expertises/[...slug]">) {
  const s = await lookup(params);
  if (!s) notFound();
  return <ServiceTemplate s={s} />;
}
