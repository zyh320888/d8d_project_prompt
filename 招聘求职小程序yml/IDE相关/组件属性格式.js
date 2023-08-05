({
    nInput: {
        type: 'nInput',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.defaultValue': {
                label: '初始默认值',
                inputType: 'input',
                defVal: '',
            },
            'props.value': {
                label: '当前值',
                inputType: 'input',
                defVal: '',
            },
            'props.type': {
                label: '输入框类型',
                inputType: 'select',
                defVal: 'text',
                options: [
                    {
                        label: '文本',
                        value: 'text'
                    },
                    {
                        label: '密码',
                        value: 'password'
                    },
                    {
                        label: '数字',
                        value: 'number'
                    },
                    {
                        label: '电话',
                        value: 'tel'
                    },
                    {
                        label: '身份证',
                        value: 'idcard'
                    },
                    {
                        label: '小数',
                        value: 'digit'
                    },
                ],
            },
            'props.name': {
                label: '组件名字',
                inputType: 'input',
                defVal: '',
            },
            'props.placeholder': {
                label: '占位符',
                inputType: 'input',
                defVal: '',
            },
            'props.align': {
                label: '内容对齐方式',
                inputType: 'select',
                defVal: 'left',
                options: [
                    {
                        label: '左对齐',
                        value: 'left'
                    },
                    {
                        label: '居中对齐',
                        value: 'center'
                    },
                    {
                        label: '右对齐',
                        value: 'right'
                    },
                ],
            },
            'props.disabled': {
                label: '是否禁用',
                inputType: 'switch',
                defVal: false,
            },
            'props.readOnly': {
                label: '是否只读',
                inputType: 'switch',
                defVal: false,
            },
            'props.autoFocus': {
                label: '是否自动获得焦点',
                inputType: 'switch',
                defVal: false,
            },
            'props.maxLength': {
                label: '最大输入字符数',
                inputType: 'input',
                defVal: '',
            },
            'props.clearable': {
                label: '是否展示清除 Icon',
                inputType: 'switch',
                defVal: false,
            },
            'props.clearIconJs': {
                label: '清除图标 Icon',
                inputType: 'js',
                defVal: '',
                memo: 'MaskClose',
            },
            'props.confirmType': {
                label: '键盘右下角按钮的文字',
                inputType: 'select',
                defVal: 'done',
                options: [
                    {
                        label: '发送',
                        value: 'send'
                    },
                    {
                        label: '搜索',
                        value: 'search'
                    },
                    {
                        label: '下一个',
                        value: 'next'
                    },
                    {
                        label: '前往',
                        value: 'go'
                    },
                    {
                        label: '完成',
                        value: 'done'
                    },
                ],
            },
            'props.formatterJs': {
                label: '输入内容格式化函数',
                inputType: 'js',
                defVal: '(val) => val',
                memo: 'val: string',
            },
            'props.formatTrigger': {
                label: '格式化函数触发时机',
                inputType: 'select',
                defVal: 'onChange',
                options: [
                    {
                        label: '输入时触发',
                        value: 'onChange'
                    },
                    {
                        label: '失去焦点时触发',
                        value: 'onBlur'
                    },
                ],
            },
            ...EleDevPropsConfigsV2,
            'props.onChangeJs': {
                label: '输入框内容变化时触发',
                inputType: 'js',
                defVal: '(value) => {}',
                memo: 'value: string',
            },
            'props.onBlurJs': {
                label: '失去焦点后触发',
                inputType: 'js',
                defVal: '(value) => {}',
                memo: 'value: string',
            },
            'props.onFocusJs': {
                label: '获得焦点后触发',
                inputType: 'js',
                defVal: '(value) => {}',
                memo: 'value: string',
            },
            'props.onClearJs': {
                label: '点击清空按钮时触发',
                inputType: 'js',
                defVal: '(value) => {}',
                memo: 'value: string',
            },
            'props.onClickJs': {
                label: '点击 input 容器触发',
                inputType: 'js',
                defVal: '(e) => {}',
                memo: 'e: MouseEvent<HTMLDivElement>',
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }

    },
    nButton: {
        type: 'nButton',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.value': {
                label: '设置按钮文本',
                inputType: 'input',
                defVal: '按钮',
            },
            'props.type': {
                label: '按钮的样式',
                inputType: 'select',
                defVal: 'default',
                options: [
                    {
                        label: '默认',
                        value: 'default'
                    },
                    {
                        label: '主要',
                        value: 'primary'
                    },
                    {
                        label: '信息',
                        value: 'info'
                    },
                    {
                        label: '警告',
                        value: 'warning'
                    },
                    {
                        label: '危险',
                        value: 'danger'
                    },
                    {
                        label: '成功',
                        value: 'success'
                    },
                ],
            },
            'props.size': {
                label: '按钮的尺寸',
                inputType: 'select',
                defVal: 'normal',
                options: [
                    {
                        label: '正常',
                        value: 'normal'
                    },
                    {
                        label: '大',
                        value: 'large'
                    },
                    {
                        label: '小',
                        value: 'small'
                    },
                ],
            },
            'props.shape': {
                label: '按钮的形状',
                inputType: 'select',
                defVal: 'round',
                options: [
                    {
                        label: '方形',
                        value: 'square'
                    },
                    {
                        label: '圆形',
                        value: 'round'
                    },
                ],
            },
            'props.color': {
                label: '按钮颜色',
                inputType: 'input',
                defVal: '',
                memo: '支持传入 linear-gradient 渐变色',
            },
            'props.fill': {
                label: '填充模式',
                Type: 'select',
                defVal: 'solid',
                options: [
                    {
                        label: '实心',
                        value: 'solid'
                    },
                    {
                        label: '轮廓',
                        value: 'outline'
                    },
                    {
                        label: '无',
                        value: 'none'
                    },
                ],
            },
            'props.disabled': {
                label: '是否禁用按钮',
                inputType: 'switch',
                defVal: false,
            },
            'props.block': {
                label: '是否为块级元素',
                inputType: 'switch',
                defVal: false,
            },
            'props.iconJs': {
                label: '按钮图标',
                inputType: 'js',
                defVal: '',
                memo: 'ReactNode',
            },
            'props.loading': {
                label: '按钮loading状态',
                inputType: 'switch',
                defVal: false,
            },
            'props.htmltype': {
                label: '设置 button 原生的 type 值',
                inputType: 'input',
                defVal: '',
                memo: '可选值请参考 HTML 标准  submit | reset | button',
            },
            'props.openType': {
                label: '小程序开放能力',
                inputType: 'select',
                defVal: '',
                options: [
                    {
                        label: '获取手机号',
                        value: 'getPhoneNumber'
                    },
                    {
                        label: '获取用户信息',
                        value: 'getUserInfo'
                    },
                    {
                        label: '分享',
                        value: 'share'
                    },
                    {
                        label: '打开客服会话',
                        value: 'contact'
                    },
                    {
                        label: '打开APP',
                        value: 'launchApp'
                    },
                    {
                        label: '打开授权设置页',
                        value: 'openSetting'
                    },
                    {
                        label: '打开“意见反馈”页面',
                        value: 'feedback'
                    },
                    {
                        label: '获取用户头像',
                        value: 'chooseAvatar'
                    },
                ],
            },
            'props.appParameter': {
                label: '向 APP 传递的参数',
                inputType: 'input',
                defVal: '',
                memo: '打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效	',
            },
            ...EleDevPropsConfigsV2,
            'props.onClickJs': {
                label: '点击事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `点击按钮的回调， (event) => void`
            },
            'props.onGetUserInfoJs': {
                label: '获取用户信息事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效， (event) => void`
            },
            'props.onGetPhoneNumberJs': {
                label: '获取用户手机号事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `手机号快速填写回调，open-type=getPhoneNumber时有效， (event) => void`
            },
            'props.onContactJs': {
                label: '客服消息回调事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `客服消息回调，open-type="contact"时有效， (event) => void`
            },
            'props.onErrorJs': {
                label: '发生错误的回调事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `当使用开放能力时，发生错误的回调，open-type=launchApp时有效， (event) => void`
            },
            'props.onOpenSettingJs': {
                label: '打开授权设置页后回调事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `当在打开授权设置页后回调，open-type=openSetting时有效， (event) => void`
            },
            'props.onLaunchAppJs': {
                label: '打开 APP 成功的回调事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `打开 APP 成功的回调，open-type=launchApp时有效， (event) => void`
            },
            'props.onChooseAvatarJs': {
                label: '获取用户头像回调事件',
                inputType: 'js',
                defVal: '(event)=>{}',
                memo: `获取用户头像回调，open-type=chooseAvatar时有效， (event) => void`
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nRow: {
        type: 'nRow',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.type': {
                label: '布局方式',
                inputType: 'select',
                defVal: '',
                options: [
                    {
                        label: 'Flex',
                        value: 'flex'
                    },
                ],
            },
            'props.gutter': {
                label: '列元素之间的间距（单位为px）',
                inputType: 'input',
                defVal: 0,
            },
            'props.justify': {
                label: 'Flex 主轴对齐方式',
                inputType: 'select',
                defVal: 'start',
                options: [
                    {
                        label: '开始',
                        value: 'start'
                    },
                    {
                        label: '结束',
                        value: 'end'
                    },
                    {
                        label: '居中',
                        value: 'center'
                    },
                    {
                        label: '分布',
                        value: 'space-around'
                    },
                    {
                        label: '两端对齐',
                        value: 'space-between'
                    },
                ],
            },
            'props.align': {
                label: 'Flex 交叉轴对齐方式',
                inputType: 'select',
                defVal: 'flex-start',
                options: [
                    {
                        label: '开始',
                        value: 'flex-start'
                    },
                    {
                        label: '居中',
                        value: 'center'
                    },
                    {
                        label: '结束',
                        value: 'flex-end'
                    },
                ],
            },
            'props.wrap': {
                label: 'Flex是否换行',
                inputType: 'select',
                defVal: 'nowrap',
                options: [
                    {
                        label: '不换行',
                        value: 'nowrap'
                    },
                    {
                        label: '换行',
                        value: 'wrap'
                    },
                    {
                        label: '反向换行',
                        value: 'reverse'
                    },
                ],
            },
            ...EleDevPropsConfigsV2,
            'props.onClickJs': {
                label: '点击事件',
                inputType: 'js',
                defVal: '(event,type)=>{}',
                memo: `点击按钮的回调， (event, type: "row" | "col") => void`
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nCol: {
        type: 'nCol',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.span': {
                label: '列元素宽度',
                inputType: 'input',
                defVal: 24,
                memo: '共分为24份，例如设置一3个，那么span值为8'
            },
            'props.offset': {
                label: '列元素偏移距离',
                inputType: 'input',
                defVal: 0
            },
            ...EleDevPropsConfigsV2,
            'props.onClickJs': {
                label: '点击事件',
                inputType: 'js',
                defVal: '(event,type)=>{}',
                memo: `点击按钮的回调， (event, type: "row" | "col") => void`
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nForm: {
        type: 'nForm',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            // 'props.form': {
            //     label: '表单控制例',
            //     inputType: 'input',
            //     defVal: '',
            //     memo: '经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建'
            // },
            'props.labelPosition': {
                label: '表单项 label 位置',
                inputType: 'select',
                defVal: 'Right',
                options: [
                    { label: '上', value: 'Top' },
                    { label: '左', value: 'Left' },
                    { label: '右', value: 'Right' }
                ],
                memo: '表单项 label 的位置，默认 Right，可设置为 Top、Left、Right'
            },
            'props.starPosition': {
                label: '必填表单项红色星标位置',
                inputType: 'select',
                defVal: 'left',
                options: [
                    { label: '左', value: 'left' },
                    { label: '右', value: 'right' }
                ],
                memo: '必填表单项 label 的红色星标位置，默认为 left，可设置为 left、right'
            },
            ...EleDevPropsConfigsV2,
            'props.onFinishJs': {
                label: '提交表单且数据验证成功后回调事件',
                inputType: 'js',
                defVal: '(values) => {}',
                memo: '表单且数据验证成功后回调事件，回调参数为表单数据 ; (values) => {}'
            },
            'props.onFinishFailedJs': {
                label: '校验失败后触发',
                inputType: 'js',
                defVal: '(error) => {}',
                memo: '任一表单项被校验失败后触发，回调参数为被校验的表单项 prop 值，校验是否通过，错误（如果存在）; (error) => {}'
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    'nForm.Item': {
        type: 'nForm.Item',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.required': {
                label: '必填表单项 label 的红色星标',
                inputType: 'switch',
                defVal: false,
            },
            'props.name': {
                label: '表单项名称',
                inputType: 'input',
                defVal: '',
            },
            'props.label': {
                label: '表单项 label',
                inputType: 'input',
                defVal: '',
            },
            'props.labelWidth': {
                label: '表单项 label 宽度',
                inputType: 'input',
                defVal: '90px',
                memo: '默认单位为px',
            },
            'props.errorMessageAlign': {
                label: '错误提示文案对齐方式',
                inputType: 'select',
                defVal: 'left',
                options: [
                    {
                        label: '居中对齐',
                        value: 'center'
                    },
                    {
                        label: '右对齐',
                        value: 'right'
                    },
                    {
                        label: '左对齐',
                        value: 'left'
                    },
                ],
            },
            'props.initialValue': {
                label: '设置子元素默认值',
                inputType: 'input',
                defVal: '',
            },
            'props.rulesJs': {
                label: '校验规则',
                inputType: 'js',
                defVal: '[]',
                memo: `[
                    { required: true, message: '请输入年龄' },
                    { 
                        validator: (rule, value) => {
                            return /^\d+$/.test(value)
                        }, 
                        message: '必须输入数字' },
                    { 
                        validator: (rule, value) => {
                            return /^(\d{1,2}|1\d{2}|200)$/.test(value)
                        }, 
                        message: '必须输入0-200区间' 
                    },
                  ] `,
            },
            ...EleDevPropsConfigsV2,
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nNavBar: {
        type: 'nNavBar',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.rightJs': {
                label: '右侧内容',
                inputType: 'js',
                defVal: '',
                memo: 'FNode',
            },
            'props.leftJs': {
                label: '左侧内容，渲染在返回区域的右侧',
                inputType: 'js',
                defVal: '',
                memo: 'FNode',
            },
            'props.back': {
                label: '返回区域的文字',
                inputType: 'input',
                defVal: '',
                memo: 'FNode',
            },
            'props.fixed': {
                label: '是否固定',
                inputType: 'switch',
                defVal: false,
            },
            'props.safeArea': {
                label: '是否适配安全区',
                inputType: 'switch',
                defVal: false,
            },
            'props.placeholder': {
                label: '固定在顶部时，是否在标签位置生成一个等高占位元素',
                inputType: 'switch',
                defVal: false,
            },
            'props.zIndex': {
                label: '导航栏层级',
                inputType: 'input',
                defVal: '10',
            },
            ...EleDevPropsConfigsV2,
            'props.onClickBackJs': {
                label: '点击返回区域后的回调',
                inputType: 'js',
                defVal: '(event) => {}',
                memo: '(event) => {}',
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nSwiper: {
        type: 'nSwiper',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.width': {
                label: '轮播卡片的宽度',
                inputType: 'number',
                def: '',
            },
            'props.height': {
                label: '轮播卡片的高度',
                inputType: 'number',
                defVal: '',
            },
            'props.direction': {
                label: '轮播方向',
                inputType: 'select',
                defVal: 'horizontal',
                options: [
                    {
                        label: '水平',
                        value: 'horizontal'
                    },
                    {
                        label: '垂直',
                        value: 'vertical'
                    },
                ],
            },
            'props.indicator': {
                label: '分页指示器是否展示',
                inputType: 'switch',
                defVal: false,
            },
            'props.loop': {
                label: '是否循环轮播',
                inputType: 'switch',
                defVal: true,
            },
            'props.autoPlay': {
                label: '自动轮播时长',
                inputType: 'switch',
                defVal: false,
            },
            'props.defaultValue': {
                label: '初始化索引值',
                inputType: 'input',
                defVal: 0,
            },
            ...EleDevPropsConfigsV2,
            'props.onChangeJs': {
                label: '卡片切换后的回调',
                inputType: 'js',
                defVal: '(index) => {}',
                memo: '当前索引值 index',
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nImage: {
        type: 'nImage',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.src': {
                label: '图片链接',
                inputType: 'input',
                defVal: '',
            },
            'props.fit': {
                label: '图片填充模式',
                inputType: 'select',
                defVal: 'fill',
                options: [
                    {
                        label: '填充',
                        value: 'fill'
                    },
                    {
                        label: '适应',
                        value: 'contain'
                    },
                    {
                        label: '覆盖',
                        value: 'cover'
                    },
                    {
                        label: '拉伸',
                        value: 'scale-down'
                    },
                    {
                        label: '无',
                        value: 'none'
                    },
                ],
            },
            'props.position': {
                label: '图片位置',
                inputType: 'select',
                defVal: 'center',
                options: [
                    {
                        label: '居中对齐',
                        value: 'center'
                    },
                    {
                        label: '顶部对齐',
                        value: 'top'
                    },
                    {
                        label: '右侧对齐',
                        value: 'right'
                    },
                    {
                        label: '底部对齐',
                        value: 'bottom'
                    },
                ],
            },
            'props.alt': {
                label: '替代文本',
                inputType: 'input',
                defVal: '',
            },
            'props.width': {
                label: '宽度',
                inputType: 'input',
                defVal: '',
            },
            'props.height': {
                label: '高度',
                inputType: 'input',
                defVal: '',
            },
            'props.radius': {
                label: '圆角大小',
                inputType: 'input',
                defVal: '',
            },
            'props.error': {
                label: '是否展示图片加载失败',
                inputType: 'switch',
                defVal: true,
            },
            'props.loading': {
                label: '是否展示加载中图片',
                inputType: 'switch',
                defVal: true,
            },
            'props.lazy': {
                label: '是否为懒加载图片',
                inputType: 'switch',
                defVal: false,
            },
            ...EleDevPropsConfigsV2,
            'props.onClickJs': {
                label: '点击图片时触发',
                inputType: 'js',
                defVal: '(e) => {}',
                memo: 'e: MouseEvent',
            },
            'props.onLoadJs': {
                label: '图片加载完后触发',
                inputType: 'js',
                defVal: '() => {}',
            },
            'props.onErrorJs': {
                label: '图片加载失败后触发',
                inputType: 'js',
                defVal: '() => {}',
            },
            ...DividerStyle,
            ...StyleConfigsV2,
        }
    },
    nConfigProvider: {
        type: 'nConfigProvider',
        version: 'v2',
        attr: {
            'extra.devId': {},
            ...DividerProps,
            'props.themeJs': {
                label: '设置主题',
                inputType: 'js',
                defVal: '{}',
            },
        }
    },
})