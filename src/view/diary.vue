<template>
  <div>
      <List :num="num" @update:num="val => num = val"></List>
      <Adddata></Adddata>
  </div>
</template>

<script>
import List from '@/block/List.vue'
import Adddata from '@/block/Adddata'
export default {
    name:'diary',
    data(){
        return {
            num:2
        }
    },
    components:{
        List,
        Adddata
    }
}
</script>

<style>

</style>