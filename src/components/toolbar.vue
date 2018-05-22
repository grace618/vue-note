<template>
	<div class="toolbar">
		<i class="el-icon-edit" @click='addnote'></i>
		<i :class="activeNote.favorite?'el-icon-star-on':'el-icon-star-off'" @click='toggleFavorite'></i>
		<i class="el-icon-delete" @click='deletenote'></i>
	</div>
</template>
<script>
	export default{
		name:'toolbar',
		computed:{
			activeNote(){
				return this.$store.getters.Activenote
			}
		},
		methods:{
			addnote(){
				this.$store.dispatch('addNote');
			},
			toggleFavorite(){
				this.$store.dispatch('favorNote')
			},
			deletenote(){
				this.$store.dispatch('deleteNote')
				//this.$store.commit('DELETE_NOTE')  直接commit,不通过dispatch action分发
			}
		}
	}
</script>
<style >
    html,body{
    	height: 100%;
    }
	.toolbar{
		background: #ccc;
		height: 100%;
		overflow: hidden;
	}
	.toolbar i{
			display: block;
			margin:10px 0;
			font-size: 30px;
			cursor: pointer;

		}
</style>