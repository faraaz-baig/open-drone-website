<template>
  <div class="bg-white">
    <div class="py-12 border-b border-black border-opacity-20" id="#top">
      <p class="font-title font-semibold text-2xl mb-12">
        Frequently Asked Questions
      </p>
      <p class="leading-8 font-body text-base tracking-wide">
        We are building a drone system that does not require any infrastructure,
        allowing us to implement this in remote areas, bringing down delivery
        times from hours to minutes. Drone delivery is something that has been
        worked on for a long time, but governments have only recently allowed
        drone systems to operate commercially. What sets us apart is that we're
        building a service for those who are not large enough to do business
        with the giants in the space. Instead of building warehouses and large
        centers, we're focused on only bringing what is necessary - the drone
        itself, so that anyone can use delivery, even those in the most remote
        areas.
        <br />
        <br />
        Created by Passionate teenagers, The Open Drone is disrupting last
        minute delivery in urban and rural areas. Our Drones is designed to be
        the fastest and safest system ever.
        <br />
        <br />
        Select one of the following topics below to learn more.
      </p>
      <div
        class="flex flex-wrap justify-center md:justify-between items-center mt-16 text-center"
      >
        <nuxt-link
          class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32"
          :to="{ hash: '#drone' }"
          >Drone</nuxt-link
        >
        <nuxt-link
          class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32"
          :to="{ hash: '#data-science' }"
          >Data Science</nuxt-link
        >
        <nuxt-link
          class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32"
          :to="{ hash: '#mission' }"
          >Mission</nuxt-link
        >
        <nuxt-link
          class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32"
          :to="{ hash: '#open-source' }"
          >Open Source</nuxt-link
        >
        <nuxt-link
          class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32"
          :to="{ hash: '#algorithm' }"
          >Algorithm</nuxt-link
        >
      </div>
    </div>
    <Drone />
    <Datascience />
    <Mission />
    <Opensource />
    <Algorithm />
    <div class="flex flex-col lg:flex-row justify-between py-12">
      <p class="font-title font-semibold text-2xl mb-12">
        How can I share feedback?
      </p>
      <p
        class="leading-8 font-body break-words text-base tracking-wide lg:max-w-2xl"
      >
        We welcome comments and questions about the company, TBM technology, and
        our projects. Please email
        <a
          class="font-semibold mail"
          href="mailto:communityfeedback@theopendrone.com"
          >communityfeedback@theopendrone.com</a
        >
        to share your feedback.
      </p>
    </div>
    <nuxt-link :to="{ hash: '#top'}" class="fixed hidden sm:flex bottom-4 right-4">
        <button class=" flex but items-center text-white px-4 py-2 rounded bg-black mx-auto">
          <img class="w-5 opacity-90" src="~/assets/images/top.svg" alt="">
        </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "main"
};
</script>
<style scoped>
.mail:hover {
  opacity: 0.7;
}
.but:hover {
  opacity: 0.85;
}
</style>
