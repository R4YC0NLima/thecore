<template>
  <main>
<!--    <Slider />-->
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);">
      <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div class="text-center">
          <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Build Your new <span class="underline text-blue-400">Saas</span></h1>
          <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <nuxt-link to="contact">Solicite um orçamento</nuxt-link>
          </button>
        </div>
      </div>
    </div>
<!--    <section class="container mx-auto px-4 py-12 sm:py-16 md:py-20 xl:py-28">&lt;!&ndash; Start Hero &ndash;&gt;-->
<!--      <div class="grid lg:grid-cols-2 gap-10 items-center">-->
<!--        <div class="space-y-8 lg:space-y-12">-->
<!--          <div class="space-y-6">-->
<!--            <h1 class="text-4xl sm:text-6xl font-semibold">Landing page for <br>your online service</h1>-->
<!--            <p class="max-w-sm text-xl">Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia voluptatem aut est a quia.</p>-->
<!--          </div>-->
<!--          <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">-->
<!--&lt;!&ndash;            <input class="w-full sm:w-72 border-2 sm:border-r-0 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg outline-none focus:border-green-600" type="text" placeholder="Your email address">&ndash;&gt;-->
<!--            <a href="#orcamento" class="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 py-4 px-6 rounded-lg sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg text-white font-semibold">Orçamento</a>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="">-->
<!--          <img src="/img/hero-illustration.png" alt="Illustration">-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>&lt;!&ndash; End Hero &ndash;&gt;-->

    <Caractericas />

    <Features />

<!--    <Testimonials />-->

<!--    <Contact id="orcamento" />-->
  </main>
</template>

<script>
import Caractericas from "./Caractericas";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./Forms/CTA";
import Contact from "../pages/Contatos";
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
