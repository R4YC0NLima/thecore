<template>
  <section class="container mx-auto sm:px-4"><!-- Start Sing up -->
    <div class="bg-blue-800 px-4 py-12 sm:py-16 md:py-20 xl:py-28 sm:rounded-lg text-white">

      <div class="space-y-4 text-center mb-8 lg:mb-12">
        <h2 class="text-4xl md:text-5xl font-semibold">Orçamento</h2>
      </div>
      <form class="container mx-auto w-1/2">
        <fieldset class="mb-4">
          <label class="block text-sm text-gray-dark pb-2">Nome</label>
          <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
        </fieldset>

        <fieldset class="mb-4">
          <label class="block text-sm text-gray-dark pb-2">Email</label>
          <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
        </fieldset>

        <fieldset class="mb-4">
          <label class="block text-sm text-gray-dark pb-2">Telefone</label>
          <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
        </fieldset>

        <fieldset class="mb-4">
              <textarea
                placeholder="Descreva o seu pedido aqui"
                class="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"></textarea>
        </fieldset>

        <button class="text-sm py-2 px-3 bg-black text-white rounded">Submit</button>
      </form>
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
