import Parser from 'rss-parser';

type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
};

// Next.js revalidation (revalidate every hour = 3600 seconds)
export const revalidate = 3600; 

export default async function LiveSafetyNews() {
  let items: FeedItem[] = [];
  let error = false;

  try {
    const parser = new Parser({
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    // Fetching from UN Global Health & Workplace Safety News
    const feed = await parser.parseURL('https://news.un.org/feed/subscribe/en/news/topic/health/feed/rss.xml');
    
    // Get top 4 news items
    items = feed.items.slice(0, 4).map(item => ({
      title: item.title || 'Industry Update',
      link: item.link || '#',
      pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
      contentSnippet: item.contentSnippet?.substring(0, 120) + '...'
    }));
  } catch (err) {
    console.error("Failed to fetch RSS feed", err);
    error = true;
  }

  return (
    <div className="w-full bg-[#111] text-white border-t border-gray-800 relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 w-full px-6 md:px-12 xl:px-24 py-24">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">Live Auto-Update</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Industry News & Expos</h2>
            <div className="h-1 w-24 bg-gray-600 mt-6"></div>
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            Automatically synchronized with global Occupational Safety and Health (OSH) networks.
          </p>
        </div>

        {error ? (
          <div className="bg-gray-900 border border-gray-800 p-8 text-center text-gray-500">
            System temporarily unable to synchronize with global news network. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 border border-gray-800">
            {items.map((item, i) => (
              <a 
                key={i} 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111] p-8 hover:bg-[#1a1a1a] transition-colors group flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">{item.pubDate}</span>
                  <svg className="w-4 h-4 text-gray-700 group-hover:text-[#7AC142] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </div>
                
                <h4 className="font-bold text-gray-200 text-lg leading-snug group-hover:text-white transition-colors mb-4 line-clamp-3">
                  {item.title}
                </h4>
                
                {item.contentSnippet && (
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mt-auto">
                    {item.contentSnippet}
                  </p>
                )}
                
                <div className="mt-8 pt-6 border-t border-gray-800/50">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-[#7AC142] transition-colors">
                    Read Article
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
