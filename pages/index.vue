<template>
  <div class="text-white ">
    <div class=" home flex flex-col min-h-screen">
      <nav class="flex justify-between items-center p-10 w-full">
        <div>
            <nuxt-link to="/"><img src="~/assets/images/logo.svg" alt="logo"></nuxt-link>
        </div>
        <div class="flex font-sans text-sm font-bold">
            <nuxt-link class="pr-10" to="/about">ABOUT</nuxt-link>
            <nuxt-link class="pr-10" to="/product">PRODUCT</nuxt-link>
            <nuxt-link class="pr-10" to="/updates">UPDATES</nuxt-link>
            <nuxt-link class="pr-10" to="/jobs">JOBS</nuxt-link>
            <nuxt-link to="/faq">FAQ</nuxt-link>
        </div> 
      </nav>
      <div class="p-10 flex flex-col h-full content-center justify-center">
        <div class="max-w-lg mb-6">
          <p class="text-6xl font-title font-bold">Drone Delivery<br>for Every Business.</p>
        </div>
        <div class="mb-6">
          <p class="max-w-lg font-body leading-7">Instead of building warehouses and large centers, we're focused on only bringing what is necessary - the drone itself, so that anyone can use our delivery in no time.</p>
        </div>
        <div class="max-w-2xl">
          <input class="email w-1/2 h-12 mr-4 p-6" type="text" placeholder="Your Email">
          <button class="bg-gradient-to-r from-blue to-light-blue px-8 py-3 rounded-lg">Partner With Us</button>
        </div>
      </div>
    </div>
      <div class=" flex flex-col justify-between bg-fa-black min-h-screen">
        <div class="self-center mt-12">
          <img src="~/assets/images/home-drone.png" alt="drone image">
        </div>
        <div class="flex flex-col mb-64">
          <p class="self-center font-title font-bold text-6xl"><Type /></p>
          <div class=" my-4 mx-auto text-center text-body max-w-2xl">
            <p class="leading-7">The Open Drone is a group of individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery and drone infrastructure worldwide.</p>
          </div>
        </div>
        <footer class="self-center pb-6 flex flex-col">
          <div class="flex self-center pb-4">
            <a class="pr-2" href="#"><img src="~/assets/images/twitter.svg" alt="twitter"></a>
            <a class="pr-2" href="#"><img src="~/assets/images/linkedin.svg" alt="linkedin"></a>
            <a class="pr-2" href="#"><img src="~/assets/images/instagram.svg" alt="instagram"></a>
          </div>
          <p class="text-grey text-opacity-50 mx-auto">The Open Drone. © 2021</p>
        </footer>
      </div>
  </div>
</template>

<script>
export default {

}
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
  .home {
  background-image: url("~/assets/images/wall.png");
}
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
  color: #A5A5A5;

}
input:focus, button{
    outline: none;
}

button:hover {
  background: linear-gradient(90deg, #348CF1  0.71%, #0077FF 100%);
}
input:focus {
  border: solid 1px #0077FF;
}
</style>
