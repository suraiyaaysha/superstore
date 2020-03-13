<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-9">
          <Inventory :items="items"></Inventory>
        </div>
        <div class="col-3">
          <Cart></Cart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import data from './data'

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  },
  data(){
    return {
      items: []
    }
  },
  mounted(){
    this.items = data
  }
}
</script>

<style>
 .container{
   padding-top: 30px;
 }
</style>
