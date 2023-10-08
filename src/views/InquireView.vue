<template>
    <div>
        <section class="page-title bg-1">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block text-center">
                            <span class="text-white">Client Inquiry Form</span>
                            <h1 class="text-capitalize mb-5 text-lg">Client Inquiry Form</h1>
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
                                <div class="col-12 mt-2">
                                    <label>Fullname</label>
                                    <input type="text" class="form-control" v-model="name">
                                </div>
                                <div class="col-6 mt-2">
                                    <label>Contact No.</label>
                                    <input type="text" class="form-control" v-model="phone">
                                </div>
                                <div class="col-6 mt-2">
                                    <label>Email</label>
                                    <input type="email" class="form-control" v-model="email">
                                </div>
                                <div class="col-6 mt-2">
                                    <label>Company No. / Company Registration</label>
                                    <input type="email" class="form-control" v-model="company_no">
                                </div>
                                <div class="col-12 mt-2">
                                    <label>Inquiry Documents</label>
                                    <input type="file" class="form-control" name="inquiry_document" id="inquiry_document">
                                </div>
                                <div class="col-12 mt-2">
                                    <label>Message</label>
                                    <textarea class="form-control" rows="10" v-model="description"></textarea>
                                </div>
                                <div class="col-12 mt-3">
                                    <button type="button" class="btn btn-success w-100" v-on:click="submit">Submit Inquiry</button>
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
            name: '',
            phone: '',
            email: '',
            company_no: '',
            inquiry_document: '',
            description: '',
        };
    },
    methods: {
        submit() {
            const fileInput = document.getElementById('inquiry_document');
            const formInput = new FormData();

            formInput.append('name', this.name);
            formInput.append('phone', this.phone);
            formInput.append('email', this.email);
            formInput.append('company_no', this.company_no);
            formInput.append('description', this.description);
            formInput.append('inquiry_document', fileInput.files[0]);

            axios.post('/api/inquiry/' + this.agencyId, formInput)
                .then(response => {
                    alert('Your Inquiry has been Submitted!');
                    this.$router.push({ path: '/'})
                });
        }
    }
}
</script>