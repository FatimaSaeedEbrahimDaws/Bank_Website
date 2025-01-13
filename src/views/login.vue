<template>
 
  <div class="div-login">
   
    <div class="box">
      <img
    
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8160978984fa33faa5a20bd303df79edfb0c23ac14d2c8c58d37b87f9673485c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img-2-1"
      />
      <form class="form">
    
        <div class="textlogin">{{ title }}</div>
        <div class="textwelcom">
          {{ desc }}
        </div>
        <div class="inputs">
          <input class="input" type="email" id="fname" v-model="formVlues.email" :placeholder=email>
          <input class="input" type="password" minlength="4" maxlength="8" id="fname" v-model="formVlues.pass" :placeholder="pass">
          <img
        
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e17843376805412f2818e4767045e7d4d0030b7c8a5f5d2cd11169b5dcaca0d?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-2"
            />
        
        </div>
      
        <div class="textforgot">{{ forgot }}</div>
        <div class="div-20">
          <div class="div-21">
            <!-- <div class="div-22">Login</div> -->
            <button class="butlogin" @click="submit">{{ login }}</button>
            <button class="butsign" @click="$router.push('signUp')">{{ sign }}</button>
            <!-- <div class="div-23">Sign Up</div> -->
            
            <div class="div-24">
              <div class="div-25"></div>
              <div class="div-26">{{ Continue}}</div>
              <div class="div-27"></div>
            </div>
            <div class="div-28">
              <div class="div-29">
                <div class="div-30">
                  <img
                  
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/59c2184b9206c19d6297d702784d38d86a4172b372274943de8de47d1e80cc06?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                    class="img-3"
                  />
                </div>
              </div>
              <div class="div-31">
                <div class="div-32">
                  <img
                  
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cde16e42ec842d11c38909d6b29426784e2ee609f457ba988295155862c5a288?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                    class="img-4"
                  />
                </div>
              </div>
              <div class="div-33">
                <div class="div-34">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46d753bb7bbc39ffca6f4cf0cdc325a17b8d367ecd532702a12e21f439857f4?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                    class="img-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  
  </div>

</template>

<script>
export default {

  name:'login',
  mounted(){
    this.getLogin()
    

  },
  data(){
    return{
      title:'Login',
      desc:'Welcome back! Please log in to access your account.',
      forgot:'Forgot Password?',
      login:'Login',
      sign:'Sign Up',
      continue : 'Or Continue with',
      email:'Enter your Email',
      pass:'Enter your Password',
      formVlues:{
        fname:"",
        lname:"",
        email:"",
        pass:"",
        login:[],
      }
  }},
  methods:{
  
    async getLogin(){
      try{
        const response =await axios.post('  http://127.0.0.1:8000/api/login?email=postemail&password=postpass')
        this.login = response.data.post
      }catch(err){
        console.log(err)
      }
    },
  
    submit() {
      this.$emit('submit', this.formVlues)
      
      
    }
  },
}
</script>

