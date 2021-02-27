<template>
   <nav class="flex justify-between items-center p-10 w-full">
        <div class="outline-none">
          <nuxt-link to="/"
            ><img class="w-24 sm:w-30" src="~/assets/images/logo-black.svg" alt="logo"
          /></nuxt-link>
        </div>
        <div class="font-sans text-fa-black text-sm font-bold hidden sm:flex">
          <nuxt-link class="pr-10" to="/about">ABOUT</nuxt-link>
          <nuxt-link class="pr-10" to="/product">PRODUCT</nuxt-link>
          <nuxt-link class="pr-10" to="/updates">UPDATES</nuxt-link>
          <nuxt-link class="pr-10" to="/jobs">JOBS</nuxt-link>
          <nuxt-link to="/faq">FAQ</nuxt-link>
        </div>
      </nav>
</template>
