<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="6">
          <h1>Live Coding</h1>
        </v-col>
        <v-col cols="6">
          <p>Nota Musical</p>
        </v-col>
      </v-row>
      <hr>
      <comp-card/>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CompCard from '@/components/CompCard.vue'


export default {
  name: 'Home',
  components: {
    CompCard
  }
}
</script>
