export default [
  {
    name: 'dateAnnotation',
    dictDetails: [
      {
        value: 'CreationTimestamp',
        label: '自动创建时间'
      },
      {
        value: 'UpdateTimestamp',
        label: '自动更新时间'
      }
    ]
  },
  {
    name: 'searchType',
    dictDetails: [
      {
        value: '=',
        label: '='
      },
      {
        value: '!=',
        label: '!='
      },
      {
        value: '>=',
        label: '>='
      },
      {
        value: '<=',
        label: '<='
      },
      {
        value: 'Like',
        label: 'Like'
      },
      {
        value: 'NotNull',
        label: 'NotNull'
      },
      {
        value: 'BetWeen',
        label: 'BetWeen'
      },
    ]
  },
  {
    name: 'formType',
    dictDetails: [
      {
        value: 'Input',
        label: '文本框'
      },
      {
        value: 'Textarea',
        label: '文本域'
      },
      {
        value: 'Radio',
        label: '单选框'
      },
      {
        value: 'Select',
        label: '下拉框'
      },
      {
        value: 'Date',
        label: '日期框'
      },
    ]
  },
  {
    name: 'boolean',
    dictDetails: [
      {
        value: true,
        label: '是'
      },
      {
        value: false,
        label: '否'
      },
    ]
  },
  {
    name: 'enabled',
    dictDetails: [
      {
        value: true,
        label: '启用'
      },
      {
        value: false,
        label: '禁用'
      },
    ]
  },
]
