/**
 * Below are the metadata list that are used in the app to increase SEO performance.
 */

import { ImageConstants } from "./image-constants";
import { SvgConstants } from "./svg-constants";

const openGraphConstant = {
  type: "website",
  url: "https://ums-iid.vercel.app/",
  title: "Register UMS International Innovation Day 2024",
  description:
    "Registration International Innovation Day 2024, The Creative Synergy of Young Investors Encourage Innovation for Human Life and Well-being - International Innovation Day 2024 - UMS",
  images: [
    {
      
      url: ImageConstants.overlogicLogo.src,
      width: 1200,
      height: 630,
    },
    {
      url: SvgConstants.headerImage.src,
      width: 1200,
      height: 630,
    },
  ],
};

export { openGraphConstant };
