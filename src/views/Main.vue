<template>
    <v-item-group selected-class="bg-primary">
    <div class="text-center pa-auto">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn @click="addPage()" style="width: 1200px;" class="mb-7" color="primary">ADD</v-btn>
      </template>

      <v-card class="pr-7">
        <div class="ml-5 mr-5 pa-2">Name of file</div>
        <v-text-field label="Name" style="width: 600px;" v-model="name" class="ml-4" variant="outlined"/>
        <v-card-actions>
          <v-btn color="primary" block @click="closeDialog()">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
      <v-container>
        <v-row>
          <v-col
            v-for="n in pages"
            :key="n"
            cols="12"
            md="4"
          >
            <v-item v-slot="{ isSelected, selectedClass, toggle }">
              <v-card
                :class="['d-flex align-center', selectedClass]"
                dark
                height="200"
                @click="this.$router.push('login');"
              >
                <div
                  class="text-h3 flex-grow-1 text-center"
                >
                  {{ isSelected ? 'Selected' : n.name }}
                </div>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </template>
  <script>
    export default {
        data: () => ({
           number: 0,
           text: 'TEST',
           pages: [],
           dialog: false,
           name: ''
        }),
        methods: {
            addPage() {
                this.dialog = !this.dialog
            },
            closeDialog() {
                const page = {
                    name: this.name,
                }
                this.pages.push(page);
                this.dialog = !this.dialog
            },            
        }
    }
  </script>
