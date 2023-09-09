<template>
    <body id="top">
        <Header />
        <RouterView/>
        <Footer />
    </body>

</template>

<script setup>
import {  RouterView } from 'vue-router'
import Header from './components/Layouts/Header.vue';
import Footer from './components/Layouts/Footer.vue';

</script>

<style scoped>

</style>
