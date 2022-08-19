<template>
  <div class="wrapper containerrr">
    <div class="center_it">
      <div class="hold">
        <!-- <div class="btn_hold">
          <q-btn class="back_btn">
            <i class="fa-solid fa-angle-left"> </i> <span>Sign up</span></q-btn
          >
        </div> -->
        <div class="opening_text">
          <span class="text-primary">
            <span class="bold">MOMS</span>EXPRESS
          </span>
        </div>

        <!-- {{ form }} -->

        <!-- <div class="opening_text text-weight-bold">
          Create your
          <span class="text-weight-bold text-primary">account</span> in few
          minutes.
        </div> -->

        <!-- {{ errors }} -->
        <div class="form_data">
          <form @submit.prevent="register">
            <!-- <div class="input_wrap">
              <label class="text-primary text-weight-bold" for="email"
                >Full Name</label
              >
              <div class="input">
                <i class="ri-mail-line q-mr-md text-primary"></i>
                <input
                  name="email"
                  placeholder="Enter your fullname..."
                  type="text"
                />
                <div class="error" v-if="errors.fullname">
                  {{ errors.fullname }}
                </div>
              </div>
            </div> -->
            <div class="input_wrap">
              <label class="text-primary text-weight-bold" for="email"
                >Email</label
              >
              <div class="input">
                <i class="ri-mail-line q-mr-md text-primary"></i>
                <input
                  name="email"
                  v-model="form.email"
                  placeholder="Enter your email here..."
                  type="text"
                />
              </div>
              <div class="error" v-if="errors.email">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="input_wrap">
              <label class="text-primary text-weight-bold" for="password"
                >Password</label
              >
              <div class="input">
                <i class="ri-lock-line q-mr-md text-primary"></i>
                <input
                  name="password"
                  v-model="form.password"
                  placeholder="Enter your password"
                  type="password"
                />

                <i class="fa-solid fa-eye-slash"></i>
              </div>
              <div class="error" v-if="errors.password">
                {{ errors.password[0] }}
              </div>

              <div class="forgot flex justify-end">
                <p class="text-primary">Forgot password</p>
              </div>
            </div>

            <div class="row items-center">
              <q-checkbox v-model="form.terms" />
              <p>You agree with our terms and condition</p>
            </div>
            <div class="error" v-if="errors.terms">
              {{ errors.terms[0] }}
            </div>

            <div class="login_btn">
              <q-btn
                :loading="loading"
                type="submit"
                class="login flex justify-between"
                >Sign Up</q-btn
              >

              <p class="no_acc">
                Don’t have an account?
                <q-btn to="/loginn" class="text-primary text-weight-bold"
                  >Login</q-btn
                >
              </p>
            </div>
          </form>
        </div>
      </div>
      <!-- <div class="img">
        <img src="/images/onefive.png" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      val: ref(true),
    };
  },
  data() {
    return {
      errors: [],
      loading: false,
      form: {
        email: "",
        password: "",
        terms: false,
      },
    };
  },
  methods: {
    register() {
      this.loading = true;
      const email = this.form.email;
      const password = this.form.password;
      const terms = this.form.terms;
      terms;
      let data = {
        email,
        password,
        terms,
      };

      if (terms === false) {
        this.$q.notify({
          message: "You must agree to our terms and conditions",
          color: "Green",
        });
        this.loading = false;
      } else {
        this.$api
          .post("/register", data)
          .then((response) => {
            console.log(response);
            this.$q.notify({
              message: response.data.message,
              color: "Green",
            });
            this.loading = false;
            this.$store.auth.setUserDetails(response.data);
            this.$router.replace({ name: "Homepage" });
          })
          .catch(({ response }) => {
            console.log(response);
            this.loading = false;
            this.$q.notify({
              message: response.data.message,
              color: "red",
              position: "top",
            });
            this.errors = response.data.errors || response.message;
            setTimeout(() => {
              this.errors = [];
            }, 7000);
          });
      }
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
label {
  color: #01ddb2;
}
/* .center_it {
  height: 100vh;
} */
.wrapper {
  height: 100%;
  position: relative;
  background: white;
  width: 100%;
}
.containerrr {
  max-width: 800px;
  width: 90%;
  margin: 10rem auto;
}
.bold {
  font-weight: 800;
}
.btn_hold i {
  color: white;
  background: #01ddb2;
}

.error {
  color: red;
}

.btn_hold span {
  color: #fff;
}

.back_btn {
  transition: all 5s ease-in-out;
}

.gridd {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  width: 90%;
  padding: 2rem 0;
  margin-left: auto;
}

.back_btn i {
  padding: 0.25rem;
  margin-right: 0.65rem;
  width: 20px;
}

.back_btn:hover {
  background: #1abc9c;
  color: white;
  transition: all 5s ease-in-out;
}

.back_btn:hover .btn_hold span {
  color: white;
}

.opening_text {
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 127.5%;
  max-width: 350px;
  margin-bottom: 3rem;
}

.input_wrap label {
  margin-top: 0.75rem;
}

.input_wrap .input {
  background: #fff;
  background: #f2f2f2;

  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0.55rem 0;
  width: 100%;
}

.input_wrap input {
  background: transparent;
  border: none;
  width: 100%;
}
.input_wrap input:focus {
  outline: none;
}

.fa-eye-slash {
  display: flex;
  justify-content: flex-end;
  float: right;
  width: 100%;
}

.remember {
  margin-top: 1rem;
  font-size: 12px;
}

.login {
  width: 100%;
  background: #fff;
  color: #fff;
  background: #2f4858;
  border-radius: 100px;
  margin-top: 1rem;
  padding: 0.75rem;
}

.no_acc {
  text-align: center;
  margin-top: 0.75rem;
}

@media (max-width: 700px) {
  ::placeholder {
    font-size: 13px;
  }

  .no_acc {
    font-size: 13px;
  }
  .forgot p {
    font-size: 13px;
  }

  .hold {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }
}
</style>
