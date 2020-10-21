<template>
<v-row>
  <v-col v-for="course in courses" :key="course.id" cols="4">
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="course.data.img"
      height="200px"
    ></v-img>

    <v-card-title>
      {{course.data.name}}
    </v-card-title>

     <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         {{course.data.description}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-col>
</v-row>    
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data: () => ({
    show: false,
  }),
  created() {
    this.getCourses()
},
computed: {
...mapState(['courses'])
},

methods: {
...mapActions(['getCourses'])
}
}
</script>

<style>

</style>