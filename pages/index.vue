<template>
  <div class="text-white ">
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
              class=" text-gray-300 text-xs sm:text-base max-w-xs sm:max-w-md md:max-w-md xl:max-w-md 2xl:max-w-lg font-body leading-5 my-1 sm:leading-7"
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
    <Navhome />
  </div>
</template>


<style scoped>
.home {
  background-image: url("~/assets/images/background.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.h {
  height: 75vh;
}


</style>
