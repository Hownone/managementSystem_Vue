<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="desc">
          <img src="https://cdn.acwing.com/media/article/image/2022/12/26/118375_765e31ff85-11.jpg" alt="">
          <div class="">
            <div class="title">Admin</div>
            <div class="titles">超级管理员</div>
          </div>
        </div>
        <div class="flex_x">
          <div>上次登录时间</div>
          <div>2022年12月28日22:10:58</div>
        </div>
        <div class="flex_x">
          <div>上次登录地点</div>
          <div>广东</div>
        </div>

        <el-card class="box-card">
          <el-input size="medium" type="textarea" :autosize="{ minRows: 4, maxRows: 8 }" placeholder="请输入内容"
            v-model="content">
          </el-input>
          <el-button @click="post_a_post" type="success" class="btn-send" size="small" round>send</el-button>
        </el-card>

      </el-col>

      <el-col :span="12">
        <el-card class="box-card1">
          <div v-for="post in posts">
            <el-card class="OnePost">
              {{ post.content }}
              <el-button @click="delete_a_post(post.postId)" class="btn-del" type="danger"
                size="small">Delete</el-button>
            </el-card>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import { ref } from "vue";
import data from "../data";
export default {
  data() {
    return {
      content: '',
      textarea: '',
      posts: [{ content: "好好学习，天天向上！", postId: 1 }, { content: "团结就是力量！", postId: 2 }],
    }
  },
  methods: {
    post_a_post() {
      let last = this.posts.length;
      let index;
      if (last === 0) index = 1;
      else index = this.posts[last - 1].postId + 1;
      this.posts.push({ content: this.content, postId: index });
      this.content = '';
    },
    delete_a_post(postId) {
      console.log(postId);
      let len = this.posts.length;
      for (let i = 0; i < len; i++)
        if (this.posts[i].postId === postId) {
          this.posts.splice(i, 1);
          break;
        }
    }
  },

};
</script>
<style>
.desc {
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;

}

.flex_x {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 30px;
  color: #ccc;
}

.desc img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0094ff;
  vertical-align: bottom;
}

.title {
  font-size: 30px;
  margin-top: 20px;
}

.titles {
  color: #ccc;
}

.box-card {
  width: 300px;
  height: 200px;
  margin-top: 20px;
}

.box-card1 {
  width: 500px;
  height: 500px;
}

.btn-send {
  margin-top: 10px;
}

.OnePost {
  margin-bottom: 10px;
}

.btn-del {
  float: right;
}
</style>
