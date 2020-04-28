<template>
	<div class="fllow-page">
		<card :cardData="cardData" />
		<card :cardData="cardData" />
		<card :cardData="cardData" />
		<card :cardData="cardData" />
		<card :cardData="cardData" />
	</div>
</template>

<script>
import Card from '@/components/Card'
export default {
	name: 'FllowPage',
	components: {
		'card': Card
	},
	data () {
		return {
			cardData: {
				id: '001',
				avatar: require('@/assets/avatar01.jpg'),
				username: 'Superuser',
				mainImg: require('@/assets/mainImg01.jpg'),
				likeCount: 640,
				messageCount: 200,
				title: 'coooooooooooooool',
				time: Date.now()
			}
		}
	}
}
</script>

<style scoped>

</style>