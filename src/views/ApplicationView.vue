<template>
    <div>
        <section class="page-title bg-1">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block text-center">
                            <span class="text-white">Application Form</span>
                            <h1 class="text-capitalize mb-5 text-lg">Application Form</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row mt-5 mb-5">
                    <div class="col-md-8 offset-md-2">
                        <form action="">
                            <div class="row">
                                <div class="col-4 mt-2">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" v-model="first_name">
                                </div>
                                <div class="col-4 mt-2">
                                    <label>Middle Name</label>
                                    <input type="text" class="form-control" v-model="middle_name">
                                </div>
                                <div class="col-4 mt-2">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" v-model="last_name">
                                </div>
                                <div class="col-12 mt-2">
                                    <label>Job Title</label>
                                    <select class="form-control" v-model="job_id">
                                        <option v-for="job in jobDetails" :key="job.uuid" :value="job.uuid">{{ job.title }}</option>
                                    </select>
                                </div>
                                <div class="col-6 mt-2">
                                    <label>Contact No.</label>
                                    <input type="text" class="form-control" v-model="contact_number">
                                </div>
                                <div class="col-6 mt-2">
                                    <label>Email</label>
                                    <input type="email" class="form-control" v-model="email">
                                </div>
                                <div class="col-12 mt-2">
                                    <label>Upload Resume</label>
                                    <input type="file" class="form-control" name="resume" id="resume">
                                </div>
                                <div class="col-12 mt-2">
                                    <label>Cover Letter</label>
                                    <textarea class="form-control" rows="10" v-model="cover_letter"></textarea>
                                </div>
                                <div class="col-12 mt-3">
                                    <button type="button" class="btn btn-primary w-100" v-on:click="submit">Submit</button>
                                </div>
                            </div>
                        </form>
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
            first_name: '',
            middle_name: '',
            last_name: '',
            contact_number: '',
            email: '',
            cover_letter: '',
            accepted_terms_and_condition: 1,
            job_id: '',
            jobDetails: [],
        };
    },
    mounted() {
        this.fetchJobTitles(); // Fetch job titles when the component is mounted
    },
    methods: {
        submit() {
            const fileInput = document.getElementById('resume');
            const formInput = new FormData();

            formInput.append('first_name', this.first_name);
            formInput.append('middle_name', this.middle_name);
            formInput.append('last_name', this.last_name);
            formInput.append('contact_number', this.contact_number);
            formInput.append('email', this.email);
            formInput.append('cover_letter', this.cover_letter);
            formInput.append('accepted_terms_and_condition', this.accepted_terms_and_condition);
            formInput.append('resume', fileInput.files[0]);
            formInput.append('job_id', this.job_id);

            axios.post('/api/application/' + this.agencyId, formInput)
            .then(response => {
                    alert('Your Application has been Submitted!');
                    this.$router.push({ path: '/' });
                })
                .catch(error => {
                    console.error('Error submitting the application:', error);
                    if (error.response) {
                        console.log('Response data:', error.response.data);
                        console.log('Response status:', error.response.status);
                    }
                    // Handle the error and provide feedback to the user if needed.
                });
        },
        fetchJobTitles() {
            axios.get('/api/job-post/' + this.agencyId).then((res) => {
                this.jobDetails = res.data.data;
            });
        },
    }
}
</script>