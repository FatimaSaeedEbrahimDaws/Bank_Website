<template>
    <img class="absolute inset-0 imgg" src="../assets/dots.svg" />
  <main class="px-28 bg-[#1A1A1A] relative overflow-x-hidden">
  
    <img class="absolute right-[50px] top-[175px] opacity-80" src="../assets/topll.svg" />
 
    <Hero/>

    <ourServices/>

    <useCases/>

    <ourFeatures/>

    <Faq/>

  </main>

  <ourTestimonials/>

</template>

<script setup>

  // import Header from './components/Header.vue'
  import Hero from '../components/Hero.vue'
  import ourServices from '../components/ourServices.vue'
  import useCases from '../components/useCases.vue'
  import ourFeatures from '../components/ourFeatures.vue'
  import Faq from '../components/Faq.vue'
  import ourTestimonials from '../components/ourTestimonials.vue'

</script>

<style scoped>
.imgg{
  z-index: 0;
}
</style>