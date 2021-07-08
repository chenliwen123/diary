<template>
  <div class="Cardblock">
        <div class="rowbox" v-for="item in 12" :key="item">
            <cardcomponents :src="'https://picsum.photos/500/300?' + item" time="2021-1200" msg="哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈"></cardcomponents>
        </div>
  </div>
</template>

<script>
import cardcomponents from '@/components/Card.vue'
export default {
    name:'Cardblock',
    components:{
        cardcomponents
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style lang="scss">
.Cardblock{
   display:flex;
   justify-content: space-between;
   flex-wrap:wrap;
   .rowbox{
        width: calc(25% - 30px);
        height: 300px;
        margin:15px 15px;
        cursor:pointer;
    }
}
</style>