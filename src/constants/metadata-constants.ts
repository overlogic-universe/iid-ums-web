/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import { keywordConstants } from "./keyword-metadata-constants";
import { authorsConstants } from "./author-metadata-constants";
import { openGraphConstant } from "./open-graph-metadat-constants";
import IconImage from "@/assets/metadata/icon.png";
import { Metadata } from "next";

const metadataConstant:Metadata = {
  title: "UMS - IID 2024",
  description:
    "UMS International Innovation Day is an annual event hosted by Universitas Muhammadiyah Surakarta (UMS) to celebrate creativity and technological advancements. It brings together students, researchers, entrepreneurs, and industry professionals to showcase innovative projects, exchange ideas, and foster collaborations. ",
  keywords: keywordConstants,
  authors: authorsConstants,
  abstract: "UMS International Innovation Day 2024",
  publisher: "Overlogic Universe",
  openGraph: openGraphConstant,
  icons: {
    icon: IconImage.src,
    apple: IconImage.src,
  },
  metadataBase: new URL('https://ums-iid.com/'),
};

export { metadataConstant };