<style scoped>
.div-login {
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.box {
  align-items: center;
  border-radius: 20px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #1c1c1c;
  display: flex;
  margin-top: 110px;
  width: 100%;
  max-width: 1326px;
  justify-content: center;
padding-bottom: 80px;
  margin-bottom: 100px;
  position: relative;
}
@media (max-width: 991px) {
  .box {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.form {
  display: flex;
  width: 1026px;
  max-width: 100%;
  flex-direction: column;
  /* margin: 80px 60px; */
  /* padding: 80px 60px; */
}
.textlogin{
  color: var(--Green-60, #caff33);
  text-align: center;
  font: 500 48px Lexend, sans-serif;
  padding-top: 80px;
}
@media (max-width: 991px) {
  .textlogin {
    max-width: 100%;
    font-size: 40px;
  }
}
.img-2-1 {
  aspect-ratio: 0.95;
  z-index: 0;
  object-fit: auto;
  position: absolute;
  object-position: center;
  right: -17px;
  top:0;
  /* width: 100%; */
  width: 342px;
  height: 325px;
  /* padding-right: 20px; */
  fill: radial-gradient(
    152.24% 143.75% at 103.26% 0%,
    rgba(25, 25, 25, 0.3) 20.29%,
    rgba(202, 255, 51, 0.3) 34.91%,
    rgba(25, 25, 25, 0.3) 60.69%
  );
}
@media (max-width: 991px) {
  .img-2-1 {
    max-width: 100%;
  }
}
.textwelcom{
  color: var(--Grey-75, #bfbfbf);
  text-align: center;
  margin-top: 20px;
  font: 300 18px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .textwelcom {
    max-width: 100%;
  }
}
.div-15 {
  display: flex;
  margin-top: 80px;
  gap: 20px;
  font-size: 18px;
  color: var(--Grey-35, #59595a);
  font-weight: 300;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-15 {
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.input {
  font-family: Lexend, sans-serif;
  border-radius: 88px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  justify-content: center;
  flex: 1;
  padding: 24px;

  color: #59595A;
  font-size: 18px;
}
@media (max-width: 991px) {
  .input {
    max-width: 100%;
    padding: 0 20px;
  }
  
}
.input:focus{
  outline: 2px solid #CAFF33;
}
.div-17 {
  border-radius: 88px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  gap: 10px;
  flex: 1;
  padding: 24px;
}
@media (max-width: 991px) {
  .div-17 {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.inputs {
  display: flex;
  margin-top: 80px;
  gap: 20px;
  font-size: 18px;
  color: var(--Grey-35, #59595a);
  font-weight: 300;
  line-height: 150%;
  position: relative;
}
@media (max-width: 991px) {
  .inputs {
    flex-wrap: wrap;
  }
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
  position: absolute;
  right: 32px;
  top: 22px
}
.textforgot {
  color: var(--Absolute-White, #fff);
  text-align: center;
  text-decoration-line: underline;
  margin-top: 40px;
  font: 400 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .textforgot {
    max-width: 100%;
  }
}
.div-20 {
  align-items: center;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  padding: 0 60px;
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-21 {
  display: flex;
  width: 518px;
  max-width: 100%;
  flex-direction: column;
}
.butlogin {
  border-radius: 63px;
  background-color: var(--Green-60, #caff33);
  color: var(--Grey-15, #262626);
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 18px 20px;
  font: 400 18px/150% Lexend, sans-serif;
  border-width: 0px;
}
@media (max-width: 991px) {
  .butlogin {
    max-width: 100%;
    white-space: initial;
  }
}
.butsign {
  border-radius: 63px;
  border-color: rgba(51, 51, 51, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-15, #262626);
  margin-top: 24px;
  color: var(--Absolute-White, #fff);
  text-align: center;
  justify-content: center;
  padding: 18px 20px;
  font: 400 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .butsign{
    max-width: 100%;
  }
}
.div-24 {
  align-items: center;
  display: flex;
  margin-top: 24px;
  gap: 20px;
  font-size: 18px;
  color: var(--Grey-70, #b3b3b3);
  font-weight: 400;
  text-align: center;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-24 {
    flex-wrap: wrap;
  }
}
.div-25 {
  border-color: rgba(179, 179, 179, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #b3b3b3;
  align-self: stretch;
  height: 1px;
  flex: 1;
  margin: auto 0;
}
.div-26 {
  font-family: Lexend, sans-serif;
  align-self: stretch;
}
.div-27 {
  border-color: rgba(179, 179, 179, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #b3b3b3;
  align-self: stretch;
  height: 1px;
  flex: 1;
  margin: auto 0;
}
.div-28 {
  justify-content: center;
  display: flex;
  margin-top: 30px;
  gap: 20px;
  padding: 0 80px;
}
@media (max-width: 991px) {
  .div-28 {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.div-29 {
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
  width: 94px;
  height: 94px;
  padding: 12px;
}
.div-30 {
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
  width: 70px;
  height: 70px;
  padding: 0 20px;
}
.img-3 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-31 {
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
  width: 94px;
  height: 94px;
  padding: 12px;
}
.div-32 {
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
  width: 70px;
  height: 70px;
  padding: 0 20px;
}
.img-4 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-33 {
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
  width: 94px;
  height: 94px;
  padding: 12px;
}
.div-34 {
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
  width: 70px;
  height: 70px;
  padding: 0 20px;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-35 {
  align-items: center;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: stretch;
  display: flex;
  margin-top: 155px;
  width: 100%;
  flex-direction: column;
  padding: 80px 60px 50px;
}
@media (max-width: 991px) {
  .div-35 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-36 {
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 1596px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-36 {
    max-width: 100%;
  }
}
.div-37 {
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
  .div-37 {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
}
.div-38 {
  display: flex;
  width: 323px;
  max-width: 100%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-38 {
    white-space: initial;
  }
}
.img-6 {
  aspect-ratio: 3.85;
  object-fit: auto;
  object-position: center;
  width: 156px;
  align-self: center;
  max-width: 100%;
}
.div-39 {
  display: flex;
  margin-top: 50px;
  gap: 20px;
  justify-content: space-between;
}
@media (max-width: 991px) {
  .div-39 {
    margin-top: 40px;
    white-space: initial;
  }
}
.div-40 {
  font-family: Lexend, sans-serif;
}
.div-41 {
  font-family: Lexend, sans-serif;
}
.div-42 {
  font-family: Lexend, sans-serif;
}
.div-43 {
  font-family: Lexend, sans-serif;
}
.div-44 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 49px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-45 {
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
  .div-45 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-46 {
  display: flex;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-46 {
    flex-wrap: wrap;
  }
}
.div-47 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-47 {
    white-space: initial;
  }
}
.img-7 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-48 {
  font-family: Lexend, sans-serif;
}
.div-49 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
}
.img-8 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-50 {
  font-family: Lexend, sans-serif;
}
.div-51 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
}
.img-9 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-52 {
  font-family: Lexend, sans-serif;
}
.div-53 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 49px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-53 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-54 {
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
  .div-54 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    margin-top: 40px;
  }
}
.div-55 {
  align-self: stretch;
  display: flex;
  gap: 14px;
}
.div-56 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-10 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-57 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-11 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-58 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-12 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-59 {
  color: var(--Grey-Shades-70, #b3b3b3);
  align-self: stretch;
  margin: auto 0;
  font: 300 18px/150% Lexend, sans-serif;
}
.div-60 {
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
.div-61 {
  font-family: Lexend, sans-serif;
}
.div-62 {
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
  margin-top: 2rem;
}

nav a.router-link{
  color: white;
      border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}
.router{
  color:white;
}
.router1{
  color:white;
}
nav a.router-link-exact-active {
  color: white;
      border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}
.router::after {
  color: white;
      border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}
nav a.router-link-exact-active:hover {
  /* background-color:#caff33; */
  color: white;
    border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}
.router:hover {
  /* background-color:#caff33; */
  color: white;
    border-radius: 82px;
  background-color: var(--Grey-15, #262626);

  justify-content: center;
  padding: 12px 20px
}
.router1:hover {
  /* background-color:#caff33; */
  color: white;
    border-radius: 82px;
  background-color: #caff33;

  justify-content: center;
  padding: 12px 20px
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    width: 100%;
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
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
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>