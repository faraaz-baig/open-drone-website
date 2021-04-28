<template>
  <div class="flex flex-col py-12 border-b border-black border-opacity-20">
    <p class="font-title font-semibold text-2xl mb-12 self-start" id="drone">
      Drone
    </p>
    <img
      class="self-center mb-12 w-96 sm:w-2/3 pointer-events-none"
      src="~/assets/images/drone-trans.png"
      alt="drone-image"
    />
    <div class="flex flex-col lg:flex-row justify-between">
      <p class="font-title font-semibold text-2xl mb-12">Why Drone?</p>
      <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">
        <strong>1. Infrastructure:</strong><br />
        Since drones can fly, and are relatively small, they do not need roads
        or runways to take off (VTOL).
        <br />
        <strong>2. Speed:</strong><br />
        Drones are much faster. Zipline, for example, reduced the speed of blood
        delivery in Rwanda from 3 hours to a mere 15 minutes! Safety: Drones can
        be equipped with multiple safety system, and most importantly, unlike a
        human-operated vehicle, even if a drone fails, there is no loss of life.
        <br />
        <strong>3. Emergency situations:</strong><br />
        drones provide a simpler, contactless alternative. Although drones have
        these great advantages, a major disadvantage is cost, as it gets
        increasingly expensive to create drones for a delivery network. This is
        where our approach differs from others. Instead of creating a product,
        we're creating an open-source framework to allow makerspaces and fablabs
        to create these drones and source them to distribution center, in a
        similar fashion to the M-19 Initiative. By working closely with these
        makerspaces, we can work towards building distribution centers, where
        drones can be supplied and used in a network to intelligently deliver
        medical supplies where they're most needed
      </p>
    </div>
    <div class="flex pt-12 flex-col lg:flex-row justify-between">
      <p class="font-title font-semibold text-2xl mb-12">VTOL</p>
      <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">
        VTOL stands for Vertical Take-Off and Landing, and it is what allows our
        drone to take off from almost anywhere, allowing it to be installed even
        in a small store, something no other delivery drone can do. Tail-sitter
        describes the type of VTOL model we’re using. A tail-sitter drone takes
        off while standing vertically, and transitions into horizontal flight in
        the air. We chose this model due to its simplicity and lack of moving
        parts. BWB stands for Blended Wing Body, and it is a very recent
        technology that is currently being tested for commercial flight. It is
        highly aerodynamic and allows our drone to greatly increase its range.
      </p>
    </div>
  </div>
</template>