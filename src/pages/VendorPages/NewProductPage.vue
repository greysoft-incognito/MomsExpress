<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="text-h6">{{ $route.name }}</div>
    <div class="text-weight-thin">Lorem Store Name</div>

    <div class="main q-my-lg q-pr-md">
      <div class="column q-gutter-y-md">
        <div class="border-radius bg-white">
          <div class="images q-py-md q-px-lg">
            <div
              class="input border-radius column flex-center relative-position"
            >
              <input
                class="form-control form-control-lg"
                ref="fileInput"
                multiple
                type="file"
                @input="selectImgFile"
                style="display: none"
              />
              <q-icon
                name="add"
                size="3.5rem"
                @click="$refs.fileInput.click()"
                color="primary"
              />
              <div class="text-primary absolute-bottom text-center q-mb-md">
                Upload Images
              </div>
            </div>

            <div
              v-show="!images[0]"
              v-for="n in 3"
              :key="n"
              class="image border-radius flex flex-center"
            >
              Product Image
            </div>

            <div
              v-show="images[0]"
              v-for="image in images"
              :key="image"
              @click="chooseFile"
              :style="{ 'background-image': `url(${image})` }"
              class="image border-radius flex flex-center"
            ></div>
          </div>
        </div>

        <div class="border-radius bg-white q-pa-md">
          <div class="product-input">
            <div>
              <label class="text-grey-9">Name</label>
              <q-input
                placeholder="Name of product..."
                class="q-mt-xs"
                v-model="productName"
                outlined
                dense
              />
            </div>
          </div>

          <div class="q-mt-lg">
            <label for="">Short Description</label>
            <q-input
              v-model="description"
              type="textarea"
              class="q-mt-xs"
              placeholder="Short description of the product ..."
              outlined
            />
          </div>

          <div class="q-mt-lg">
            <label class="text-grey-9">Product Details</label>
            <vue-editor class="q-mt-xs" v-model="content"></vue-editor>
          </div>
        </div>
      </div>

      <div class="column q-gutter-y-md">
        <div class="product-price border-radius bg-white q-pa-md">
          <label class="text-grey-9">Type of product Unit</label>
          <q-select
            outlined
            v-model="category"
            :options="categories"
            class="q-mt-xs"
            label="Product Unit..."
            dense
          />
        </div>

        <div class="product-price border-radius bg-white q-pa-md">
          <label class="text-grey-9">No. of Stock</label>
          <q-input
            placeholder="Product stock eg. 10"
            class="q-mt-xs"
            outlined
            dense
          />
        </div>

        <div class="product-price border-radius bg-white q-pa-md">
          <label class="text-grey-9">Price</label>
          <q-input dense outlined v-model="price">
            <template v-slot:prepend>
              N <q-separator class="q-ml-md" vertical
            /></template>
          </q-input>
        </div>

        <div class="product-price border-radius bg-white q-pa-md">
          <label class="text-grey-9">Discounted Price</label>
          <q-input dense outlined v-model="discount">
            <template v-slot:prepend>
              N <q-separator class="q-ml-md" vertical
            /></template>
          </q-input>
        </div>

        <div class="product-price border-radius bg-white q-pa-md">
          <label class="text-grey-9">Category</label>
          <q-select
            outlined
            dense
            v-model="category"
            :options="categories"
            label=" Select a product cetegory..."
          />
        </div>

        <div class="row border-radius bg-white q-pa-md">
          <q-btn
            label="Upload Product "
            class="bordered-btn full-width"
            color="primary"
            no-caps
            size="1.1rem"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { VueEditor } from "vue3-editor";

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      content: "<span>Write something ...</span>",
      filePreview: null,
      arr: [],
      images: [],
      colors: [],
      categories: ["1", "2", "3"],
      productName: ref(""),
      price: ref(""),
      quantity: ref(""),
      category: ref(""),
      subcategory: ref("nothing"),
      img: ref(null),
      description: ref(""),
      discount: ref(""),
    };
  },
  methods: {
    show() {
      console.log(this.content);
    },
    selectImgFile() {
      let fileInput = this.$refs.fileInput;
      let imgFile = fileInput.files;
      for (let i = 0; i < imgFile.length; i++) {
        this.arr.push(imgFile[i]);
      }

      for (let i = 0; i < this.arr.length; i++) {
        let reader = new FileReader();
        let a;
        reader.onload = (e) => {
          a = e.target.result;
          this.images.push(a);
        };
        reader.readAsDataURL(this.arr[i]);
        this.$emit("fileInput", this.arr[i]);
      }
      console.log(this.arr);
    },
    // addProduct() {
    //   console.log("hello");
    //   let formData = new FormData();
    //   formData.append("productName", this.productName);
    //   formData.append("price", this.price);
    //   formData.append("quantity", this.quantity);
    //   formData.append("category", this.category);
    //   formData.append("subcategory", this.subcategory);
    //   for (let i = 0; i < this.arr.length; i++) {
    //     formData.append("img", this.arr[i]);
    //   }
    //   formData.append("color", this.description);
    //   formData.append("size", this.discount);
    //   console.log(formData);
    //   if (
    //     this.productName !== "" &&
    //     this.price !== "" &&
    //     this.quantity !== ""
    //   ) {
    //     this.$store
    //       .dispatch("moduleExample/addProduct", { formData })
    //       .then((response) => {
    //         console.log(response);
    //         // this.icon = false;
    //         // this.getProducts();
    //       });
    //   } else {
    //     Notify.create({
    //       message: "You can't leave any field empty.",
    //       color: "red",
    //     });
    //   }
    // },
    // getCategories() {
    //   this.$store.dispatch("moduleExample/getCategories").then((response) => {
    //     for (let item of response.categories) {
    //       this.categories.push(item.name);
    //     }
    //   });
    // },
  },
  mounted() {
    // this.getCategories();
  },
};
</script>

<style scoped lang="css">
.previewBlock {
  display: block;
  cursor: pointer;
  width: 350px;
  height: 200px;
  margin: 0 auto 20px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 25px;
}
.border-radius {
  border-radius: 10px;
}

.images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.input,
.image {
  /* width: 150px; */
  height: 150px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.input {
  border: 2px dashed #d56c33;
  cursor: pointer;
}
.input:hover {
  background: rgb(128, 128, 128, 0.1) !important;
}
.image {
  border: 2px solid rgb(128, 128, 128, 0.5);
  color: rgb(128, 128, 128, 0.5);
}
</style>
