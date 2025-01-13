
<template>
  <div class="div-34">
    
            <img
            :srcSet=img
          

            class="img-7"
            />
            <div class="div-35">
              <div class="div-36">
            {{  title}}
              </div>
              <div class="div-37">Date: {{date}}</div>
              <div class="div-38">
              {{desc}}
              </div>
            </div>
          </div>
</template>
<script>
export default {

  name:'cardAbout',
  props:[ 'img' ,'title', 'date', 'desc']
  //data(){
  //}
}
</script>
<style scoped>
.div-34 {
  align-self: stretch;
  border-radius: 40px 40px 16px 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 18px;
  color: var(--Grey-70, #b3b3b3);
  font-weight: 300;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.img-7 {
  aspect-ratio: 2.17;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
@media (max-width: 991px) {
  .img-7 {
    max-width: 100%;
  }
}
.div-35 {
  display: flex;
  margin-top: 51px;
  flex-direction: column;
  padding: 0 30px;
}
@media (max-width: 991px) {
  .div-35 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-36 {
  color: var(--Absolute-White, #fff);
  font: 400 24px/36px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-36 {
    max-width: 100%;
  }
}
.div-37 {
  font-family: Lexend, sans-serif;
  justify-content: center;
  border-radius: 68px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  align-self: start;
  margin-top: 20px;
  text-align: center;
  line-height: 150%;
  padding: 8px 16px;
}
.div-38 {
  font-family: Lexend, sans-serif;
  line-height: 27px;
  margin-top: 30px;
}
@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
  }
}
</style>