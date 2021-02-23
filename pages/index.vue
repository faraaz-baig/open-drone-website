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
            <form class="flex flex-col items-center justify-center">
              <input
                class=" outline-none w-full email mb-6 h-10 sm:h-12 px-6"
                placeholder="Your Email"
                v-model="email"
                required
                type="email"
              />
              <button
                class=" outline-none bg-gradient-to-r from-blue to-light-blue text-xs sm:text-base p-3 w-full sm:w-2/3 rounded-lg"
              >
              Partner With Us
              </button>
            </form>
        </div>
      </div>
    </div>
    <Landingsection />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: ''
    }
  },
};
</script>

<style scoped>
.home {
  background-image: url("~/assets/images/background.png");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (max-width: 1200px) {
  /*.home {
  background-image: url("~/assets/images/wall.png");
  }*/
}

.email {
  background: rgba(38, 38, 38, 0.92);
  box-shadow: 0px 4px 40px #000000;
  border-radius: 10px;
}
::placeholder {
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #a5a5a5;
}
@media only screen and (max-width: 480px) {
  ::placeholder {
    font-size: 12px;
  }
}

input:focus,
button {
  outline: none;
}

button:hover {
  background: linear-gradient(90deg, #348cf1 0.71%, #0077ff 100%);
}
input:focus {
  border: solid 1px #0077ff;
}
.h {
  height: 75vh;
}


</style>
