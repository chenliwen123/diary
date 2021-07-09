<template>
  <div class="listblock">
      <Diarylist :data="data"></Diarylist>
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
    data(){
        return{
            data:[]
        }
    },
    methods:{
        addnum(){
            this.$emit('update:num',this.num + 1)
        },
        getlisedata(){
            this.$axios.get('/diray/findAll').then( res => {
                this.data = res
            })
        }
    },
    mounted(){
        this.getlisedata();
    }
}
</script>

<style lang="scss">
.listblock{

}
</style>