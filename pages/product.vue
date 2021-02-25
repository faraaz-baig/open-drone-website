<template>
  <div class="bg-white">
    <div>
      <div class="flex items-center my-12">
        <h1 class="font-title font-semibold text-2xl">Volant</h1>
        <span
          class="text-xs ml-3 px-1 text-green-500 font-bold rounded-sm bg-opacity-10 bg-gray-800"
          >new</span
        >
      </div>
      <img class="mb-12" src="~/assets/images/drone.gif" alt="drone gif" />
      <div class="pb-12 border-b border-black border-opacity-20">
          <ul class="mx-6" v-for="feature in features" :key="feature">
                <li class="custom list-outside py-5">{{feature}}</li>
            </ul>
      </div>
      <div class="py-12 flex justify-center border-b border-black border-opacity-20">
        <p class="text-center text-base tracking-wide">Questions? Please e-mail: <a class="py-3 font-semibold mail" href="mailto:questions@theopendrone.com">questions@theopendrone.com</a></p>
      </div>
      <div class="py-12">
      <p class="flex justify-center text-center font-title font-semibold text-2xl mb-12">Let Us Help You to Serve Your Customers Faster</p>
      <div class="flex justify-center items-center flex-col">
        <p class="leading-6 font-body max-w-xl text-base tracking-wide text-center">
          We welcome comments and advices about the our steps at our company and
          our projects. Please email <a class="font-semibold mail" href="mailto:communityfeedback@theopendrone.com">communityfeedback@theopendrone.com</a> to share
          your advice.
        </p>
         <nuxt-link to="/" class="uppercase text-white but rounded mt-10 font-bold outline-none bg-blue py-2 px-5">Partner with us</nuxt-link>
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
.mail:hover {
  opacity: 0.7;
}
.but:hover {
  opacity: 0.85;
}
</style>
