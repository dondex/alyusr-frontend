<template>
    <div>
        <header>
            <div class="header-top-bar">
                <div class="container">
                    <div class="row align-items-center ">
                        <div class="col-lg-6">
                            <ul class="top-bar-info list-inline-item pl-0 mb-0">
                                <li class="list-inline-item"><a href="mailto:alyusrcb12@outlook.com"><i class="icofont-support-faq mr-2"></i>admin@alyusr.website</a></li>
                                <!-- <li class="list-inline-item"><i class="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li> -->
                            </ul>
                        </div>
                        <div class="col-lg-6 ">
                            <div class="text-lg-right top-right-bar  mt-2 mt-lg-0 ">
                                <a href="tel:+966533416292">
                                    <span>Call Now : </span>
                                    <span class="h4 text-white">+966533416292</span>
                                </a>
                                <a href="https://portal.yaramay.com/" target="_blank"><button type="button" class="btn btn-primary m-3" style="padding: 5px 10px!important;">login</button></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navigation" id="navbar">
                <div class="container">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../assets/images/alyusr-logo.png" alt="" class="img-fluid">
                    </router-link>

                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
                        aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icofont-navigation-menu"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarmain">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item active"><router-link class="nav-link" to="/">Home</router-link></li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" id="dropdown02" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">About Us <i class="icofont-thin-down"></i></a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><router-link class="dropdown-item" to="/about">About Al Yusr</router-link></li>
                                    <li><router-link class="dropdown-item" to="/legality">Legality</router-link></li>
                                </ul>
                            </li>

                            <li class="nav-item"><router-link class="nav-link" to="/Jobs">Jobs</router-link></li>
                            <li class="nav-item"><router-link class="nav-link" to="/services">Services</router-link></li>

                            
                           
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="" id="dropdown02" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Gallery <i class="icofont-thin-down"></i></a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                    <!-- <li><router-link class="dropdown-item" to="/gallery">All</router-link></li> -->
                                    <li><router-link class="dropdown-item" to="/achievements">Achievements</router-link></li>
                                    <li><router-link class="dropdown-item" to="/events">Events</router-link></li>
                                    <li><router-link class="dropdown-item" to="/staff">Staff</router-link></li>
                                    <li><router-link class="dropdown-item" to="/office">Office</router-link></li>
                                    <li><router-link class="dropdown-item" to="/activities">Activities</router-link></li>
                                    <li><router-link class="dropdown-item" to="/others">Others</router-link></li>
                                </ul>
                            </li>
                            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
                            <!-- <li class="nav-item mx-2">
                                <router-link to="/application" class="btn btn-main-2 btn-icon btn-round-full">
                                    Apply<i class="icofont-simple-right "></i>
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link to="/inquire" class="btn btn-main-2 btn-icon btn-round-full">
                                    Inquire<i class="icofont-simple-right"></i>
                                </router-link>
                            </li> -->
                            <li class="nav-item mx-2">
                                <router-link to="/application" class="btn btn-main-2 btn-icon btn-round-full">
                                    Apply Now
                                </router-link>
                            </li>
                            <li class="nav-item mx-2">
                                <router-link to="/inquire" class="btn btn-main-2 btn-icon btn-round-full">
                                    Inquire Now
                                </router-link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
        
        
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>

</style>

