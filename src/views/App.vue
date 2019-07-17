<template>
  <div class="app">
    {{ message }}
    <div>
      <router-link to="/a">go a</router-link>/
      <router-link to="/b">go b</router-link>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'init'
    }
  },
  methods: {
    setMsg() {
      this.message = 'set msg ----'
    }
  },
  // 创建前
  // 在数据观测和初始化事件还未开始
  beforeCreate() {
    console.log('--- beforeCreate')
  },
  // 创建后
  // 完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来
  created() {
    console.log('--- created')
    setTimeout(() => {
      this.setMsg()
    }, 4000);
  },
  // 载入前
  // 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。
  beforeMount() {
    console.log('--- beforeMount')
  },
  // 载入后
  // 在 el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。
  // 实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。
  mounted() {
    console.log('--- mounted')
  },
  // 更新前
  // 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
  beforeUpdate() {
    console.log('--- beforeUpdate')
  },
  // 更新后
  // 在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用
  updated() {
    console.log('--- updated')
  },
  // 销毁前
  //  在实例销毁之前调用。实例仍然完全可用
  // 调用后，所有的事件监听器会被移除，所有的子实例也会被销毁
  beforeDestroy() {
    console.log('--- beforeDestroy')
  }
}
</script>

<style lang="scss" scoped>
.app {
  color: blue;
}
</style>


