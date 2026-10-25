import type { APIRoute } from 'astro';
import { getPublishedArticles } from '../../data/articles';
import { projects } from '../../data/projects';
import { siteConfig } from '../../data/siteConfig';

export const prerender = true;

const ogImageMap: Record<string, string> = {
  'seni-vibecoding-rapi-terstruktur-kang-apri': '/images/og-vibecoding.png',
  'panduan-bikin-website-company-profile-vibecoding': '/images/og-vibecoding.png',
  'kisah-komando-sistem-manajemen-paskibra': '/images/og-komando-organisasi.png?v=2026',
  'kisah-komando-tabulasi-paskibra-realtime': '/images/og-komando-organisasi.png?v=2026',
  'kisah-g7kaih-mankoci-sistem-kebiasaan-siswa': '/images/og-g7kaih.png',
  'kisah-si-paling-rekap-tabulasi-kejuaraan-forbasi': '/images/og-si-paling-rekap.png',
  'arsitektur-zero-server-cost-megumi-hotplate': '/images/og-megumi.png',
  'otomasi-bot-python-ai-content-publisher': '/images/og-autocontent.png',
  'cara-membuat-aplikasi-modern-standar-sdlc': '/images/og-image.png',
  'puncak-teknologi-smartphone-batasan-indra-manusia': '/images/og-image.png',
  'sejarah-kecerdasan-buatan-ai': '/images/og-image.png',
  'level-penggunaan-ai-dunia-nyata': '/images/og-image.png',
};

function cleanText(text: string): string {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '') // remove HTML tags
    .replace(/[#*`_~\[\]()>-]/g, ' ') // remove markdown syntax
    .replace(/\s+/g, ' ')
    .trim();
}

function extractQuotes(content: string): string[] {
  if (!content) return [];
  const matches = content.match(/>\s*([^\n\r]+)/g);
  if (!matches) return [];
  return matches
    .map(q => cleanText(q))
    .filter(q => q.length > 20 && q.length < 180)
    .slice(0, 3);
}

function extractNumbersAndFacts(content: string): string[] {
  if (!content) return [];
  const clean = cleanText(content);
  const sentences = clean.split(/(?<=[.!?])\s+/);
  const factSentences = sentences.filter(s => 
    /\b(\d+|Rp|%|jam|menit|detik|siswa|pangkalan|peserta|bulan|tahun)\b/i.test(s) &&
    s.length > 25 && s.length < 200
  );
  return factSentences.slice(0, 4);
}

export const GET: APIRoute = async () => {
  const publishedArticles = getPublishedArticles();

  const articleItems = publishedArticles.map((art) => {
    const rawImage = ogImageMap[art.slug] || '/images/og-image.png';
    const coverImage = rawImage.startsWith('http') ? rawImage : `${siteConfig.url}${rawImage}`;
    
    return {
      id: `art-${art.id}`,
      type: 'article',
      slug: art.slug,
      title: art.title,
      category: art.category,
      excerpt: art.excerpt,
      coverImage: coverImage,
      goldenQuotes: extractQuotes(art.content),
      keyFacts: extractNumbersAndFacts(art.content),
      contentSnippet: cleanText(art.content).substring(0, 1500)
    };
  });

  const projectItems = projects.map((prj) => {
    const rawImage = prj.image || '/images/og-image.png';
    const coverImage = rawImage.startsWith('http') ? rawImage : `${siteConfig.url}${rawImage}`;
    
    const facts: string[] = [];
    if (prj.stats && Array.isArray(prj.stats)) {
      prj.stats.forEach(s => facts.push(`${s.label}: ${s.value}`));
    }
    if (prj.systemSpecs && Array.isArray(prj.systemSpecs)) {
      prj.systemSpecs.slice(0, 3).forEach(spec => facts.push(`${spec.label}: ${spec.value}`));
    }

    return {
      id: `prj-${prj.id}`,
      type: 'project',
      slug: prj.slug,
      title: prj.title,
      category: prj.category,
      excerpt: prj.tagline || prj.description,
      coverImage: coverImage,
      goldenQuotes: [prj.tagline].filter(Boolean),
      keyFacts: facts,
      contentSnippet: cleanText(prj.fullDescription || prj.description).substring(0, 1500)
    };
  });

  const allItems = [...articleItems, ...projectItems];

  return new Response(JSON.stringify(allItems, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
};
