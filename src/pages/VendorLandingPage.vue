<template>
  <q-page>
    <div class="section_one big_screen_padding q-my-xl">
      <div>
        <p class="q-my-sm text-primary text-bold text-h6">Create a store</p>
        <h3 class="text-bold">Build your online store on MOMS</h3>
        <p class="q-my-md one_long_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          veritatis, officiis voluptatem voluptate natus sint dicta praesentium
          illum mollitia nostrum, veniam repellendus velit quidem libero unde
          sapiente! Inventore, aperiam odio.
        </p>
        <q-btn class="q-my-md" outline label="Learn More" />
      </div>
      <q-img src="Images/1.jpg" />
    </div>

    <div class="section_two q-my-xl big_screen_padding">
      <q-img src="Images/2.jpg" />
      <div>
        <p class="q-my-sm text-primary text-bold text-h6">How to Trade</p>
        <h3 class="text-bold">Easy 4 steps to manage your products selling</h3>
        <p class="q-my-md one_long_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          veritatis, officiis voluptatem voluptate natus sint dicta praesentium
          illum mollitia nostrum, veniam repellendus velit quidem libero unde
          sapiente! Inventore, aperiam odio.
        </p>
        <div class="four_items">
          <div class="row q-my-md">
            <q-icon name="computer" size="4rem" color="primary" />
            <p>Register and List Your Products</p>
          </div>
          <div class="row q-my-md">
            <q-icon name="list" size="4rem" color="primary" />
            <p>Start Selling Your Products</p>
          </div>
          <div class="row q-my-md">
            <q-icon name="delivery_dining" size="4rem" color="primary" />
            <p>Deliver your Products Everywhere</p>
          </div>
          <div class="row q-my-md">
            <q-icon name="store" size="4rem" color="primary" />
            <p>Get Payments and Increase your Income</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.section_one,
.section_two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  place-items: center;
}
.one_long_text {
  line-height: 2;
}
.four_items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25x;
  /* place-items: center; */
  /* align-items: center; */
}
.four_items p {
  margin: auto 0;
}
</style>
