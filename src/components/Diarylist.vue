<template>
  <div class="Diarylist">
    <div class="Diarylist_title">留言板</div>
    <ul class="Diarylist_ul">
      <li v-for="(item, index) in data" :key="index">
        <div class="left">
          <img v-if="!item.imgcontent" :src="'https://picsum.photos/250/150?' + index" alt="" />
          <img v-else :src="item.imgcontent" alt="">
        </div>
        <div class="right">
          <p class="content">{{ item.content }}</p>
          <p class="time">{{filtertime(item.time)}}</p>
        </div>
      </li>
    </ul>
  <el-upload
  class="upload-demo"
  ref="upload"
  data="data"
  action="api/diray/upload"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :auto-upload="false">
  <template #trigger>
    <el-button size="small" type="primary">选取文件</el-button>
  </template>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <template #tip>
    <div class="el-upload__tip">
      只能上传 jpg/png 文件，且不超过 500kb
    </div>
  </template>
</el-upload>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="currentchange"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Diarylist",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      total: 1000,
      size: 10,
      currentPage: 1,
      data:{
        id:12
      }
    };
  },
  methods: {
    submitUpload() {
        this.$refs.upload.submit();
      },
    currentchange(val) {
      this.currentPage = val;
      this.getdiarylist();
    },
    /**@function 获取留言板列表 */
    getdiarylist() {},
    /**@function 时间方法 */
    filtertime(value){
      return new Date(Number(value)).Format('yyyy-MM-dd hh:MM:ss')
    }
  },
  mounted() {
    this.getdiarylist();
  },
};
</script>

<style lang="scss">
.Diarylist {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
    .Diarylist_title {
      margin-top: 20px;
      width: 100%;
      font-size: 32px;
    }
    .Diarylist_ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 60vw;
      li {
        display: flex;
        align-items: center;
        margin-top: 30px;
        padding: 10px;
        border: 1px solid #dcdfe6;
        border-radius: 5px;
        .left {
          width: 250px;
          height: 150px;
        }
        .right {
          margin-left: 30px;
          width: calc(100% - 280px);
          p.content {
            margin: 0;
            padding: 0;
            text-indent: 2em;
            text-align: left;
          }
          p.time {
            color: #909399;
            margin-top: 15px;
            margin-right: 20px;
            text-align: right;
            font-size:14px;
          }
        }
      }
    }
    .el-pagination {
      width: 100%;
      margin-top: 20px;
    }
}
</style>