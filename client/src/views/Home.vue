<template>
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
<!--    -->
<!--  </div>-->
  <v-container>
    <v-text-field>
      Hello world
    </v-text-field>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Home extends Vue {
  created() {
    console.log('create')
  }
  mounted() {
    this.loadTickers()
  }
  loadTickers() {
    fetch('http://localhost:5000/api/tickers')
      .then(res => console.log('res', res))
  }
}
</script>
