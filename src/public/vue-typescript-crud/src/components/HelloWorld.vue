<template>
  <div class="hello">
    <h1>Hello!!!</h1>
    <h2>{{block.name}}</h2>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import {Block} from "../../../../Block";

export default class HelloWorld extends Vue {
  block: Block = new Block()

  mounted() {
    this.print(this.block)
  }

  print(block: Block){
    console.log("hiiii " + block.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
