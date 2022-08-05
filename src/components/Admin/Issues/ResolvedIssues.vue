<template>
  <div class="q-px-md">
    <q-table
      :pagination="pagination"
      class="issues"
      :rows="rows"
      flat
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td style="width: 5%">
            <q-btn
              size="sm"
              outline
              color="green"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'expand_less' : 'done'"
            />
          </q-td>
          <q-td key="name" class="text-center" :props="props"> Hi </q-td>
          <q-td key="calories" :props="props"> 1/08/2022 </q-td>
          <q-td key="fat" style="width: 20%" :props="props"
            >tobiikupolati@gmail.com
          </q-td>
          <q-td key="carbs" class="text-" style="width: 20%" :props="props">
            Bag, shoe, face, cap(2)
          </q-td>
          <q-td key="order" class="text-" style="width: 20%" :props="props">
            Bag, shoe, face, cap(2)
          </q-td>
        </q-tr>
        <q-tr class="expansion_item" v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="row">
              <div class="text-left q-px-md">
                <div class="row q-my-xs">
                  <div class="text-bold">Fullname:</div>
                  <div class="q-ml-sm">Lorem Dude</div>
                </div>

                <div class="row q-my-xs">
                  <div class="text-bold">Email:</div>
                  <div class="q-ml-sm">Lorem Dude</div>
                </div>

                <div class="row q-my-xs">
                  <div class="text-bold">Role:</div>
                  <div class="q-ml-sm">Lorem Dude</div>
                </div>

                <div class="row q-my-xs items-center">
                  <div class="text-bold">Dispute with:</div>
                  <div class="q-ml-sm">
                    Lorem Dude
                    <q-btn
                      icon="visibility"
                      size="0.6rem"
                      round
                      flat
                      color="primary"
                      class="q-ml-sm"
                    />
                  </div>
                </div>

                <div class="row q-my-xs">
                  <div class="text-bold">Dispute description:</div>
                  <div class="q-ml-sm message_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem molestias quo explicabo ut, placeat neque
                    vero dolor adipisci, doloremque officiis quod incidunt,
                    dolorum eius perferendis repellat soluta sapiente cumque.
                    Ratione. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Exercitationem molestias quo explicabo ut, placeat
                    neque vero dolor adipisci, doloremque officiis quod
                    incidunt, dolorum eius perferendis repellat soluta sapiente
                    cumque. Ratione.
                  </div>
                </div>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "",
    align: "center",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    label: "",
    field: "calories",
  },
  {
    name: "fat",
    label: "",
    align: "center",
    field: "fat",
  },
  { name: "carbs", label: "", align: "center", field: "carbs" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

export default {
  setup() {
    return {
      columns,
      rows,
      pagination,
    };
  },
};
</script>

<style scoped>
.message_text {
  width: 80vw;
}
.expansion_item {
  /* background: red;
  white-space: normal; */
}
</style>
