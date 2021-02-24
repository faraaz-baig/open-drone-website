<template>
    <div class="flex flex-col items-center border-b border-white border-opacity-20">
        <div class="font-sans text-sm font-bold hidden sm:flex p-10">
          <nuxt-link class="mr-20 pb-1" to="/about">ABOUT</nuxt-link>
          <nuxt-link class="mr-20 pb-1" to="/product">PRODUCT</nuxt-link>
          <nuxt-link class="mr-20 pb-1" to="/updates">UPDATES</nuxt-link>
          <nuxt-link class="mr-20 pb-1" to="/jobs">JOBS</nuxt-link>
          <nuxt-link to="/faq">FAQ</nuxt-link>
        </div>
    </div>
</template>
<style scoped>
.nuxt-link-exact-active, .nuxt-link-active {
    border-bottom: solid 2px #348cf1;
}
</style>