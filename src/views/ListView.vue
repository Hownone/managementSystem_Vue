<template>
  <div>
    <el-col :span="20">
      <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="search"
        style="width: 200px; margin-bottom: 20px">
      </el-input>
    </el-col>
    <el-col :span="4"><el-button type="primary" @click="addNew">新增客户</el-button></el-col>
    <el-table border :data="
  tableData.filter(
    (data) =>
      !search || data.name.toLowerCase().includes(search.toLowerCase())
  )
" :row-key="(row) => row.index" size="small" style="width: 100%">
      <el-table-column label="客户名称" prop="name"> </el-table-column>
      <el-table-column label="联系电话" prop="phone"> </el-table-column>
      <el-table-column label="负责人" prop="amin"> </el-table-column>
      <el-table-column label="客户级别" prop="level"> </el-table-column>
      <el-table-column label="跟进次数" prop="count"> </el-table-column>
      <el-table-column label="商机总/成交数" prop="comNum"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>
      <el-table-column label="年龄" prop="age"> </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form ref="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-select v-model="formData.amin" placeholder="请选择">
            <el-option v-for="item in adminOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户级别">
          <el-input v-model="formData.level"></el-input>
        </el-form-item>
        <el-form-item label="跟进次数">
          <el-input v-model="formData.count"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex" placeholder="请选择">
            <el-option v-for="item in sexOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄">
          <el-select v-model="formData.age" placeholder="请选择">
            <el-option v-for="item in ageOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="completeEdit">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import data from "../data";
export default {
  data() {
    return {
      search: "",
      centerDialogVisible: false,
      formData: {
        name: "",
        sex: "",
        age: "",
        admin: "",
        phone: "",
        level: "",
        count: "",
      },
      activeIndex: 0,
      sexOptions: [
        {
          value: "男",
          lable: "男",
        },
        {
          value: "女",
          lable: "女",
        },
      ],

      ageOptions: [
        {
          value: "60后",
          lable: "60后",
        },
        {
          value: "70后",
          lable: "70后",
        },
        {
          value: "80后",
          lable: "80后",
        },
        {
          value: "90后",
          lable: "90后",
        },
        {
          value: "00后",
          label: "00后",
        }
      ],
      adminOptions: [
        {
          value: "负责人1",
          lable: "负责人1",
        },
        {
          value: "负责人2",
          lable: "负责人2",
        },
        {
          value: "负责人3",
          lable: "负责人3",
        },
        {
          value: "负责人4",
          lable: "负责人4",
        },
        {
          value: "负责人5",
          lable: "负责人5",
        },
      ],
      tableData: data,
    };
  },
  methods: {
    handleEdit(index) {
      this.activeIndex = index;
      this.isEdit = true;
      this.formData = Object.assign({}, this.tableData[index]);
      this.centerDialogVisible = true;
    },
    handleDelete(index) {
      this.$confirm("确定删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => { });
    },
    completeEdit() {
      this.centerDialogVisible = false;
      if (this.isEdit) {
        this.tableData.splice(this.activeIndex, 1, this.formData);
      } else {
        this.tableData.push(this.formData);
      }
      this.$message({
        type: 'success',
        message: '成功!'
      });
    },
    // 新增
    addNew() {
      this.isEdit = false;
      (this.formData = {
        name: "",
        sex: "",
        age: "",
        admin: "",
        phone: "",
        level: "",
        count: "",
      }),
        (this.centerDialogVisible = true);
    },
  },
};
</script>
<style>
el-table th {
  white-space: nowrap;
  overflow: hidden;
  background-color: #eef1f6;
  text-align: left;
}
</style>
