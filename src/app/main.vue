<style src='style.scss' lang='scss'></style>
<script src='script.js'></script>
<template>
  <div class='app'>
    <div class='app-side'>
      <router-link to='/home'>Home</router-link>
      <router-link to='/communities'>Communities</router-link>
      <router-link to='/faq'>FAQ</router-link>
      <router-link to='/jobs'>Jobs</router-link>
      <router-link to='/merch'>Merch</router-link>
      <router-link to='/statistics'>Statistics</router-link>
    </div>
    <div class='app-view'>
      <router-view></router-view>
    </div>
  </div>
</template>
