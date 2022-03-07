<template>
  <div>
    <button v-on:click=clicks type="button">Click!</button>
    <h1>HP: {{currentHp}}</h1>
    <h1>Currency: {{totalScore}}</h1>
    <h1>Level: {{difficulty}}</h1>
    <h1>Dmg: {{dmg}}</h1>
    <button v-on:click=shop type="button">Dmg Up For {{this.dmg * 2}} Currency</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {

  totalScore = 0
  currentHp = 10
  difficulty = 1
  dmg = 1

  clicks() {
    this.currentHp -= this.dmg

    if(this.currentHp <= 0) {
      this.totalScore += this.difficulty
      this.difficulty += 1
      this.currentHp += 10 * this.difficulty
    }
  }

  shop() {
    const cost = this.dmg * 2
    if(this.totalScore >= cost) {
      this.dmg += Math.round(cost * .75)
      this.totalScore -= cost
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
