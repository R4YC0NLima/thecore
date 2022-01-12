<template>
  <section class="container mx-auto px-4 py-12 sm:py-16 md:py-20 xl:py-28 space-y-12 sm:space-y-16 xl:space-y-24"><!-- Start Points -->
    <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10">
      <div class="w-full lg:w-1/2">
        <img class="w-full" src="/img/block-pic-1.svg" alt="">
      </div>
      <div class="w-full lg:w-1/2">
        <div class="space-y-5 sm:space-y-6">
          <h3 class="text-3xl md:text-4xl font-semibold">A The Core Gráfica</h3>
          <p class="w-full sm:w-4/5 text-lg">
            A <strong>The Core Gráfica</strong> foi criada em 2020, com o objetivo de oferecer serviços de gráfica rápida e comunicação visual, para criar projetos de segmentos variados.
            Contamos com tecnologia avançada para impressão, cortes de materiais rígidos e muitos mais, com o intuito de entregar produtos e serviços de qualidade em um curto espaço de tempo.
          </p>
          <button class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">
            <nuxt-link to="/contact">Solicite um orçamento</nuxt-link>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
<!--    <div class="flex flex-col lg:flex-row-reverse justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10">-->
<!--      <div class="w-full lg:w-1/2">-->
<!--        <img class="w-full" src="/img/block-pic-2.svg" alt="">-->
<!--      </div>-->
<!--      <div class="w-full lg:w-1/2">-->
<!--        <div class="space-y-5 sm:space-y-6">-->
<!--          <h3 class="text-3xl md:text-4xl font-semibold">Fantastic</h3>-->
<!--          <p class="w-full sm:w-4/5 text-lg">-->
<!--            Itaque cupiditate soluta necessitatibus. Quis ut veritatis sed exercitationem autem est. Pariatur dolorum officiis fuga officia labore libero. Magni tenetur delectus. Et consequatur accusantium quisquam reiciendis aut.-->
<!--          </p>-->
<!--          <button class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">-->
<!--            <span>Get Started</span>-->
<!--            <span>-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />-->
<!--                </svg>-->
<!--            </span>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10">-->
<!--      <div class="w-full lg:w-1/2">-->
<!--        <img class="w-full" src="/img/block-pic-3.svg" alt="">-->
<!--      </div>-->
<!--      <div class="w-full lg:w-1/2">-->
<!--        <div class="space-y-5 sm:space-y-6">-->
<!--          <h3 class="text-3xl md:text-4xl font-semibold">Intelligent</h3>-->
<!--          <p class="w-full sm:w-4/5 text-lg">-->
<!--            Neque aperiam labore reiciendis fugit error mollitia. Repellat non voluptatem expedita quos quia. Quae architecto quia perferendis dicta facilis. Impedit aut sit. Voluptatem praesentium rem officiis.-->
<!--          </p>-->
<!--          <button class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">-->
<!--            <span>Get Started</span>-->
<!--            <span>-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />-->
<!--                </svg>-->
<!--            </span>-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </section><!-- End Points -->
</template>

<script>
export default {
  name: "Caracteristicas"
}
</script>

<style scoped>

</style>
