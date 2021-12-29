<template>
  <v-app>
    <v-container>
      <h2>Выберите тикер</h2>
      <v-row align="center">
        <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-select
            :items="tickers"
            @input="(e)=>choseTicker = e "
            label="Тикер"
            :error-messages="emptyTicker"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      @click="loadQuotes"
    >
      Запросить данные
    </v-btn>
    <template v-if="quotes">
      <v-list
        v-for="item in quotes"
        :key="item._id"
      >
        {{ item }}
      </v-list>
    </template>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Home extends Vue {
  protected tickers = [];
  protected choseTicker = ''
  protected empty = false
  protected quotes = []
  protected err = ''
  mounted() {
    this.loadTickers()
  }
  get emptyTicker() {
    if (this.empty) return 'Тикер должен быть выбран'

    return ''
  }
  protected loadTickers() {
    fetch('http://localhost:5000/api/tickers')
      .then(res => res.json())
      .then(res => this.tickers = res.map((el: any) => el.ticker))
      .catch(err => this.err = err)
  }
  protected loadQuotes() {
    if(!this.choseTicker) {
      this.empty = true
    }
    else {
      fetch(`http://localhost:5000/api/find?ticker=${this.choseTicker}`)
        .then(res => res.json())
        .then(res => this.quotes = res)
        .catch(err => this.err = err)
    }

  }
}
</script>

<style lang="scss">

</style>
