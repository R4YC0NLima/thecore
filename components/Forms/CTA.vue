<template>
  <section class="container mx-auto sm:px-4"><!-- Start Sing up -->
    <div class="bg-green-600 px-4 py-12 sm:py-16 md:py-20 xl:py-28 sm:rounded-lg text-white">
      <div class="space-y-4 text-center mb-8 lg:mb-12">
        <h2 class="text-4xl md:text-5xl font-semibold">Start your free trial</h2>
        <p class="text-lg md:max-w-md mx-auto">Trial period - 14 days, no credit card required</p>
      </div>
      <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 justify-center">
        <input class="w-full sm:w-72 border-solid border-2 sm:border-r-0 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg outline-none border-white focus:border-green-700" type="text" placeholder="Your email address">
        <button type="submit" class="bg-green-700 hover:bg-green-800 transition-colors duration-300 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg text-white font-semibold">Get Started</button>
      </div>
    </div>
  </section><!-- End Sing up -->
</template>

<script>
export default {
  name: "CTA"
}
</script>

<style scoped>

</style>
