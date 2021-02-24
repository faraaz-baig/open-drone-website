<template>
    <div>
        <div class="py-12 flex flex-col items-center justify-center border-b border-black border-opacity-30">
            <p class="font-title font-semibold text-5xl">{{ article.title }}</p>
            <p class="font-body p-2 text-xl">{{ article.date }}</p>
        </div>
        <article class="prose py-12 mx-auto">
            <nuxt-content :document="article" />
        </article>
        <button class="flex but items-center text-white px-4 py-2 rounded bg-black mx-auto">
            <img class="w-5 opacity-90" src="~/assets/images/back.svg" alt="">
            <nuxt-link class="ml-2 text-white" to="/updates">Go Back</nuxt-link>
        </button>
    </div>
</template>

<script>
    export default {

        async asyncData({ $content, params }) {
            const article = await $content('updates', params.slug).fetch();

            return { article }
        },
        layout: 'main'
    }
</script>

<style scoped>
    .but:hover {
        opacity: 0.85;
    }
</style>