<template>
  <main class="">
    <Navbar />

    <Main></Main>

    <Footer />
  </main>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
export default {
  name: "landing-page",
  components: {
    Navbar,
    Main,
    Footer
  }
}
</script>
