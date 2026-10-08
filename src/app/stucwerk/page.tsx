import { ServiceTemplate } from "@/components/ServiceTemplate";
import { stucwerk } from "@/content/services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: stucwerk.title,
  description: stucwerk.description,
  path: stucwerk.path,
});

export default function StucwerkPage() {
  return <ServiceTemplate s={stucwerk} />;
}
