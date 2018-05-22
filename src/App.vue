<template>
  <div id="app">
    <el-container class='container'>
      <el-aside width="150px" class='aside'>
           <toolbar></toolbar>
      </el-aside>
      <el-aside>
        <noteList></noteList>
      </el-aside>
      <el-main>
           <editor></editor>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import toolbar from './components/toolbar.vue'
import noteList from './components/notelist.vue'
import editor from './components/editor.vue'
export default {
  name: 'App',
  components: {
    toolbar,
    noteList,
    editor
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.aside,.container{
  height: 100%;
}
.el-main{
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.el-aside{
  border-right: 1px solid #ccc;
}
</style>
