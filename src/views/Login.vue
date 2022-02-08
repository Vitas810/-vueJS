<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign In</h1>
            <p class="text-xs-center">
              <router-link :to="{name: 'register'}"
                >Need an account ?</router-link
              >
            </p>
            <mcv-validation-errors
              v-if="validationErrors"
              :validation-errors="validationErrors"
            />
            <form @submit.prevent="onSubmit">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Email"
                  v-model="email"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="password"
                  v-model="password"
                />
              </fieldset>
              <button
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="isSubmiting"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '@/components/ValidationErrors'
import {actionsTypes} from '@/store/modules/auth'
import {mapState} from 'vuex'

export default {
  name: 'McvLogin',
  components: {
    McvValidationErrors,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      isSubmiting: (state) => state.auth.isSubmiting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionsTypes.login, {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({name: 'home'})
        })
    },
  },
}
</script>
