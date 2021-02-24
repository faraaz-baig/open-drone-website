<template>
  <div class="bg-black">
    <div>
      <div class="flex items-center my-12">
        <h1 class="font-title text-2xl">Volant</h1>
        <span
          class="text-xs ml-3 px-1 text-green-700 font-bold rounded-sm bg-opacity-40 bg-gray-800"
          >new</span
        >
      </div>
      <img class="my-32 mx-auto w-3/5" src="~/assets/images/drone.gif" alt="drone gif" />
      <div class="pb-20 border-b border-white border-opacity-20">
          <ul class="mx-6" v-for="feature in features" :key="feature">
                <li class="custom list-outside py-5">{{feature}}</li>
            </ul>
      </div>
      <div class="py-20 flex justify-center border-b border-white border-opacity-20">
        <p class="text-center">Questions? Please e-mail: <a class="py-3 underline" href="mailto:questions@theopendrone.com">questions@theopendrone.com</a></p>
      </div>
      <div class="py-20">
      <p class="flex justify-center text-center font-title text-2xl mb-12">Let Us Help You to Serve Your Customers Faster</p>
      <div class="flex justify-center items-center flex-col">
        <p class="leading-6 font-body text-sm max-w-xl md:font-base text-center tracking-wide">
          We welcome comments and advices about the our steps at our company and
          our projects. Please email <a class="underline" href="mailto:communityfeedback@theopendrone.com">communityfeedback@theopendrone.com</a> to share
          your advice.
        </p>
         <nuxt-link to="/" class="uppercase mt-10 font-bold outline-none bg-gradient-to-r from-blue to-light-blue py-2 px-5">Partner with us</nuxt-link>
      </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
  layout: "main",
  data: () => {
    return {
      features: [
        "Fire extinguisher sold separately",
        "Additional customs fees may apply for international orders because of laws",
        "International customers can receive a full refund if not happy with said fees",
        "Before shipping, aspiring flamethrower aficionados will be sent a terms and conditions rhyme for review and acceptance",
        "May not be used on Boring Company decorative lacquered hay bales or Boring Company dockside munitions warehouses"
      ]
    };
  }
};
</script>

<style scoped>
.custom {
    list-style-image: url('~/assets/images/point.svg');
    list-style-position: outside;
}
</style>
