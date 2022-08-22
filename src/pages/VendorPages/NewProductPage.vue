<template>
  <q-page class="q-px-lg q-py-md">
    <div class="route_name">
      <div class="text-h6">{{ $route.name }}</div>
      <div class="text-weight-thin">Lorem Store Name</div>
    </div>

    <form @submit.prevent="uploadProduct">
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
                <!-- <input
                  style="display: none"
                  class="form-control form-control-lg"
                  type="file"
                  name="images[]"
                  ref="fileInput"
                  @change="onChange"
                /> -->
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

              <!-- <div
                v-show="!images[1]"
                v-for="n in 1"
                :key="n"
                class="image border-radius flex flex-center"
              >
                Product Image
              </div>

              <div
                v-show="images[1]"
                @click="chooseFile"
                :style="{ 'background-image': `url(${images[1]})` }"
                class="image border-radius flex flex-center"
              ></div>
              <div
                v-show="!images[2]"
                v-for="n in 1"
                :key="n"
                class="image border-radius flex flex-center"
              >
                Product Image
              </div>

              <div
                v-show="images[2]"
                @click="chooseFile"
                :style="{ 'background-image': `url(${images[2]})` }"
                class="image border-radius flex flex-center"
              ></div> -->
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
                  name="name"
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
                name="description"
              />
            </div>

            <div class="q-my-lg">
              <label class="text-grey-9">Product Details</label>
              <vue-editor class="q-mt-xs" v-model="content"></vue-editor>
            </div>
          </div>
        </div>

        <div class="side_bar q-gutter-y-md">
          <div class="product-price border-radius bg-white q-pa-md">
            <label class="text-grey-9">Type of product Unit</label>
            <q-select
              outlined
              v-model="category"
              :options="categories"
              class="q-mt-xs"
              label="Product Unit..."
              dense
              name="category"
            />
          </div>

          <div class="product-price border-radius bg-white q-pa-md">
            <label class="text-grey-9">No. of Stock</label>
            <q-input
              placeholder="Product stock eg. 10"
              class="q-mt-xs"
              outlined
              v-model="stock"
              dense
              name="stock"
            />
          </div>

          <div class="product-price border-radius bg-white q-pa-md">
            <label class="text-grey-9">Price</label>
            <q-input name="price" dense outlined v-model="price">
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
          <div class="row q-pa-md">
            <q-btn
              label="Upload Product "
              class="bordered-btn full-width"
              color="primary"
              no-caps
              :loading="loading"
              type="submit"
              size="1.1rem"
            />
          </div>
        </div>
      </div>
    </form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { VueEditor } from "vue3-editor";

export default {
  components: {
    VueEditor,
  },
  setup() {
    let image = ref(null);
    return {
      image,
    };
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
      stock: ref(""),
      price: ref(""),
      quantity: ref(""),
      category: ref(""),
      subcategory: ref("nothing"),
      img: ref(null),
      description: ref(""),
      discount: ref(""),
      files: [],
      images: [],
      imagesArr: [],
      loading: false,
    };
  },
  methods: {
    selectImgFile() {
      let fileInput = this.$refs.fileInput;
      let imgFile = fileInput.files;
      // for (let i = 0; i < imgFile.length; i++) {
      //   // if (!this.arr.includes(imgFile[i]))
      //   this.arr.push(imgFile[i]);
      // }
      imgFile.forEach((item) => {
        this.arr.push(item);
      });
      let filteredList = [...new Set(this.arr.map(JSON.stringify))].map(
        JSON.parse
      );
      // let uniqueChars = [...new Set(this.arr)];

      console.log(filteredList);

      for (let i = 0; i < this.arr.length; i++) {
        let reader = new FileReader();
        let a;
        reader.onload = (e) => {
          a = e.target.result;
          if (!this.images.includes(a)) {
            this.images.push(a);
          }
        };
        reader.readAsDataURL(this.arr[i]);
        this.$emit("fileInput", this.arr[i]);
      }
      console.log(this.arr);
      // console.log(imgFile);
    },
    // onChange(e) {
    //   let files = e.target.files;
    //   this.createFile(files[0]);
    //   this.files = files;
    //   this.imagesArr.push(this.files);
    // },
    // createFile(file) {
    //   if (!file.type.match("image.*")) {
    //     alert("Select an image");
    //     return;
    //   }
    //   let img = new Image();
    //   let reader = new FileReader();
    //   let vm = this;

    //   reader.onload = function (e) {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    //   this.images.push(this.image);
    // },

    // uploadProduct() {
    //   console.log("first");
    //   const name = this.productName;
    //   const description = this.description;
    //   const price = this.price;
    //   const category = this.category;
    //   const stock = this.stock;

    //   let imagesOne = this.imagesArr.length ? this.imagesArr[0][0] : "";
    //   let imagesTwo = this.imagesArr.length ? this.imagesArr[1][0] : "";
    //   let imagesThree = this.imagesArr.length ? this.imagesArr[2][0] : "";

    //   let productData = new FormData();
    //   this.loading = true;
    //   productData.append("name", name);
    //   productData.append("description", description);
    //   productData.append("images[]", imagesOne);
    //   productData.append("images[]", imagesTwo);
    //   productData.append("images[]", imagesThree);
    //   productData.append("price", price);
    //   productData.append("category", category);
    //   productData.append("stock", stock);
    //   this.$api
    //     .post("product/store", productData)
    //     .then((resp) => {
    //       this.$q.notify({
    //         message: resp.data.message,
    //         color: "green",
    //         position: "top",
    //         timeout: 3000,
    //       });
    //       console.log(resp);
    //       this.loading = false;
    //     })
    //     .catch(({ response }) => {
    //       this.loading = false;

    //       this.errors = response.data.errors;
    //       setTimeout(() => {
    //         this.errors = [];
    //       }, 7000);
    //       console.log(response);
    //     });
    // },

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
@media screen and (max-width: 1200px) {
  .main {
    grid-template-columns: 1fr;
  }
  .side_bar {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px; */
  }
}

@media screen and (max-width: 700px) {
  .route_name {
    display: none;
  }
  .images {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 400px) {
  .image,
  .input {
    height: 120px;
    background-size: cover;
  }
}
</style>
