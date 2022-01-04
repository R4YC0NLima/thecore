<template>
  <header class="container mx-auto mt-6 px-4 flex justify-between items-center"><!-- Start Header -->
    <div class="">
      <a href="/" class=""><img src="/img/logo.svg" alt="Logo"></a>
    </div>
    <div class="flex items-center">
      <div class="hidden md:block space-x-6 font-medium">
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">Features</a>
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">Prices</a>
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">About</a>
        <a href="#0" class="hover:text-green-700 transition-colors duration-200">Contacts</a>
        <button class="bg-green-600 hover:bg-green-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold">Get Started</button>
      </div>
      <div class="md:hidden">
        <a href="#0" class="">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
