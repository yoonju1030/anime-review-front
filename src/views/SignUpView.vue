<template>
    <v-sheet 
    class="bg-deep-purple" 
    height="100%"
    rounded>
    <br/>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="id"
            :readonly="loading"
            :rules="[required, checkIdValidation]"
            class="mb-2"
            label="Id"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required, checkValidPassword]"
            class="mb-2"
            type="password"
            label="Password"
            placeholder="Enter your password"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="password2"
            :readonly="loading"
            :rules="[required, checkSamePassword]"
            class="mb-2"
            type="password"
            label="Password check"
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
            Sign Up
          </v-btn>
        </v-form>
        <br/>

      </v-card>
    </v-sheet>
  </template>
  <script>
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
      setup() {
          const form = ref(false)
          const id = ref(null)
          const password = ref(null)
          const password2 = ref(null)
          const loading = ref(false)
          const onSubmit = () => {
              if (!this.form) {return}
              this.loading = true
              setTimeout(() => (this.loading = false), 2000)
          }
          const required = (v) => {
              return !!v || 'Field is required'
          }

          const checkValidPassword = (v) => {
            const reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
            if (!reg.test(v)) {
                return "영문, 숫자 조합 8자리 이상 입력해주세요"
            }
          }

          const checkSamePassword = (v) => {
            if (password.value !== v) {
                return "비밀번호가 일치해야 합니다."
            }
          }

          const checkIdValidation = (v) => {
            if (v.length < 8) {
                return "id는 8자 이상 필요합니다."
            } else {
                // id unique check logic
                // not unique -> return "중복된 Id 입니다."
            }
          }
  
          return {
              form,
              id,
              password, 
              password2,
              loading,
              onSubmit,
              required,
              checkSamePassword,
              checkIdValidation,
              checkValidPassword
          }
      },
  })
  </script>
  