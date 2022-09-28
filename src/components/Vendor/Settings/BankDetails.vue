<template>
  <div class="q-pa-md bank_page">
    <div class="q-py-md row">
      <q-btn
        label="New Bank"
        class="bordered-btn"
        icon="add"
        color="primary"
        no-caps
        @click="alert = true"
      />
      <q-space />
    </div>

    <q-table
      hide-bottom
      flat
      separator="none"
      :rows="accounts"
      :columns="columns"
      row-key="name"
      class="bank_table"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="bankName" :props="props">{{ props.row.bank }}</q-td>
          <q-td key="accountNumber" :props="props">{{
            props.row.account_no
          }}</q-td>
          <q-td key="accountName" :props="props">{{
            props.row.account_name
          }}</q-td>
          <q-td key="status" :props="props">
            <div
              :class="props.row.active == false ? `text-black` : `text-green`"
            >
              <!-- {{ props.row.active == false ? `inactive` : `active` }} -->
              <q-toggle
                color="green"
                dense
                size="1.7rem"
                :false-value="props.row.active == false ? false : ``"
                :true-value="props.row.active == true ? true : ``"
                v-model="props.row.active"
                @click="toggleAccount(props.row.id)"
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <q-dialog v-model="alert">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle1 text-bold text-primary">New Bank</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <form @submit.prevent="addAccount">
          <q-card-section class="q-pt-none">
            <div>
              <div class="q-mt-md">
                <div class="q-my-xs text-subtitle2 text-bold">Bank Name</div>
                <q-select
                  outlined
                  dense
                  v-model="bank"
                  :options="bankNames"
                  label=" Select a product cetegory..."
                />
              </div>

              <div class="q-mt-lg">
                <div class="q-my-xs text-subtitle2 text-bold">
                  Account Number
                </div>
                <q-input
                  class="input_field"
                  placeholder="Account Number"
                  outlined
                  dense
                  v-model="account_no"
                />
              </div>

              <div class="q-mt-lg">
                <div class="q-my-xs text-subtitle2 text-bold">Account Name</div>
                <q-input
                  class="input_field"
                  placeholder="Account Name"
                  outlined
                  dense
                  v-model="account_name"
                />
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              no-caps
              label="Add  Account"
              color="primary"
              type="submit"
            />
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "bankName",
    required: true,
    label: "Bank",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "accountNumber",
    align: "center",
    align: "left",
    label: "Account Number",
    field: "calories",
  },
  {
    name: "accountName",
    align: "left",
    label: "Account Name",
    field: "fat",
  },
  {
    name: "status",
    align: "left",
    label: "Status",
    field: "fat",
  },
];

export default {
  data() {
    return {
      columns,
      alert: ref(false),
      activeBank: null,
      bank: null,
      bankId: null,
      account_no: "",
      account_name: "",
      banks: [],
      bankNames: [],
      accounts: [],
      toggle: true,
    };
  },
  methods: {
    getBanks() {
      this.$api
        .get("bank/all")
        .then((resp) => {
          this.banks = resp.data.data;
          this.banks.map((item) => {
            this.bankNames.push(item.name);
          });
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },
    getAccounts() {
      this.$api
        .get("bank/accounts")
        .then((resp) => {
          this.accounts = resp.data.data;
        })
        .catch(({ response }) => {
          this.errors = response.data.errors;
        });
    },
    addAccount() {
      this.loading = true;
      this.bankNames.findIndex((item, index) => {
        if (item === this.bank) this.bankId = index;
      });

      let form = {
        bank: this.bankId + 1,
        account_no: this.account_no,
        account_name: this.account_name,
      };
      this.$api
        .post("bank/store", form)
        .then((resp) => {
          this.loading = false;
          this.$q.notify({
            message: "Bank account successfully added",
            color: "green",
            position: "top",
          });
          console.log(resp);
          this.bank = "";
          this.account_no = "";
          this.account_name = "";
          this.bankId = "";
          this.getAccounts();
        })
        .catch(({ response }) => {
          this.loading = false;

          this.$q.notify({
            message: response.data.message + ", you need to login to continue",
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
        });
    },
    toggleAccount(id) {
      console.log("hello");
      this.$api
        .patch(`bank/toggle/${id}`, { active: 1 })
        .then((resp) => {
          this.getAccounts();
          // this.toggle = false;
          console.log(resp);
        })
        .catch(({ response }) => {
          this.errors = response.data.errors;
        });
    },
  },
  created() {
    this.getBanks();
    this.getAccounts();
  },
};
</script>

<style scoped>
.bank_table .q-table--no-wrap th,
.bank_table .q-table--no-wrap td {
  white-space: nowrap !important;
}

.bank_page {
  width: 80%;
}
</style>
