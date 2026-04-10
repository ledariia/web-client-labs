<template>
  <div class="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
    <Head>
      <Title>Список продуктів</Title>
    </Head>

    <div class="max-w-[1200px] mx-auto mb-8 flex justify-end">
      <NuxtLink to="/table" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-blue-700 transition">
        Відкрити Таблицю ➔
      </NuxtLink>
    </div>

    <section class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

      <div class="relative bg-white rounded-xl shadow-xl w-full border border-gray-100 overflow-hidden">
        <div class="h-1.5 w-full bg-green-500"></div>
        <div class="p-8 grid gap-0">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Starter - Annual</h2>
          <div class="justify-self-start bg-gray-100 text-gray-500 text-[11px] font-bold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="grid grid-cols-[auto_auto] items-baseline justify-start gap-1 mb-1">
            <span class="text-4xl font-extrabold text-gray-900">$83.25</span>
            <span class="text-gray-400 text-sm">/month</span>
          </div>
          <p class="text-[13px] text-gray-400 mb-2 font-medium">
            billed yearly at $999
          </p>
          <div class="justify-self-start bg-green-100 text-green-700 text-[12px] font-bold px-3 py-1.5 rounded-full mb-8">
            $189 in savings
          </div>
          <NuxtLink to="/checkout?plan=starter" class="block w-full py-3 bg-gray-200 text-center text-gray-500 font-bold text-sm rounded-lg border-2 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-700 transition-all mb-8">
            Try It Free
          </NuxtLink>
          <hr class="border-gray-50 mb-8">
          <ul class="grid gap-5">
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="text-[14px] font-semibold text-gray-700 leading-none">Primary user only</span>
                <span class="text-[12px] text-gray-400 font-medium">(extra team members for $35/month)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Save unlimited properties</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700"><b class="text-gray-900">10,000</b> exports</span>
                <span class="text-[12px] text-gray-400">(additional exports at $0.02 each)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700"><b class="text-gray-900">500</b> free skip traces</span>
                <span class="text-[12px] text-gray-400">(additional skip tracing at $0.08 each)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Imports $0.01</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">FREE daily product trainings and support</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Full suite of next-gen investing tools</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Industry first AI powered comp tool</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Includes dedicated support agent</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative bg-white rounded-xl shadow-xl w-full border border-gray-100 overflow-hidden">
        <div class="h-1.5 w-full bg-cyan-500"></div>
        <div class="p-8 grid gap-0">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Team - Annual</h2>
          <div class="justify-self-start bg-gray-100 text-gray-500 text-[11px] font-bold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="grid grid-cols-[auto_auto] items-baseline justify-start gap-1 mb-1">
            <span class="text-4xl font-extrabold text-gray-900">$207.50</span>
            <span class="text-gray-400 text-sm">/month</span>
          </div>
          <p class="text-[13px] text-gray-400 mb-2 font-medium">
            billed yearly at $2,490
          </p>
          <div class="justify-self-start bg-green-100 text-green-700 text-[12px] font-bold px-3 py-1.5 rounded-full mb-8">
            $498 in savings
          </div>
          <NuxtLink to="/checkout?plan=team" class="block w-full py-3 bg-orange-500 text-center text-white font-bold text-sm rounded-lg border-2 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-700 transition-all mb-8">
            Try It Free
          </NuxtLink>
          <hr class="border-gray-50 mb-8">
          <ul class="grid gap-5">
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="text-[14px] font-semibold text-gray-700 leading-none">Primary user + 2 free team members</span>
                <span class="text-[12px] text-gray-400 font-medium">(extra team members for $25/month)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Save unlimited properties</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700"><b class="text-gray-900">50,000</b> exports</span>
                <span class="text-[12px] text-gray-400">(additional exports at $0.01 each)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700"><b class="text-gray-900">1,000</b> free skip traces</span>
                <span class="text-[12px] text-gray-400">(additional skip tracing at $0.08 each)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Imports $0.01</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">FREE daily product trainings and support</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Full suite of next-gen investing tools</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Industry first AI powered comp tool</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Includes dedicated support agent</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative bg-white rounded-xl shadow-xl w-full border border-gray-100 overflow-hidden">
        <div class="h-1.5 w-full bg-green-500"></div>
        <div class="p-8 grid gap-0">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Business - Annual</h2>
          <div class="justify-self-start bg-gray-100 text-gray-500 text-[11px] font-bold px-2 py-1 rounded mb-4">
            3-days free then:
          </div>
          <div class="grid grid-cols-[auto_auto] items-baseline justify-start gap-1 mb-1">
            <span class="text-4xl font-extrabold text-gray-900">$457.50</span>
            <span class="text-gray-400 text-sm">/month</span>
          </div>
          <p class="text-[13px] text-gray-400 mb-2 font-medium">
            billed yearly at $5,490
          </p>
          <div class="justify-self-start bg-green-100 text-green-700 text-[12px] font-bold px-3 py-1.5 rounded-full mb-8">
            $1,098 in savings
          </div>
          <NuxtLink to="/checkout?plan=business" class="block w-full py-3 bg-orange-500 text-center text-white font-bold text-sm rounded-lg border-2 border-transparent hover:bg-white hover:border-gray-300 hover:text-gray-700 transition-all mb-8">
            Try It Free
          </NuxtLink>
          <hr class="border-gray-50 mb-8">
          <ul class="grid gap-5">
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="text-[14px] font-semibold text-gray-700 leading-none">Primary user + 6 free team members</span>
                <span class="text-[12px] text-gray-400 font-medium">(extra team members for $20/month)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Save unlimited properties</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700"><b class="text-gray-900">100,000</b> exports</span>
                <span class="text-[12px] text-gray-400">(additional exports at $0.01 each)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-start text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <div class="grid gap-1">
                <span class="font-semibold text-gray-700"><b class="text-gray-900">2,000</b> free skip traces</span>
                <span class="text-[12px] text-gray-400">(additional skip tracing at $0.08 each)</span>
              </div>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Imports $0.01</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">FREE daily product trainings and support</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Full suite of next-gen investing tools</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Industry first AI powered comp tool</span>
            </li>
            <li class="grid grid-cols-[20px_1fr] gap-3 items-center text-[14px]">
              <svg class="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L14.39 8.26H22L15.81 12.74L18.19 20L12 15.52L5.81 20L8.19 12.74L2 8.26H9.61L12 1Z"/></svg>
              <span class="font-semibold text-gray-700">Includes dedicated support agent</span>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>
</template>
