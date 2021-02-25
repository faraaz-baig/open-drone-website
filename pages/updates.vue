<template>
  <div>
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12">Progress Updates</p>
      <p class="leading-8 font-body text-base tracking-wide">
        We post our journey and Progress on this part of the webiste.
        This helps us being accountable to our community of people/businesses who want to see
        us succeed. People who are interested to know more about our company and they want to 
        follow our progress, This is the place you need to be in. We do our best to cover all the details of our progress in less words as possible so only the key and major points are put across. 
      </p>
    </div>
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12">Weekly Updates</p>
      <div class="article" v-for="article in articles" :key="article">
        <nuxt-link class="flex flex-col md:flex-row items-center border rounded-xl p-12 mb-12 border-black border-opacity-30" :to="{ name: 'slug', params: { 'slug': article.slug } }">
          <img class="w-44 rounded-xl" :src="require(`~/assets/images/${article.img}`)" alt="blog image">
          <div class="md:ml-20 text-center md:text-left">
            <p class="mt-4">{{ article.date }}</p>
            <p class="font-title font-semibold text-lg sm:text-2xl mb-3">{{ article.title }}</p>
            <p class="text-xs sm:text-sm md:font-base tracking-wide  leading-5">{{ article.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class=" flex flex-col justify-between md:flex-row py-12 border-b border-black border-opacity-20">
        <p class="font-title font-semibold text-2xl mb-12">Share your Advice </p>
        <p class="max-w-lg leading-6 font-body text-base break-words tracking-wide">We welcome comments and advices about the our steps at our company and our projects. Please email <a class="font-semibold mail" href="mailto:communityfeedback@theopendrone.com">communityfeedback@theopendrone.com</a> to share your advice or feedback. </p>
    </div>
    <div class="py-12">
      <p class="flex justify-center text-center font-semibold font-title text-2xl mb-12">Let Us Help You to Serve Your Customers Faster</p>
      <div class="flex justify-center items-center flex-col">
        <p class="leading-6 max-w-xl break-words font-body text-base tracking-wide text-center">
         What are you waiting for? Let us help you serve your customers faster and help you grow.
        </p>
         <nuxt-link to="/" class="uppercase but text-white rounded mt-10 font-bold outline-none bg-blue py-2 px-5">Partner with us</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  async asyncData({ $content, params}) {
    const articles = await $content('updates', params.slug)
    .sortBy('createdAt', 'desc')
    .fetch();

    return {
      articles
    }
  },
};
</script>

<style scoped>
  .mail:hover {
    opacity: 0.7;
  }
  .but:hover {
    opacity: 0.9;
  }
</style>
