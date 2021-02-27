<template>
  <div class="flex flex-col py-12 border-b border-black border-opacity-20">
    <p
      class="font-title font-semibold text-2xl mb-12 self-start"
      id="data-science"
    >
      Data Science
    </p>
    <img
      class="self-center mb-12 w-2/3 pointer-events-none"
      src="~/assets/images/data.png"
      alt="data-visualization-image"
    />
    <div class="flex flex-col lg:flex-row justify-between">
      <p class="font-title font-semibold text-2xl mb-12">What! data science?</p>
      <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">
        Our project is mainly split into two applications of data science:
        <strong>Predictive modeling</strong> and
        <strong>Machine learning</strong>
        <br />
        <br />
        <strong>Predictive modeling:</strong><br />
        We will use various forms of publically available data, such as
        satellite images, population density data and any government data about
        hospital locationsm etc to determine which locations we should focus our
        efforts towards. Based on a heatmap of these locations, and the nearby
        terrain, we can determine what can be used to store and launch the
        drones. Since they are VTOL drones, the infrastrucutre required would be
        minimal, limited to only storage space and charging stations.
        <br />
        <br />
        <strong>Machine learning:</strong> <br />
        To fly the drones effectively, we would need an effective machine
        learning neural network for route selection to minimize population risk
        hazards, and avoid obstacles and restricted areas. Although a large part
        of the system would be identical for all drones, allowing them to learn
        faster, we would need to have some differences based on locality,
        allowing drones to better adapt to the local environment. This would
        also become especially important for maintaining airspace regulations,
        as those can vary dramatically.
      </p>
    </div>
    <div class="flex pt-12 flex-col lg:flex-row justify-between">
      <p class="font-title font-semibold text-2xl mb-12">
        How we Collect Data?
      </p>
      <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">
        To help with demographics, we are looking to use publically available
        data, from satellite images, government data, and any other local
        sources. Based on these criteria, we can further refine data points
        through surveys at targeted locations to gain a more qualitative
        understanding of the locality from the locals themselves. These
        datapoints, along with qualitative points from market consultants would
        help us figure out where we need to deliver supplies and what our
        distribution center should be. <br /><br />
        We have been looking at using satellite images from OSMnx, and mapping
        algorithms for navigational use. Since we are looking at delivering to
        multipe locations, these maps allow us to deliver supplies without a
        'blind' drop, which helps us ensure they land in an accessible location.
        The maps are updated regularly by Microsoft. Despite that, we will also
        add our own sensors to add another level of accuracy, accounting for
        potential changes after the terrain was mapped. Using such mapping
        software for drone flight would be a potentially novel application of
        data science that can make a global drone fleet a more feasible task.
      </p>
    </div>
    <div class="flex pt-12 flex-col lg:flex-row justify-between">
      <p class="font-title font-semibold text-2xl mb-12">
        Our Ethical Practices.
      </p>
      <p class="leading-8 font-body text-base tracking-wide lg:max-w-2xl">
        Most importantly, we are not going to collect any personal data. We will
        be looking at demographics and statistics, but nothing will be collected
        on the individual level. <br><br> Moreover, since most of our data is publically
        available, there are no ethics issues for collection or security. <br><br>
        Finally, we will guarantee safe and secure storage of any consumer data
        we have collected and will be completely transparent on our website
        about the uses of said data
      </p>
    </div>
  </div>
</template>
