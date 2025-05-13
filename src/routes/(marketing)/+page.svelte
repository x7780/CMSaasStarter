<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Automated Investing",
      description:
        "Set it and forget it. Our automated system handles regular investments based on your schedule and preferences.",
      link: "/pricing",
      linkText: "Learn More",
      svgContent: `<path d="M12 6V18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Market Analysis",
      description:
        "Access professional-grade market analysis and insights to make informed investment decisions.",
      link: "/blog",
      linkText: "View Analysis",
      svgContent: `<path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M6 12C6 10.5858 6 9.87868 6.43934 9.43934C6.87868 9 7.58579 9 9 9H15C16.4142 9 17.1213 9 17.5607 9.43934C18 9.87868 18 10.5858 18 12V16C18 17.4142 18 18.1213 17.5607 18.5607C17.1213 19 16.4142 19 15 19H9C7.58579 19 6.87868 19 6.43934 18.5607C6 18.1213 6 17.4142 6 16V12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M7 6H12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Diversified Portfolios",
      description: "Spread your risk with expertly crafted diversified investment portfolios tailored to your goals.",
      link: "/pricing",
      linkText: "Explore Portfolios",
      svgContent: `<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M10 16.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 13.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 10L22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Low Fees",
      description:
        "Maximize your returns with our transparent, low-fee structure. No hidden costs or surprises.",
      link: "/pricing",
      linkText: "See Pricing",
      svgContent: `<path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z" fill="#1C274C"/>`,
    },
    {
      name: "Expert Guidance",
      description:
        "Get personalized investment advice from our team of financial experts.",
      link: "/contact_us",
      linkText: "Meet Our Experts",
      svgContent: `<path
                  d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />`,
    },
    {
      name: "Tax Efficiency",
      description:
        "Optimize your investments for tax efficiency with our strategic approach to portfolio management.",
      link: "/blog",
      linkText: "Tax Benefits",
      svgContent: `<path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.5688 12.2533L17.7817 12.3762C18.4388 12.7556 19.265 12.6719 19.8327 12.1685C20.3468 11.7126 21.0789 11.597 21.7085 11.8723L22 11.9997" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5352 3C10.1977 3.55206 10.2823 4.26344 10.7399 4.72097L10.8377 4.81885C11.2309 5.21201 11.3759 5.78959 11.215 6.32182" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.561 4.39648C13.7621 4.19542 13.8626 4.09489 13.9788 4.05804C14.0772 4.02688 14.1827 4.02688 14.281 4.05804C14.3973 4.09489 14.4978 4.19542 14.6989 4.39648C14.8999 4.59753 15.0004 4.69806 15.0373 4.8143C15.0685 4.91262 15.0685 5.01817 15.0373 5.11648C15.0004 5.23272 14.8999 5.33325 14.6989 5.53431C14.4978 5.73536 14.3973 5.83589 14.281 5.87274C14.1827 5.90391 14.0772 5.90391 13.9788 5.87274C13.8626 5.83589 13.7621 5.73536 13.561 5.53431C13.36 5.33325 13.2594 5.23272 13.2226 5.11648C13.1914 5.01817 13.1914 4.91262 13.2226 4.8143C13.2594 4.69806 13.36 4.59753 13.561 4.39648Z" fill="#1C274C"/>
<path d="M19.4682 7.46822C19.7136 7.22283 19.8363 7.10014 19.9747 7.04681C20.1367 6.9844 20.3161 6.9844 20.4781 7.04681C20.6165 7.10014 20.7392 7.22283 20.9846 7.46822C21.23 7.71362 21.3527 7.83631 21.406 7.97472C21.4684 8.1367 21.4684 8.31609 21.406 8.47807C21.3527 8.61649 21.23 8.73918 20.9846 8.98457C20.7392 9.22996 20.6165 9.35266 20.4781 9.40599C20.3161 9.4684 20.1367 9.4684 19.9747 9.40599C19.8363 9.35266 19.7136 9.22996 19.4682 8.98457C19.2228 8.73918 19.1001 8.61649 19.0468 8.47807C18.9844 8.31609 18.9844 8.1367 19.0468 7.97472C19.1001 7.83631 19.2228 7.71362 19.4682 7.46822Z" fill="#1C274C"/>
<path d="M6.92712 3.94079C7.13659 3.73132 7.47621 3.73132 7.68567 3.94079C7.89514 4.15026 7.89514 4.48988 7.68567 4.69935C7.47621 4.90882 7.13659 4.90882 6.92712 4.69935C6.71765 4.48988 6.71765 4.15026 6.92712 3.94079Z" fill="#1C274C"/>
<path d="M19.058 15.3134C19.2674 15.1039 19.6071 15.1039 19.8165 15.3134C20.026 15.5228 20.026 15.8624 19.8165 16.0719C19.6071 16.2814 19.2674 16.2814 19.058 16.0719C18.8485 15.8624 18.8485 15.5228 19.058 15.3134Z" fill="#1C274C"/>
<path d="M17.5 9.74145C17.7095 9.53198 18.0491 9.53198 18.2586 9.74145C18.468 9.95092 18.468 10.2905 18.2586 10.5C18.0491 10.7095 17.7095 10.7095 17.5 10.5C17.2905 10.2905 17.2905 9.95092 17.5 9.74145Z" fill="#1C274C"/>`,
    },
  ]

  const testimonials = [
    {
      name: "Sarah J.",
      title: "Small Business Owner",
      quote: "I never thought investing could be this easy. The automated system has helped me build wealth while I focus on running my business.",
      avatar: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "Michael T.",
      title: "Software Engineer",
      quote: "The market analysis tools are incredible. I feel like I have the same information as professional traders, but without the complexity.",
      avatar: "/placeholder.svg?height=80&width=80"
    },
    {
      name: "Rebecca L.",
      title: "Retired Teacher",
      quote: "I was worried about retirement, but their diversified portfolios have given me peace of mind and steady growth for my future.",
      avatar: "/placeholder.svg?height=80&width=80"
    }
  ]

  const investmentPlans = [
    {
      name: "Starter",
      price: "$50",
      frequency: "minimum investment",
      features: [
        "Automated monthly investments",
        "Basic market analysis",
        "Diversified ETF portfolio",
        "Email support"
      ],
      cta: "Start Investing",
      link: "/pricing"
    },
    {
      name: "Growth",
      price: "$250",
      frequency: "minimum investment",
      features: [
        "Weekly automated investments",
        "Advanced market analysis",
        "Custom portfolio allocation",
        "Priority email support",
        "Tax-loss harvesting"
      ],
      cta: "Choose Growth",
      link: "/pricing",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$1,000",
      frequency: "minimum investment",
      features: [
        "Daily investment options",
        "Professional market analysis",
        "Fully customized portfolio",
        "Dedicated financial advisor",
        "Advanced tax strategies",
        "Exclusive investment opportunities"
      ],
      cta: "Go Premium",
      link: "/pricing"
    }
  ]
