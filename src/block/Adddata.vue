<template>
    <div class="Adddata">
        <el-affix position="bottom" :offset="70">
            <el-button circle type="primary" icon="el-icon-plus" @click="showdialog"></el-button>
        </el-affix>
        <el-dialog title="留言内容" v-model="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="" :label-width="0">
                    <el-input v-model="form.content"
                    type="textarea"
                    :rows="8"
                    placeholder="请输入内容"
                    ></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name:'Adddata',
    data(){
        return {
            dialogFormVisible:false,
            form:{
                content:''
            }
        }
    },
    methods:{
        /**@function 显示dialog */
        showdialog(){
            this.dialogFormVisible = true;
        },
        /**@function 保存数据 */
        save(){
            
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss">
.el-affix--fixed{
    right:70px;
}
.el-affix{
    width:0;
    height:0;
}
</style>