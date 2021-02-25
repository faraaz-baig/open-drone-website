<template>
  <div class="bg-white">
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12">Frequently Asked Questions</p>
      <p class="leading-8 font-body text-base tracking-wide">
        To solve the problem of soul-destroying traffic, roads must go 3D, which
        means either flying cars or tunnels are needed. Unlike flying cars,
        tunnels are weatherproof, out of sight, and won't fall on your head. A
        large network of tunnels many levels deep would help alleviate
        congestion in any city. No matter how large a city grows, more levels
        can always be added. Created by Elon Musk, founder of Tesla and SpaceX,
        The Boring Company (TBC) constructs safe, fast-to-dig, and low-cost
        transportation, utility, and freight tunnels. Our public transportation
        solution, Loop, is designed to be the fastest and safest system ever.
        Select one of the following topics below to learn more.
      </p>
      <div class="flex flex-wrap justify-center md:justify-between items-center mt-16 text-center">
        <nuxt-link class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32" :to="{hash:'#drone'}">Drone</nuxt-link>
        <nuxt-link class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32" :to="{hash:'#drone'}">Payload</nuxt-link>
        <nuxt-link class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32" :to="{hash:'#drone'}">Application</nuxt-link>
        <nuxt-link class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32" :to="{hash:'#drone'}">Nodes</nuxt-link>
        <nuxt-link class="py-2 but rounded mb-4 text-white font-medium outline-none bg-fa-black w-80 sm:mr-4 md:w-32" :to="{hash:'#drone'}">Logistics</nuxt-link>
      </div>   
                   
    </div>
    <div class="flex flex-col py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12 self-start" id="drone">Drone</p>
      <img class="self-center mb-12" src="~/assets/images/home-drone.png" alt="drone-image" />
      <div class="flex flex-col lg:flex-row justify-between">
        <p class="font-title font-semibold text-2xl mb-12">Why Drone?</p>
        <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">
          Unlimited capacity: There is no practical limit to how many layers of
          tunnels can be built, so any current or future capacity outcome can be
          achieved. This flexibility contrasts with a surface system, where
          adding a lane to the road is often difficult. Minimal land use:
          Tunnels minimize the use of valuable surface land. Tunnels also do not
          conflict with currently operating transportation systems, such as
          roads and sidewalks. Minimal surface impact: Tunnel construction and
          operation do not create any discernible surface noise or vibration.
          Tunnel construction and operation are invisible, silent, and
          undetectable. Weatherproof operation: Rain, snow, wind, and surface
          temperatures do not affect system operation. Flexible architecture:
          Architecture can flexibly support different types of transportation
          (public transportation, moving sidewalks, pedestrian walkways, and
          freight). Future expansion: For the reasons listed above, it is much
          simpler to extend a tunnel-based system than a surface-based system.
        </p>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-between py-12">
        <p class="font-title font-semibold text-2xl mb-12">How can I share feedback?</p>
        <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">We welcome comments and questions about the company, TBM technology, and our projects. Please email <a class="font-semibold mail" href="mailto:communityfeedback@theopendrone.com">communityfeedback@theopendrone.com</a> to share your feedback. </p>
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