</script>

<svelte:head>
  <title>Digital Market Investing | {WebsiteName}</title>
  <meta name="description" content="Automated digital market investing with low fees and expert guidance. Start building wealth today with our easy-to-use investment platform." />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<!-- Hero Section -->
<div class="hero min-h-[80vh] bg-gradient-to-br from-primary/10 to-secondary/10">
  <div class="hero-content text-center py-12 px-4">
    <div class="max-w-2xl">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Invest in Digital Markets with 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Confidence</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8">
        Automated investing strategies designed to help you build wealth consistently over time.
      </p>
      <div class="stats shadow bg-base-100 mb-8">
        <div class="stat">
          <div class="stat-title">Average Return</div>
          <div class="stat-value text-primary">12.4%</div>
          <div class="stat-desc">Annual (past 5 years)</div>
        </div>
        <div class="stat">
          <div class="stat-title">Active Investors</div>
          <div class="stat-value">10,000+</div>
          <div class="stat-desc">And growing</div>
        </div>
        <div class="stat">
          <div class="stat-title">Management Fee</div>
          <div class="stat-value text-secondary">0.25%</div>
          <div class="stat-desc">Industry average: 1%</div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/login">
          <button class="btn btn-primary btn-lg px-8">Start Investing Now</button>
        </a>
        <a href="/pricing">
          <button class="btn btn-outline btn-lg px-8">View Plans</button>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- How It Works Section -->
