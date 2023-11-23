<template>
  <body>
  <div class="relative w-full h-screen">
    <div class=" img w-full h-full"></div>
    <div class="center absolute d-flex align-items-center justify-content-center text-white">
      <div class="text-7xl font-semibold ">There's an artist in you</div>
      <br>
      <br>
      <div class="text-5xl font-semibold">Find it out</div>
    </div>
  </div>
  -----------
  <div class="flex flex-column align-items-center  justify-content-center">
    <h1 class="text-4xl font-semibold">Our goal</h1>
    <div class="flex flex-wrap justify-content-center  align-items-center"
         style="max-width: 1000px; width: calc(100vw - 18px)">

      <div
          class="img_artists flex-grow-1 md:flex-grow-0  opacity-80 border-round"></div>
      <div
          class=" flex-grow-1 md:flex-grow-0 align-items-center justify-content-center text-white font-bold  border-round "
          style="width: 40%; min-width: 400px; background: rgba(0, 0, 0, 0.8);">
        <i class="fas fa-desktop section-icon"></i>
        <p class="text-3xl font-semibold m-4">Our goal is to become the definitive platform for Peruvian artists</p>
        <p class="text-1xl font-medium m-5">We aim towards providing a web platform through which various
          Peruvian artists cam promote their art for the interested audience. That way,
          these artists can live from what they love doing, besides attracting people interested
          in Peruvian art.</p>
      </div>
      <div class="spacing">
        <hr>
      </div>
      <div
          class="flex-grow-1 md:flex-grow-0 align-items-center justify-content-center text-white font-bold  border-round"
          style="width: 40%; min-width:400px;background: rgba(0, 0, 0, 0.8); ">
        <i class="fas fa-palette section-icon"></i>
        <h5 class="text-3xl font-semibold m-4">The place where you'll find the art you're looking for</h5>
        <p class="text-1xl font-medium m-5">This is the website where the most modern and innovative art
          takes place. For Peruvian art lovers or people interested to easily discover artowrk depending
          on their tastes to give recognition to the artists behind such fascinating projects.</p>
      </div>
      <div
          class="img_amateurs flex-grow-1 md:flex-grow-0  opacity-80 border-round"></div>
      <div class="spacing">
        <hr>
      </div>
      <p class="flex text-4xl font-semibold w-full justify-content-center ">Join now and...</p>
      <div class="img_benefits_artists flex-grow-1 md:flex-grow-0  opacity-70"></div>
      <div
          class="flex-grow-1 md:flex-grow-0 align-items-center justify-content-center text-white font-bold  border-round "
          style="width: 50%; min-width: 400px;background: rgba(0, 0, 0, 0.8); ">
        <ul>
          <li><i class="fas fa-check"></i> Create your own profile.</li>
          <li><i class="fas fa-check"></i> Upload and promote your projects.</li>
          <li><i class="fas fa-check"></i> Organize your own events.</li>

        </ul>
      </div>

      <div class="spacing">
        <hr>
      </div>

      <div
          class="flex-grow-1 md:flex-grow-0 align-items-center justify-content-center text-white font-bold  border-round "
          style="width: 50%; min-width: 400px; background: rgba(0, 0, 0, 0.8);">
        <ul>
          <li><i class="fas fa-check"></i> Discover artists, projects, events and more...</li>
          <li><i class="fas fa-check"></i> Follow your favourite artists.</li>
          <li><i class="fas fa-check"></i> Build your event calendar.</li>
        </ul>
      </div>
      <div class="img_benefits_amateurs flex-grow-1 md:flex-grow-0  opacity-70"></div>
      <div class="spacing">
        <hr>
      </div>
      <p class="text-3xl flex font-semibold w-full justify-content-center">Sign up for free</p>
      <div class="img_registration flex-grow-1 md:flex-grow-0 opacity-70"></div>
      <div class="flex flex-column flex-grow-1 md:flex-grow-0 align-items-center text-white border-round-2xl "
           style="background: rgba(0, 0, 0, 0.8);">
        <p class="mx-2">Join now for a chance to get unique benefits.</p>
        <pv-button class="bg-red-500 m-5" @click="navigateToSignUp">Sign up</pv-button>
      </div>
    </div>
  </div>
  </body>
  <footer class="flex flex-row justify-content-center align-items-center p-1 w-full mw-5 text-white"
          style="background:#1b1717; ">
    <div class="section_contact">
      <h6>Contáctanos</h6>
      <i class="pi pi-fw pi-home"> </i>
      <p>info@softteam.com</p>
      <p>(01) 333-3333 / (51) 999 999 999</p>
    </div>
    <div class="section_soft_team">
      Copyright © 2023 SoftTeam
    </div>
    <div class="section_socialmedia">
      <!--<a href= "https://facebook.com" target="_blank"><i class="fab fa-facebook-f facebook"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram instagram"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter twitter"></i></a>-->
      <pv-button class="bg-red-500 m-5" to="/terms&conditions">Terms and Conditions</pv-button>
      <!--        <terms-and-conditions dialogValue="dialogValue"></terms-and-conditions>-->
    </div>
  </footer>
</template>
<script>

export default {
  name: "about-view",
  components: {


    /*TermsAndConditions*/
  },
  data() {
    return {
      dialogValue: false,
    }
  },
  created() {
    this.$emit('isLogged')
  },
  methods: {
    navigateToSignUp()
    {
      this.$router.push({name: 'sign-up'});
    }
  }
}
</script>

<style scoped>
.img {
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/cover_page.jpg')no-repeat;*/
  background: url("../../assets/img/cover_page.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.img::before {
  content: ""; /* Crea un pseudo-elemento ::before */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente oscuro */
  z-index: 1;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.spacing {
  width: 100%;
  display: flex;
  justify-content: center;
}


.img_artists {
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/painting.jpg')no-repeat;*/
  background: url("../../assets/img/painting.jpg") no-repeat;
  opacity: 0.8;
  width: 600px;
  background-size: 100% 100%;
  max-height: 380px;
  height: 40vw;
  min-height: 200px;
}

.img_artists::before {
  content: ""; /* Crea un pseudo-elemento ::before */
  position: relative;
  background: rgba(0, 0, 0, 0.7); /* Fondo semitransparente oscuro */
  z-index: 1;
}


/* amateurs purpose*/


.img_amateurs {
  /*background: url('../../FrontEnd Open source/web-apps-sw51/src/app/components/pre-menu/img/amateur.jpg')no-repeat;*/
  background: url("../../assets/img/amateur.jpg") no-repeat;

  width: 600px;
  background-size: 100% 100%;
  max-height: 400px;
  height: 40vw;
  min-height: 200px;
}

.img_benefits_artists {
  background: url("../../assets/img/working.svg") no-repeat;
  width: 50%;
  background-size: 100% 100%;
  height: 320px;
}

.img_benefits_amateurs {
  background: url("../../assets/img/finding_art.svg") no-repeat;
  width: 50%;
  background-size: 100% 100%;
  height: 320px;
}

.img_registration {
  background: url("../../assets/img/undraw_Forms_re_pkrt.svg") no-repeat;
  width: 50%;
  background-size: 100% 100%;
  height: 320px;
}

</style>