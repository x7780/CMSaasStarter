<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<!-- 主容器添加渐变背景 -->
<div class="min-h-screen flex flex-col bg-gradient-to-br from-base-100 to-base-200">
  <!-- 导航栏改进 -->
  <nav class="navbar bg-base-100/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex-1">
        <a 
          href="/" 
          class="btn btn-ghost normal-case text-xl hover:scale-105 transition-transform"
        >
          <span class="text-primary font-bold">{WebsiteName}</span>
        </a>
      </div>
      
      <div class="flex-none">
        <!-- 桌面导航 -->
        <ul class="menu menu-horizontal px-1 hidden sm:flex items-center gap-2">
          <li>
            <a 
              href="/blog" 
              class="font-medium hover:text-primary hover:bg-base-200/50 rounded-btn transition-colors"
            >
              Blog
            </a>
          </li>
          <li>
            <a 
              href="/pricing" 
              class="font-medium hover:text-primary hover:bg-base-200/50 rounded-btn transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a 
              href="/account" 
              class="font-medium hover:text-primary hover:bg-base-200/50 rounded-btn transition-colors"
            >
              Account
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/CriticalMoments/CMSaasStarter" 
              class="btn btn-primary btn-sm ml-2 hover:scale-105 transition-transform"
            >
              <span class="i-mdi-github text-lg mr-1"></span>
              Star on GitHub
            </a>
          </li>
          <li>
            <a 
              href="/search" 
              class="p-2 hover:bg-base-200/50 rounded-full transition-colors"
              aria-label="Search"
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
        </ul>
        
        <!-- 移动端菜单 -->
        <div class="dropdown dropdown-end sm:hidden">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
          >
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/account">Account</a></li>
            <li><a href="/search">Search</a></li>
            <li>
              <a href="https://github.com/CriticalMoments/CMSaasStarter">
                <span class="i-mdi-github text-lg"></span>
                Star on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <!-- 主内容区域 -->
  <main class="flex-1 container mx-auto px-4 py-8">
    {@render children?.()}
  </main>

  <!-- 页脚改进 -->
  <footer class="bg-base-200/50 border-t border-base-300 mt-12">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <!-- 探索链接 -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-primary">Explore</h3>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-primary transition-colors">Overview</a></li>
            <li><a href="/pricing" class="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="/blog" class="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="/contact_us" class="hover:text-primary transition-colors">Contact Us</a></li>
            <li>
              <a 
                href="https://github.com/CriticalMoments/CMSaasStarter" 
                class="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        
        <!-- 资源链接 -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-primary">Resources</h3>
          <ul class="space-y-2">
            <li><a href="/docs" class="hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="/api" class="hover:text-primary transition-colors">API Reference</a></li>
            <li><a href="/community" class="hover:text-primary transition-colors">Community</a></li>
            <li><a href="/status" class="hover:text-primary transition-colors">Status</a></li>
          </ul>
        </div>
        
        <!-- 公司信息 -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-primary">Company</h3>
          <ul class="space-y-2">
            <li><a href="/about" class="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/careers" class="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="/privacy" class="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" class="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        
        <!-- 赞助商部分 -->
        <div class="md:col-span-1 lg:col-span-1">
          <h3 class="text-lg font-bold mb-4 text-primary">Sponsor</h3>
          <a href="https://getkiln.ai" class="block group">
            <div class="font-bold text-2xl mb-2 text-primary group-hover:underline">Kiln AI</div>
            <p class="text-sm mb-3">Build High Quality AI Products</p>
            <p class="text-sm opacity-80 mb-4">
              Use advanced AI tactics, and collaborate with your team. Free apps for
              Mac and Windows.
            </p>
            <div class="text-sm font-medium text-primary flex items-center">
              Learn More
              <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      
      <!-- 版权信息 -->
      <div class="border-t border-base-300 mt-8 pt-8 text-sm text-center opacity-70">
        &copy; {new Date().getFullYear()} {WebsiteName}. All rights reserved.
      </div>
    </div>
  </footer>
</div>
