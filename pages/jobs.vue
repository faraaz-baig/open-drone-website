<template>
  <div class="bg-black">
    <div class="py-12 border-b border-white border-opacity-20">
      <p class="font-title text-2xl mb-12">Jobs</p>
      <p class="leading-8 font-body text-base tracking-wider">
        The Open Drone is a group of individuals that share a passion to
        innovate within the logistics industry to dramatically improve drone
        delivery and drone infrastructure worldwide. We're looking for top
        talent ready to get their hands dirty to make a meaningful impact that
        will last for generations to come. We are an equal opportunity employer
        offering competitive salaries, comprehensive health benefits, and equity
        packages.
      </p>
    </div>
    <div class="py-12 border-b border-white border-opacity-20">
      <p class="font-title text-2xl mb-12">Engineering</p>
      <div class="font-body flex justify-between">
        <a href="#"><p class="underline">Electical Engineer</p></a>
        <p class="text-white text-opacity-50">Bengaluru, India</p>
      </div>
    </div>
    <div class="py-12 border-b border-white border-opacity-20">
      <p class="font-title text-2xl mb-12">Didn’t Find Your Matching Role?</p>
      <p class="leading-8 font-body text-base tracking-wider">
        Dont worry. please apply to <span class="underline"><a href="mailto:careers@theopendrone.com">careers@theopendrone.com</a></span> by sending your
        resume cover letter and tell us why you’d love to work with us. And
        we’ll reach out if/when we have a fit that matches your skill-set.
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

<style scoped></style>
