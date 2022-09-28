<template>
  <q-page class="bg-white">
    <div class="wrapper containerrr">
      <div class="center_it">
        <div class="hold">
          <!-- <div class="btn_hold">
            <q-btn class="back_btn">
              <i class="fa-solid fa-angle-left"> </i> <span>Login</span></q-btn
            >
          </div> -->
          <div class="opening_text">
            <span class="text-green">
              <span class="bold">MOM</span> EXPRESS
            </span>
          </div>

          <!-- <div class="opening_text">
            <span class="text-green"> Hey! Boss</span> Welcome back
          </div> -->

          <div class="form_data">
            <form @submit.prevent="login">
              <div class="input_wrap">
                <label class="text-green text-weight-bold" for="email"
                  >Email</label
                >
                <div class="input">
                  <i class="ri-mail-line q-mr-md text-green"></i>
                  <input
                    v-model="form.email"
                    name="email"
                    placeholder="Enter your email..."
                    type="text"
                  />
                </div>
                <div class="error" v-if="errors.email">
                  {{ errors.email[0] }}
                </div>
              </div>
              <div class="input_wrap">
                <label class="text-green text-weight-bold" for="password"
                  >Password</label
                >
                <div class="input">
                  <i class="ri-lock-line q-mr-md text-green"></i>
                  <input
                    v-model="form.password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <i class="fa-solid fa-eye-slash"></i>
                </div>
                <div class="error" v-if="errors.password">
                  {{ errors.password[0] }}
                </div>

                <div class="forgot flex justify-end">
                  <q-item to="/forgotPassword" class="text-green"
                    >Forgot password</q-item
                  >
                </div>
              </div>

              <div class="login_btn">
                <q-btn type="submit" class="login flex justify-center bg-green"
                  >Login</q-btn
                >

                <p class="no_acc">
                  Don’t have an account?
                  <q-btn to="/register" class="text-green text-weight-bold"
                    >Sign up</q-btn
                  >
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
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
      form: {
        email: "",
        password: "",
        terms: 1,
      },
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$q.loading.show();
      this.$api
        .post("/login", this.form)
        .then((response) => {
          this.$q.loading.hide();
          this.$router.replace({ name: "Homepage" });
          console.log(response);
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
          });
          this.$store.auth.setUserDetails(response.data);
          // this.$router.replace({ name: "dashboard" });
          this.loading = false;
        })
        .catch(({ response }) => {
          console.log(response);
          this.$q.loading.hide();

          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
label {
  color: #1abc9c;
}

.containerrr {
  max-width: 800px;
  width: 90%;
  margin: 10rem auto;
}
p {
  margin-bottom: 0;
}
.wrapper {
  /* height: 100vh; */
  position: relative;
  background: white;
  width: 100%;
}
/* .center_it {
  height: 100vh;
} */
.gridd {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
  width: 90%;
  padding: 2rem 0;
  margin-left: auto;
}

.hold {
  width: 70%;
  margin: 0 auto;
}
.btn_hold i {
  color: white;
  background: #01ddb2;
}

.btn_hold span {
  color: #01ddb2;
}

.back_btn {
  transition: all 5s ease-in-out;
}

.bold {
  font-weight: 800;
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
  font-size: 24px;
  line-height: 127.5%;
  max-width: 350px;
  margin-bottom: 3rem;
}

.input_wrap label {
  margin-top: 0.75rem;
}

.input_wrap .input {
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
}
.remember p {
  font-size: 12px;
}

.login {
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 3rem;
  background: #1abc9c;
  border-radius: 100px;
  padding: 0.75rem;
}

.no_acc {
  text-align: center;
  margin-top: 0.75rem;
}

.error {
  color: red;
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

  .containerrr {
    margin: 0rem auto;
  }
}
</style>
