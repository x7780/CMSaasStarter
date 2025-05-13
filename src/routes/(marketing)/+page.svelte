<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  let showMobileMenu = false;
  let currentPricingPlan = 'monthly';
  let cryptoStats = [
    { name: "比特币", change: "+2.4%", price: "¥256,789" },
    { name: "以太坊", change: "+3.1%", price: "¥17,456" },
    { name: "索拉纳", change: "+5.7%", price: "¥698.45" },
    { name: "卡尔达诺", change: "+1.2%", price: "¥3.52" }
  ];
  
  let testimonials = [
    {
      name: '张先生',
      role: '个人投资者',
      image: '/placeholder.svg?height=80&width=80',
      quote: '使用这个平台后，我的投资组合更加稳定，不再担心市场波动。定投策略帮我避开了很多风险。'
    },
    {
      name: '李女士',
      role: '企业财务总监',
      image: '/placeholder.svg?height=80&width=80',
      quote: '为我们公司的数字资产配置提供了专业的定投方案，收益稳定增长，服务非常贴心。'
    },
    {
      name: '王先生',
      role: '退休人士',
      image: '/placeholder.svg?height=80&width=80',
      quote: '作为一个对加密货币了解不多的人，这个平台让我能够安心投资，客服解答非常耐心。'
    }
  ];
  
  let faqs = [
    {
      question: '什么是数字货币定投？',
      answer: '数字货币定投是一种投资策略，通过定期投入固定金额购买数字货币，不考虑其价格波动，从而降低整体投资风险，获得平均成本效益。'
    },
    {
      question: '你们支持哪些数字货币？',
      answer: '我们支持市场上主流的数字货币，包括比特币、以太坊、索拉纳、卡尔达诺等30多种加密货币。'
    },
    {
      question: '最低投资金额是多少？',
      answer: '我们的最低投资金额为1000元人民币，您可以根据自己的财务状况选择适合的投资计划。'
    },
    {
      question: '如何保障资金安全？',
      answer: '我们采用多重签名钱包和冷存储技术保障客户资金安全，同时与多家知名交易所合作，确保交易的安全性和流动性。'
    },
    {
      question: '收费标准是怎样的？',
      answer: '我们采用透明的收费模式，根据您选择的服务套餐收取一定比例的管理费，没有隐藏费用。详细费率请参考我们的价格页面。'
    }
  ];
  
  let activeAccordion = null;
  
  function toggleAccordion(index) {
    activeAccordion = activeAccordion === index ? null : index;
  }
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
  
  const features = [
    {
      name: "专业投资策略",
      description: "基于市场数据和专业分析，为您制定个性化的定投计划，降低投资风险。",
      svgContent: `<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "资金安全保障",
      description: "采用多重签名钱包和冷存储技术，确保您的数字资产安全可靠。",
      svgContent: `<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "透明报告系统",
      description: "定期提供详细的投资报告和分析，让您清楚了解投资状况和收益情况。",
      svgContent: `<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "专业客户支持",
      description: "专业团队提供一对一咨询服务，解答您的疑问，指导您的投资决策。",
      svgContent: `<path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "市场分析洞察",
      description: "提供最新的市场趋势分析和投资机会，帮助您把握市场动态。",
      svgContent: `<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "自动化执行",
      description: "系统自动执行您的定投计划，无需手动操作，节省您的时间和精力。",
      svgContent: `<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
  ];
</script>

<svelte:head>
  <title>{WebsiteName} - 数字货币定投专家</title>
  <meta name="description" content="通过智能定投策略，稳健积累数字资产。我们帮助您在波动的加密货币市场中获得长期稳定的收益。" />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="bg-base-100 min-h-screen">
  <!-- Header/Navigation -->
  <header class="navbar bg-base-100 shadow-sm px-4 md:px-8">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden" on:click={() => showMobileMenu = !showMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        {#if showMobileMenu}
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" transition:fade>
            <li><a href="#features">功能特点</a></li>
            <li><a href="#how-it-works">工作原理</a></li>
            <li><a href="#pricing">价格套餐</a></li>
            <li><a href="#testimonials">客户评价</a></li>
            <li><a href="#faq">常见问题</a></li>
          </ul>
        {/if}
      </div>
      <a class="btn btn-ghost normal-case text-xl">加密定投专家</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#features">功能特点</a></li>
        <li><a href="#how-it-works">工作原理</a></li>
        <li><a href="#pricing">价格套餐</a></li>
        <li><a href="#testimonials">客户评价</a></li>
        <li><a href="#faq">常见问题</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-primary">立即开始</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero min-h-[70vh] bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse px-4 py-16">
      <div class="w-full lg:w-1/2">
        <img src="/placeholder.svg?height=400&width=600" class="max-w-full rounded-lg shadow-2xl" alt="加密货币定投图示" />
      </div>
      <div class="w-full lg:w-1/2">
        {#if isVisible}
          <div in:fly={{ y: 50, duration: 1000, delay: 300 }}>
            <h1 class="text-5xl font-bold">数字市场定投专家</h1>
            <p class="py-6 text-xl">通过智能定投策略，稳健积累数字资产。我们帮助您在波动的加密货币市场中获得长期稳定的收益。</p>
            <div class="flex flex-wrap gap-4">
              <button class="btn btn-primary">免费咨询</button>
              <button class="btn btn-outline">了解更多</button>
            </div>
          </div>
        {/if}
        
        <!-- Live Crypto Stats -->
        <div class="mt-8 overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr>
                <th>货币</th>
                <th>24小时变化</th>
                <th>当前价格</th>
              </tr>
            </thead>
            <tbody>
              {#each cryptoStats as stat}
                <tr>
                  <td>{stat.name}</td>
                  <td class={stat.change.includes('+') ? 'text-success' : 'text-error'}>{stat.change}</td>
                  <td>{stat.price}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-16 px-4 md:px-8 bg-base-100">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">为什么选择我们的定投服务</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each features as feature}
          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <div class="flex justify-center mb-4">
                <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                    {@html feature.svgContent}
                  </svg>
                </div>
              </div>
              <h3 class="card-title justify-center">{feature.name}</h3>
              <p class="text-center">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section id="how-it-works" class="py-16 px-4 md:px-8 bg-base-200">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">我们如何帮您定投</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <h3 class="card-title">制定投资计划</h3>
            <p>根据您的风险承受能力和投资目标，我们的专业团队为您量身定制定投策略。</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <h3 class="card-title">自动执行交易</h3>
            <p>系统按照既定计划自动在最佳时机执行交易，确保您的投资按计划进行。</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <h3 class="card-title">监控与调整</h3>
            <p>我们持续监控市场变化，并根据需要调整您的投资组合，以优化长期收益。</p>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <button class="btn btn-primary btn-lg">开始您的定投之旅</button>
      </div>
    </div>
  </section>

  <!-- Pricing Section -->
  <section id="pricing" class="py-16 px-4 md:px-8 bg-base-100">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-4">价格套餐</h2>
      <p class="text-center text-lg mb-12">选择最适合您的定投计划</p>
      
      <div class="flex justify-center mb-8">
        <div class="tabs tabs-boxed">
          <button class={`tab ${currentPricingPlan === 'monthly' ? 'tab-active' : ''}`} on:click={() => currentPricingPlan = 'monthly'}>月付</button>
          <button class={`tab ${currentPricingPlan === 'yearly' ? 'tab-active' : ''}`} on:click={() => currentPricingPlan = 'yearly'}>年付（省20%）</button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title justify-center text-2xl">基础版</h3>
            <div class="text-center my-4">
              <span class="text-4xl font-bold">{currentPricingPlan === 'monthly' ? '¥199' : '¥1,910'}</span>
              <span class="text-sm">/{currentPricingPlan === 'monthly' ? '月' : '年'}</span>
            </div>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                每月定投3种主流币种
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                基础市场分析报告
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                邮件客户支持
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                月度投资报告
              </li>
            </ul>
            <div class="card-actions justify-center mt-6">
              <button class="btn btn-outline btn-primary">选择基础版</button>
            </div>
          </div>
        </div>
        
        <div class="card bg-primary text-primary-content shadow-xl">
          <div class="card-body">
            <div class="badge badge-secondary mx-auto mb-2">最受欢迎</div>
            <h3 class="card-title justify-center text-2xl">专业版</h3>
            <div class="text-center my-4">
              <span class="text-4xl font-bold">{currentPricingPlan === 'monthly' ? '¥499' : '¥4,790'}</span>
              <span class="text-sm">/{currentPricingPlan === 'monthly' ? '月' : '年'}</span>
            </div>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                每月定投10种币种
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                详细市场分析与预测
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                优先电话和邮件支持
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                周度投资报告
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                个性化投资建议
              </li>
            </ul>
            <div class="card-actions justify-center mt-6">
              <button class="btn btn-secondary">选择专业版</button>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title justify-center text-2xl">企业版</h3>
            <div class="text-center my-4">
              <span class="text-4xl font-bold">{currentPricingPlan === 'monthly' ? '¥999' : '¥9,590'}</span>
              <span class="text-sm">/{currentPricingPlan === 'monthly' ? '月' : '年'}</span>
            </div>
            <ul class="space-y-2">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                无限制币种选择
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                高级市场分析与策略
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7专属客户经理
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                实时投资报告
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                定制化投资方案
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                优先交易执行
              </li>
            </ul>
            <div class="card-actions justify-center mt-6">
              <button class="btn btn-outline btn-primary">选择企业版</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section id="testimonials" class="py-16 px-4 md:px-8 bg-base-200">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12">客户评价</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each testimonials as testimonial, i}
          <div class="card bg-base-100 shadow-xl" in:fly={{ y: 50, duration: 1000, delay: 300 + i * 200 }}>
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="avatar mr-4">
                  <div class="w-16 rounded-full">
                    <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  </div>
                </div>
                <div>
                  <h3 class="font-bold">{testimonial.name}</h3>
                  <p class="text-sm opacity-70">{testimonial.role}</p>
                </div>
              </div>
              <p class="italic">"{testimonial.quote}"</p>
              <div class="mt-4 flex">
                <div class="rating">
                  <input type="radio" name={`rating-${i}`} class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name={`rating-${i}`} class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name={`rating-${i}`} class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name={`rating-${i}`} class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name={`rating-${i}`} class="mask mask-star-2 bg-orange-400" checked />
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="py-16 px-4 md:px-8 bg-base-100">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl font-bold text-center mb-12">常见问题</h2>
      
      <div class="space-y-4">
        {#each faqs as faq, i}
          <div class="collapse collapse-arrow bg-base-200">
            <input type="radio" name="faq-accordion" checked={i === 0} on:change={() => toggleAccordion(i)} />
            <div class="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div class="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 px-4 md:px-8 bg-primary text-primary-content">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6">准备开始您的数字资产定投之旅？</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">加入我们的定投计划，让专业团队帮您稳健积累数字资产，应对市场波动。</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button class="btn btn-secondary btn-lg">免费咨询</button>
        <button class="btn btn-outline btn-lg text-primary-content border-primary-content">查看演示</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
      <span class="footer-title">服务</span> 
      <a class="link link-hover">定投方案</a>
      <a class="link link-hover">市场分析</a>
      <a class="link link-hover">投资咨询</a>
      <a class="link link-hover">企业服务</a>
    </div> 
    <div>
      <span class="footer-title">公司</span> 
      <a class="link link-hover">关于我们</a>
      <a class="link link-hover">联系我们</a>
      <a class="link link-hover">招贤纳士</a>
      <a class="link link-hover">新闻中心</a>
    </div> 
    <div>
      <span class="footer-title">法律</span> 
      <a class="link link-hover">使用条款</a>
      <a class="link link-hover">隐私政策</a>
      <a class="link link-hover">Cookie政策</a>
    </div>
    <div>
      <span class="footer-title">订阅我们的通讯</span> 
      <div class="form-control w-80">
        <label class="label">
          <span class="label-text text-neutral-content">获取最新的加密货币市场分析</span>
        </label> 
        <div class="relative">
          <input type="text" placeholder="您的邮箱地址" class="input input-bordered w-full pr-16 bg-base-100 text-base-content" /> 
          <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">订阅</button>
        </div>
      </div>
    </div>
  </footer>
  <footer class="footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300">
    <div class="items-center grid-flow-col">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
      <p>加密定投专家 © 2025 - 让您的数字资产稳健增长</p>
    </div> 
    <div class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
      </div>
    </div>
  </footer>
</div>
