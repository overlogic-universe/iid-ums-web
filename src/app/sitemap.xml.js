//pages/sitemap.xml.js

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>https://ums-iid.com/</loc>
        <lastmod>2024-08-12</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://ums-iid.com/registration</loc>
        <lastmod>2024-08-12</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.80</priority>
      </url>
   </urlset>
 `;
}

function SiteMap() {
}

export async function getServerSideProps({ res }) {

  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
