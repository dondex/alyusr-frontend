<template>
    <div>
        <section class="section service gray-bg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <div class="section-title">
                        <h2>Partnership</h2>
                        <div class="divider mx-auto my-4"></div>
                            <!-- <p>
                                SHUBRA AL TAIF COMPANY<br>
                                AL BAHRIA BEAUTY CENTER LADIES<br>
                                HAIRDRESSERS FOR HAIL
                            </p> -->
                        </div>
                    </div>
                </div>

                <!-- <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part1.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part2.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part3.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part4.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part5.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part6.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/part7.png" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/partner1.jpg" alt="">
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/partner2.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/partner3.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/partner4.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/partner5.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="service-item mb-4">
                            <img class="img-fluid" src="../assets/images/partner/partner6.jpg" alt="">
                        </div>
                    </div>
                </div> -->


                <div class="logos">
                    <div class="logos-slide">
                        <img src="../assets/images/partner/part1.png" />
                        <img src="../assets/images/partner/part2.png" />
                        <img src="../assets/images/partner/part3.png" />
                        <img src="../assets/images/partner/part4.png" />
                        <img src="../assets/images/partner/part5.png" />
                        <img src="../assets/images/partner/part6.png" />
                        <img src="../assets/images/partner/part7.png" />
                        <img src="../assets/images/partner/partner1.jpg" />
                        <img src="../assets/images/partner/partner2.jpg" />
                        <img src="../assets/images/partner/partner3.jpg" />
                        <img src="../assets/images/partner/partner4.jpg" />
                        <img src="../assets/images/partner/partner5.jpg" />
                        <img src="../assets/images/partner/partner6.jpg" />
                        <img src="../assets/images/partner/partner7.jpg" />
                        <img src="../assets/images/partner/partner8.jpg" />
                        <img src="../assets/images/partner/partner9.jpg" />
                        <img src="../assets/images/partner/partner10.jpg" />
                    </div>

                </div>
               
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 50px;
  height: 100%;
  content: "";
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 30s slide infinite linear;
}

.logos-slide img {
  height: 200px;
  margin: 0 40px;
}

</style>
