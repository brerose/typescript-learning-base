<template>
  <div>
    <button id="button" type="button">Click!</button>
    <button id="dmgUp" type="button">Dmg Up</button>
    <h1>Hp: </h1>
    <h1 id="currentHp">10</h1>
    <h1>Currency: </h1>
    <h1 id="numClicks">0</h1>
    <h1>Level: </h1>
    <h1 id="level">1</h1>
    <h1>Dmg: </h1>
    <h1 id="dmg">1</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {

  totalScore = 0
  currentHp = 10
  difficulty = 1

  mounted() {
    document.querySelector('#button')!.addEventListener('click', this.clicks)
    document.querySelector('#dmgUp')!.addEventListener('click', this.shop)
  }

  dmg = 1

  updateDisplay(){
    document.querySelector<any>('#dmg')!.innerText = this.dmg
    document.querySelector<any>('#level')!.innerText = this.difficulty
    document.querySelector<any>('#currentHp')!.innerText = this.currentHp
    document.querySelector<any>('#numClicks')!.innerText = this.totalScore
  }

  clicks() {
    this.currentHp -= this.dmg

    if(this.currentHp <= 0) {
      this.totalScore += this.difficulty
      this.difficulty += 1
      this.currentHp += 10 * this.difficulty
    }

    this.updateDisplay()
  }

  shop() {
    const cost = this.dmg * 2
    if(this.totalScore >= cost) {
      this.dmg += cost * .75
      this.totalScore -= cost
    }
    this.updateDisplay()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
