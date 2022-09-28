<template>
  <div class="row page justify-between items-center re-column">
    <div class="werap col-md-8 col-sm-12 col-xs-12">
      <div class="container">
        <form @submit.prevent="request">
          <p class="text-weight-medium text-white">
            Forgot your password? Let help you out!
          </p>
          <div class="input-wrap">
            <label class="text-primary" for="">Email Address</label> <br />

            <div class="input">
              <i class="ri-mail-line q-mr-md text-primary"></i>

              <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
            </div>
            <div class="error" v-if="errors.email">
              {{ errors.email }}
            </div>
          </div>

          <div class="button q-pt-xl text-center">
            <q-btn :loading="loading" type="submit" class="btn q-py-sm q-px-xl"
              >Request Reset Email</q-btn
            >
          </div>
        </form>

        <p class="text-white q-mt-md q-pb-sm text-center">
          Remember your password now?
          <q-btn flat :to="{ name: 'login' }" class="text-primary">
            Login</q-btn
          >
        </p>
      </div>
    </div>
    <div class="mobile-hideable col-md-4 col-sm-12 col-xs-12">
      <div
        class="img mobile-hideable banner"
        style="background-image: url('images/nar.jpg')"
      ></div>
    </div>

    <q-dialog full-width v-model="dialog">
      <q-card
        style="height: fit-content; width: 80%"
        class="dialog_wid q-pa-md"
      >
        <form @submit.prevent="reset">
          <div class="input-wrap">
            <div class="input">
              <input
                type="password"
                v-model="form.password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="input-wrap">
            <div class="input">
              <input
                type="password"
                v-model="form.password_confirmation"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div class="flex q-my-lg justify-end">
            <q-btn :loading="loadreset" type="submit" class="btnn">
              Reset Password</q-btn
            >
          </div>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useMeta } from "quasar";
export default {
  setup() {
    useMeta(() => {
      return {
        title: "Forgot Password",
      };
    });
  },
  data() {
    return {
      loading: false,
      loadreset: false,
      user: [],
      errors: [],
      dialog: false,
      resp: "",
      email: "",
      form: {
        password: "",
        password_confirmation: "",
      },
    };
  },
  created() {
    this.$watch(
      (e) => this.errors,
      (e) =>
        e.length !== 0 &&
        this.$helper.notify("Please Recheck Credentials", "error")
    );
  },
  methods: {
    request: function () {
      let email = this.email;
      if (!email) {
        this.errors = { email: "Please enter your email address." };
        return;
      }
      this.loading = true;
      this.$api
        .post("forgot-password", { email })
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.errors = [];
          this.$q.loading.hide();

          this.$helper
            .notify(response.data.message, "success", true, "Reset Password")
            .onOk(() => {
              this.dialog = true;
            });
        })
        .catch(({ data }) => {
          this.loading = false;
          this.$helper.notify(data.message, "error", true);
          this.$q.loading.hide();
        });
    },

    reset() {
      this.loadreset = true;
      // window.location.href = response.data.data;
      this.$api
        .patch(`reset-password/${this.email}`, this.form)
        .then((response) => {
          this.loadreset = false;
          console.log(response);
          this.loading = false;
          this.$q.notify({
            message: response.data.message,
            color: "green",
            position: "top",
          });

          this.dialog = false;
          this.$router.replace("/");
          this.errors = [];
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.werap {
  position: relative;
  z-index: 100;
}
p {
  margin-bottom: 4px;
  font-size: 1.3rem;
}
.banner {
  width: 80%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.input-wrap {
  margin: 1.2rem 0;
}

.input-wrap,
select {
  width: 100%;
  margin-bottom: 2px;
}
.error {
  font-size: 0.9em;
  color: #ff0000;
}
.input-wrap .input {
  padding: 0.75rem;
  margin: 0.35rem 0;
  margin-bottom: 2px;
  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

i {
  font-size: 2rem;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem;
  background: transparent !important;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
  background: transparent !important;
  background-color: none !important;
}

label {
  font-size: 1.5rem;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  background: linear-gradient(
    121.81deg,
    #d31e1e 20.1%,
    #813232 131.87%
  ) !important;
  box-shadow: rgba(211, 30, 30, 0.96) 0px 25px 20px -20px;

  margin: 1rem;
  border-radius: 60px;
  border: 1px solid #d31e1e;
  font-size: 1.1rem;
  color: #fff;
  margin: 0.55rem 0;
  padding: 1rem;
  width: 60%;
}

::placeholder {
  font-size: 1rem;
  color: black;
}
@media (max-width: 500px) {
  .btn {
    width: 90%;
  }
}
@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  label {
    font-size: 1rem;
  }
  .input-wrap .input {
    padding: 0 0.75rem;
  }
  .btn {
    padding: 0.6rem;
    width: 90%;
    font-size: 10px;
  }
  p {
    font-size: 0.8rem;
  }
}
@media (max-width: 1024px) {
  .mobile-hideable {
    display: none;
  }
  .logo {
    height: 100px;
    margin-bottom: 1rem;
  }
  .logo img {
    height: 100px;
    object-fit: contain;
  }

  /* .re-column {
    padding-top: 7em;
  } */
}
</style>
