<template>
  <nuxt-layout>
    <section
      id="home"
      class="bg-alice-blue h-screen flex justify-between items-center flex-col px-1 pt-72 pb-2"
    >
      <div class="text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-10 bold">
          Hello! I'm Muhammetaly Yuzbashyev
        </h1>
        <p class="text-base sm:text-lg md:text-2xl mb-20">
          I'm a Web Developer specializing in Frontend of Websites and Web
          Applications that won't leave you behind
        </p>
        <a
          href="#projects"
          class="text-base sm:text-lg lg:text-xl inline-block bg-chelsea-blue text-white px-20 py-5 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:transition-transform hover:duration-500 hover:ease-in-out"
        >
          Projects
        </a>
      </div>
      <div class="w-7 h-12 border-2 rounded-xl relative">
        <span
          class="absolute w-2 h-2 bg-blue left-1/2 top-2 -translate-x-1/2 rounded-full animate-wheel"
        ></span>
      </div>
    </section>
    <about id="about" />
    <projects id="projects" />
    <contact id="contact" />
  </nuxt-layout>
</template>
