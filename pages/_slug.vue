<template>
    <div>
        <div class="py-12 flex flex-col items-center justify-center border-b border-black border-opacity-30">
            <p class="font-title font-semibold text-2xl sm:text-5xl">{{ article.title }}</p>
            <p class="font-body p-2 text-lg sm:text-xl">{{ article.date }}</p>
        </div>
        <article class="prose py-12 mx-auto">
            <nuxt-content :document="article" />
        </article>
        <nuxt-link to="/updates" class="ml-2 text-white">
            <button class=" flex but items-center text-white px-4 py-2 rounded bg-black mx-auto" to="/updates">
            <img class="w-5 opacity-90 mr-2" src="~/assets/images/back.svg" alt="">
            Go Back
            </button>
        </nuxt-link>
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