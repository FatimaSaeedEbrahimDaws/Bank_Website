<template>
  <div class="div-21">
                <img
                  :srcSet=img1
                  class="img-4"
                />
                <div class="div-22">
                  <div class="div-23">
                    <div class="div-24">
                      <img
                      :src=img2 
                      class="img-5"
                      />
                    </div>
                  </div>
                  <div class="titlecard">{{titlecard}}</div>
                </div>
                <div class="deccard">
                {{desccard}}
                </div>
              </div>
</template>

<script>
export default {

  name:'cardSecurity',
  props:[ 'img1' ,'img2', 'titlecard', 'desccard']
  //data(){
  //}
}
  

</script>
<style scoped>
.div-21 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 20px;
  background-blend-mode: normal, normal, screen;
  overflow: hidden;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  position: relative;
  min-height: 330px;
  flex-grow: 1;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.img-4 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-22 {
  position: relative;
  display: flex;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-22 {
    flex-wrap: wrap;
  }
}
.div-23 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98px;
  height: 98px;
  padding: 12px;
}
.div-24 {
  align-items: center;
  border-radius: 50px;
  border: 1px solid #caff33;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.1) -66.22%,
    rgba(202, 255, 51, 0) 85.46%
  );
  display: flex;
  justify-content: center;
  width: 74px;
  height: 74px;
  padding: 0 20px;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.titlecard {
  color: var(--Absolute-White, #fff);
  flex: 1;
  margin: auto 0;
  font: 400 24px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .titlecard {
    max-width: 100%;
  }
}
.deccard {
  position: relative;
  color: var(--Grey-70, #b3b3b3);
  margin-top: 24px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .deccard {
    max-width: 100%;
  }
}
</style>