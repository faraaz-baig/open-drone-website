<template>
    <footer class="mt-48 pb-20 flex flex-col items-center">
        <p class="pb-12 text-center font-body break-words font-normal text-xs sm:text-sm">For all media enguires, please contact <a class="font-semibold mail" href="mailto:media@theopendrone.com">media@theopendrone.com</a></p>
        <div class="flex w-20 sm:w-32 justify-evenly pb-4">
          <a class="px-2 but" href="#"
            ><img src="~/assets/images/twitter.svg" alt="twitter"
          /></a>
          <a class="pr-2 but" href="#"
            ><img src="~/assets/images/linkedin.svg" alt="linkedin"
          /></a>
          <a class="pr-2 but" href="#"
            ><img src="~/assets/images/instagram.svg" alt="instagram"
          /></a>
        </div>
        <p class="text-black text-xs sm:text-sm text-opacity-50">The Open Drone. © 2021</p>
    </footer>
</template>

<script>
    export default {
        
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