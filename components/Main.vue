<template>
  <main>
    <section class="container mx-auto px-4 py-12 sm:py-16 md:py-20 xl:py-28"><!-- Start Hero -->
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-8 lg:space-y-12">
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-6xl font-semibold">Landing page for <br>your online service</h1>
            <p class="max-w-sm text-xl">Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia voluptatem aut est a quia.</p>
          </div>
          <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">
            <input class="w-full sm:w-72 border-2 sm:border-r-0 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg outline-none focus:border-green-600" type="text" placeholder="Your email address">
            <button type="submit" class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg text-white font-semibold">Get Started</button>
          </div>
        </div>
        <div class="">
          <img src="/img/hero-illustration.png" alt="Illustration">
        </div>
      </div>
    </section><!-- End Hero -->

    <section class="container mx-auto px-4"><!-- Start Brands -->
      <div class="grid grid-cols-3 gap-8 lg:grid-cols-6">
        <div class="flex justify-center"><img src="/img/brands/varta.svg" alt="varta"></div>
        <div class="flex justify-center"><img src="/img/brands/lenovo.svg" alt="lenovo"></div>
        <div class="flex justify-center"><img src="/img/brands/bbs.svg" alt="bbs"></div>
        <div class="flex justify-center"><img src="/img/brands/weller.svg" alt="weller"></div>
        <div class="flex justify-center"><img src="/img/brands/british_airways.svg" alt="british airways"></div>
        <div class="flex justify-center"><img src="/img/brands/lufthansa.svg" alt="lufthansa"></div>
      </div>
    </section><!-- End Brands -->

    <Caractericas />

    <Features />

    <Testimonials />

    <CTA />
  </main>
</template>

<script>
import Caractericas from "./Caractericas";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./Forms/CTA";
export default {
  name: "Main",
  components: {
    Caractericas,
    Features,
    Testimonials,
    CTA
  }
}
</script>

<style scoped>

</style>
