<template>
  

  <div class="hero">
      <div class="box">
        <div class="titlemin">{{ titlemin }}</div>
        <div class="title">
        {{ title }}
        </div>
        <div class="desc">
      {{ desc }}
        </div>
      </div>
      <img
      
        :src=img1
        class="img-hero1"
      />
      <img
      :src=img2
        class="img-hero2"
      />
    </div>
  </template>
  <script>
  export default {
  
    name:'hero2',
    props:[ 'titlemin','title' ,'desc', 'img1', 'img2']
    //data(){
    //}
  }
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


</style>