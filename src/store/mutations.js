export default{
	// Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
	// 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
	//添加笔记
	ADD_NOTE(state){
		//1 创建一个新对象
		const newnote={
			text:'new note',  //文本
			favorite:false   //是否收藏
		};
		//2 添加进notelist
		state.notelist.push(newnote);
		//3 设置为当前对象
		state.activenote=newnote;
	},
	//删除笔记
	DELETE_NOTE(state){
		for(let i=0;i<state.notelist.length;i++){
			if(state.activenote==state.notelist[i]){
				state.notelist.splice(i,1)
			}
		}
		state.activenote=state.notelist[0]
	},
	//编辑笔记
	EDIT_NOTE(state,note){  //编辑笔记
		state.activenote.text=note
	},
	//我的收藏
	FAVOR_NOTE(state){
		state.activenote.favorite=!state.activenote.favorite
	},
	//设置当前激活的笔记
	SET_ACTIVE_NOTE(state,note){
		state.activenote=note
	}
}