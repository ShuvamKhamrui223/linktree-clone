
const FeatureGrid = () => {
  return (
    <>
    <section className="px-margin-mobile md:px-margin-desktop py-24 max-w-container-max mx-auto" id="features">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">Everything you need to grow.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Powerful tools designed for speed, flexibility, and ultimate control over your brand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* <!-- Card 1 --> */}
<div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group">
<span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">bolt</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">Lightning Fast Performance</h3>
<p className="font-body-md text-code-sm text-on-surface-variant">Built on Next.js edge network for sub-second load times globally.</p>
</div>
{/* <!-- Card 2 --> */}
<div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group">
<span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">integration_instructions</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">Rich Content Embeds</h3>
<p className="font-body-md text-code-sm text-on-surface-variant">Seamlessly embed YouTube, Spotify, TikTok, and more directly on your page.</p>
</div>
{/* <!-- Card 3 --> */}
<div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group">
<span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">analytics</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">Advanced Click Analytics</h3>
<p className="font-body-md text-code-sm text-on-surface-variant">Track views, clicks, and conversion rates with detailed real-time insights.</p>
</div>
{/* <!-- Card 4 --> */}
<div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group">
<span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">payments</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">Keep 100% of Revenue</h3>
<p className="font-body-md text-code-sm text-on-surface-variant">Direct integration with Stripe and Lemon Squeezy. We take 0% cuts.</p>
</div>
{/* <!-- Card 5 --> */}
<div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group">
<span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">public</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">Custom Domains</h3>
<p className="font-body-md text-code-sm text-on-surface-variant">Connect your own domain (e.g., links.yourname.com) for total brand control.</p>
</div>
{/* <!-- Card 6 --> */}
<div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-primary/50 transition-colors group">
<span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">contact_mail</span>
<h3 className="font-headline-md text-body-lg font-semibold text-on-surface mb-2">Lead Capture Forms</h3>
<p className="font-body-md text-code-sm text-on-surface-variant">Build your email list directly from your profile with integrated forms.</p>
</div>
</div>
</section>
    </>
  )
}

export default FeatureGrid