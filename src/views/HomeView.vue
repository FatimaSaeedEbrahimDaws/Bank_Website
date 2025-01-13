<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<template>
  <div class="div-1">
    <div class="div-2">
      <div class="column">
        <div class="div-3">
          <div class="div-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10225789279d3cb3920daa457d102d394b691392fdbc80e78cf6600d16a47fb?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img"
            />
            <div class="div-5">No LLC Required, No Credit Check.</div>
          </div>
          <div class="div-6">
            <span style="color: rgba(255, 255, 255, 1)"
              >Welcome to YourBank</span
            ><br /><span style="color: rgba(255, 255, 255, 1)"
              >Empowering Your </span
            >Financial Journey
          </div>
          <div class="div-7">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </div>
          <div class="div-8">Open Account</div>
        </div>
      </div>
      <div class="column-2">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
          class="img-2"
        />
      </div>
    </div>
  </div>
</template>



<style scoped>
.div-1 {
  width: 100%;
  max-width: 1648px;
  margin: 20px 0;
}
@media (max-width: 991px) {
  .div-1 {
    max-width: 100%;
  }
}
.div-2 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-2 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-3 {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 300;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-4 {
  border-radius: 61px;
  background-color: var(--Grey-15, #262626);
  align-self: start;
  display: flex;
  gap: 6px;
  color: var(--Absolute-White, #fff);
  line-height: 133%;
  padding: 10px 12px;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-5 {
  font-family: Lexend, sans-serif;
}
.div-6 {
  color: var(--Green-60, #caff33);
  margin-top: 20px;
  font: 500 48px/72px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
    font-size: 40px;
    line-height: 67px;
  }
}
.div-7 {
  color: var(--White-90, #e4e4e7);
  font-family: Lexend, sans-serif;
  line-height: 27px;
  margin-top: 14px;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
  }
}
.div-8 {
  font-family: Lexend, sans-serif;
  border-radius: 82px;
  background-color: var(--Green-60, #caff33);
  align-self: start;
  margin-top: 50px;
  color: var(--Grey-11, #1c1c1c);
  font-weight: 400;
  line-height: 150%;
  justify-content: center;
  padding: 18px 30px;
}
@media (max-width: 991px) {
  .div-8 {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.img-2 {
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 10.404px;
  background-blend-mode: normal, screen, normal;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img-2 {
    max-width: 100%;
    margin-top: 40px;
  }
}
</style>
<template>
  <div class="div">
    <div class="div-2">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7726f7484d0a6122fa6cd728abcddf0979f8222119adbb0b67d35796a2eaa1?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img"
      />
      <div class="div-3">
        <div class="div-4">Home</div>
        <div class="div-5">Careers</div>
        <div class="div-6">About</div>
        <div class="div-7">Security</div>
      </div>
      <div class="div-8">
        <div class="div-9">Sign Up</div>
        <div class="div-10">Login</div>
      </div>
    </div>
    <div class="div-11">
      <div class="div-12">
        <div class="div-13">
          <div class="column">
            <div class="div-14">
              <div class="div-15">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10225789279d3cb3920daa457d102d394b691392fdbc80e78cf6600d16a47fb?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-2"
                />
                <div class="div-16">No LLC Required, No Credit Check.</div>
              </div>
              <div class="div-17">
                <span style="color: rgba(255, 255, 255, 1)"
                  >Welcome to YourBank</span
                ><br /><span style="color: rgba(255, 255, 255, 1)"
                  >Empowering Your </span
                >Financial Journey
              </div>
              <div class="div-18">
                At YourBank, our mission is to provide comprehensive banking
                solutions that empower individuals and businesses to achieve
                their financial goals. We are committed to delivering
                personalized and innovative services that prioritize our
                customers' needs.
              </div>
              <div class="div-19">Open Account</div>
            </div>
          </div>
          <div class="column-2">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36aaf7665d893b5b7fdd6a4ebe32eaee7c6a2d8ed50b03c499fbe9e0be2bdd9e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="div-20">
      <div class="div-21">
        <div class="div-22">
          Our <span style="color: rgba(202, 255, 51, 1)">Products</span>
        </div>
        <div class="div-23">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </div>
      </div>
      <div class="div-24">
        <div class="div-25">For Individuals</div>
        <div class="div-26">For Businesses</div>
      </div>
    </div>
    <div class="div-27">
      <div class="div-28">
        <div class="column-3">
          <div class="div-29">
            <div class="div-30">
              <div class="div-31">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e48a34ac661bc7e5948eb514446bae67bb15fa507eb25618c48c12e0f0adef4f?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-4"
                />
              </div>
            </div>
            <div class="div-32">Checking Accounts</div>
            <div class="div-33">
              Enjoy easy and convenient access to your funds with our range of
              checking account options. Benefit from features such as online and
              mobile banking, debit cards, and free ATM access.
            </div>
          </div>
        </div>
        <div class="column-4">
          <div class="div-34">
            <div class="div-35">
              <div class="div-36">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b00c6546e4d08c63e13e3d8c4982de9917af6093ea4c0e9a85250225ecd60650?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-5"
                />
              </div>
            </div>
            <div class="div-37">Savings Accounts</div>
            <div class="div-38">
              Build your savings with our competitive interest rates and
              flexible savings account options. Whether you're saving for a
              specific goal or want to grow your wealth over time, we have the
              right account for you.
            </div>
          </div>
        </div>
        <div class="column-5">
          <div class="div-39">
            <div class="div-40">
              <div class="div-41">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ba4640b58fccfbffeb46f457036d126582619c8427fcbdb13929f4ce606d475?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-6"
                />
              </div>
            </div>
            <div class="div-42">Loans and Mortgages</div>
            <div class="div-43">
              Realize your dreams with our flexible loan and mortgage options.
              From personal loans to home mortgages, our experienced loan
              officers are here to guide you through the application process and
              help you secure the funds you need.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-44">Use Cases</div>
    <div class="div-45">
      At YourBank, we cater to the diverse needs of individuals and businesses
      alike, offering a wide range of financial solutions
    </div>
    <div class="div-46">
      <div class="div-47">
        <div class="column-6">
          <div class="div-48">
            <div class="div-49">
              <div class="div-50">
                <div class="column-7">
                  <div class="div-51">
                    <div class="div-52">
                      <div class="div-53">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/794ce5b90dd7d3b03be51bf01b80ef560ed3dbf741789c321773bd63667dea2c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                          class="img-7"
                        />
                      </div>
                    </div>
                    <div class="div-54">Managing Personal Finances</div>
                  </div>
                </div>
                <div class="column-8">
                  <div class="div-55">
                    <div class="div-56">
                      <div class="div-57">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/76da36043e3e1c1dac6416125647e741faf1d493a044b0cf5b382566f4734d0e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                          class="img-8"
                        />
                      </div>
                    </div>
                    <div class="div-58">Saving for the Future</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-59">
              <div class="div-60">
                <div class="column-9">
                  <div class="div-61">
                    <div class="div-62">
                      <div class="div-63">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7a04e464b596dbe3554b7f192fdcc988d49ece19ede5469909c71dde0f07461?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                          class="img-9"
                        />
                      </div>
                    </div>
                    <div class="div-64">Homeownership</div>
                  </div>
                </div>
                <div class="column-10">
                  <div class="div-65">
                    <div class="div-66">
                      <div class="div-67">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e22f77a97bb94f831b2995e82f0b383875f335878b877c611ca11859641d224f?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                          class="img-10"
                        />
                      </div>
                    </div>
                    <div class="div-68">Education Funding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-11">
          <div class="div-69">
            <div class="div-70">For Individuals</div>
            <div class="div-71">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </div>
            <div class="div-72">
              <div class="div-73">
                <div class="column-12">
                  <div class="div-74">
                    <div class="div-75">78%</div>
                    <div class="div-76">Secure Retirement Planning</div>
                  </div>
                </div>
                <div class="column-13">
                  <div class="div-77">
                    <div class="div-78">63%</div>
                    <div class="div-79">Manageable Debt Consolidation</div>
                  </div>
                </div>
                <div class="column-14">
                  <div class="div-80">
                    <div class="div-81">91%</div>
                    <div class="div-82">Reducing financial burdens</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-83">Learn More</div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-84">
      <div class="div-85">
        <div class="column-15">
          <div class="div-86">
            <div class="div-87">For Business</div>
            <div class="div-88">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </div>
            <div class="div-89">
              <div class="div-90">
                <div class="column-16">
                  <div class="div-91">
                    <div class="div-92">65%</div>
                    <div class="div-93">Cash Flow Management</div>
                  </div>
                </div>
                <div class="column-17">
                  <div class="div-94">
                    <div class="div-95">70%</div>
                    <div class="div-96">Drive Business Expansion</div>
                  </div>
                </div>
                <div class="column-18">
                  <div class="div-97">
                    <div class="div-98">45%</div>
                    <div class="div-99">Streamline payroll processing</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-100">Learn More</div>
          </div>
        </div>
        <div class="column-19">
          <div class="div-101">
            <div class="div-102">
              <div class="div-103">
                <div class="column-20">
                  <div class="div-104">
                    <div class="div-105">
                      <div class="column-21">
                        <div class="div-106">
                          <div class="div-107">
                            <div class="div-108">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f245817799d506c6901122b16996cedf033c78de8b08d7f5f0f5055e43b17c2b?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                                class="img-11"
                              />
                            </div>
                          </div>
                          <div class="div-109">Startups and Entrepreneurs</div>
                        </div>
                      </div>
                      <div class="column-22">
                        <div class="div-110">
                          <div class="div-111">
                            <div class="div-112">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dddcecc98aed428792ad7c4e6cb9c2e714485b2dbe19cc727e036c2f7f5343b?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                                class="img-12"
                              />
                            </div>
                          </div>
                          <div class="div-113">Cash Flow Management</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column-23">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a944051e8e9949b1bcacda129551822bd0b8f16e34ebc8314a50c724f40264b?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                    class="img-13"
                  />
                </div>
              </div>
            </div>
            <div class="div-114">
              <div class="div-115">
                <div class="column-24">
                  <div class="div-116">
                    <div class="div-117">
                      <div class="div-118">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51895a52e956a209ceb6bda9ee0735366a3af9222d586b4761e5bc1be1e6322c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                          class="img-14"
                        />
                      </div>
                    </div>
                    <div class="div-119">Business Expansion</div>
                  </div>
                </div>
                <div class="column-25">
                  <div class="div-120">
                    <div class="div-121">
                      <div class="div-122">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f639615ae82269ef275da5b095ce8781d8c14c669b1737c9afb35736ca67bc21?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                          class="img-15"
                        />
                      </div>
                    </div>
                    <div class="div-123">Payment Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-124">
      <span style="color: rgba(255, 255, 255, 1)">Our</span> Features
    </div>
    <div class="div-125">
      Experience a host of powerful features at YourBank, including seamless
      online banking, secure transactions, and personalized financial insights,
      all designed to enhance your banking experience
    </div>
    <div class="div-126">
      <div class="div-127">
        <div class="column-26">
          <div class="div-128">
            <div class="div-129">Online Banking</div>
            <div class="div-130">Financial Tools</div>
            <div class="div-131">Customer Support</div>
          </div>
        </div>
        <div class="column-27">
          <div class="div-132">
            <div class="div-133">
              <div class="div-134">
                <div class="column-28">
                  <div class="div-135">
                    <div class="div-136">
                      <div class="div-137">24/7 Account Access</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                        class="img-16"
                      />
                    </div>
                    <div class="div-138">
                      Enjoy the convenience of accessing your accounts anytime,
                      anywhere through our secure online banking platform. Check
                      balances, transfer funds, and pay bills with ease.
                    </div>
                  </div>
                </div>
                <div class="column-29">
                  <div class="div-139">
                    <div class="div-140">
                      <div class="div-141">Mobile Banking App</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                        class="img-17"
                      />
                    </div>
                    <div class="div-142">
                      Stay connected to your finances on the go with our
                      user-friendly mobile banking app. Easily manage your
                      accounts, deposit checks, and make payments from your
                      smartphone or tablet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-143">
              <div class="div-144">
                <div class="column-30">
                  <div class="div-145">
                    <div class="div-146">
                      <div class="div-147">Secure Transactions</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                        class="img-18"
                      />
                    </div>
                    <div class="div-148">
                      Rest assured knowing that your transactions are protected
                      by industry-leading security measures. We employ
                      encryption and multi-factor authentication to safeguard
                      your financial information.
                    </div>
                  </div>
                </div>
                <div class="column-31">
                  <div class="div-149">
                    <div class="div-150">
                      <div class="div-151">Bill Pay and Transfers</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9188fcb0367baf141175f7b43d8ca246ee75daa7d745ba77a208bd7a892d795e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                        class="img-19"
                      />
                    </div>
                    <div class="div-152">
                      Save time and avoid late fees with our convenient bill pay
                      service. Set up recurring payments or make one-time
                      transfers between your accounts with just a few clicks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-153">
      <span style="color: rgba(202, 255, 51, 1)">Frequently</span
      ><span style="color: rgba(255, 255, 255, 1)"> Asked Questions</span>
    </div>
    <div class="div-154">
      Still you have any questions? Contact our Team via support@yourbank.com
    </div>
    <div class="div-155">
      <div class="div-156">
        <div class="column-32">
          <div class="div-157">
            <div class="div-158">How do I open an account with YourBank?</div>
            <div class="div-159"></div>
            <div class="div-160">
              Opening an account with YourBank is easy. Simply visit our website
              and click on the &quot;Open an Account&quot; button. Follow the
              prompts, provide the required information, and complete the
              application process. If you have any questions or need assistance,
              our customer support team is available to help.
            </div>
          </div>
        </div>
        <div class="column-33">
          <div class="div-161">
            <div class="div-162">
              What documents do I need to provide to apply for a loan?
            </div>
            <div class="div-163"></div>
            <div class="div-164">
              The documents required for a loan application may vary depending
              on the type of loan you are applying for. Generally, you will need
              to provide identification documents (such as a passport or
              driver's license), proof of income (such as pay stubs or tax
              returns), and information about the collateral (if applicable).
              Our loan officers will guide you through the specific requirements
              during the application process.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-165">
      <div class="div-166">
        <div class="column-34">
          <div class="div-167">
            <div class="div-168">How can I access my accounts online?</div>
            <div class="div-169"></div>
            <div class="div-170">
              Accessing your accounts online is simple and secure. Visit our
              website and click on the &quot;Login&quot; button. Enter your
              username and password to access your accounts. If you haven't
              registered for online banking, click on the &quot;Enroll Now&quot;
              button and follow the registration process. If you need
              assistance, our customer support team is available to guide you.
            </div>
          </div>
        </div>
        <div class="column-35">
          <div class="div-171">
            <div class="div-172">
              Are my transactions and personal information secure?
            </div>
            <div class="div-173"></div>
            <div class="div-174">
              At YourBank, we prioritize the security of your transactions and
              personal information. We employ industry-leading encryption and
              multi-factor authentication to ensure that your data is protected.
              Additionally, we regularly update our security measures to stay
              ahead of emerging threats. You can bank with confidence knowing
              that we have robust security systems in place.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-175">
      <div class="div-176">Load All FAQ’s</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e95d5feace352e7a76a0975b26cc887fa231b192998452b3d57a1b186ef35aed?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img-20"
      />
    </div>
    <div class="div-177">
      <div class="div-178">
        <div class="div-179">
          <span style="color: rgba(255, 255, 255, 1)">Our</span
          ><span style="color: rgba(202, 255, 51, 1)"> Testimonials</span>
        </div>
        <div class="div-180">
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey
        </div>
      </div>
      <div class="div-181">
        <div class="div-182">For Individuals</div>
        <div class="div-183">For Businesses</div>
      </div>
    </div>
    <div class="div-184">
      <div class="div-185">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/268d3673f255e7378e4b9802c2d53e904a7a800bbb59afeea68d8ce37ba181ad?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
          class="img-21"
        />
      </div>
      <div class="div-186">
        <div class="div-187">
          <div class="column-36">
            <div class="div-188">
              <div class="div-189">
                <div class="div-190"></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70a679a22c347650dcffcafebf0d331f2208a408e1c7075a586d36b7713c5d0?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-22"
                />
                <div class="div-191"></div>
              </div>
              <div class="div-192">
                YourBank has been my trusted financial partner for years. Their
                personalized service and innovative digital banking solutions
                have made managing my finances a breeze.
              </div>
              <div class="div-193">Sara T</div>
            </div>
          </div>
          <div class="column-37">
            <div class="div-194">
              <div class="div-195">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/40e5784720f8f6a8b087725ac814221d710e7923b00611a729b12d06534fbddf?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-23"
                />
                <div class="div-196"></div>
              </div>
              <div class="div-197">
                I recently started my own business, and YourBank has been
                instrumental in helping me set up my business accounts and
                secure the financing I needed. Their expert guidance and
                tailored solutions have been invaluable.
              </div>
              <div class="div-198">John D</div>
            </div>
          </div>
          <div class="column-38">
            <div class="div-199">
              <div class="div-200">
                <div class="div-201"></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4723507f47a2b70cdfd51c8d22e1065f6f2d1c995cad411efb662ae8ba51e02?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                  class="img-24"
                />
              </div>
              <div class="div-202">
                I love the convenience of YourBank's mobile banking app. It
                allows me to stay on top of my finances and make transactions on
                the go. The app is user-friendly and secure, giving me peace of
                mind.
              </div>
              <div class="div-203">Emily G</div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-204">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f97d4e414eabcf0dcb19d7badcb8b11e99b2da33fd7bfb7703656e695cb4ac?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
          class="img-25"
        />
      </div>
    </div>
    <div class="div-205">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e57a21b7859780829870835390edcb7b87af253db45dd6745bb6858f39b7674c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img-26"
      />
      <div class="div-206">
        <div class="div-207">
          Start your financial journey with
          <span style="color: rgba(202, 255, 51, 1)">YourBank today!</span>
        </div>
        <div class="div-208">
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </div>
      </div>
      <div class="div-209">Open Account</div>
    </div>
    <div class="div-210">
      <div class="div-211">
        <div class="div-212">
          <div class="div-213">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dcc65c0d93248b0be162984b6dc62a0122f3fdd25c952b052b218d8dba713e?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-27"
            />
            <div class="div-214">
              <div class="div-215">Home</div>
              <div class="div-216">Careers</div>
              <div class="div-217">About</div>
              <div class="div-218">Security</div>
            </div>
          </div>
        </div>
        <div class="div-219"></div>
        <div class="div-220">
          <div class="div-221">
            <div class="div-222">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74446b11abc9df77ed6dfb16fe3f09750976a96ee9b2292133cb23600b9d4510?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-28"
              />
              <div class="div-223">hello@skillbirdge.com</div>
            </div>
            <div class="div-224">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6fa03883d49071ecf2cc27b940c60aab15ef287a22671ffe8387751b2bbbe5?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-29"
              />
              <div class="div-225">+91 91813 23 2309</div>
            </div>
            <div class="div-226">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/417fec37f203adf17566f49ae11c8ebac555f7786af608a0c1212165a6fadd13?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-30"
              />
              <div class="div-227">Somewhere in the World</div>
            </div>
          </div>
        </div>
        <div class="div-228"></div>
        <div class="div-229">
          <div class="div-230">
            <div class="div-231">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7727f93a0f5fe4c316d6049e980de4614e5f66d9661a00253be54a8b478437c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-31"
              />
            </div>
            <div class="div-232">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/779a351158a92492ef741c6d13a81a51b93c19c38e07f6ec72cbbadb0afa5a72?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-32"
              />
            </div>
            <div class="div-233">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d59da6ed79ad6ba4824ef6051ae7936735e1a5ad415c8dbdb1e429ca4d4242?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
                class="img-33"
              />
            </div>
          </div>
          <div class="div-234">YourBank All Rights Reserved</div>
          <div class="div-235">
            <div class="div-236">Privacy Policy</div>
            <div class="div-237">Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.div {
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
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
  line-height: 150%;
  padding: 20px 34px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
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
  justify-content: space-between;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-3 {
    white-space: initial;
  }
}
.div-4 {
  font-family: Lexend, sans-serif;
  border-radius: 82px;
  background-color: var(--Grey-15, #262626);
  align-self: stretch;
  justify-content: center;
  padding: 12px 24px;
}
@media (max-width: 991px) {
  .div-4 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-5 {
  font-family: Lexend, sans-serif;
  align-self: stretch;
  margin: auto 0;
}
.div-6 {
  font-family: Lexend, sans-serif;
  align-self: stretch;
  margin: auto 0;
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
.div-11 {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 53px;
  width: 100%;
  justify-content: center;
  padding: 80px 60px;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-12 {
  width: 100%;
  max-width: 1648px;
  margin: 20px 0;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
  }
}
.div-13 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-13 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-14 {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 300;
}
@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-15 {
  border-radius: 61px;
  background-color: var(--Grey-15, #262626);
  align-self: start;
  display: flex;
  gap: 6px;
  color: var(--Absolute-White, #fff);
  line-height: 133%;
  padding: 10px 12px;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-16 {
  font-family: Lexend, sans-serif;
}
.div-17 {
  color: var(--Green-60, #caff33);
  margin-top: 20px;
  font: 500 48px/72px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
    font-size: 40px;
    line-height: 67px;
  }
}
.div-18 {
  color: var(--White-90, #e4e4e7);
  font-family: Lexend, sans-serif;
  line-height: 27px;
  margin-top: 14px;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
  }
}
.div-19 {
  font-family: Lexend, sans-serif;
  border-radius: 82px;
  background-color: var(--Green-60, #caff33);
  align-self: start;
  margin-top: 50px;
  color: var(--Grey-11, #1c1c1c);
  font-weight: 400;
  line-height: 150%;
  justify-content: center;
  padding: 18px 30px;
}
@media (max-width: 991px) {
  .div-19 {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.img-3 {
  aspect-ratio: 1.12;
  object-fit: auto;
  object-position: center;
  width: 100%;
  border-radius: 10.404px;
  background-blend-mode: normal, screen, normal;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img-3 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-20 {
  display: flex;
  margin-top: 151px;
  width: 100%;
  max-width: 1596px;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-21 {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
  }
}
.div-22 {
  color: var(--Green-60, #caff33);
  font: 500 48px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    font-size: 40px;
  }
}
.div-23 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-23 {
    max-width: 100%;
  }
}
.div-24 {
  border-radius: 82px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: end;
  display: flex;
  margin-top: 57px;
  gap: 20px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 150%;
  justify-content: space-between;
  padding: 14px;
}
@media (max-width: 991px) {
  .div-24 {
    margin-top: 40px;
  }
}
.div-25 {
  font-family: Lexend, sans-serif;
  justify-content: center;
  border-radius: 140px;
  background-color: var(--Green-60, #caff33);
  color: var(--Grey-11, #1c1c1c);
  padding: 14px 24px;
}
@media (max-width: 991px) {
  .div-25 {
    padding: 0 20px;
  }
}
.div-26 {
  color: var(--Absolute-White, #fff);
  font-family: Lexend, sans-serif;
  margin: auto 0;
}
.div-27 {
  margin-top: 100px;
  width: 100%;
  max-width: 1596px;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-28 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-28 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-29 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-29 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-30 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 98px;
  flex-direction: column;
  justify-content: center;
  height: 98px;
  padding: 0 12px;
}
.div-31 {
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
  width: 100%;
  height: 74px;
  padding: 0 20px;
}
.img-4 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-32 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 30px;
  font: 400 24px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-32 {
    max-width: 100%;
  }
}
.div-33 {
  color: var(--Grey-70, #b3b3b3);
  text-align: center;
  margin-top: 20px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
  }
}
.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}
.div-34 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-35 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 98px;
  flex-direction: column;
  justify-content: center;
  height: 98px;
  padding: 0 12px;
}
.div-36 {
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
  width: 100%;
  height: 74px;
  padding: 0 20px;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-37 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 30px;
  font: 400 24px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-37 {
    max-width: 100%;
  }
}
.div-38 {
  color: var(--Grey-70, #b3b3b3);
  text-align: center;
  margin-top: 20px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-39 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-39 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-40 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 98px;
  flex-direction: column;
  justify-content: center;
  height: 98px;
  padding: 0 12px;
}
.div-41 {
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
  width: 100%;
  height: 74px;
  padding: 0 20px;
}
.img-6 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-42 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 30px;
  font: 400 24px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-42 {
    max-width: 100%;
  }
}
.div-43 {
  color: var(--Grey-70, #b3b3b3);
  text-align: center;
  margin-top: 20px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-43 {
    max-width: 100%;
  }
}
.div-44 {
  color: var(--Green-60, #caff33);
  margin-top: 150px;
  font: 500 48px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-45 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-45 {
    max-width: 100%;
  }
}
.div-46 {
  margin-top: 80px;
  width: 100%;
  max-width: 1596px;
}
@media (max-width: 991px) {
  .div-46 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-47 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-47 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.div-48 {
  border-radius: 20px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-48 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-49 {
}
@media (max-width: 991px) {
  .div-49 {
    max-width: 100%;
  }
}
.div-50 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-50 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-7 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-7 {
    width: 100%;
  }
}
.div-51 {
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-51 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-52 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 78px;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding: 0 10px;
}
.div-53 {
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
  width: 100%;
  height: 58px;
  padding: 0 14px;
}
.img-7 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-54 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/30px Lexend, sans-serif;
}
.column-8 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-8 {
    width: 100%;
  }
}
.div-55 {
  align-self: stretch;
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-55 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-56 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 78px;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding: 0 10px;
}
.div-57 {
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
  width: 100%;
  height: 58px;
  padding: 0 14px;
}
.img-8 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-58 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/150% Lexend, sans-serif;
}
.div-59 {
  margin-top: 20px;
}
@media (max-width: 991px) {
  .div-59 {
    max-width: 100%;
  }
}
.div-60 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-60 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-9 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-9 {
    width: 100%;
  }
}
.div-61 {
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-61 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-62 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 78px;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding: 0 10px;
}
.div-63 {
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
  width: 100%;
  height: 58px;
  padding: 0 14px;
}
.img-9 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-64 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/150% Lexend, sans-serif;
}
.column-10 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-10 {
    width: 100%;
  }
}
.div-65 {
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-65 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-66 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 78px;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding: 0 10px;
}
.div-67 {
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
  width: 100%;
  height: 58px;
  padding: 0 14px;
}
.img-10 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-68 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/150% Lexend, sans-serif;
}
.column-11 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-11 {
    width: 100%;
  }
}
.div-69 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .div-69 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-70 {
  color: var(--Absolute-White, #fff);
  font: 500 30px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-70 {
    max-width: 100%;
  }
}
.div-71 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-71 {
    max-width: 100%;
  }
}
.div-72 {
  margin-top: 62px;
}
@media (max-width: 991px) {
  .div-72 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-73 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-73 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-12 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-12 {
    width: 100%;
  }
}
.div-74 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-74 {
    margin-top: 40px;
  }
}
.div-75 {
  color: var(--Green-60, #caff33);
  font: 500 58px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-75 {
    font-size: 40px;
  }
}
.div-76 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 5px;
  font: 300 18px/27px Lexend, sans-serif;
}
.column-13 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-13 {
    width: 100%;
  }
}
.div-77 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-77 {
    margin-top: 40px;
  }
}
.div-78 {
  color: var(--Green-60, #caff33);
  font: 500 58px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-78 {
    font-size: 40px;
  }
}
.div-79 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 5px;
  font: 300 18px/27px Lexend, sans-serif;
}
.column-14 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-14 {
    width: 100%;
  }
}
.div-80 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-80 {
    margin-top: 40px;
  }
}
.div-81 {
  color: var(--Green-60, #caff33);
  font: 500 58px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-81 {
    font-size: 40px;
  }
}
.div-82 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 5px;
  font: 300 18px/27px Lexend, sans-serif;
}
.div-83 {
  border-radius: 82px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: start;
  margin-top: 62px;
  color: var(--Absolute-White, #fff);
  text-align: center;
  justify-content: center;
  padding: 18px 24px;
  font: 400 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-83 {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-84 {
  margin-top: 60px;
  width: 100%;
  max-width: 1596px;
}
@media (max-width: 991px) {
  .div-84 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-85 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-85 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-15 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-15 {
    width: 100%;
  }
}
.div-86 {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .div-86 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-87 {
  color: var(--Absolute-White, #fff);
  font: 500 30px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-87 {
    max-width: 100%;
  }
}
.div-88 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-88 {
    max-width: 100%;
  }
}
.div-89 {
  margin-top: 62px;
}
@media (max-width: 991px) {
  .div-89 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-90 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-90 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-16 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-16 {
    width: 100%;
  }
}
.div-91 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-91 {
    margin-top: 40px;
  }
}
.div-92 {
  color: var(--Green-60, #caff33);
  font: 500 58px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-92 {
    font-size: 40px;
  }
}
.div-93 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 5px;
  font: 300 18px/27px Lexend, sans-serif;
}
.column-17 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-17 {
    width: 100%;
  }
}
.div-94 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-94 {
    margin-top: 40px;
  }
}
.div-95 {
  color: var(--Green-60, #caff33);
  font: 500 58px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-95 {
    font-size: 40px;
  }
}
.div-96 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 5px;
  font: 300 18px/27px Lexend, sans-serif;
}
.column-18 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-18 {
    width: 100%;
  }
}
.div-97 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-97 {
    margin-top: 40px;
  }
}
.div-98 {
  color: var(--Green-60, #caff33);
  font: 500 58px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-98 {
    font-size: 40px;
  }
}
.div-99 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 5px;
  font: 300 18px/27px Lexend, sans-serif;
}
.div-100 {
  border-radius: 82px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: start;
  margin-top: 62px;
  color: var(--Absolute-White, #fff);
  text-align: center;
  justify-content: center;
  padding: 18px 24px;
  font: 400 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-100 {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.column-19 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-19 {
    width: 100%;
  }
}
.div-101 {
  border-radius: 20px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 0 0 50px 50px;
}
@media (max-width: 991px) {
  .div-101 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-102 {
}
@media (max-width: 991px) {
  .div-102 {
    max-width: 100%;
  }
}
.div-103 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-103 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-20 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 75%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-20 {
    width: 100%;
  }
}
.div-104 {
  align-self: stretch;
  z-index: 10;
  margin-top: 50px;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .div-104 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-105 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-105 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-21 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-21 {
    width: 100%;
  }
}
.div-106 {
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-106 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-107 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 78px;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding: 0 10px;
}
.div-108 {
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
  width: 100%;
  height: 58px;
  padding: 0 14px;
}
.img-11 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-109 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/30px Lexend, sans-serif;
}
.column-22 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-22 {
    width: 100%;
  }
}
.div-110 {
  align-self: stretch;
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-110 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-111 {
  align-items: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 78px;
  flex-direction: column;
  justify-content: center;
  height: 78px;
  padding: 0 10px;
}
.div-112 {
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
  width: 100%;
  height: 58px;
  padding: 0 14px;
}
.img-12 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-113 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/150% Lexend, sans-serif;
}
.column-23 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 25%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-23 {
    width: 100%;
  }
}
.img-13 {
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 213px;
  fill: radial-gradient(
    152.24% 143.75% at 103.26% 0%,
    rgba(25, 25, 25, 0.3) 20.29%,
    rgba(202, 255, 51, 0.3) 34.91%,
    rgba(25, 25, 25, 0.3) 60.69%
  );
  max-width: 100%;
}
.div-114 {
  margin-top: 20px;
}
@media (max-width: 991px) {
  .div-114 {
    max-width: 100%;
  }
}
.div-115 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-115 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-24 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-24 {
    width: 100%;
  }
}
.div-116 {
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-116 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-117 {
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 99px;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.div-118 {
  align-items: start;
  border-radius: 50px;
  border: 1px solid #caff33;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.1) -66.22%,
    rgba(202, 255, 51, 0) 85.46%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
}
@media (max-width: 991px) {
  .div-118 {
    padding-right: 20px;
  }
}
.img-14 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-119 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/150% Lexend, sans-serif;
}
.column-25 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-25 {
    width: 100%;
  }
}
.div-120 {
  border-radius: 16px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px;
}
@media (max-width: 991px) {
  .div-120 {
    margin-top: 20px;
    padding: 0 20px;
  }
}
.div-121 {
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  align-self: center;
  display: flex;
  width: 99px;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.div-122 {
  align-items: start;
  border-radius: 50px;
  border: 1px solid #caff33;
  background: linear-gradient(
    180deg,
    rgba(202, 255, 51, 0.1) -66.22%,
    rgba(202, 255, 51, 0) 85.46%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
}
@media (max-width: 991px) {
  .div-122 {
    padding-right: 20px;
  }
}
.img-15 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 30px;
}
.div-123 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 24px;
  font: 400 20px/150% Lexend, sans-serif;
}
.div-124 {
  color: var(--Green-60, #caff33);
  margin-top: 150px;
  font: 500 48px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-124 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-125 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  width: 1296px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-125 {
    max-width: 100%;
  }
}
.div-126 {
  margin-top: 80px;
  width: 100%;
  max-width: 1596px;
}
@media (max-width: 991px) {
  .div-126 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-127 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-127 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-26 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 20%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-26 {
    width: 100%;
  }
}
.div-128 {
  border-radius: 12px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: var(--Absolute-White, #fff);
  font-weight: 400;
  line-height: 150%;
  width: 100%;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-128 {
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-129 {
  font-family: Lexend, sans-serif;
  align-items: start;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-10, #1a1a1a);
  color: var(--Green-60, #caff33);
  justify-content: center;
  padding: 18px 24px;
}
@media (max-width: 991px) {
  .div-129 {
    padding: 0 20px;
  }
}
.div-130 {
  font-family: Lexend, sans-serif;
  align-items: start;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  margin-top: 24px;
  justify-content: center;
  padding: 18px 24px;
}
@media (max-width: 991px) {
  .div-130 {
    padding: 0 20px;
  }
}
.div-131 {
  font-family: Lexend, sans-serif;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  margin-top: 24px;
  justify-content: center;
  padding: 18px 24px;
}
@media (max-width: 991px) {
  .div-131 {
    padding: 0 20px;
  }
}
.column-27 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 80%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-27 {
    width: 100%;
  }
}
.div-132 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-132 {
    max-width: 100%;
    margin-top: 30px;
  }
}
.div-133 {
}
@media (max-width: 991px) {
  .div-133 {
    max-width: 100%;
  }
}
.div-134 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-134 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-28 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-28 {
    width: 100%;
  }
}
.div-135 {
  align-self: stretch;
  border-radius: 12px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-135 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-136 {
  display: flex;
  gap: 10px;
  font-size: 22px;
  color: var(--Absolute-White, #fff);
  font-weight: 400;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-136 {
    flex-wrap: wrap;
  }
}
.div-137 {
  font-family: Lexend, sans-serif;
  flex: 1;
}
@media (max-width: 991px) {
  .div-137 {
    max-width: 100%;
  }
}
.img-16 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-138 {
  color: var(--Grey-70, #b3b3b3);
  letter-spacing: -0.11px;
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-138 {
    max-width: 100%;
  }
}
.column-29 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-29 {
    width: 100%;
  }
}
.div-139 {
  border-radius: 12px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-139 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-140 {
  display: flex;
  gap: 10px;
  font-size: 22px;
  color: var(--Absolute-White, #fff);
  font-weight: 400;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-140 {
    flex-wrap: wrap;
  }
}
.div-141 {
  font-family: Lexend, sans-serif;
  flex: 1;
}
@media (max-width: 991px) {
  .div-141 {
    max-width: 100%;
  }
}
.img-17 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-142 {
  color: var(--Grey-70, #b3b3b3);
  letter-spacing: -0.11px;
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-142 {
    max-width: 100%;
  }
}
.div-143 {
  margin-top: 30px;
}
@media (max-width: 991px) {
  .div-143 {
    max-width: 100%;
  }
}
.div-144 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-144 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-30 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-30 {
    width: 100%;
  }
}
.div-145 {
  border-radius: 12px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-145 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-146 {
  display: flex;
  gap: 10px;
  font-size: 22px;
  color: var(--Absolute-White, #fff);
  font-weight: 400;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-146 {
    flex-wrap: wrap;
  }
}
.div-147 {
  font-family: Lexend, sans-serif;
  flex: 1;
}
@media (max-width: 991px) {
  .div-147 {
    max-width: 100%;
  }
}
.img-18 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-148 {
  color: var(--Grey-70, #b3b3b3);
  letter-spacing: -0.11px;
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-148 {
    max-width: 100%;
  }
}
.column-31 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-31 {
    width: 100%;
  }
}
.div-149 {
  align-self: stretch;
  border-radius: 12px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-149 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-150 {
  display: flex;
  gap: 10px;
  font-size: 22px;
  color: var(--Absolute-White, #fff);
  font-weight: 400;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-150 {
    flex-wrap: wrap;
  }
}
.div-151 {
  font-family: Lexend, sans-serif;
  flex: 1;
}
@media (max-width: 991px) {
  .div-151 {
    max-width: 100%;
  }
}
.img-19 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-152 {
  color: var(--Grey-70, #b3b3b3);
  letter-spacing: -0.11px;
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-152 {
    max-width: 100%;
  }
}
.div-153 {
  color: var(--Absolute-White, #fff);
  margin-top: 150px;
  font: 500 48px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-153 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-154 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-154 {
    max-width: 100%;
  }
}
.div-155 {
  margin-top: 80px;
  width: 100%;
  max-width: 1595px;
}
@media (max-width: 991px) {
  .div-155 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-156 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-156 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-32 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-32 {
    width: 100%;
  }
}
.div-157 {
  align-self: stretch;
  border-radius: 14px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-157 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-158 {
  color: var(--Absolute-White, #fff);
  font: 500 20px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-158 {
    max-width: 100%;
  }
}
.div-159 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 29px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-159 {
    max-width: 100%;
  }
}
.div-160 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-160 {
    max-width: 100%;
  }
}
.column-33 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-33 {
    width: 100%;
  }
}
.div-161 {
  border-radius: 14px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-161 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-162 {
  color: var(--Absolute-White, #fff);
  font: 500 20px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-162 {
    max-width: 100%;
  }
}
.div-163 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 29px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-163 {
    max-width: 100%;
  }
}
.div-164 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-164 {
    max-width: 100%;
  }
}
.div-165 {
  margin-top: 30px;
  width: 100%;
  max-width: 1595px;
}
@media (max-width: 991px) {
  .div-165 {
    max-width: 100%;
  }
}
.div-166 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-166 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-34 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-34 {
    width: 100%;
  }
}
.div-167 {
  border-radius: 14px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-167 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-168 {
  color: var(--Absolute-White, #fff);
  font: 500 20px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-168 {
    max-width: 100%;
  }
}
.div-169 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 29px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-169 {
    max-width: 100%;
  }
}
.div-170 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-170 {
    max-width: 100%;
  }
}
.column-35 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-35 {
    width: 100%;
  }
}
.div-171 {
  border-radius: 14px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px;
}
@media (max-width: 991px) {
  .div-171 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.div-172 {
  color: var(--Absolute-White, #fff);
  font: 500 20px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-172 {
    max-width: 100%;
  }
}
.div-173 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 29px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-173 {
    max-width: 100%;
  }
}
.div-174 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 30px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-174 {
    max-width: 100%;
  }
}
.div-175 {
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  display: flex;
  gap: 4px;
  font-size: 18px;
  color: var(--Absolute-White, #fff);
  font-weight: 400;
  line-height: 150%;
  padding: 18px 24px;
}
@media (max-width: 991px) {
  .div-175 {
    padding: 0 20px;
  }
}
.div-176 {
  font-family: Inter, sans-serif;
}
.img-20 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 22px;
  margin: auto 0;
}
.div-177 {
  display: flex;
  margin-top: 150px;
  width: 100%;
  max-width: 1596px;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-177 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-178 {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .div-178 {
    max-width: 100%;
  }
}
.div-179 {
  color: var(--Green-60, #caff33);
  font: 500 48px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-179 {
    max-width: 100%;
    font-size: 40px;
  }
}
.div-180 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-180 {
    max-width: 100%;
  }
}
.div-181 {
  border-radius: 82px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: end;
  display: flex;
  margin-top: 57px;
  gap: 20px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 150%;
  justify-content: space-between;
  padding: 14px;
}
@media (max-width: 991px) {
  .div-181 {
    margin-top: 40px;
  }
}
.div-182 {
  font-family: Lexend, sans-serif;
  justify-content: center;
  border-radius: 140px;
  background-color: var(--Green-60, #caff33);
  color: var(--Grey-11, #1c1c1c);
  padding: 14px 24px;
}
@media (max-width: 991px) {
  .div-182 {
    padding: 0 20px;
  }
}
.div-183 {
  color: var(--Absolute-White, #fff);
  font-family: Lexend, sans-serif;
  margin: auto 0;
}
.div-184 {
  align-items: center;
  display: flex;
  margin-top: 100px;
  width: 100%;
  max-width: 1596px;
  gap: 20px;
  padding: 0 20px;
}
@media (max-width: 991px) {
  .div-184 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-185 {
  align-items: center;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: stretch;
  display: flex;
  justify-content: center;
  width: 62px;
  height: 62px;
  margin: auto 0;
  padding: 14px;
}
.img-21 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-186 {
  align-self: stretch;
  flex: 1;
}
@media (max-width: 991px) {
  .div-186 {
    max-width: 100%;
  }
}
.div-187 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-187 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-36 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-36 {
    width: 100%;
  }
}
.div-188 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-188 {
    margin-top: 40px;
  }
}
.div-189 {
  align-items: center;
  display: flex;
  gap: 20px;
}
.div-190 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  align-self: stretch;
  height: 1px;
  flex: 1;
  margin: auto 0;
}
.img-22 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 60px;
  align-self: stretch;
}
.div-191 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  align-self: stretch;
  height: 1px;
  flex: 1;
  margin: auto 0;
}
.div-192 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 50px;
  font: 400 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-192 {
    margin-top: 40px;
  }
}
.div-193 {
  color: var(--Green-60, #caff33);
  text-align: center;
  margin-top: 50px;
  font: 500 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-193 {
    margin-top: 40px;
  }
}
.column-37 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-37 {
    width: 100%;
  }
}
.div-194 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-194 {
    margin-top: 40px;
  }
}
.div-195 {
  display: flex;
  gap: 20px;
  padding: 0 80px;
}
@media (max-width: 991px) {
  .div-195 {
    padding: 0 20px;
  }
}
.img-23 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 60px;
}
.div-196 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  height: 1px;
  flex: 1;
  margin: auto 0;
}
.div-197 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 50px;
  font: 400 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-197 {
    margin-top: 40px;
  }
}
.div-198 {
  color: var(--Green-60, #caff33);
  text-align: center;
  margin-top: 50px;
  font: 500 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-198 {
    margin-top: 40px;
  }
}
.column-38 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-38 {
    width: 100%;
  }
}
.div-199 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-199 {
    margin-top: 40px;
  }
}
.div-200 {
  display: flex;
  padding-right: 49px;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-200 {
    padding-right: 20px;
  }
}
.div-201 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  height: 1px;
  flex: 1;
  margin: auto 0;
}
.img-24 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 60px;
}
.div-202 {
  color: var(--Absolute-White, #fff);
  text-align: center;
  margin-top: 50px;
  font: 400 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-202 {
    margin-top: 40px;
  }
}
.div-203 {
  color: var(--Green-60, #caff33);
  text-align: center;
  margin-top: 50px;
  font: 500 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-203 {
    margin-top: 40px;
  }
}
.div-204 {
  align-items: center;
  border-radius: 100px;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: stretch;
  display: flex;
  justify-content: center;
  width: 62px;
  height: 62px;
  margin: auto 0;
  padding: 14px;
}
.img-25 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 34px;
}
.div-205 {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-blend-mode: normal, screen, normal;
  overflow: hidden;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  position: relative;
  min-height: 288px;
  margin-top: 150px;
  width: 100%;
  gap: 20px;
  padding: 80px;
}
@media (max-width: 991px) {
  .div-205 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.img-26 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-206 {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}
@media (max-width: 991px) {
  .div-206 {
    max-width: 100%;
  }
}
.div-207 {
  color: var(--Green-60, #caff33);
  font: 400 40px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-207 {
    max-width: 100%;
  }
}
.div-208 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-208 {
    max-width: 100%;
  }
}
.div-209 {
  position: relative;
  border-radius: 82px;
  background-color: var(--Green-60, #caff33);
  color: var(--Grey-11, #1c1c1c);
  justify-content: center;
  margin: auto 0;
  padding: 18px 30px;
  font: 400 18px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-209 {
    padding: 0 20px;
  }
}
.div-210 {
  align-items: center;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: stretch;
  display: flex;
  margin-top: 150px;
  width: 100%;
  flex-direction: column;
  padding: 80px 60px 50px;
}
@media (max-width: 991px) {
  .div-210 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-211 {
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 1596px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-211 {
    max-width: 100%;
  }
}
.div-212 {
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
  .div-212 {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
}
.div-213 {
  display: flex;
  width: 323px;
  max-width: 100%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-213 {
    white-space: initial;
  }
}
.img-27 {
  aspect-ratio: 3.85;
  object-fit: auto;
  object-position: center;
  width: 156px;
  align-self: center;
  max-width: 100%;
}
.div-214 {
  display: flex;
  margin-top: 50px;
  gap: 20px;
  justify-content: space-between;
}
@media (max-width: 991px) {
  .div-214 {
    margin-top: 40px;
    white-space: initial;
  }
}
.div-215 {
  font-family: Lexend, sans-serif;
}
.div-216 {
  font-family: Lexend, sans-serif;
}
.div-217 {
  font-family: Lexend, sans-serif;
}
.div-218 {
  font-family: Lexend, sans-serif;
}
.div-219 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 49px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-219 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-220 {
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
  .div-220 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-221 {
  display: flex;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-221 {
    flex-wrap: wrap;
  }
}
.div-222 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
  white-space: nowrap;
}
@media (max-width: 991px) {
  .div-222 {
    white-space: initial;
  }
}
.img-28 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-223 {
  font-family: Lexend, sans-serif;
}
.div-224 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
}
.img-29 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-225 {
  font-family: Lexend, sans-serif;
}
.div-226 {
  border-radius: 6px;
  display: flex;
  gap: 6px;
}
.img-30 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  margin: auto 0;
}
.div-227 {
  font-family: Lexend, sans-serif;
}
.div-228 {
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #262626;
  margin-top: 49px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-228 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-229 {
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
  .div-229 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
    margin-top: 40px;
  }
}
.div-230 {
  align-self: stretch;
  display: flex;
  gap: 14px;
}
.div-231 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-31 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-232 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-32 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-233 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-33 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-234 {
  color: var(--Grey-Shades-70, #b3b3b3);
  align-self: stretch;
  margin: auto 0;
  font: 300 18px/150% Lexend, sans-serif;
}
.div-235 {
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
.div-236 {
  font-family: Lexend, sans-serif;
}
.div-237 {
  font-family: Lexend, sans-serif;
}
</style>