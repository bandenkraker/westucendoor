import type { Article } from "./types";
import { vochtigeMuren } from "./articles/vochtige-muren";
import { sausklaar } from "./articles/sausklaar";
import { drogen } from "./articles/drogen";
import { schimmel } from "./articles/schimmel";
import { zoutEnWind } from "./articles/zout-en-wind";
import { dakkapel } from "./articles/dakkapel";
import { badkamerKosten } from "./articles/badkamer-kosten";
import { scheuren } from "./articles/scheuren";
import { buitengevelisolatie } from "./articles/buitengevelisolatie";
import { kitwerk } from "./articles/kitwerk";

export const articles: Article[] = [
  kitwerk,
  buitengevelisolatie,
  scheuren,
  badkamerKosten,
  dakkapel,
  zoutEnWind,
  schimmel,
  drogen,
  sausklaar,
  vochtigeMuren,
].sort((a, b) => b.date.localeCompare(a.date));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
