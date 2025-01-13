<template>
  <div class="div">
    <!-- {{ mission }} -->
      <!-- {{ ser }} -->
      <div v-for="ser in sers" :key="ser">
<img :src="'http://127.0.0.1:8000/uploads/'+ser.image"/>
<h1>{{ser.Titel}}</h1>
<p>{{ser.datels}}</p></div>
    <Hero
   :title="'Where Banking Meets Excellence'"
   :desc="'  At YourBank, we believe that banking should be more than justtransactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.'"
   :img1="'../src/assets/images/Image.png'"
   :img2="'https://cdn.builder.io/api/v1/image/assets/TEMP/8160978984fa33faa5a20bd303df79edfb0c23ac14d2c8c58d37b87f9673485c?apiKey=7d3765a2531446298b7b0c4ca6630f57&'"
   />

    <!-- <div class="div-11">

      <div class="div-12">
        <div class="div-13">Welcome to YourBank</div>
        <div class="div-14">
          Where Banking Meets 
          <span style="color: rgba(202, 255, 51, 1)">Excellence!</span>
        </div>
        <div class="div-15">
          At YourBank, we believe that banking should be more than just
          transactions. It should be an experience that empowers individuals and
          businesses to thrive and reach their financial goals. As a trusted
          financial institution, we are committed to delivering exceptional
          banking services that go beyond expectations. With a focus on
          innovation, personalized solutions, and unwavering integrity, we
          strive to provide the best banking experience for our valued
          customers. Join us on this exciting journey and discover a new level
          of banking excellence.
        </div>
      </div>
      <img
        loading="lazy"
        src="../assets/images/Image.png"
        class="img-2-1"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a512d5e24cb3db3c7ae5dab4bba85677a462723c4b88c60330bce165be88e9b2?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
        class="img-2"
      />
    
    </div> -->


    <div class="div-16">{{title2}}</div>
    <div class="div-17">
    {{desc2}}
    </div>
    <div class="div-18">
      <div class="div-19">
        <div class="column">
          <div class="div-20">
            <!-- <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-3"
            /> -->
            <img
              
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c5a517b950318a183902478bd0afb138c2677c7e6505ea9f3d72fae90e34b882?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-4"
            />
          </div>
        </div>
        <div class="column-2">
          <div class="div-21">
            <div class="div-22">{{title3}}</div>
            <div class="div-23">
            {{desc3}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-24">
      <div class="div-25">
        <div class="column-3">
          <div class="div-26">
            <div class="div-27">{{title4}}</div>
            <div class="div-28">
            {{desc4}}
            </div>
          </div>
        </div>
        <div class="column-4">
          <div class="div-29">
            <!-- <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5756a5a7bb148cd5f1907cf046affa682e235ab3c794ba27667b0bb62403712?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-5"
            /> -->
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/192d039e0433fe1e2497539c14a452c43ad9aeb4f2a6852e8bfff2e8a1fea74f?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-6"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="div-30">{{title5}}</div>
    <div class="div-31">
    {{desc5}}
    </div>
    <div class="div-32">
      <div class="div-33">
        <div class="column-5">
          <!-- <Cards class="card"
          :img="'https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&'"
          :title="'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction'"
          :date="'06/11/2024'"
          :desc="'YourBank is pleased to announce the introduction of our new   Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'"
          /> -->
          <div class="div-34">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8aca6203eaf6f90a18e965a01a3b4acdccfc99fee8f7f7dcd7320e409f36a01c?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-7"
            />
            <div class="div-35">
              <div class="div-36">
                YourBank Launches New Rewards Program to Enhance Customer
                Loyalty and Satisfaction
              </div>
              <div class="div-37">Date: 06/11/2024</div>
              <div class="div-38">
                YourBank is pleased to announce the introduction of our new
                Rewards Program, aimed at rewarding our loyal customers and
                enhancing their banking experience. The program offers exclusive
                benefits, discounts, and personalized offers tailored to
                individual customer preferences. With this initiative, YourBank
                reaffirms its commitment to delivering exceptional value and
                building lasting relationships with our valued customers.
              </div>
            </div>
          </div>
        </div>
        <div class="column-6">
          <div class="div-39">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c16823cf6cdb426630088d3654ffecdecda6607cedc09eb4652f191c71e9c0a2?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-8"
            />
            <div class="div-40">
              <div class="div-41">
                YourBank Expands Branch Network with Opening of New Location in
                Chennai
              </div>
              <div class="div-42">Date: 12/11/2024</div>
              <div class="div-43">
                YourBank is excited to announce the grand opening of our newest
                branch in [City]. This expansion is a testament to our continued
                commitment to serving our customers and providing them with
                convenient access to our comprehensive range of banking
                services. The new branch will feature state-of-the-art
                facilities, a team of dedicated professionals, and a
                personalized approach to banking, further strengthening our
                presence in the local community.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-44">
      <div class="div-45">
        <div class="column-7">
          <div class="div-46">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/00acbea7a947e040798a9c90cba4337de74d8ac1aa6c59d400ae9dc2927db314?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-9"
            />
            <div class="div-47">
              <div class="div-48">
                YourBank Partners with Local Nonprofit to Support Financial
                Education Initiatives
              </div>
              <div class="div-49">Date: 24/12/2024</div>
              <div class="div-50">
                YourBank is excited to unveil our new Sustainable Banking
                Initiative, demonstrating our commitment to environmental
                responsibility. This initiative includes a range of sustainable
                banking products and services, such as green loans, eco-friendly
                investment options, and paperless banking solutions. By
                incorporating sustainable practices into our operations, we aim
                to contribute to a greener future while providing innovative
                banking solutions to our customers.
              </div>
            </div>
          </div>
        </div>
        <div class="column-8">
          <div class="div-51">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0e133b5bd8793bab1d109158c52f3e50c141a9fa26f517064c1621b7a4aa0b8?apiKey=7d3765a2531446298b7b0c4ca6630f57&"
              class="img-10"
            />
            <div class="div-52">
              <div class="div-53">
                YourBank Launches Sustainable Banking Initiative to Promote
                Environmental Responsibility
              </div>
              <div class="div-54">Date: 28/12/2024</div>
              <div class="div-55">
                YourBank is excited to unveil our new Sustainable Banking
                Initiative, demonstrating our commitment to environmental
                responsibility. This initiative includes a range of sustainable
                banking products and services, such as green loans, eco-friendly
                investment options, and paperless banking solutions. By
                incorporating sustainable practices into our operations, we aim
                to contribute to a greener future while providing innovative
                banking solutions to our customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import Hero from "../components/hero2.vue"
import Card from "../components/cardAbout.vue"
import axios from 'axios'
export default {

  name:'security',
  components:{
  
    Hero,
    Card,
  },
  mounted(){
    this.getMission()
    this.getser()
    this.getPress()
    this. getHero()

  },
  data(){
    return{
    title2:'Mission & Vision',
    desc2:"We envision being a leading force in the industry, driven by innovation,  integrity, and inclusivity, creating a brighter financial future for  individuals and businesses while maintaining a strong commitment to customer satisfaction and community development",
    title3:'Mission',
    desc3:'At YourBank, our mission is to empower our customers to achieve  financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.',
    title4:'Vision',
    desc4:'Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.',
    title5:'Press Releases',
    desc5:'Stay updated with the latest happenings and exciting developments at YourBank through our press releases.',

    mission:[],
    sers:[],
    press:[],
    hero:[]


      }
  },
  methods:{
    async getHero(){
      try{
        const response =await axios.get(' http://127.0.0.1:8000/api/showhero')
        this.hero = response.data.post
      }catch(err){
        console.log(err)
      }
    },
    
    async getMission(){
      try{
        const response =await axios.get('http://127.0.0.1:8000/api/showmission')
        this.mission = response.data.post
      }catch(err){
        console.log(err)
      }
    },
  
  
  

    async getPress(){
      try{
        const response =await axios.get('http://127.0.0.1:8000/api/showpress')
        this.press = response.data.post
      }catch(err){
        console.log(err)
      }
    },
    async getser(){
      try{
        const response =await axios.get('http://127.0.0.1:8000/api/showserveces?type=api')
        this.sers = response.data.post
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
html{
  scroll-behavior: smooth;

}
.div {
  background-color: var(--Grey-10, #1a1a1a);
  display: flex;
  padding-top: 10px;
  
  flex-direction: column;
  align-items: center;
  width: 100%;
}


.div-11 {
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
  /* position: relative; */
}
@media (max-width: 991px) {
  .div-11 {
    flex-wrap: wrap;
    padding-left: 20px;
    margin-top: 40px;
  }
}
.div-12 {
  border-radius: 20px 0px 80px 20px;
  background-color: var(--Grey-10, #1a1a1a);
  /* display: flex; */
  margin-top: 50px;
  flex-direction: column;
  padding: 80px;
  position:absolute;
  z-index: 2;
  width: 44vw;
  height: 75%;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-13 {
  color: var(--Absolute-White, #fff);
  font: 400 20px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    max-width: 100%;
  }
}
.div-14 {
  color: var(--Green-60, #caff33);
  font: 500 58px/75px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
    font-size: 40px;
    line-height: 58px;
  }
}
.div-15 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 23px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
  }
}
.img-2 {
  aspect-ratio: 0.95;
  z-index: 0;
  object-fit: auto;
  position: absolute;
padding-right: 20px;
  object-position: center;
  right:0;
  width: 505px;
  height: 480px;
  fill: radial-gradient(
    152.24% 143.75% at 103.26% 0%,
    rgba(25, 25, 25, 0.3) 20.29%,
    rgba(202, 255, 51, 0.3) 34.91%,
    rgba(25, 25, 25, 0.3) 60.69%
  );
}
@media (max-width: 991px) {
  .img-2 {
    max-width: 100%;
  }
}
.img-2-1 {
  aspect-ratio: 0.95;
  object-fit: cover;
  /* object-position: right; */
  width:900px;
  height: 700px;
  margin-left: auto;
  margin-top: 50px;
  margin-right: 50px;
  z-index: 1;
  border-radius: 16px;
/* position: relative; */
}
@media (max-width: 991px) {
  .img-2-1 {
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
.div-16 {
  color: var(--Green-60, #caff33);
  margin-top: 120px;
  font: 400 48px/150% Lexend, sans-serif;
  left: 0;
  text-align: left;
  direction: ltr;
  width: 100%;
  animation: app linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-17 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  width: 1296px;
  font: 300 18px/27px Lexend, sans-serif;
  left: 0;
  width: 100%;
  padding-right: 15%;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
  }
}
.div-18 {
  margin-top: 80px;
  width: 100%;
  max-width: 1596px;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-19 {
  /* gap: 20px; */
  display: flex;
}
@media (max-width: 991px) {
  .div-19 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 42%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-20 {
  display: flex;
  flex-direction: column;
  border-radius: 50px 50px 20px 20px;
  background-blend-mode: normal, normal, screen;
  overflow: hidden;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  /* position: relative; */
  min-height: 621px;
  flex-grow: 1;
  justify-content: center;
  /* padding: 0 31px; */
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-3 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.img-4 {
  aspect-ratio: 0.97;
  object-fit: auto;
  object-position: center;
  width: 100%;
  fill: radial-gradient(
    61.15% 55.12% at 44.88% 50%,
    rgba(202, 255, 51, 0.3) 19.48%,
    rgba(25, 25, 25, 0.3) 100%
  );
}
@media (max-width: 991px) {
  .img-4 {
    max-width: 100%;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 58%;
  /* margin-left: 20px; */
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-21 {
  padding-left: 50px;
  border-left-color: rgba(202, 255, 51, 1);
  border-style: solid;
  border-width:0px ;
  border-left-width: 1px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-22 {
  color: var(--Absolute-White, #fff);
  font: 500 38px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
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
  width: 100%;
  max-width: 1596px;
}
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
  }
}
.div-25 {
  /* gap: 20px; */
  display: flex;
}
@media (max-width: 991px) {
  .div-25 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 58%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-26 {
  padding-right: 50px;
  border-right-color: rgba(202, 255, 51, 1);
  border-style: solid;
   border-width: 0px;
  border-right-width: 1px;
 
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-27 {
  color: var(--Absolute-White, #fff);
  font: 500 38px/150% Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
  }
}
.div-28 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 300 18px/27px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-28 {
    max-width: 100%;
  }
}
.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 42%;
  /* margin-left: 20px; */
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}
.div-29 {
  display: flex;
  flex-direction: column;
  border-radius: 50px 50px 20px 20px;
  background-blend-mode: normal, normal, screen;
  overflow: hidden;
  border-color: rgba(38, 38, 38, 1);
  border-style: solid;
  border-width: 1px;
  /* position: relative; */
  min-height: 621px;
  flex-grow: 1;
  justify-content: center;
  /* padding: 0 31px; */
}
@media (max-width: 991px) {
  .div-29 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-5 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.img-6 {
  aspect-ratio: 0.97;
  object-fit: auto;
  object-position: center;
  width: 100%;
  fill: radial-gradient(
    61.15% 55.12% at 44.88% 50%,
    rgba(202, 255, 51, 0.3) 19.48%,
    rgba(25, 25, 25, 0.3) 100%
  );
}
@media (max-width: 991px) {
  .img-6 {
    max-width: 100%;
  }
}
.div-30 {
  color: var(--Green-60, #caff33);
  margin-top: 120px;
  font: 400 48px/150% Lexend, sans-serif;
  left:0;
  width: 100%;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
}
.div-31 {
  color: var(--Grey-70, #b3b3b3);
  margin-top: 14px;
  font: 400 18px/150% Lexend, sans-serif;
  left: 0;
  width: 100%;
}
@media (max-width: 991px) {
  .div-31 {
    max-width: 100%;
  }
}
.div-32 {
  margin-top: 80px;
  width: 100%;
  max-width: 1596px;
}
@media (max-width: 991px) {
  .div-32 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-33 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-33 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
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
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.div-39 {
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
  .div-39 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.img-8 {
  aspect-ratio: 2.17;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
@media (max-width: 991px) {
  .img-8 {
    max-width: 100%;
  }
}
.div-40 {
  display: flex;
  margin-top: 51px;
  flex-direction: column;
  padding: 0 30px;
}
@media (max-width: 991px) {
  .div-40 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-41 {
  color: var(--Absolute-White, #fff);
  font: 400 24px/36px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-41 {
    max-width: 100%;
  }
}
.div-42 {
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
.div-43 {
  font-family: Lexend, sans-serif;
  line-height: 27px;
  margin-top: 30px;
}
@media (max-width: 991px) {
  .div-43 {
    max-width: 100%;
  }
}
.div-44 {
  margin-top: 30px;
  width: 100%;
  max-width: 1596px;
   margin-bottom: 100px;
   /* padding-bottom: 10px; */
}
@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
  }
}
.div-45 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-45 {
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
.div-46 {
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
  .div-46 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.img-9 {
  aspect-ratio: 2.17;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
@media (max-width: 991px) {
  .img-9 {
    max-width: 100%;
  }
}
.div-47 {
  display: flex;
  margin-top: 51px;
  flex-direction: column;
  padding: 0 30px;
}
@media (max-width: 991px) {
  .div-47 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-48 {
  color: var(--Absolute-White, #fff);
  font: 400 24px/36px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-48 {
    max-width: 100%;
  }
}
.div-49 {
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
.div-50 {
  font-family: Lexend, sans-serif;
  line-height: 27px;
  margin-top: 30px;
}
@media (max-width: 991px) {
  .div-50 {
    max-width: 100%;
  }
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
.div-51 {
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
  .div-51 {
    max-width: 100%;
    margin-top: 30px;
    padding: 0 20px;
  }
}
.img-10 {
  aspect-ratio: 2.17;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
@media (max-width: 991px) {
  .img-10 {
    max-width: 100%;
  }
}
.div-52 {
  display: flex;
  margin-top: 51px;
  flex-direction: column;
  padding: 0 30px;
}
@media (max-width: 991px) {
  .div-52 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-53 {
  color: var(--Absolute-White, #fff);
  font: 400 24px/36px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-53 {
    max-width: 100%;
  }
}
.div-54 {
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
.div-55 {
  font-family: Lexend, sans-serif;
  line-height: 27px;
  margin-top: 30px;
  /* margin-bottom: 100; */
}
@media (max-width: 991px) {
  .div-55 {
    max-width: 100%;
  }
}
.div-56 {
  align-items: center;
  background-color: var(--Grey-11, #1c1c1c);
  align-self: stretch;
  display: flex;
  margin-top: 123px;
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
.div-77 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-15 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-78 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
}
.img-16 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
}
.div-79 {
  align-items: center;
  border-radius: 100px;
  background-color: var(--Green-60, #caff33);
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 14px;
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