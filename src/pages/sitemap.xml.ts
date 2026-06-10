export async function GET() {
  const now = new Date().toISOString().split('T')[0];

  const pages = [
    { url: 'https://wespenjager.nl/', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespenbestrijding/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespenval-plaatsen/', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespen-voorkomen/', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespen/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/veelgestelde-vragen/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/over-ons/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-enschede/', priority: '0.85', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-hengelo/', priority: '0.85', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-almelo/', priority: '0.85', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-deventer/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-zwolle/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-oldenzaal/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-borne/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-rijssen/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-nijverdal/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-hellendoorn/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-wierden/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://wespenjager.nl/wespennest-verwijderen-delden/', priority: '0.75', changefreq: 'monthly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
