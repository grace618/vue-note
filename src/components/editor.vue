<template>
	<div id="note-editor">
		 <textarea @input='editenote'  v-bind:value="textText"></textarea>
		 <!-- <textarea v-bind:value="activeNoteText" v-on:input="editNote" class="form-control"></textarea> -->
	</div>
</template>
<script>
	export default{
		computed:{
			textText(){
				return this.$store.getters.Activenote.text
			}
		},
		methods:{
			editenote(e){
				this.$store.dispatch('editNote',e.target.value)
			}
		}
	}
</script>
<style type="text/css">
#note-editor {
  height: 100%;
}

#note-editor textarea {
  height: 100%;
  width: 100%;
  border-radius: 0;
}
</style>