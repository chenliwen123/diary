<template>
    <div class="indexview">
        <el-scrollbar height="100vh" width="100%">
            <Cardblock></Cardblock>
            <div style="width:50px;">
                <Adddata></Adddata>
            </div>
        </el-scrollbar>
        
    </div>
</template>

<script>
import Cardblock from '@/block/Card.vue'
import Adddata from '@/block/Adddata.vue'
export default {
    name:'indexview',
    components:{
        Cardblock,
        Adddata,
    },
    props:{},
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style>

</style>