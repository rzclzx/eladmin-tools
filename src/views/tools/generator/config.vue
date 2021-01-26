<template>
  <div class="app-container">
    <el-page-header @back="goBack" />
    <!-- <div class="table-header flex-between-center" style="margin-top: 10px">
      <h3 class="table-title">{{ `字段配置-${tableName}` }}</h3>
      <div class="flex-end-center">
        <el-button 
          icon="el-icon-refresh" 
          size="mini" 
          type="primary" 
          title="数据库中表字段变动时使用该功能"
          @click="sync"
        >同步</el-button>
        <el-button 
          icon="el-icon-check" 
          size="mini" 
          type="primary" 
          style="margin-right:10px"
          @click="saveColumn"
        >保存</el-button>
      </div>
    </div>
    <el-table
      v-loading="loading"
      :data="data" 
      border 
      size="mini"
      highlight-current-row
      class="tools-generator-config"
    >
      <el-table-column
        label="字段名称"
        align="center"
        prop="columnName"
      ></el-table-column>
      <el-table-column
        label="字段类型"
        align="center"
        prop="columnType"
      ></el-table-column>
      <el-table-column
        label="字段描述"
        align="center"
      >
        <template slot-scope="scope">
          <el-input 
            v-model="scope.row.remark" 
            size="mini" 
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="必填"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.notNull"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="列表"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.listShow"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="表单"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.formShow"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="表单类型"
        align="center"
      >
        <template slot-scope="scope">
          <el-select 
            clearable
            filterable
            size="mini"
            v-model="scope.row.formType"
          >
            <el-option
              v-for="item in dict.formType ? dict.formType.list : []"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="查询方式"
        align="center"
      >
        <template slot-scope="scope">
          <el-select 
            clearable
            filterable
            size="mini"
            v-model="scope.row.queryType"
          >
            <el-option
              v-for="item in dict.searchType ? dict.searchType.list : []"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="日期注解"
        align="center"
      >
        <template slot-scope="scope">
          <el-select 
            clearable
            filterable
            size="mini"
            v-model="scope.row.dateAnnotation"
          >
            <el-option
              v-for="item in dict.dateAnnotation ? dict.dateAnnotation.list : []"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table> -->
    <div class="table-header flex-between-center" style="margin-top: 10px">
      <h3 class="table-title">生成配置</h3>
      <div class="flex-end-center">
        <el-button 
          icon="el-icon-check" 
          size="mini" 
          type="primary" 
          style="margin-right:10px"
          @click="doSubmit"
        >保存</el-button>
        <el-button 
          icon="el-icon-check" 
          size="mini" 
          type="primary" 
          style="margin-right:10px"
          @click="gen"
        >生成</el-button>
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
        <el-form-item label="作者名称" prop="author">
          <el-input 
            size="mini" 
            v-model="form.author" 
            style="width:350px" 
            placeholder="类上面的作者名称"
          />
        </el-form-item>
        <el-form-item label="模块名称" prop="moduleName">
          <el-input 
            size="mini" 
            v-model="form.moduleName" 
            style="width:350px" 
            placeholder="模块的名称，请选择项目中已存在的模块"
          />
        </el-form-item>
        <el-form-item label="至于包下" prop="pack">
          <el-input 
            size="mini" 
            v-model="form.pack" 
            style="width:350px" 
            placeholder="项目包的名称，生成的代码放到哪个包里面"
          />
        </el-form-item>
        <el-form-item label="接口名称" prop="apiAlias">
          <el-input 
            size="mini" 
            v-model="form.apiAlias" 
            style="width:350px" 
            placeholder="接口的名称，用于控制器与接口文档中"
          />
        </el-form-item>
        <el-form-item label="前端路径" prop="path">
          <el-input 
            size="mini" 
            v-model="form.path" 
            style="width:350px" 
            placeholder="输入views文件夹下的目录，不存在即创建"
          />
        </el-form-item>
        <el-form-item label="去表前缀" prop="prefix">
          <el-input 
            size="mini" 
            v-model="form.prefix" 
            style="width:350px" 
            placeholder="默认不去除表前缀，可自定义"
          />
        </el-form-item>
        <el-form-item label="是否覆盖" prop="cover">
          <el-radio-group v-model="form.cover" size="mini">
            <el-radio-button :label="true">是</el-radio-button>
            <el-radio-button :label="false">否</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getColumns, save, sync, update, generator, get } from '@/api/generator'
export default {
  data() {
    return {
      loading: false,
      data: [],
      form: {
        cover: false
      },
      rules: {
        author: [
          { required: true, message: '作者不能为空', trigger: 'blur' }
        ],
        pack: [
          { required: true, message: '包路径不能为空', trigger: 'blur' }
        ],
        moduleName: [
          { required: true, message: '包路径不能为空', trigger: 'blur' }
        ],
        path: [
          { required: true, message: '前端路径不能为空', trigger: 'blur' }
        ],
        apiAlias: [
          { required: true, message: '接口名称不能为空', trigger: 'blur' }
        ],
        cover: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    tableName() {
      return this.$route.params.name;
    },
    dict () {
      return this.$store.state.app.dict || {};
    }
  },
  created() {
    this.init();
  },
  methods: {
    goBack() {
      this.$router.push('/tools/generator');
    },
    init() {
      this.loading = true;
      getColumns({
        tableName: this.tableName
      }).then(res => {
        this.loading = false;
        this.data = res.content || [];
      })
      get(this.tableName).then(res => {
        this.form = res || {}
      })
    },
    sync() {
      sync([this.tableName]).then(() => {
        this.init();
        this.$notify({
          title: '同步成功',
          type: 'success',
          duration: 2500
        })
      })
    },
    saveColumn() {
      save(this.data).then(res => {
        this.$notify({
          title: '保存成功',
          type: 'success',
          duration: 2500
        })
      })
    },
    doSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let form = this.form;
          update({
            ...form,
            tableName: this.tableName
          }).then(res => {
            this.$notify({
              title: '保存成功',
              type: 'success',
              duration: 2500
            })
          })
        }
      })
    },
    gen() {
      generator(this.tableName, 0).then(res => {
        this.$notify({
          title: '生成成功',
          type: 'success',
          duration: 2500
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .config {
    border-radius: 0!important;
    padding-top: 15px;
  }
</style>
