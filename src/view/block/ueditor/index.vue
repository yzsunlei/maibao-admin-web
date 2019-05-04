<template>
	<div>
		<script id="editor" type="text/plain"></script>
	</div>
</template>
<script>
	import '../../../../static/ueditor/ueditor.config.js'
	import '../../../../static/ueditor/ueditor.all.min.js'
	import '../../../../static/ueditor/lang/zh-cn/zh-cn.js'
	import '../../../../static/ueditor/ueditor.parse.min.js'
	import './style.less';

	export default {
		name: 'ueditor',
		data () {
			return {
				editor: null
			}
		},
		props: {
			value: {
				type: String,
				default: ""
			},
			config: {
				type: Object,
				default: () => {}
			}
		},
		mounted() {
			const _this = this;
			this.editor = UE.getEditor('editor', this.config); // 初始化UE
			this.editor.addListener("ready", function () {
				_this.editor.setContent(_this.value); // 确保UE加载完成后，放入内容。
			});
		},
		methods: {
			// 获取内容方法
			getUEContent() {
				return this.editor.getContent();
			}
		},
		watch: {
			value() {
				this.editor.setContent(this.value); // 检测到外部数据变化时，放入内容。
			}
		},
		destroyed() {
			this.editor.destroy();
		}
	}
</script>