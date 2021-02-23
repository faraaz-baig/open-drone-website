<template>
    <div class="flex flex-col items-center border-b border-white border-opacity-20 p-20">
        <nuxt-link to="/">
            <img class="w-56" src="~/assets/images/logo.svg" alt="logo"/>
        </nuxt-link>
        <div class="font-sans text-sm font-bold hidden sm:flex mt-24">
          <nuxt-link class="mr-20 pb-1" to="/about">ABOUT</nuxt-link>
          <nuxt-link class="mr-20 pb-1" to="/product">PRODUCT</nuxt-link>
          <nuxt-link class="mr-20 pb-1" to="/updates">UPDATES</nuxt-link>
          <nuxt-link class="mr-20 pb-1" to="/jobs">JOBS</nuxt-link>
          <nuxt-link to="/faq">FAQ</nuxt-link>
        </div>
    </div>
</template>
<style scoped>
.nuxt-link-exact-active {
    border-bottom: solid 2px #348cf1;
}
</style>