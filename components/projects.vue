<template>
  <section class="bg-alice-blue h-screen py-5">
    <div class="w-9/12 m-auto text-center">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl relative mt-32 inline-block after:content-[''] after:w-7 after:h-1 after:absolute after:left-12 sm:after:left-14 md:after:left-20 lg:after:left-20 xl:after:left-24 after:top-20 lg:after:top-24 after:bg-blue after:rounded"
      >
        Projects
      </h1>
      <p class="text-base sm:text-lg md:text-2xl mt-20 w-5/6 m-auto">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :pagination="true"
        class="mt-30 w-11/12 sm:w-6/12 md:w-7/12 lg:w-4/12 xl:w-3/12"
      >
        <SwiperSlide v-for="project in projects" :key="project" class="py-20">
          <h2 class="text-xl sm:text-2xl text-blue mb-5">{{ project.name }}</h2>
          <p class="mb-10">{{ project.description }}</p>
          <nuxt-link
            :to="project.link"
            class="bg-blue text-white px-16 py-5 rounded-lg hover:bg-chelsea-blue hover:transition-colors"
            target="_blank"
            >Go to project</nuxt-link
          >
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Poem.tm",
          description:
            "Poem.tm is web app for poetry blog of our famous poet Kerim Hally. It was great experience for me ",
          link: "https://poemtm-megamaster.netlify.app",
        },
        {
          name: "PURSAT.TV",
          description:
            "PUSAT.TV is web app for Official reseller of AlemTv. PURSAT.TV offers subscribers more than 135 best international TV channels",
          link: "https://tv-project-megamaster.netlify.app",
        },
        {
          name: "BarberShop",
          description:
            "BarberShop is a app, which i created for my friend. It was my first experience in Vanilla.js",
          link: "https://barbershop-megamaster.netlify.app",
        },
        {
          name: "Forkify",
          description:
            "Forkify offers to user more than 1,000,000 recipes of food",
          link: "https://forkify-megamaster.netlify.app",
        },
        {
          name: "Porten",
          description:
            "Porten is a elegant clothes store. I created this template from scratch using the frontend tools i know",
          link: "https://porten-megamaster.netlify.app",
        },
        {
          name: "Omnifood",
          description:
            "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. ",
          link: "https://omnifood-megamaster.netlify.app",
        },
      ],
    };
  },
};
</script>
