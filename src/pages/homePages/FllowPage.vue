<template>
	<div>
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