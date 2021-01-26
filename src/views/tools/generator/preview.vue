<template>
  <div class="app-container">
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane 
        v-for="item in list"
        :key="item.name"
        :label="item.name" 
        :name="item.name"
      >
        <CodeEdit v-if="activeName == item.name" :value="item.content" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { generator } from '@/api/generator'
import CodeEdit from '@/components/CodeEdit'
export default {
  components: {
    CodeEdit
  },
  data() {
    return {
      activeName: '',
      list: []
    }
  },
  computed: {
    tableName() {
      return this.$route.params.name;
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      generator(this.tableName, 1).then(res => {
        this.list = res || [];
        this.activeName = this.list[0] && this.list[0].name;
      })
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>
