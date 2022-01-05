<template>
  <div class="w-full bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6">

    <!-- title -->
    <div class="space-y-4 text-center mb-8 lg:mb-12">
      <h2 class="text-4xl md:text-5xl font-semibold">Orçamento</h2>
      <p class="text-lg md:max-w-md mx-auto">Seu pedido é uma ordem, vem e faça o seu pedido</p>
    </div>
    <!-- /title -->

    <div class="container max-w-4xl mx-auto pb-10 px-12 md:px-0">

      <div class="flex flex-wrap justify-start items-start -mx-4">

        <div class="w-full md:w-1/2 p-4">
          <div class="bg-white transition-shadow duration-200 shadow hover:shadow-xl p-6 rounded-lg space-y-6">
            <form>
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
        </div>

        <div class="w-full md:w-1/2 p-4">
          <div class="overflow-hidden rounded border mb-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.109330886038!2d-60.028944470780544!3d-2.9760570998645313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c17fdbfb0471d%3A0x70e20e1b510074a8!2sThe%20Core%20Gr%C3%A1fica!5e0!3m2!1spt-BR!2sbr!4v1641393092250!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>

</style>
