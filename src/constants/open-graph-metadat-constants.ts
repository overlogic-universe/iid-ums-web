/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import { ImageConstants } from "./image-constants";
import OpenGraphImage from "@/assets/metadata/opengraph-image.png"

const openGraphConstant = {
  type: "website",
  url: "https://ums-iid.vercel.app/",
  title: "UMS International Innovation Day 2024",
  description:
    "International Innovation Day 2024, The Creative Synergy of Young Investors Encourage Innovation for Human Life and Well-being - International Innovation Day 2024 - UMS",
  images: [
    {
      
      url: ImageConstants.overlogicLogo.src,
      width: 1200,
      height: 630,
    },
    {
      url: OpenGraphImage.src,
      width: 1517,
      height: 1080,
    },
  ],

};

export { openGraphConstant };
