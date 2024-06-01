<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="Animes" value="anime" @click="move('/')"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="My Page" value="mypage" @click="move('/mypage')"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Sign In" value="signin"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Sign Out" value="signout"></v-list-item>
          
        </v-list>
        
      </v-navigation-drawer>
      <v-main>
        <router-view/>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
      const router = useRouter()
      const move = (path) => {
        router.push({path: path})
      }
      return {
        move
      }
    },
})
</script>
