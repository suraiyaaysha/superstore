<template>
    <!-- <h3>Details {{ $route.params.id }}</h3> -->
    <div>
    <div v-if="item" class="row">
     <div class="col-sm-6">
         <img :src="item.photo" alt="photo">
     </div>
     <div class="col-sm-6">
         <h4>{{ item.title }}</h4>
         <p>{{ item.description }}</p>
         <p class="item-details-cart">{{ item.price }}<a @click="addToCart(item)" class="btn btn-sm btn-primary float-right">+add</a></p>
     </div>
    </div>
    <h3 v-else>Loading...</h3>
    </div>
</template>
<script>
    import axios from "axios"
    export default{
        data(){
            return {
                item: null
            }
        },
        mounted(){
            this.fetchItem()
        },
        methods: {
            fetchItem(){
                var self =this
                axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response => {
                    self.item = response.data
                })
            },
            addToCart(item) {
                this.$store.commit('addToCart', item)
            }
        }
    }
</script>
<style>
.item-details-cart {
	background-color: #f5f5f5;
	padding: 13px 10px 20px;
}
</style>