<template>
  <q-list class="list_item q-pt-sm q-px-sm">
    <q-item class="q-ml-sm">
      <q-item-section top thumbnail class="check_box">
        <q-checkbox v-model="val" dense />
      </q-item-section>
      <img
        class="image"
        :class="toggle === 'Disabled' ? 'disabled-img' : ''"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-item-section>
        <q-item-label
          :class="toggle === 'Disabled' ? 'disable-text' : ''"
          class="text-h6 text-bold text-capitalize"
        >
          <router-link to="/vendor/product_detail" class="name_text q-my-sm">
            name
          </router-link>
        </q-item-label>
        <q-item-label class="q-my-xs">
          <q-toggle
            :label="toggle"
            color="green"
            dense
            size="1.7rem"
            :class="toggle === 'Disabled' ? 'text-secondary' : 'text-green'"
            false-value="Disabled"
            true-value="Enabled"
            v-model="toggle"
          />
          <!-- <span class="text-weight-light q-my-auto q-ml-xs"> In Stock</span> -->
        </q-item-label>
      </q-item-section>

      <q-item-section
        side
        top
        :class="toggle === 'Disabled' ? 'disable-text' : ''"
        class="text-h6 price_text text-bold price_sect"
      >
        <q-item-label>N5000.00</q-item-label>
        <q-item-label>
          <div class="q-my-xs stock_text text-subtitle1">
            <span class="q-ml-xs text-bold">10</span>
            <span class="text-weight-light q-my-auto q-ml-sm"> In Stock</span>
          </div>
        </q-item-label>
      </q-item-section>

      <q-item-section
        side
        top
        :class="toggle === 'Disabled' ? 'disable-text' : ''"
        class="edit_btn"
      >
        <q-item-label>
          <q-btn
            color="secondary"
            outline
            label="Edit Product"
            no-caps
            :to="`/vendor/product_detail`"
            class="bordered-btn text-caption text-bold"
            :class="toggle === 'Disabled' ? 'disable-text' : ''"
          >
          </q-btn
        ></q-item-label>
      </q-item-section>

      <q-item-section class="details_btn" side>
        <q-btn
          flat
          icon="chevron_right"
          :to="`/vendor/product_detail`"
          class="non-hover-btn"
        />
      </q-item-section>
    </q-item>
    <q-separator class="q-mt-sm" />
  </q-list>
</template>

<script>
export default {
  name: "Product Item",
  // props: ["product"],
  data() {
    return {
      val: false,
      toggle: "Enabled",
    };
  },
  // mounted() {
  //   console.log(this.product);
  // },
};
</script>

<style scoped>
.list_item:hover {
  background-color: rgb(0, 0, 0, 0.1);
}

.disable-text {
  color: grey !important;
}

.disabled-img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.chevron_right:hover {
  background: none !important;
  outline: 0 !important;
}
.image {
  height: 110px;
  width: 150px;
  margin-right: 3%;
}

.price_sect {
  padding: 0 !important;
}

@media screen and (max-width: 1050px) {
  .edit_btn {
    display: none;
  }
  .image {
    height: 70px;
    width: 80px;
    margin-right: 3%;
  }
  .price_text,
  .name_text,
  .stock_text {
    font-size: 1rem;
  }
  .check_box {
    font-size: 0.8rem !important;
  }
}

@media screen and (max-width: 580px) {
  .image {
    height: 55px;
    width: 65px;
    margin-right: 3%;
  }
  .price_text,
  .stock_text {
    font-size: 0.9rem;
  }
  .check_box {
    font-size: 0.8rem !important;
  }
  .details_btn {
    padding: 0 !important;
    width: 10% !important;
  }
  .price_sect {
    padding: 0 !important;
  }
}

@media screen and (max-width: 400px) {
  .image {
    height: 45px;
    width: 55px;
    margin-right: 3%;
  }
  .price_text,
  .name_text {
    font-size: 0.8rem !important;
  }
  .check_box {
    font-size: 0.8rem !important;
  }

  .q-toggle--dense .q-toggle__label {
    font-size: 0.75rem !important;
  }
  .check_box .q-checkbox__inner {
    font-size: 30px !important;
  }

  .stock_text {
    font-size: 0.75rem;
  }
}
</style>
