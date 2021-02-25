<template>
  <div class="bg-white">
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title text-2xl font-semibold mb-12">Jobs</p>
      <p class="leading-7 font-body text-base tracking-wide">
        The Open Drone is a group of young individuals that share a passion to
        innovate within the logistics industry to dramatically improve drone
        delivery and drone infrastructure worldwide. We're looking for top
        talent ready to get their hands dirty to make a meaningful impact that
        will last for generations to come.
      </p>
    </div>
    <div class="py-12 border-b border-black border-opacity-20">
      <p class="font-title font-semibold text-2xl mb-12">Engineering</p>
      <div class="font-body flex justify-between my-6">
        <a href="#"><p class="underline">Mechanical Engineering Intern</p></a>
        <p class="text-black text-opacity-50">Bengaluru, India</p>
      </div>
       <div class="font-body flex justify-between my-6">
        <a href="#"><p class="underline">Embedded Systems Intern</p></a>
        <p class="text-black text-opacity-50">Bengaluru, India</p>
      </div>
       <div class="font-body flex justify-between my-6">
        <a href="#"><p class="underline">Flight Test Engineer</p></a>
        <p class="text-black text-opacity-50">Mumbai, India</p>
      </div>
    </div>
    <div class="py-12">
      <p class="font-title font-semibold text-2xl mb-12">Didn’t Find Your Matching Role?</p>
      <p class="leading-8 font-body text-base tracking-wide">
        Dont worry. please apply to <span class="font-semibold mail"><a href="mailto:careers@theopendrone.com">careers@theopendrone.com</a></span> by sending your
        resume cover letter and tell us why you’d love to work with us. And
        we’ll reach out when we have a fit that matches your skill-set.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data: () => {
    return {
      jobs: []
    };
  }
};
</script>

<style scoped>
  .mail:hover {
    opacity: 0.7;
  }
</style>
