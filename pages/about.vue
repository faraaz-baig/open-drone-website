<template>
  <div class="bg-white">
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12">A New Kind of Business</p>
      <p class="leading-8 font-body text-base tracking-wide">
        With a combination of mobile technology, autonomous robots and
        partnerships with stores and restaurants, we make local delivery faster,
        smarter and more cost-efficient.
      </p>
    </div>
    <div class="py-12 border-b border-black border-opacity-20">
      <div class="flex justify-center lg:justify-start">
        <p class="font-title text-2xl font-semibold sm:text-2xl mb-12">Get Started in 3 Easy Steps</p>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center pt-12 sm:pt-12 pb-32 px-4">
        <img class="w-36 mb-20 md:0" src="~/assets/images/alien.png" alt="alien" />
        <div>
            <p class="font-title font-semibold text-2xl mb-12">1. Register On Our Node Network</p>
            <p class="max-w-sm text-sm sm:text-base leading-8">
            With a combination of mobile technology, autonomous robots and
            partnerships with stores and restaurants, we make local delivery
            faster, smarter and more cost-efficient.
            </p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row justify-between items-center by-32 px-4">
        <div>
            <p class="font-title font-semibold text-2xl mb-12">2. Get Verified to User Our Network</p>
            <p class="max-w-sm text-sm sm:text-base leading-8">
            With a combination of mobile technology, autonomous robots and
            partnerships with stores and restaurants, we make local delivery
            faster, smarter and more cost-efficient.
            </p>
        </div>
        <img class="w-40 mb-20 md:0" src="~/assets/images/radar.png" alt="alien" />
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center pt-32 px-4">
        <img class="w-48 mb-20 md:0" src="~/assets/images/ufo.png" alt="alien" />
        <div>
            <p class="font-title font-semibold text-2xl mb-12">3. Start Delivering Like an UFO</p>
            <p class="max-w-sm text-sm sm:text-base leading-8">
            With a combination of mobile technology, autonomous robots and
            partnerships with stores and restaurants, we make local delivery
            faster, smarter and more cost-efficient.
            </p>
        </div>
      </div>
    </div>
    <div class="py-12 flex justify-center border-b border-black text-base text-center tracking-wide border-opacity-20">
      <p>Questions? Please e-mail: <a class="py-3 font-semibold mail" href="mailto:questions@theopendrone.com">questions@theopendrone.com</a></p>
    </div>
    <div class="py-20">
      <p class="flex justify-center text-center font-semibold font-title text-2xl mb-12">Let Us Help You to Serve Your Customers Faster</p>
      <div class="flex justify-center items-center flex-col">
        <p class="leading-6 max-w-xl font-body text-base tracking-wide text-center">
          We welcome comments and advices about the our steps at our company and
          our projects. Please email <a class="font-semibold mail" href="mailto:communityfeedback@theopendrone.com">communityfeedback@theopendrone.com</a> to share
          your advice.
        </p>
         <nuxt-link to="/" class="uppercase but text-white rounded mt-10 font-bold outline-none bg-blue py-2 px-5">Partner with us</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main"
}
</script>
<style scoped>
  .mail:hover {
    opacity: 0.7;
  }
  .but:hover {
    opacity: 0.85;
  }
</style>

