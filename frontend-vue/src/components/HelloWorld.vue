<template>
  <div>
    <button v-on:click=onClick type="button">Click!</button>
    <h1>Hp: {{currentHp}}</h1>
    <h1>Next Hp: {{getNextHp()}}</h1>
    <h1>Currency: {{totalScore}}</h1>
    <h1>Minions: {{minions}}</h1>
    <h1>Dmg: {{dmg}}</h1>
    <h1>Dmg minions: {{dmg * minions}}</h1>
    <button v-on:click=purchaseDmgIncrease type="button">Dmg Up For {{getDmgIncreaseCost()}} Currency</button>
    <button v-on:click=purchaseMinion type="button">Buy Minion</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {

  totalScore = 0
  currentHp = 5
  difficulty = 1
  dmg = 1
  minions = 0

  mounted() {
    setInterval(this.onTick, 1000)
  }

  onTick() {
    for (let i = 0; i < this.minions; i++) {
      this.onClick()
    }
  }

  onClick() {
    this.currentHp -= this.dmg

    if(this.currentHp <= 0) {
      this.totalScore += this.difficulty
      this.difficulty += 1
      this.currentHp = this.getNextHp()
    }
  }

  getNextHp(){
    return Math.round((5 * this.difficulty) + Math.pow(1.3, this.difficulty))
  }

  getDmgIncreaseCost(): number {
    return this.dmg * 2
  }

  purchaseMinion() {
    this.minions++
  }

  purchaseDmgIncrease() {
    const cost = this.getDmgIncreaseCost()
    if(this.totalScore >= cost) {
      this.dmg += this.difficulty
      this.totalScore -= cost
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
