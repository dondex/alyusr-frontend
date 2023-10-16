<template>
  <div>
    <!-- {{ uuid }} -->
    <section>
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-md-8 offset-md-2">
            <form @submit.prevent="submitForm" enctype="multipart/form-data">
              <!-- The @submit.prevent modifier prevents the default form submission -->
              <div class="row">
                <div class="col-4 mt-2">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="first_name"
                  />
                </div>
                <div class="col-4 mt-2">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="middle_name"
                  />
                </div>
                <div class="col-4 mt-2">
                  <label>Last Name</label>
                  <input type="text" class="form-control" v-model="last_name" />
                </div>
                <div class="col-6 mt-2">
                  <label>Contact No.</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="contact_number"
                  />
                </div>
                <div class="col-6 mt-2">
                  <label>Email</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <div class="col-12 mt-2">
                  <label>Upload Resume</label>
                  <input
                    type="file"
                    class="form-control"
                    name="resume"
                    id="resume"
                    ref="resumeFile"
                  />
                </div>
                <div class="col-12 mt-2">
                  <label>Cover Letter</label>
                  <textarea
                    class="form-control"
                    rows="10"
                    v-model="cover_letter"
                  ></textarea>
                </div>
                <div class="col-12 mt-3">
                  <button type="submit" class="btn btn-primary w-100">
                    Submit
                  </button>
                  <!-- Change the button type to "submit" -->
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
import axios from "axios";

export default {
  props: {
    uuid: String,
    jobUuid: String,
  },
  data() {
    return {
      first_name: "",
      middle_name: "",
      last_name: "",
      contact_number: "",
      email: "",
      resume: "",
      cover_letter: "",
    };
  },
  methods: {
    submitForm() {
      // Create a FormData object to send form data including files
      const formData = new FormData();
      formData.append("uuid", this.uuid);
      formData.append("first_name", this.first_name);
      formData.append("middle_name", this.middle_name);
      formData.append("last_name", this.last_name);
      formData.append("contact_number", this.contact_number);
      formData.append("email", this.email);
      formData.append("cover_letter", this.cover_letter);
      formData.append("resume", this.$refs.resumeFile.files[0]);

      // Make a POST request to your API endpoint
      axios
        .post(`/api/application/${this.agencyId}/job/${this.jobUuid}`, formData)
        .then((response) => {
          // Handle the response (e.g., show a success message)
          alert("Your Application has been Submitted!");
          this.$router.push({ path: "/" });
        })
        .catch((error) => {
          // Handle errors (e.g., show an error message)
        });
    },
  },
};
</script>
