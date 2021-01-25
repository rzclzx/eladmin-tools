<template>
  <div class="app-container">
    <el-page-header @back="goBack" />
    <div class="table-header flex-between-center" style="margin-top: 10px">
      <h3 class="table-title">{{ `字段配置-${tableName}` }}</h3>
      <div class="flex-end-center">
        <el-button 
          icon="el-icon-refresh" 
          size="mini" 
          type="primary" 
        >同步</el-button>
        <el-button 
          icon="el-icon-check" 
          size="mini" 
          type="primary" 
          style="margin-right:10px"
        >保存</el-button>
      </div>
    </div>
    <el-table
      v-loading="loading"
      :data="data" 
      border 
      size="mini"
      highlight-current-row
    >
      <el-table-column
        label="字段名称"
        align="left"
      ></el-table-column>
      <el-table-column
        label="字段类型"
        align="center"
      ></el-table-column>
      <el-table-column
        label="字段描述"
        align="center"
      ></el-table-column>
      <el-table-column
        label="必填"
        align="center"
      ></el-table-column>
      <el-table-column
        label="列表"
        align="center"
      ></el-table-column>
      <el-table-column
        label="表单"
        align="center"
      ></el-table-column>
      <el-table-column
        label="表单类型"
        align="center"
      ></el-table-column>
      <el-table-column
        label="查询方式"
        align="center"
      ></el-table-column>
      <el-table-column
        label="日期注解"
        align="center"
      ></el-table-column>
      <el-table-column
        label="关联字典"
        align="center"
      ></el-table-column>
    </el-table>
    <div class="table-header flex-between-center" style="margin-top: 10px">
      <h3 class="table-title">生成配置</h3>
      <div class="flex-end-center">
        <el-button 
          icon="el-icon-check" 
          size="mini" 
          type="primary" 
          style="margin-right:10px"
        >保存</el-button>
      </div>
    </div>
    <div class="border config">
      <el-form 
        ref="form" 
        :model="form" 
        :rules="rules" 
        size="small" 
        label-width="120px"
        style="width: 100%"
      >
        <el-form-item label="作者名称" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
        <el-form-item label="模块名称" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
        <el-form-item label="至于包下" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
        <el-form-item label="接口名称" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
        <el-form-item label="前端路径" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
        <el-form-item label="去表前缀" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
        <el-form-item label="是否覆盖" prop="nickName">
          <el-input 
            size="mini" 
            v-model="form.nickName" 
            style="width:250px" 
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      data: [],
      form: {},
      rules: {
        // label: [
        //   { required: true, message: '请输入名称', trigger: 'blur' }
        // ]
      }
    }
  },
  computed: {
    tableName() {
      return this.$route.params.name;
    }
  },
  created() {
    
  },
  methods: {
    goBack() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .config {
    border-radius: 0!important;
    padding-top: 15px;
  }
</style>
