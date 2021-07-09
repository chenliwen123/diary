<template>
    <div class="Diarylist">
        <div class="Diarylist_title">留言板</div>
        <ul class="Diarylist_ul">
            <li>
                <div class="left">
                    <img src="https://picsum.photos/250/150" alt="">
                </div>
                <div class="right">
                    <p>哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈哇哈哈哈哈哈哈哈</p>
                </div>
            </li>
        </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="currentchange"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'Diarylist',
    data(){
        return {
            total:1000
        }
    },
    methods:{
        currentchange(){

        }
    }
}
</script>

<style lang="scss">
.Diarylist{
    width: 100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    .Diarylist_title{
        margin-top: 20px;
        width: 100%;
        font-size:32px;
    }
    .Diarylist_ul{
        list-style: none;
        margin:0;
        padding:0;
        width: 60vw;
        li{
            display:flex;
            align-items:center;
            margin-top:30px;
            padding:10px;
            border:1px solid #DCDFE6;
            border-radius: 5px;
            .left{
                width: 250px;
                height: 150px;
            }
            .right{
                margin-left: 30px;
                width: calc(100% - 280px);
                p{
                    margin:0;
                    padding:0;
                    text-align: left;
                    text-indent:2em;
                }
            }
        }
    }
    .el-pagination{
        width: 100%;
        margin-top:20px;
    }
}
</style>