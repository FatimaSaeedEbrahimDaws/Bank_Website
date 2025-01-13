<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="div">
  <!-- <header class="head"> -->
    <!-- <div class="div-4">  <RouterLink class="router" to="/"></RouterLink></div> -->
  
  <div class="div-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d96c6af7d7aa14b90ba4d8ad34f101dd65120a884163a6457dd751728907db?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img"
      />
     
   
    
      <nav>
         <div class="div-3">
        <div class="div-4">  <RouterLink class="router" to="/">Home</RouterLink></div>

        <div class="div-5"><RouterLink class="router" to="/careers">Careers</RouterLink></div>
        <div class="about"><RouterLink class="router" to="/about">About</RouterLink></div>
        <div class="div-7"><RouterLink class="router" to="/security">Security</RouterLink></div>
      </div>
       
   
      <div class="div-8">
        <div class="div-9"><RouterLink class="router" to="/signUp">Sign Up</RouterLink></div>
        <div class="div-10"><RouterLink class="router1" to="/login">Login</RouterLink></div>
      </div>
    
      </nav>
   

  </div>
 
  <!-- </header> -->
 </div>
  <RouterView />
  <div class="div-56">
      <div class="div-57">
        <div class="div-58">
          <div class="div-59">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0056746deecfb21de68a6f30466c49576634ce22d5cde143b8519264904d9ab8?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-11"
            />
            <div class="div-60">
              <div class="div-61">Home</div>
              <div class="div-62">Careers</div>
              <div class="div-63">About</div>
              <div class="div-64">Security</div>
            </div>
          </div>
        </div>
        <div class="div-65"></div>
        <div class="div-66">
          <div class="div-67">
            <div class="div-68">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74446b11abc9df77ed6dfb16fe3f09750976a96ee9b2292133cb23600b9d4510?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-12"
              />
              <div class="div-69">hello@skillbirdge.com</div>
            </div>
            <div class="div-70">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6fa03883d49071ecf2cc27b940c60aab15ef287a22671ffe8387751b2bbbe5?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-13"
              />
              <div class="div-71">+91 91813 23 2309</div>
            </div>
            <div class="div-72">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0d655c2c7242df463c294bb83fd6b3963ccdda58681cbc37fa709263c76d841?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-14"
              />
              <div class="div-73">Somewhere in the World</div>
            </div>
          </div>
        </div>
        <div class="div-74"></div>
        <div class="div-75">
          <div class="div-76">
          
              <!-- <button class="facebook" @click="$router.push()" > -->
                <a  class="facebook" href="https://www.facebook.com/Temmaam/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e086b7cf4f00156cc10d0c1bbeb62fda8d24b235f0db54c1e3f8de2a09ef514b?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-15"
              />
            </a>
            <!-- </button> -->
            
            <a class="twitter" href="https://twitter.com/TemmamL">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/779a351158a92492ef741c6d13a81a51b93c19c38e07f6ec72cbbadb0afa5a72?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-16"
              />
            </a>
            <a class="linkedin" href=" https://ye.linkedin.com/in/temmam-company-1a5a14188?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/330834c5e51a039ef0f9e4b37c6f5b34604f51a04fdc3759aaf87e7d212a707f?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-17"
              />
            </a>
          </div>
          <div class="div-80">YourBank All Rights Reserved</div>
          <div class="div-81">
            <div class="div-82">Privacy Policy</div>
            <div class="div-83">Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

  name:'app',
  data(){
    return{
 
  }},
  method:{
 

  },
}
</script>
<style scoped>
.hear{
width: 100%;
}
.div {
   width:  100%;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  padding-left: 0px;
  margin-left: 0px;
  padding-right: 50px;
  padding-left: 50px;
}
.div-2 {
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  width: 100%;
  max-width: 1596px;
  gap: 20px;
  font-size: 18px;
  font-weight: 400;
  /* line-height: 150%; */
  /* padding: 20px 20px; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 34px;
  padding-right: 34px;
  z-index: 1;
  /* padding-left: px; */

  /* color: #b3b3b3; */
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    /* padding: 0 20px; */
  }
}
.img {
  aspect-ratio: 3.85;
  object-fit: auto;
  object-position: center;
  width: 156px;
  align-self: stretch;
  max-width: 100%;
  margin: auto 0;
}
.div-3 {
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 20px;
  color: var(--Absolute-White, #fff);
  white-space: nowrap;
  justify-content: center;
  margin: auto 0;
  width: 100%;

}
@media (max-width: 991px) {
  .div-3 {
    white-space: initial;
    
  }
}
.div-4 {
  font-family: Lexend, sans-serif;
  align-self: stretch;
  margin: auto 0;
 
}
.div-5 {
  font-family: Lexend, sans-serif;
  align-self: stretch;
  margin: auto 0;
}
.about {
  font-family: Lexend, sans-serif;
    align-self: stretch;
      margin: auto 0;
  /* border-radius: 82px; */
  /* background-color: var(--Grey-15, #262626); */
/* 
  justify-content: center;
  padding: 12px 20px; */
}
@media (max-width: 991px) {
  .div-6 {
    white-space: initial;
  }
}
.div-7 {
  font-family: Lexend, sans-serif;
  align-self: stretch;
  margin: auto 0;
}
.div-8 {
  align-self: stretch;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
}
.div-9 {
  color: var(--Absolute-White, #fff);
  font-family: Lexend, sans-serif;
  margin: auto 0;
}
.div-10 {
  font-family: Lexend, sans-serif;
  border-radius: 82px;
  background-color: var(--Green-60, #caff33);
  color: var(--Grey-11, #1c1c1c);
  white-space: nowrap;
  justify-content: center;
  padding: 14px 30px;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
    padding: 0 20px;
  }
}

.div-56 {
  align-items: center;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: stretch;
  display: flex;
  /* margin-top: 10px; */
  width: 100%;
  flex-direction: column;
  padding: 80px 60px 50px;
  
}
@media (max-width: 991px) {
  .div-56 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-57 {
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 1596px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-57 {
    max-width: 100%;
  }
}
.div-58 {
  align-items: center;
  display: flex;
  font-size: 18px;
  color: var(--White-Shades-90, #e4e4e7);
  font-weight: 400;
  white-space: nowrap;
  line-height: 150%;
  justify-content: center;
  padding: 0 60px;
}
@media (max-width: 991px) {
  .div-58 {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
}
.div-59 {
  display: flex;
  width: 323px;
  max-width: 100%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-59 {
    white-space: initial;
  }
}
.img-11 {
  aspect-ratio: 3.85;
  object-fit: auto;
  object-position: center;
  width: 156px;
  align-self: center;
  max-width: 100%;
}
.div-60 {
  display: flex;
  margin-top: 50px;
  gap: 20px;
  justify-content: space-between;
}
@media (max-width: 991px) {
  .div-60 {
    margin-top: 40px;
    white-space: initial;
  }
}
.div-61 {
  font-family: Lexend, sans-serif;
}
.div-62 {
  font-family: Lexend, sans-serif;
}
.div-63 {
  font-family: Lexend, sans-serif;
}
.div-64 {
  font-family: Lexend, sans-serif;
}
.div-65 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 49px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-65 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-66 {
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 50px;
  font-size: 18px;
  color: var(--White-Shades-90, #e4e4e7);
  font-weight: 400;
  line-height: 150%;
  padding: 0 60px;
}
@media (max-width: 991px) {
  .div-66 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-67 {
  display: flex;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-67 {
    flex-wrap: wrap;
  }
}
.div-68 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-68 {
    white-space: initial;
  }
}
.img-12 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-69 {
  font-family: Lexend, sans-serif;
}
.div-70 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
}
.img-13 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-71 {
  font-family: Lexend, sans-serif;
}
.div-72 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
}
.img-14 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-73 {
  font-family: Lexend, sans-serif;
}
.div-74 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 49px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-74 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-75 {
  justify-content: space-between;
  align-items: center;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  margin-top: 50px;
  width: 100%;
  gap: 20px;
  padding: 16px 23px 16px 16px;
}
@media (max-width: 991px) {
  .div-75 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    margin-top: 40px;
  }
}
.div-76 {
  align-self: stretch;
  display: flex;
  gap: 14px;
}
.facebook {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
  border-width: 0;
}
.img-15 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.twitter {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
  border-width: 0;
}
.img-16 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.linkedin {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
  border-width: 0;
}
.img-17 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-80 {
  color: var(--Grey-Shades-70, #b3b3b3);
  align-self: stretch;
  margin: auto 0;
  font: 300 18px/150% Lexend, sans-serif;
}
.div-81 {
  align-self: stretch;
  display: flex;
  gap: 12px;
  font-size: 18px;
  color: var(--Grey-Shades-70, #b3b3b3);
  font-weight: 300;
  line-height: 150%;
  justify-content: space-between;
  margin: auto 0;
}
.div-82 {
  font-family: Lexend, sans-serif;
}
.div-83 {
  font-family: Lexend, sans-serif;
}


header {
  line-height: 1.5;
  max-height: 100vh;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  display: flex;
  
}

nav a.router-link{
  color: white;
      border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  /* padding: 12px 20px */
}
.router{
  color:white;
}
nav a.router-link-exact-active.router {
  color: white;
      border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}

nav a.router-link-exact-active.router1{
  /* color: white; */
    
    /* border-radius: 82px; */
  background-color: #caff33;

  justify-content: center;
  /* padding: 12px 20px */
    /* padding: 14px 30px; */
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 0px;
  padding-top: 0px;
}
/* nav a.router-link-exact-active:hover {
 
  color: white;
    border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
} */
.router{
  color:white;
}
.router1{
 color: var(--Grey-11, #1c1c1c);
}
.router1:hover {
  /* background-color:#caff33; */
  /* color: white; */
    border-radius: 82px;
  background-color: #caff33;

  justify-content: center;
  /* padding: 12px 20px */
  padding-left: 7px;
  padding-right: 7++px;
}
nav a {
  display: inline-block;
  /* padding: 0 1rem; */
  /* border-left: 1px solid var(--color-border); */
}
.router:hover {
  /* background-color:#caff33; */
  color: white;
    border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}
nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    /* margin-left: -1rem; */
    font-size: 1rem;

    /* padding: 1rem 0;
    margin-top: 1rem; */
  }
}
</style>