<template>
  <div class="q-px-md q-py-lg">
    <div>
      <div class="text-h6">General Information</div>

      <div class="q-mt-md">
        <div class="q-my-xs text-subtitle2 text-bold">FullName</div>
        <q-input class="input_field" placeholder="shop name" outlined dense />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">Email address</div>
        <q-input class="input_field" placeholder="shop name" outlined dense />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">Phone</div>
        <q-input class="input_field" placeholder="shop name" outlined dense />
      </div>
    </div>

    <q-separator class="q-my-xl" />

    <div>
      <div class="text-h6">Change of Password</div>

      <div class="q-mt-md">
        <div class="q-my-xs text-subtitle2 text-bold">Old Password</div>
        <q-input
          class="input_field"
          placeholder="Old password"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">New Password</div>
        <q-input
          class="input_field"
          placeholder="New password"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">Retype New Password</div>
        <q-input
          class="input_field"
          placeholder="New password"
          outlined
          dense
        />
      </div>
    </div>

    <div class="q-mt-lg row">
      <q-btn
        label="Save changes "
        class="bordered-btn"
        color="primary"
        no-caps
        size="1.1rem"
      />
      <q-space />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input_field {
  width: 50%;
}
@media screen and (max-width: 1200px) {
  .input_field {
    width: 100%;
  }
}
</style>
