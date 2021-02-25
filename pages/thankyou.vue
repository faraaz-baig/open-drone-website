<template>
  <div class="py-12 text-center border-b border-black border-opacity-20">
    <p class="font-title text-xl sm:text-2xl lg:text-3xl font-semibold mb-12">
      Thank you for reaching out to us 🖤.
    </p>
    <p class="pb-1">
      Currently we are helping businesses just like yours to deliver faster with
      our drones. We will get back to you as soon as we check our mailbox.
    </p>
    <p class="pb-12">
      Until then you can learn more about how you can get started working with
      us <nuxt-link class=" info font-semibold mail" to="/about">here</nuxt-link>.
    </p>
    <p>
      If It's urgent try dropping an email at
      <a class="font-semibold mail" href="mailto:urgent@theopendrone.com"
        >urgent@theopendrone.com</a
      >
    </p>
  </div>
</template>

<script>
export default {
  layout: "main"
};
</script>

<style scoped>
.info:hover {
    text-decoration: underline;
}
.mail:hover {
    opacity: 0.7;
}
</style>
