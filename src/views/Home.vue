<template>
  <div>
    <!-- 
      flex-nowrap: Clase que no permite que baje un elemento a la siguiente fila si el número de 
      elementos no caben en esa fila.
      si no tiene la clase, el elemento que n quepa en la fila bajará a la siguiente fila.
      Por defecto la fila no trae esa propiedad.
      <v-row class="flex-nowrap"> -->
    <v-row>
      <v-col sm="12">
        <v-card>
          <v-date-picker 
            v-model="date" 
            full-width
            locale="es-co" 
            :min="minYear"
            :max="maxDate"
            @change="getDolar"
          >
          </v-date-picker>
        </v-card>
        <v-card color="secondary" dark>
          <v-card-text class="display-1 white--text text-sm-center">
            <span v-text="`${valueDolar}`"></span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import axios from 'axios';
  import { mapState, mapActions} from 'vuex';
  export default {
    name: 'Home',
    data() {
      return {
        date: new Date().toISOString().substr(0, 10),
        minYear: "1992",
        maxDate: new Date().toISOString().substr(0, 10),
        valueDolar: 0,
      }
    },
    computed: {
      ...mapState(['loading']),
    },
    created() {
      this.getDolar();
    },
    methods: {
      ...mapActions(['activeLoading', 'deactiveLoading']),
      async getDolar() {
        try {
          this.activeLoading({title: 'Loading data...',});
          let URL = `https://www.datos.gov.co/resource/32sa-8pi3.json?vigenciadesde=${this.date}`;
          let dataDolar = await axios.get(URL)
          this.valueDolar = (dataDolar.data.length === 0) ? 'No result' : dataDolar.data[0].valor;
        } catch (error) {
          console.log('error:', error);
        } finally {
          this.deactiveLoading();
        }
      }
    }
  }
</script>
