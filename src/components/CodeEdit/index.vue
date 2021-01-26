<template>
  <div class="json-editor">
    <textarea ref="textarea" />
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import 'codemirror/mode/clike/clike'
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      editor: null
    }
  },
  watch: {
    value: {
      handler(value) {
        this.$nextTick(() => {
          this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
            mode: 'text/x-java',
            lineNumbers: true,
            lint: true,
            lineWrapping: true,
            tabSize: 2,
            cursorHeight: 0.9,
            // 替换主题这里需修改名称
            theme: 'idea',
            readOnly: true
          })
          this.editor.setValue(this.value)
          this.editor.setSize('auto', 500)
        })
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
  
</style>
