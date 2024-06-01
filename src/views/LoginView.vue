<template>
  <v-sheet 
  class="bg-deep-purple" 
  height="100%"
  rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          type="password"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const form = ref(false)
        const email = ref(null)
        const password = ref(null)
        const loading = ref(false)
        const onSubmit = () => {
            if (!this.form) {return}
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        }
        const required = (v) => {
            return !!v || 'Field is required'
        }

        return {
            form,
            email,
            password, 
            loading,
            onSubmit,
            required
        }
    },
})
</script>
