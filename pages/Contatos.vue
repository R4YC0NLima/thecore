<template>
  <section>
    <div class="bg-black text-white py-20">
      <div class="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
        <div class="flex flex-col w-full lg:w-1/3 p-8">
          <p class="ml-6 text-yellow-300 text-lg uppercase tracking-loose">Solicite seu orçamento</p>
          <p class="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Através do e-mail, formulário de contato ou Whatsapp.</p>
          <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
            Será um prazer atendê-lo!
          </p>
        </div>
        <div class="flex flex-col w-full lg:w-2/3 justify-center">
          <div class="container w-full px-4">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-6/12 px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl mb-4 text-black font-semibold">Formulário de contato</h4>
                    <form id="feedbackForm" action="" method="">
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder=" " style="transition: all 0.15s ease 0s;"
                               class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" required />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Telefone</label>
                        <input type="text" v-mask="'(##) # ####-####'" name="telefone" id="telefone" placeholder=" " style="transition: all 0.15s ease 0s;"
                               class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" required />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder=" " style="transition: all 0.15s ease 0s;"
                               class="border-0 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" required />
                      </div>
                      <div class="relative w-full mb-3">
                        <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="message">Mensagem</label>
                        <textarea maxlength="300" name="feedback" id="message" rows="4" cols="80"
                          class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                          placeholder="" required></textarea>
                      </div>
                      <div class="text-center mt-6">
                        <button id="feedbackBtn"
                                class="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="submit" style="transition: all 0.15s ease 0s;">Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  name: "Contatos"
}
</script>

<style scoped>

</style>