<div class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">How Digital Market Investing Works</h2>
      <p class="text-xl max-w-2xl mx-auto">Our platform makes investing in digital markets simple, automated, and effective.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body items-center text-center">
          <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-primary">1</span>
          </div>
          <h3 class="card-title text-xl">Create Your Account</h3>
          <p>Sign up in minutes and connect your bank account securely.</p>
        </div>
      </div>
      
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body items-center text-center">
          <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-primary">2</span>
          </div>
          <h3 class="card-title text-xl">Set Your Strategy</h3>
          <p>Choose your investment amount, frequency, and risk tolerance.</p>
        </div>
      </div>
      
      <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body items-center text-center">
          <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-primary">3</span>
          </div>
          <h3 class="card-title text-xl">Watch Your Money Grow</h3>
          <p>Our system automatically invests for you based on market conditions.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Features Section -->
<div class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">Why Choose Our Platform</h2>
      <p class="text-xl max-w-2xl mx-auto">We combine cutting-edge technology with financial expertise to deliver superior results.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each features as feature}
        <div class="card bg-base-100 shadow-xl h-full">
          <div class="card-body">
            <div class="mb-4">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-primary"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h3 class="card-title text-xl">{feature.name}</h3>
            <p>{feature.description}</p>
            {#if feature.link}
              <div class="card-actions justify-start mt-4">
                <a href={feature.link} class="btn btn-sm btn-primary">
                  {feature.linkText}
                </a>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Pricing Plans -->
<div class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">Investment Plans</h2>
      <p class="text-xl max-w-2xl mx-auto">Choose the plan that fits your investment goals and budget.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each investmentPlans as plan}
        <div class="card bg-base-100 shadow-xl border {plan.highlighted ? 'border-primary' : 'border-base-300'} {plan.highlighted ? 'relative' : ''}">
          {#if plan.highlighted}
            <div class="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-primary text-primary-content rounded-full text-sm font-bold">
              Most Popular
            </div>
          {/if}
          <div class="card-body">
            <h3 class="card-title text-2xl justify-center">{plan.name}</h3>
            <div class="text-center my-4">
              <p class="text-4xl font-bold">{plan.price}</p>
              <p class="text-sm opacity-70">{plan.frequency}</p>
            </div>
            <ul class="space-y-2 mb-6">
              {#each plan.features as feature}
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
            <div class="card-actions justify-center mt-auto">
              <a href={plan.link} class="btn {plan.highlighted ? 'btn-primary' : 'btn-outline'} btn-block">
                {plan.cta}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- Testimonials -->
<div class="py-20 bg-base-200">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">What Our Investors Say</h2>
      <p class="text-xl max-w-2xl mx-auto">Join thousands of satisfied investors who are building their wealth with us.</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each testimonials as testimonial}
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                </div>
              </div>
              <div class="ml-4">
                <h3 class="font-bold text-lg">{testimonial.name}</h3>
                <p class="text-sm opacity-70">{testimonial.title}</p>
              </div>
            </div>
            <div class="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" class="text-primary/20" viewBox="0 0 45 36" fill="currentColor">
                <path d="M13.415 0C6.121 0 0 5.855 0 13.128 0 24.519 11.71 32.15 18.665 35.19c1.312.585 2.974-.117 3.17-1.53.197-1.296-.637-2.579-1.858-3.1-7.045-3.217-11.515-7.9-11.515-17.267 0-4.077 3.51-6.732 6.961-6.732 3.451 0 6.257 2.655 6.257 5.928 0 3.273-2.806 5.928-6.257 5.928-.932 0-1.815-.197-2.61-.55-1.12-.491-2.494-.1-3.12.877-.626.976-.51 2.296.346 3.122C11.12 23.022 12.975 23.6 14.92 23.6c6.053 0 10.963-4.932 10.963-11.01C25.883 5.678 20.71 0 13.415 0zM38.39 0c-7.294 0-13.415 5.855-13.415 13.128 0 11.391 11.71 19.022 18.665 22.062 1.312.585 2.974-.117 3.17-1.53.197-1.296-.637-2.579-1.858-3.1-7.045-3.217-11.515-7.9-11.515-17.267 0-4.077 3.51-6.732 6.961-6.732 3.451 0 6.257 2.655 6.257 5.928 0 3.273-2.806 5.928-6.257 5.928-.932 0-1.815-.197-2.61-.55-1.12-.491-2.494-.1-3.12.877-.626.976-.51 2.296.346 3.122 1.082 1.155 2.936 1.733 4.881 1.733 6.053 0 10.963-4.932 10.963-11.01C50.858 5.678 45.685 0 38.39 0z" />
              </svg>
            </div>
            <p class="italic">{testimonial.quote}</p>
            <div class="mt-4 flex">
              {#each Array(5) as _, i}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- CTA Section -->
<div class="py-20 bg-gradient-to-br from-primary to-secondary text-primary-content">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl md:text-5xl font-bold mb-6">Ready to Start Building Wealth?</h2>
    <p class="text-xl max-w-2xl mx-auto mb-8">Join thousands of investors who are growing their wealth with our automated digital market investment platform.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/login">
        <button class="btn btn-lg bg-white text-primary hover:bg-white/90 border-none px-8">Start Investing Now</button>
      </a>
      <a href="/contact_us">
        <button class="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary px-8">Talk to an Advisor</button>
      </a>
    </div>
  </div>
</div>

<!-- FAQ Section -->
<div class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
      <p class="text-xl max-w-2xl mx-auto">Get answers to common questions about our investment platform.</p>
    </div>
    
    <div class="max-w-3xl mx-auto">
      <div class="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="faq-accordion" checked="checked" /> 
        <div class="collapse-title text-xl font-medium">
          What is the minimum investment amount?
        </div>
        <div class="collapse-content"> 
          <p>Our Starter plan begins at just $50, making it accessible for new investors. As you grow more comfortable, you can increase your investment amount or upgrade to our Growth or Premium plans.</p>
        </div>
      </div>
      
      <div class="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="faq-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          How often can I withdraw my funds?
        </div>
        <div class="collapse-content"> 
          <p>You can withdraw your funds at any time without penalty. However, for optimal results, we recommend keeping your investments for at least 6-12 months to benefit from our long-term investment strategies.</p>
        </div>
      </div>
      
      <div class="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="faq-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          What types of assets do you invest in?
        </div>
        <div class="collapse-content"> 
          <p>We invest in a diversified portfolio of digital market assets, including stocks, bonds, ETFs, and select alternative investments. Our team carefully selects assets based on market conditions and your risk profile.</p>
        </div>
      </div>
      
      <div class="collapse collapse-plus bg-base-200 mb-4">
        <input type="radio" name="faq-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          How are my investments protected?
        </div>
        <div class="collapse-content"> 
          <p>Your investments are protected through diversification, regular portfolio rebalancing, and our risk management strategies. Additionally, we use bank-level security to protect your personal and financial information.</p>
        </div>
      </div>
      
      <div class="collapse collapse-plus bg-base-200">
        <input type="radio" name="faq-accordion" /> 
        <div class="collapse-title text-xl font-medium">
          Can I customize my investment strategy?
        </div>
        <div class="collapse-content"> 
          <p>Yes! While our automated system works well for most investors, our Growth and Premium plans offer increasing levels of customization. Premium members get access to a dedicated financial advisor who can help create a fully personalized investment strategy.</p>
        </div>
      </div>
    </div>
  </div>
</div>
