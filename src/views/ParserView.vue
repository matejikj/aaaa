<script lang="ts">
import { computed, ref, defineComponent } from "vue";
import axios from "axios";
import Papa from "papaparse";
import { saveAs } from "file-saver";

export default defineComponent({
  name: "parser",
  data() {
    return {
      headers: [] as [],
      firstLines: [] as [],
      selectedColumns: [] as [],
    };
  },
  methods: {
    fileChanged(e) {
      // this.file = e.target.files[0]
      Papa.parse(e.target.files[0], {
        header: true,
        step: function (row) {
          if (this.headers.length === 0) {
            row.meta.fields.forEach((element) => {
              this.headers.push({
                text: element,
                value: element,
              });
            });
          }
          if (this.firstLines.length < 5) {
            this.firstLines.push(row.data);
          }
        }.bind(this),
        // completed: function (res) {
        //   // this.columns = this.headers.map((item) => {
        //   //   return item.text;
        //   // });
        // }.bind(this),
      });
    },
  },
});

// function fileChanged() {

// }
</script>



<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-file-input
        show-size
          label="Select dataset"
          @change="fileChanged"
          v-model="file"
          truncate-length="15"
        ></v-file-input>
      </v-col>
      <v-col cols="12" md="6"> </v-col>
      <!-- <v-col cols="12" md="3">
        <v-file-input
          label="Load config file"
          @change="configFileChanged"
          v-model="configFile"
          truncate-length="15"
        ></v-file-input>
      </v-col> -->
    </v-row>
    <!-- <v-row>
      <v-col cols="12" md="12">
        <v-data-table
          :headers="headers"
          :items="firstLines"
          hide-default-footer
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12" md="3">
        <v-combobox
          v-model="selectedColumns"
          :items="headers.map((item) => item.text)"
          label="I use chips"
          multiple
          chips
        ></v-combobox>
      </v-col>
      <v-col cols="12" md="9"> </v-col>
    </v-row>
  </v-container>
</template>
