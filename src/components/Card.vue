<template>
  <div class="cardcomponents">
        <div class="cardimg" :style="'background:url(' + src + ')'" >
        </div>
        <div class="info">
            <span class="cardtime">{{time}}</span>
            <span class="cardtext">{{msg}}</span>
        </div>
  </div>
</template>

<script>
export default {
    name:'cardcomponents',
    props:{
        src:{
            type:String,
            default:''
        },
        msg:{
            type:String,
            default:''
        },
        time:{
            type:String,
            default:'2021-1200'
        },
    },
    data(){
        return {

        }
    },
}
</script>

<style lang="scss">
.cardcomponents{
    width:100%;
    height:100%;   
    position:relative;
    border:#E4E7ED 1px solid;
    overflow: hidden;
    .cardtext{
        width: 100%;
        color:#fff;
        font-size:16px;
        font-weight: 500;
        letter-spacing: 1.5px;
        opacity:0;
        transition: all 0.3s;
        margin-top:15px;
    }
    &:hover .cardimg{
        filter: blur(3px);
        transform:scale(1.2)
    }
    &:hover .cardtext{
        opacity:1;
    }
    &:hover .info .cardtime{
        opacity:1;
    }
    .cardimg{
        width:100%;
        height:100%;
        transition: all 0.3s;
    }
    .info{
        width: 100%;
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        position:absolute;
        left:0;
        top:0;
        .cardtime{
            transition: all 0.3s;
            color:#fff;
            opacity:0;
        }
    }
}

</style>