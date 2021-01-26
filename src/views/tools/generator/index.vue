<template>
  <div class="app-container">
    <div class="head-container">
      <div class="flex-wrap-center">
        <div class="header-item">
          <el-input 
            v-model="query.name" 
            size="mini" 
            placeholder="名称"
            @keyup.enter.native="toQuery"
          ></el-input>
        </div>
        <div class="header-item">
          <el-button 
            size="mini" 
            type="primary" 
            icon="el-icon-search"
            @click="toQuery"
          >搜索</el-button>
          <el-button 
            style="margin-left:5px"
            size="mini" 
            icon="el-icon-refresh-left" 
            type="info" 
            @click="reset()"
          >重置</el-button>
        </div>
      </div>
    </div>
    <div class="table-header flex-between-center">
      <h3 class="table-title">数据库表</h3>
      <div class="flex-end-center">
        <TableSet :name="prop" @tableRefresh="tableRefresh" />
      </div>
    </div>
    <el-table
      v-loading="loading"
      :data="data" 
      border 
      size="mini"
      highlight-current-row
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
      @header-dragend="headerDrag"
    >
      <el-table-column
        type="index"
        label="序号"
        align="center"
        width="50"
        :resizable="false"
      ></el-table-column>
      <template  v-for="(item, key) in columns[prop]">
        <el-table-column
          v-if="item.show"
          :key="key"
          :width="item.width"
          :label="item.label"
          :prop="key"
          :align="item.align"
          :show-overflow-tooltip="item.tooltip"
        >
          <template slot-scope="scope">
            <TableTrans :scope="scope" :item="item" :prop="key" />
          </template>
        </el-table-column>
      </template>
      <el-table-column
        width="200"
        label="操作"
        align="center"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="$router.push(`/tools/generator/config/${scope.row.tableName}`)"
          >配置</el-button>
          <el-button
            size="mini"
            type="text"
            @click="$router.push(`/tools/generator/preview/${scope.row.tableName}`)"
          >预览</el-button>
          <el-button
            size="mini"
            type="text"
            @click="download(scope.row)"
          >下载</el-button>
          <el-button
            size="mini"
            type="text"
            @click="gen(scope.row)"
          >生成</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex-end-center">
      <el-pagination 
        :page-size="size"
        background
        :total="total"
        :current-page="page + 1"
        style="margin-top: 8px;"
        layout="prev, pager, next, sizes"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
import initData from '@/mixins/initData'
import TableSet from "@/components/Table/TableSet"
import TableTrans from '@/components/Table/TableTrans'
import { generator } from '@/api/generator'
export default {
  components: {
    TableSet, 
    TableTrans
  },
  mixins: [initData],
  data() {
    return {
      prop: 'generator'
    }
  },
  created() {
    this.init();
  },
  methods: {
    beforeInit() {
      this.url = 'api/generator/tables';
      const sort = 'id,desc';
      this.params = Object.assign({ page: this.page, size: this.size, sort: sort }, this.query);
      return true;
    },
    gen(row) {
      generator(row.tableName, 0).then(res => {
        this.$notify({
          title: '生成成功',
          type: 'success',
          duration: 2500
        })
      })
    },
    download(row) {
      generator(row.tableName, 2).then(res => {
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

<style lang="scss" scoped>
  
</style>
