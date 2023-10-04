<template>
    <div>
      <section class="jobdetails">
        <div class="container my-5" v-for="(jobDetails) in this.jobDetails" :key="jobDetails.id">
          <div class="row">
            <div class="col-md-6">
              <h1>Job Details</h1>
              <h3>Position: {{ jobDetails.title }}</h3>
              <p>UUID: {{ jobDetails.uuid }}</p>
              <p>Posted By: {{ jobDetails.posted_by }}</p>
              <p>Posted On: {{ jobDetails.created_at }}</p>
              <button class="btn btn-primary">Apply Now</button>
            </div>
            <div class="col-md-6 desc-wrapper">
              <!-- Use v-html to render HTML content -->
              <p>Description:</p>
              <div v-html="jobDetails.description" class="description-content"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jobDetails: {},
      };
    },
    mounted() {
      this.getJobDetails();
    },
    methods: {
      getJobDetails() {
        const jobUuid = this.$route.params.uuid;
        axios.get(`/api/job-post/get/${jobUuid}`).then((res) => {
          this.jobDetails = res.data;
        });
      },
    },
  };
  </script>

<style scoped>

.attachment .attachment--preview .attachment--jpg img{
    width: 450px;
    height: auto;
}
</style>
  