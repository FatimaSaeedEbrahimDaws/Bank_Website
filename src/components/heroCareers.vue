<template>
  
  <!-- <Hero
   :title="'Welcome to YourBank Careers!'"
   :desc="'Join our team and embark on a rewarding journey in the banking industry.  At YourBank, we are committed to fostering a culture of excellence and  providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us  today and be a part of our mission to shape the future of banking.'"
   :img1="'../assets/img3.png'"
   :img2="'../assets/img.svg'"
   /> --> 
  <div class="hero">
      <div class="box">
        
        <div class="title">
          Welcome to YourBank Careers!
        </div>
        <div class="desc">
          Join our team and embark on a rewarding journey in the banking industry.  At YourBank, we are committed to fostering a culture of excellence and  providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us  today and be a part of our mission to shape the future of banking.

        </div>
      </div>
      <img
      
        src="../assets/img3.png"
        class="img-hero1"
      />
      <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8160978984fa33faa5a20bd303df79edfb0c23ac14d2c8c58d37b87f9673485c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img-hero2"
      />
    </div>
  </template>
  <script>
  // export default {
  
  //   name:'hero',
  //   // props:[ 'titlemin','title' ,'desc', 'img1', 'img2']
  //   //data(){
  //   //}
  // }
</script>
  <style scoped>
.hero {
  align-items: start;
  border-radius: 20px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  margin-top: 53px;
  width: 1599px;
  max-width: 100%;
  gap: -260px;
  justify-content: space-between;
  padding: 0 0 50px 50px;
}
@media (max-width: 991px) {
  .hero {
    flex-wrap: wrap;
    padding-left: 20px;
    margin-top: 40px;
  }
}
.box {
  /* border-radius: 20px 0px 80px 20px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  padding: 80px; */
  display: flex;
  border-radius: 20px 0px 80px 20px;
  background-color: var(--Grey-10, #1a1a1a);
  /* display: flex; */
  margin-top: 50px;
  flex-direction: column;
  padding: 80px;
  position:absolute;
  z-index: 2;
  width: 740px;
  /* height: 60%; */

}
@media (max-width: 991px) {
  .box {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.title {
  color: var(--Green-60, #caff33);
  font: 500 58px/75px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .title {
    max-width: 100%;
    font-size: 40px;
    line-height: 58px;
  }
}
.titlemin {
  color: var(--Absolute-White, #fff);
  font: 400 20px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .title{
    max-width: 100%;
  }
}
@keyframes app{
  form{
    opacity: 0;
  clip-path: inset(100% 100% 0 0);
  }
  to{
    opacity: 1;
  clip-path: inset(0 0 0 0);
  }
}
.desc {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 23px;
  font: 300 18px/27px Lexend, sans-serif;
  animation: app linear;
  animation-timeline: desc();
  animation-range: entry 0% cover 40%;
}
@media (max-width: 991px) {
  .desc {
    max-width: 100%;
  }
}
.img-hero2 {
  aspect-ratio: 0.95;
  z-index: 0;
  object-fit: auto;
  position: absolute;
  object-position: center;
  right:0;
  width: 505px;
  height: 480px;
  padding-right: 50px;
  fill: radial-gradient(
    152.24% 143.75% at 103.26% 0%,
    rgba(25, 25, 25, 0.3) 20.29%,
    rgba(202, 255, 51, 0.3) 34.91%,
    rgba(25, 25, 25, 0.3) 60.69%
  );
}
@media (max-width: 991px) {
  .img-hero2 {
    max-width: 100%;
  }
}

.img-hero1 {
  aspect-ratio: 0.95;
  object-fit: cover;
  /* object-position: right; */
  width:800px;
  height: 700px;
  margin-left: auto;
  margin-top: 50px;
  margin-right: 50px;
  z-index: 1;
  border-radius: 16px;
}
@media (max-width: 991px) {
  .img-hero1 {
    max-width: 100%;
  }

}
.img-hero1:hover {
/* transform: translate(50px); */
transform: scaleX(1.06);

}
/* .img-hero1:hover{
transform: translate(50px);
} */

</style>




<!-- <template>

<Hero
   :title="'Welcome to YourBank Careers!'"
   :desc="'Join our team and embark on a rewarding journey in the banking industry.  At YourBank, we are committed to fostering a culture of excellence and  providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us  today and be a part of our mission to shape the future of banking.'"
   :img1="'../assets/img3.png'"
   :img2="'../assets/img.svg'"
   /> -->

<!-- 

  <div class="flex items-start rounded-[20px] bg-[var(--Grey-11,#1c1c1c)] mt-[53px] w-[1599px] max-w-full gap-[-260px] justify-between px-0 pb-[50px] pl-[50px] scale-75">
    <div class="flex rounded-[20px_0px_80px_20px] bg-[var(--Grey-10,#1a1a1a)] mt-[50px] flex-col p-[80px] ml-[-75px] absolute z-[2] w-[750px] h-[60%] scale-90">
      <div class="text-white font-[500] text-[58px]/[75px] font-['Arial']">
        Welcome to<span class="text-[var(--Green-60,#caff33)]"> YourBank</span>
        Careers!
      </div>
      <div
        class="text-[var(--Grey-70,#b3b3b3)] mt-[23px] font-[300] text-[18px]/[27px] font-['Arial']"
      >
        Join our team and embark on a rewarding journey in the banking industry.
        At YourBank, we are committed to fostering a culture of excellence and
        providing opportunities for professional growth. With a focus on
        innovation, customer service, and integrity, we strive to make a
        positive impact in the lives of our customers and communities. Join us
        today and be a part of our mission to shape the future of banking.
      </div>
    </div>
    <img
      src="../assets/img3.png"
      class="aspect-ratio-[0.95] object-fit-cover w-[800px] h-[700px] ml-auto mt-[50px] mr-[50px] z-[1] rounded-[16px]"
    />
    <img
      src="../assets/img.svg"
      class="aspect-ratio-[0.95] z-[0] object-fit-auto absolute right-0 w-[505px] h-[480px] pr-[50px]"
    />
  </div> -->
<!-- </template>


<script >

import Hero from "./hero2.vue"
export default {

name:'heroCareers',
components:{

  Hero,
},}

</script>

<style></style> -->
