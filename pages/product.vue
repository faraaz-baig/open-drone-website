<template>
  <div class="bg-white">
    <div>
      <div class="flex items-center my-12">
        <h1 class="font-title font-semibold text-2xl">Volant I</h1>
        <span
          class="text-xs ml-3 px-1 py-1 text-red-500 font-bold rounded-sm bg-opacity-10 bg-gray-800"
          >discountinued</span
        >
      </div>
      <img
        class="mb-12 pointer-events-none"
        src="~/assets/images/drone.gif"
        alt="drone gif"
      />
      <div class="pb-12 border-b border-black border-opacity-20">
        <ul class="mx-6" v-for="feature in features" :key="feature">
          <li class="custom list-outside py-5">{{ feature }}</li>
        </ul>
      </div>

      <div class="flex items-center my-12">
        <h1 class="font-title font-semibold text-2xl">Volant II</h1>
        <span
          class="text-xs ml-3 px-1 text-green-500 font-bold rounded-sm bg-opacity-10 bg-gray-800"
          >new</span
        >
      </div>
      <video autoplay loop muted class="mb-12 pointer-events-none">
        <source src="~/assets/images/drone.webm" type="video/webm" />
      </video>
      <div class="pb-12 border-b border-black border-opacity-20">
        <ul class="mx-6" v-for="feature in features" :key="feature">
          <li class="custom list-outside py-5">{{ feature }}</li>
        </ul>
      </div>
      <div
        class="py-12 flex justify-center border-b border-black border-opacity-20"
      >
        <p class="text-center text-base tracking-wide">
          Questions? Please e-mail:
          <a
            class="py-3 font-semibold mail"
            href="mailto:questions@theopendrone.com"
            >questions@theopendrone.com</a
          >
        </p>
      </div>
      <div class="py-12">
        <p
          class="flex justify-center text-center font-semibold font-title text-2xl mb-12"
        >
          Let Us Help You Serve Your Customers Faster
        </p>
        <div class="flex justify-center items-center flex-col">
          <p
            class="leading-6 max-w-xl font-body text-base tracking-wide text-center"
          >
            What are you waiting for? Let us help you serve your customers
            faster and help you grow.
          </p>
          <nuxt-link
            to="/"
            class="uppercase but text-white rounded mt-10 font-bold outline-none bg-blue py-2 px-5"
            >Partner with us</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data: () => {
    return {
      features: [
        "For security, the Drone is mechanically locked throughout the journey and can be opened only by the recipient with their smartphone app.",
        "The location of the drone is tracked, so you know exactly the location of your order and receive a notification at the time of arrival.",
        "The entire delivery platform is both energy- and cost efficient. In comparison to more traditional delivery services.",
        "As an electronically powered drones, our system is incredibly clean and incredibly green. It’s both good for the planet and for your business.",
        "Parcels, groceries, medicines and food are directly delivered from stores (in range of 12 kms), at the time that the customer requests via our mobile app.",
      ],
      description:
        "The Open Drone is a group of young individuals that share a passion to innovate within the logistics industry to dramatically improve drone delivery accessibility and infrastructure.",
      name: "Product",
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: `The Open Drone | ${this.name}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `The Open Drone | ${this.name}`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: `The Open Drone | ${this.name}`,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom {
  list-style-image: url("~/assets/images/point.svg");
  list-style-position: outside;
}
.mail:hover {
  opacity: 0.7;
}
.but:hover {
  opacity: 0.85;
}
</style>
