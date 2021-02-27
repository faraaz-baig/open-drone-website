<template>
  <div class="text-fa-black ">
    <div class=" home min-h-screen">
      <Header />
      <div class="px-10 flex flex-col items-center h justify-center">
        <div class="lg:max-w-xl xl:max-w-2xl">
          <div class="mb-6">
            <p
              class="text-4xl sm:text-6xl md:text-6xl lg:text-6xl 2xl:text-7xl font-title font-bold"
            >
              Drone Delivery<br />for Every Business
            </p>
          </div>
          <div class="mb-6">
            <p
              class=" text-fa-black text-xs sm:text-base max-w-xs sm:max-w-md md:max-w-md xl:max-w-md 2xl:max-w-lg font-body leading-5 my-1 sm:leading-7"
            >
              Instead of building warehouses and large centers, we're focused on
              only bringing what is necessary - the drone itself, so that anyone
              can use our delivery in no time.
            </p>
          </div>
            <Email/>
        </div>
      </div>
    </div>
    <Landingsection />
    <Navmain />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
        description:"The Open Drone is a group of young individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery accessibility and infrastructure.",
        name: 'Home',
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
.home {
  background-image: url("~/assets/images/bg-light.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}


.h {
  height: 75vh;
}


</style>
