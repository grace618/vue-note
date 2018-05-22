<template>
	<el-tabs v-model="activeName" type="border-card" >
	    <el-tab-pane label="所有笔记" name="first">
	    	<ul>
				<!-- 直接循环的一个函数，setnote函数会有返回值,循环时绑定函数把对象传入 -->
	    		<li v-for='item in setnote' @click='setActiveNote(item)' :class="{active:activenote == item}"> <!--  active这个类存在与否取决于后面的布尔值 -->
				{{item.text}}
	    		</li>
	    	</ul>
	    </el-tab-pane>
	    <el-tab-pane label="我的喜欢" name="second">
			<!-- 直接循环的一个函数，setnote函数会有返回值,循环时绑定函数把对象传入 -->
	    		<li v-for='item in setnote' @click='setActiveNote(item)' :class="{active:activenote == item}"
	    		v-if='item.favorite'> <!--  active这个类存在与否取决于后面的布尔值 -->
				{{item.text}}
	    		</li>
	    </el-tab-pane>
   </el-tabs>
</template>
<script>
	export default {
	    data() {
	      return {
	        activeName: 'first'
	      };
	    },
	   computed:{
	   	  setnote(){
	   	  	return this.$store.getters.note
	   	   },
	    	activenote(){
            return this.$store.getters.Activenote
            }
	   },
	    methods: {
	    	setActiveNote(item){
	    		this.$store.dispatch('SetActiveNote',item)
	    	}
	    }
    };
</script>
<style>
	li{
		list-style: none;
		border-bottom: 1px solid #ccc;
		height: 50px;
		line-height: 50px;
		cursor: pointer;
	}
	li:hover{
		background: #ccc;
	}
	.active{
		background: #ccc;
	}
</style>