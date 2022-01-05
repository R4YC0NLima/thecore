<template>
  <main class="">
    <Navbar />

    <Main></Main>
    <div class="fb-customerchat" page_id="101906755311619">
    </div>
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
