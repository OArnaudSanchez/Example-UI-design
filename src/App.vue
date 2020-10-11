<template>
    <div>
      <SideBar></SideBar>
      <NavBar></NavBar>

      <router-view></router-view>
      
      <Footer></Footer>
    </div>
      
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/Sidebar'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components:{
      NavBar,
      Footer,
      SideBar
  }
}
</script>