<template>
	<div :style="{
				position: 'relative',
				height: '100vh',
				backgroundImage: `url(${require('@/assets/loginBackground.jpg')})`
			}">
		<div class="form-container vertical-center">
			<div class="form-item">
				<vant-icon name="phone" size="20"/>
				<span>手机</span>
				<input type="number" name="phoneNumber" v-model="phoneNumber"/>
			</div>
			<div class="form-item">
				<vant-icon name="other-pay" size="20" />
				<span>密码</span>
				<input type="text" name="password" v-model="password" />
			</div>
			<div class="option">
				<span>立即注册</span>
				<span>忘记密码？</span>
			</div>
			<button class="submit-btn" @click="isWarning = !isWarning">登录</button>
			<span v-if="isWarning" class="warning">
				<vant-icon name="warning-o" />
				{{warning}}
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'loginPage',
	data () {
		return {
			phoneNumber: '',
			password: '',
			warning: '请输入正确的手机号码',
			isWarning: false
		}
	}
}
</script>

<style scoped>
.vertical-center {
	position: absolute;
	width: 100%;
	box-sizing: border-box;
	top: 20%;
}
.form-container {
	padding: 16px;
	color: #e8e8e8;
}
.form-container .form-item {
	display: flex;
	align-items: center;
	padding: 8px;
	margin: 10px 0px;
	white-space: nowrap;
	background-color: rgba(193, 193, 193, 0.2);
}
.form-item span {
	margin-left: 16px;
}
.form-item input {
	border: none;
	background: none;
	flex-grow: 1;
	margin-left: 8px;
}
.form-container .option {
	font-size: 12px;
	margin: 10px 0px;
	display: flex;
	justify-content: space-between;
}
.form-container .submit-btn {
	display: block;
	width: 100%;
	font-size: 18px;
	background-color: #FB690D;
	border: none;
	padding: 8px 0px;
}
.warning {
	font-size: 12px;
	color: #fb4f0d;

}
</style>
