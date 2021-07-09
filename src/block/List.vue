<template>
  <div class="listblock">
      <Diarylist></Diarylist>
  </div>
</template>

<script>
import Diarylist from '@/components/Diarylist.vue'
export default {
    name:'List',
    components:{
        Diarylist
    },
    props:{
        num:{
            type:Number,
            defalut:0
        }
    },
    methods:{
        addnum(){
            this.$emit('update:num',this.num + 1)
        }
    }
}
</script>

<style lang="scss">
.listblock{

}
</style>