<template>
  <div class="bg-white">
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12">A New Kind of Business</p>
      <p class="leading-8 font-body text-base tracking-wide">
        With a combination of mobile technology, autonomous drones and
        our strong network of local businesses, hospitals, logistics businesses and restaurants, we make local delivery faster,
        safe and more affordable.
      </p>
    </div>
    <div class="py-12 border-b border-black border-opacity-20">
      <div class="flex justify-center lg:justify-start">
        <p class="font-title text-2xl font-semibold sm:text-2xl mb-12">Get Started in 3 Easy Steps</p>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center pt-12 sm:pt-12 pb-32 px-4">
        <img class="w-36 mb-20 md:0" src="~/assets/images/alien.svg" alt="alien" />
        <div>
            <p class="font-title font-semibold text-2xl mb-12">1. Register On Our Node Network</p>
            <p class="max-w-sm text-sm sm:text-base leading-8">
            With help of our mobile application you can easily apply 
            to be part of our network of delivery drones. However, This process 
            reguires strict documentation.
            </p>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row justify-between items-center by-32 px-4">
        <div>
            <p class="font-title font-semibold text-2xl mb-12">2. Get Verified to Use Our Network</p>
            <p class="max-w-sm text-sm sm:text-base leading-8">
            Our team goes to your request and verifies the submitted documentation
            and the location of your business. Soon after been accepted in 
            you unlock all our apps features.
            </p>
        </div>
        <img class="w-40 mb-20 md:0" src="~/assets/images/radar.svg" alt="alien" />
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center pt-32 px-4">
        <img class="w-48 mb-20 md:0" src="~/assets/images/ufo.svg" alt="alien" />
        <div>
            <p class="font-title font-semibold text-2xl mb-12">3. Start Delivering Like an UFO</p>
            <p class="max-w-sm text-sm sm:text-base leading-8">
            Congratulations! Now you are officially part of open drone network.
            You can now delivery to your customers in less than 5 mins and 
            start growing with us. 
            </p>
        </div>
      </div>
    </div>
    <div class="py-12 flex justify-center border-b border-black text-base text-center tracking-wide border-opacity-20">
      <p>Questions? Please e-mail: <a class="py-3 font-semibold mail" href="mailto:questions@theopendrone.com">questions@theopendrone.com</a></p>
    </div>
    <div class="py-20">
      <p class="flex justify-center text-center font-semibold font-title text-2xl mb-12">Let Us Help You Serve Your Customers Faster</p>
      <div class="flex justify-center items-center flex-col">
        <p class="leading-6 max-w-xl font-body text-base tracking-wide text-center">
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
  data: () => {
    return {
        description:"The Open Drone is a group of young individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery accessibility and infrastructure.",
        name: 'About',
    }
  },
   head() {
    return {
        meta: [{
            hid: 'description',
            name: 'description',
            content: this.description}, 
            {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: `The Open Drone | ${this.name}`}, 
            {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: `The Open Drone | ${this.name}`}, 
            {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: this.description}, 
            {
            hid: 'og:title',
            name: 'og:title',
            content: `The Open Drone | ${this.name}`}, 
            {
            hid: 'og:description',
            name: 'og:description',
            content: this.description}]
    }
  }
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

