/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import { keywordConstants } from "./keyword-metadata-constants";
import { authorsConstants } from "./author-metadata-constants";
import { openGraphConstant } from "./open-graph-metadat-constants";
import IconImage from "@/assets/metadata/icon.png";
import { Metadata } from "next";
import { TextConstants } from "./text-constants";

const metadataConstant: Metadata = {
  title: "UMS International Innovation Day 2024",
  description: TextConstants.en.headerDescription,
  keywords: keywordConstants,
  authors: authorsConstants,
  abstract: "UMS International Innovation Day 2024",
  publisher: "Overlogic Universe",
  openGraph: openGraphConstant,
  icons: {
    icon: IconImage.src,
    apple: IconImage.src,
  },
  metadataBase: new URL("https://ums-iid.com/"),
};

export { metadataConstant };
