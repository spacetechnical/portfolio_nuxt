<template>
  <section class="py-5">
    <div class="w-9/12 m-auto flex flex-col items-center">
      <div class="text-center">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-32 relative inline-block after:content-[''] after:w-7 after:h-1 after:absolute after:left-12 sm:after:left-14 md:after:left-20 lg:after:left-20 xl:after:left-24 after:top-20 after:bg-blue after:rounded"
        >
          Contact
        </h1>
        <p class="text-base sm:text-lg md:text-2xl mt-20 w-5/6 m-auto">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <form class="bg-alice-blue w-full lg:w-1/2 p-10 rounded-lg mt-20">
        <div class="mb-5">
          <label for="username" class="block mb-5">Name</label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your Name"
            class="w-full p-5 rounded-lg"
          />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-5">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your Email"
            class="w-full p-5 rounded-lg"
          />
        </div>
        <div class="mb-5">
          <label for="text" class="block mb-5">Message</label>
          <textarea
            v-model="message"
            name="Enter your message"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter you Message"
            class="w-full p-5 rounded-lg"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            @click.prevent="listen"
            class="w-full sm:w-auto bg-blue text-white px-16 py-5 rounded-lg hover:-translate-y-1 hover:transition-transform hover:shadow-lg hover:duration-500 hover:ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {},
};
</script>
