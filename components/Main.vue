<template>
  <main>
<!--    <Slider />-->
    <section class="container mx-auto px-4 py-12 sm:py-16 md:py-20 xl:py-28"><!-- Start Hero -->
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div class="space-y-8 lg:space-y-12">
          <div class="space-y-6">
            <h1 class="text-4xl sm:text-6xl font-semibold">Landing page for <br>your online service</h1>
            <p class="max-w-sm text-xl">Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia voluptatem aut est a quia.</p>
          </div>
          <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">
<!--            <input class="w-full sm:w-72 border-2 sm:border-r-0 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg outline-none focus:border-green-600" type="text" placeholder="Your email address">-->
            <a href="#orcamento" class="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg text-white font-semibold">Orçamento</a>
          </div>
        </div>
        <div class="">
          <img src="/img/hero-illustration.png" alt="Illustration">
        </div>
      </div>
    </section><!-- End Hero -->

<!--    <Caractericas />-->

    <Features />

<!--    <Testimonials />-->

<!--    <CTA id="orcamento" />-->

    <Contact id="orcamento" />
  </main>
</template>

<script>
import Caractericas from "./Caractericas";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./Forms/CTA";
import Contact from "../pages/Contact";
import Slider from './Slide'
export default {
  name: "Main",
  components: {
    Caractericas,
    Features,
    Testimonials,
    CTA,
    Contact,
    Slider
  }
}
</script>

<style scoped>

</style>
