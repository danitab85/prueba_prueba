<template>
  <v-app>  
   <nav-bar/>

    <v-main>
      <router-view/>
    </v-main>
    <comp-footer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CompFooter from '@/components/CompFooter.vue'

export default {
  name: 'App',

  components: {
   NavBar,
   CompFooter
  },

  data: () => ({
    //
  }),
};
</script>
