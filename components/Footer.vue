<template>
  <footer class="container mx-auto px-4 mt-6 py-6">
    <hr class="mb-6">
    <div class="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 mb-6">
      <div class="flex-1">
        <a href="/" class=""><img src="/img/logo.svg" alt="Logo"></a>
      </div>
      <div class="flex md:justify-center flex-1 space-x-6 font-medium">
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">Home</a>
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">Sobre</a>
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">Contato</a>
      </div>
      <div class="flex md:justify-end flex-1 space-x-4">
        <a href="">
          <i class='text-2xl transition duration-500 ease-in-out transform hover:scale-125 bx bxl-facebook-circle' ></i>
        </a>
        <a href="">
          <i class='text-2xl transition duration-500 ease-in-out transform hover:scale-125 bx bxl-twitter' ></i>
        </a>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-3 text-gray-500 text-xs">
      <p>Copyright © 2021 Amiso. All rights reserved.</p>
      <p>Hand illustration by <a class="text-green-700 underline" href="https://icons8.com" rel="nofollow" target="_blank">icons8.com</a></p>
      <p>Photos by <a class="text-green-700 underline" href="https://pexels.com" rel="nofollow" target="_blank">pexels.com</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
