<template>
    <div>
        <section>
            <div class="container mb-5">
                <div class="row">
                    <div class="col-md-9">
                        <div class="bg-primary my-3 p-3">
                            <h1 class="text-white">Available Jobs</h1>
                        </div>
                        <div v-for="(jobs) in this.jobs" :key="jobs.id" class="p-3 my-2 text-dark bg-white" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                            <h4 class="text-black">{{ jobs.title }}</h4>
                            <div>
                                <span class="mr-5">Posted On: {{ jobs.created_at }}</span>
                                <span class="mr-2">Posted By: {{ jobs.posted_by }}</span>
                                
                            </div>
                            <span class="mr-2">Country: {{ jobs.country }}</span>
                        </div>

                           
                    </div>
                    <div class="col-md-3">
                        <div class=" bg-white" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                            <img class="img-fluid" src="../../assets/images/alyusr-logo.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'jobs',
    data(){
        return {
            jobs: []
        }
    },
    mounted(){

        this.getJobs();
        // console.log('jobs');
    },
    methods: {
        getJobs(){
            axios.get('/api/job-post/' + this.agencyId).then(res => {
                this.jobs = res.data.data
                // console.log(this.jobs)
            });
        }
    },
}

</script>

<style lang="scss" scoped>

</style>