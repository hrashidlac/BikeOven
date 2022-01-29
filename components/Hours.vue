<template>
  <div class="hours py-24">
    <div class="container">
      <div class="sm:grid sm:grid-cols-2 sm:gap-24">
        <div class="sm:grid-cols-1 text-white mb-8 sm:mb-0">
          <div class="uppercase text-center font-agblack text-2xl mb-12">Hours of Operation</div>
          <div class="bg-white text-black p-12 font-agreg uppercase">
            
            <div class="mb-2 text-xl">Saturday : 10 - 6</div>
            <div class="mb-2 text-xl">sunday : 10 -6 </div>
            <div class="mb-12 text-xl">monday : 10 - 5</div>
            
            <p class="mb-2 text-xl">
              the oven is looking for volunteers
              for other nights of the week.
              to get involved please fill out the 
              volunteer form.
            </p>
        </div>
        </div>
        <div class="sm:grid-cols-1 text-white mb-8 sm:mb-0">
          <div class="uppercase text-center font-agblack text-2xl mb-12">Hours of Operation</div>
          <div class="bg-white text-black p-12 font-agreg uppercase">
            
            <div class="mb-2 text-xl">stand time : $10 / hour</div>
            <div class="mb-2 text-xl">no one turned away </div>
            <div class="mb-12 text-xl">for lack of funds</div>
            
            <p class="mb-2 text-xl">
              the oven is workshop focused on
              teaching bike mechanics.  stand time
              includes use of all tools and advice
              from our mechanics on how to fix and 
              build your own bike.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<style scoped>
.hours{

  width:100%;
  background:transparent url(@/assets/img/hours-mobile.jpg) no-repeat center center;
  background-size:cover;
}
@media (min-width: 767px) {
  .hours{
    
    background:transparent url(@/assets/img/hours.jpg) no-repeat center center;
    background-size:cover;
  }
}
</style>
