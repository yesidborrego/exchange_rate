<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view/>
        <!--Loading -->
        <v-dialog
          v-model="loading.estado"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="primary"
            dark
          >
            <v-card-text>
              <span v-text="loading.title" class="white--text"></span>
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0 mt-3"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  export default {
    name: 'App',
    computed: {
      ...mapState(['loading']),
    },
    methods: {
      ...mapActions(['activeLoading'])
    }
  };
</script>
