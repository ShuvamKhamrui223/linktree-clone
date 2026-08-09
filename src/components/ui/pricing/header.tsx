
const PricingHeader = () => {
  return (
<div className="text-center max-w-2xl mx-auto mb-xl mt-lg">
            <h1 className="font-display text-display text-on-background mb-4">Simple, transparent pricing</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Choose the perfect plan to grow your digital
                presence. No hidden fees, ever.</p>
            {/* <!-- Billing Toggle --> */}
            {/* <div className="mt-8 inline-flex items-center bg-surface-container rounded-full p-1">
                <button
                    className="px-6 py-2 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface shadow-sm"
                    id="toggle-monthly">Monthly</button>
                <button
                    className="px-6 py-2 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                    id="toggle-annual">Annually <span className="text-primary ml-1">(Save 20%)</span></button>
            </div> */}
        </div>  )
}

export default PricingHeader