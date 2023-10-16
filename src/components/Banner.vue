<template>
  <div>
    <section class="banner">
      <div class="container" style="max-width: 1600px;">
        <div class="row">
          <!-- <div class="col-lg-6 col-md-12 col-xl-7">
            <div class="block">
              <div class="divider mb-3"></div>
              <span class="text-uppercase text-sm letter-spacing">We are providing</span>
              <h1 class="mb-3 mt-3">Manpower Services</h1>

              <p class="mb-4 pr-5 fs-5">
                A manpower agency specializes in connecting businesses with skilled and qualified individuals,
                streamlining the recruitment process for both employers and job seekers.
              </p>
              <div class="btn-container">
                <router-link to="/application" class="btn btn-main-2 btn-icon btn-round-full">
                  Apply Now <i class="icofont-simple-right ml-2"></i>
                </router-link>
              </div>
              <div class="btn-container">
                <router-link to="/inquire" class="btn btn-main-2 btn-icon btn-round-full mt-3">
                  Inquire Now <i class="icofont-simple-right ml-2"></i>
                </router-link>
              </div>
            </div>
          </div> -->
          

          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/images/bg/hero1.jpg" style="height: 750px; object-fit: auto;" class="d-block w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/images/service/mission-pic.jpg" style="height: 750px; object-fit: auto;" class="d-block w-100 " alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/images/service/service-pic1.jpg" style="height: 750px; object-fit: auto;" class="d-block w-100 " alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>