<template>
  <div class="grid grid-cols-2 gap-5 2xl:h-[90dvh]">
    
    <div class="col-span-1 space-y-5 py-10 mt-10 content-center">
      <h1 class="text-wrap text-xl lg:text-4xl 2xl:text-5xl">{{ h }}</h1>
      <p class="text-wrap text-md">{{ p }}</p>
      <button class="btn-acc">Open Account</button>
    </div>

    <div class="bg-[#1C1C1C] relative mt-12 scale-75 col-span-1 rounded-lg z-10">
      <div class="">
        <div
          class="absolute -left-4 -top-12 bg-[#22251bbf] rounded-lg text-sm py-2 px-4"
        >
          <div class="flex justify-center items-center gap-2">
            <div
              class="bg-[#CAFF33] rounded-xl bn flex justify-center items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.71968 0.601807C7.07882 0.601807 7.36996 0.892946 7.36996 1.25208V5.80402H11.9219C12.281 5.80402 12.5722 6.09516 12.5722 6.4543C12.5722 6.81344 12.281 7.10458 11.9219 7.10458H7.36996V11.6565C7.36996 12.0157 7.07882 12.3068 6.71968 12.3068C6.36054 12.3068 6.0694 12.0157 6.0694 11.6565V7.10458H1.51746C1.15833 7.10458 0.867188 6.81344 0.867188 6.4543C0.867188 6.09516 1.15833 5.80402 1.51746 5.80402L6.0694 5.80402V1.25208C6.0694 0.892946 6.36054 0.601807 6.71968 0.601807Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              +$5000,00
              <p>Monthly Income</p>
            </div>
          </div>
        </div>

        <div class="my-4 px-4 z-10">
          <h1 class="font-bold text-lg">Your Transactions</h1>
          <div
            class="rounded-lg bg-[#262626] flex justify-between items-center my-2 py-4 px-5"
          >
            <div class="flex justify-center items-center gap-2">
              <!-- for icon -->
              <div
                class="bg-[#CAFF33] rounded-xl bn flex justify-center items-center"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8936 2.32065C13.6004 2.63646 13.6187 3.1302 13.9345 3.42345L16.1198 5.45273L7.18234 5.45273C6.75137 5.45273 6.40201 5.8021 6.40201 6.23307C6.40201 6.66403 6.75137 7.0134 7.18234 7.0134L16.1198 7.0134L13.9345 9.04268C13.6187 9.33593 13.6004 9.82967 13.8936 10.1455C14.1869 10.4613 14.6806 10.4796 14.9964 10.1863L18.638 6.80489C18.797 6.65724 18.8873 6.45005 18.8873 6.23306C18.8873 6.01608 18.797 5.80889 18.638 5.66124L14.9964 2.2798C14.6806 1.98655 14.1869 2.00484 13.8936 2.32065ZM7.23394 10.6442C6.94069 10.3284 6.44695 10.3101 6.13114 10.6033L2.48959 13.9848C2.33058 14.1324 2.24023 14.3396 2.24023 14.5566C2.24023 14.7736 2.33058 14.9808 2.48959 15.1284L6.13114 18.5099C6.44695 18.8031 6.94069 18.7848 7.23394 18.469C7.52719 18.1532 7.50891 17.6595 7.1931 17.3662L5.00771 15.3369H13.9452C14.3762 15.3369 14.7256 14.9876 14.7256 14.5566C14.7256 14.1256 14.3762 13.7763 13.9452 13.7763H5.00771L7.1931 11.747C7.50891 11.4537 7.52719 10.96 7.23394 10.6442Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
              <div>
                <h1>Transaction</h1>
                <p class="font-bold">Joel Kenley</p>
              </div>
            </div>
            <p class="pt-6 font-bold">-$68.00</p>
          </div>

          <div
            class="rounded-lg bg-[#262626] flex justify-between items-center my-2 py-4 px-5"
          >
            <div class="flex justify-center items-center gap-2">
              <div
                class="bg-[#CAFF33] rounded-xl bn flex justify-center items-center"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8936 2.32065C13.6004 2.63646 13.6187 3.1302 13.9345 3.42345L16.1198 5.45273L7.18234 5.45273C6.75137 5.45273 6.40201 5.8021 6.40201 6.23307C6.40201 6.66403 6.75137 7.0134 7.18234 7.0134L16.1198 7.0134L13.9345 9.04268C13.6187 9.33593 13.6004 9.82967 13.8936 10.1455C14.1869 10.4613 14.6806 10.4796 14.9964 10.1863L18.638 6.80489C18.797 6.65724 18.8873 6.45005 18.8873 6.23306C18.8873 6.01608 18.797 5.80889 18.638 5.66124L14.9964 2.2798C14.6806 1.98655 14.1869 2.00484 13.8936 2.32065ZM7.23394 10.6442C6.94069 10.3284 6.44695 10.3101 6.13114 10.6033L2.48959 13.9848C2.33058 14.1324 2.24023 14.3396 2.24023 14.5566C2.24023 14.7736 2.33058 14.9808 2.48959 15.1284L6.13114 18.5099C6.44695 18.8031 6.94069 18.7848 7.23394 18.469C7.52719 18.1532 7.50891 17.6595 7.1931 17.3662L5.00771 15.3369H13.9452C14.3762 15.3369 14.7256 14.9876 14.7256 14.5566C14.7256 14.1256 14.3762 13.7763 13.9452 13.7763H5.00771L7.1931 11.747C7.50891 11.4537 7.52719 10.96 7.23394 10.6442Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
              <div>
                <h1>Transaction</h1>
                <p class="font-bold">Joel Kenley</p>
              </div>
            </div>
            <p class="pt-6 font-bold">-$68.00</p>
          </div>
        </div>

        <h1 class="font-bold text-lg py-2 px-4">Money Exchange</h1>
        <div
          class="px-4 py-4 flex justify-between border border-[#262626] rounded-lg mx-4"
        >
          <div class="flex flex-col justify-stretch">
            <div class="">
              <div class="flex pl-4 pt-4">
                <img src="../assets/usa.png" />
                <p class="pl-2">USD</p>
              </div>
              <p class="pt-2 mx-2">United States Dollar</p>
            </div>
            <hr class="mt-2" />
            <div class="h-8 flex justify-center items-center">
              <input type="number" id="input-number" v-model="inputNumber"  class="mt-2 div1"/>
            </div>
          </div>
          <div class="flex flex-col justify-stretch">
            <div class="">
              <div class="flex pl-4 pt-4">
                <img src="../assets/yemen.png" class="w-[35px] h-[35px] rounded-[50%]" />
                <p class="pl-2">YMR</p>
              </div>
              <p class="pt-2 mx-2">Yemeni Riyal</p>
            </div>
            <hr class="mt-2" />
            <div class="h-8 flex justify-center items-center">
              <input type="text" id="result-number" v-model="resultNumber" readonly class="bg-transparent border-none outline-none text-inherit mt-2" />
            </div>
          </div>
        </div>
        <button @click="calculateResult"
          class="w-[445.64px] h-[45.75px] ml-[40px] mt-4 py-[9px] bg-red-400 rounded-[50px] mb-4 kll bg-[#22251B]"
        >
          <span class="kl">Exchange</span>
        </button>

        <div class="absolute right-[10px] -bottom-16 bg-[#22251B] rounded-[50px] text-sm flex justify-center items-center px-4 py-1 gap-2">
          <h1>Supported Currency</h1>
          <div class="flex gap-4 bg-[#1A1A1A] rounded-[50px] px-2 py-2">
            <button><div class="w-[33px] h-[30px] rounded-[15px] flex justify-center items-center bg-[#1A1A1A]"><img  src="../assets/dollar.png" /> </div></button>
            <button><div class="w-[33px] h-[30px] rounded-[15px] flex justify-center items-center bg-[#1A1A1A]"><img  src="../assets/euro.png" /> </div></button>
            <button><div class="w-[33px] h-[30px] rounded-[15px] flex justify-center items-center bg-[#1A1A1A]"><img  src="../assets/bitcoin.png" /> </div></button>
            <button><div class="w-[33px] h-[30px] rounded-[15px] flex justify-center items-center bg-[#1A1A1A]"><img  src="../assets/group.png" /> </div></button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputNumber: null,
      resultNumber: null,
      h: "Welcome to YourBank Empowering Your Financial Journey",
      p: "At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
    };
  },
  methods: {
    calculateResult() {
      this.resultNumber = this.inputNumber * 536;
    }
  }
};
</script>

<style scoped>
 input[type='number'] {
    -moz-appearance:textfield;
 }
.btn-acc {
  padding: 12px 24px;
  gap: 10px;

  width: 175px;
  height: 60px;

  color: black;

  background-color: #caff33;
  border-radius: 80px;
}

.div1{
  font-family: Lexend, sans-serif;
  /* border-radius: 88px; */
  border-color: rgb(13, 5, 5);
  border-style: solid;
  border-width: 0px;
  
  background-color: var(--Grey-10, #1C1C1C);
  justify-content: center;
  flex: 1;
  padding: 10px;
  color: #eaeaef;
  font-size: 16px;
}
.div1:focus{
  outline: 2px solid #CAFF33;
}
.btn-acc:hover {
  background-color: #dcf78f;
}

.glg {
  padding-left: -10px;
}

.bn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 4px;
  padding: 7px;
}
.kl {
  color: #d1ff4d;
}
 .kll{
  background-color:#22251bbf; 

 } 
</style>
