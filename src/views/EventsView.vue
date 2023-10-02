<template>
    <div>
        <section class="page-title bg-1">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block text-center">
                            <span class="text-white">Gallery</span>
                            <h1 class="text-capitalize mb-5 text-lg">Events</h1>

                            <!-- <ul class="list-inline breadcumb-nav">
                    <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
                    <li class="list-inline-item"><span class="text-white">/</span></li>
                    <li class="list-inline-item"><a href="#" class="text-white-50">Contact Us</a></li>
                </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section doctors">
            <div class="container">


              

                <!-- Gallery -->
                <div class="row">


                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events1.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events2.jpg"
                        
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events3.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events4.jpg"
                        
                        />
                    </div>

                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events5.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events6.jpg"
                        
                        />
                    </div>

                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events7.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events8.jpg"
                        
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events9.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events10.jpg"
                        
                        />
                    </div>

                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events11.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events12.jpg"
                        
                        />
                    </div>

                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events13.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events14.jpg"
                        
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events15.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events16.jpg"
                        
                        />
                    </div>

                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events17.jpg"
                        
                        />

                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events18.jpg"
                        
                        />
                    </div>

                    <div class="col-lg-4 mb-4 p-3">
                        <img class="w-100 shadow-1-strong rounded mb-4 h-50"
                        src="../assets/images/Events/events19.jpg"
                        
                        />
                    </div>
                    
                </div>
                <!-- Gallery -->
        </div>
    </section>
</div></template>

<script>
export default {
    data() {
        return {
            selectedFilter: 'all', // Initial filter value
        };
    },
    mounted() {
        // const myShuffle = new Shuffle(this.$el.querySelector('.shuffle-wrapper'), {
        //     itemSelector: '.shuffle-item',
        //     buffer: 1,
        // });

        // // Use Vue's events handling instead of jQuery
        // this.$el.querySelectorAll('input[name="shuffle-filter"]').forEach((input) => {
        //     input.addeventsListener('change', (evt) => {
        //         if (evt.target.checked) {
        //             const filterValue = evt.target.value;
        //             myShuffle.filter(filterValue);
        //         }
        //     });
        // });
    },
};
</script>

<style lang="scss" scoped></style>