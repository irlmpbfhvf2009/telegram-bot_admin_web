<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="参数名称：" prop="key">
        <!-- <el-input v-model="form.key" disabled="disabled" placeholder="请输入名称"></el-input> -->
          {{ form.key }}
      </el-form-item>
      <el-form-item v-if="form.value != '开启' && form.value != '关闭' && form.key != '机器人名称'" label="值：" prop="value">
        <el-input v-model="form.value" oninput="value=value.replace(/[^\d]/g,'')" placeholder=""></el-input>
      </el-form-item>
      <!-- <el-form-item label="选择器：" prop="select">
			  <el-select v-model="form.choose" placeholder="请选择" clearable>
					<el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item> -->
      <el-form-item label="状态：" prop="value" v-if="form.value == '开启' || form.value == '关闭' && form.key != '机器人名称'">
        <el-radio-group v-model="form.value">
          <el-radio v-for="item in radioData" :key="item.value" :label="item.label">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { updateConfig } from '@/api/app'
import { selectData, radioData } from './enum'
import Layer from '@/components/layer/index.vue'
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup(props, ctx) {
    const ruleForm = ref(null)
    const layerDom = ref(null)
    let form = ref({
      name: ''
    })
    const rules = {
      key: [{ required: true, message: '请输入值', trigger: 'blur' }],
      value: [{ required: true, message: '请输入数字', trigger: 'blur' }],
      // choose: [{ required: true, message: '请选择', trigger: 'blur' }],
      radio: [{ required: true, message: '请选择', trigger: 'blur' }]
    }
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        form.value = JSON.parse(JSON.stringify(props.layer.row)) // 数量量少的直接使用这个转
        console.log(form.value)
      } else {

      }
    }
    return {
      form,
      rules,
      layerDom,
      ruleForm,
      selectData,
      radioData
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            let params = this.form
            if (this.layer.row) {
              this.updateForm(params)
            } 
          } else {
            return false;
          }
        });
      }
    },
    // 新增提交事件
    addForm(params) {
      add(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$emit('getTableData', true)
          this.layerDom && this.layerDom.close()
        })
    },
    // 编辑提交事件
    updateForm(params) {
      updateConfig(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$emit('getTableData', false)
          this.layerDom && this.layerDom.close()
        })
    }
  }
})
</script>

<style lang="scss" scoped></style>