<template>
  <div class="text-h6 row items-center q-mb-md">
    <q-icon name="person" color="grey" class="q-mr-sm" />
    <span>Account Details</span>
  </div>

  <form action="">
    <div class="fullname">
      <div class="q-my-sm">
        <label class="text-grey">First name</label>
        <q-input outlined placeholder="John" />
      </div>

      <div class="q-my-sm">
        <label class="text-grey"> Last name</label>
        <q-input class="full-width" placeholder="Doe" outlined />
      </div>
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Display name</label>
      <q-input class="full-width" placeholder="John Doe" outlined />
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Email address</label>
      <q-input class="full-width" placeholder="johndoe@moms.com" outlined />
    </div>

    <div class="password q-mt-lg">
      <div class="text-subtitle1">Password Change</div>
      <div class="q-my-sm">
        <label class="text-grey">Old Password </label>
        <q-input outlined />
      </div>

      <div class="q-my-sm">
        <label class="text-grey">New Password</label>
        <q-input class="full-width" outlined />
      </div>

      <div class="q-my-sm">
        <label class="text-grey">Retype New Password</label>
        <q-input class="full-width" outlined />
      </div>
    </div>

    <q-btn class="q-my-lg" label="Save changes" color="primary" />
  </form>
</template>

<script>
export default {};
</script>
<style scoped>
.fullname {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
</style>
