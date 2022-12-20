<template>
  <HeaderComponent/>
  <div class="form-wrapper">
    <router-link class="close" to="/freezer">X</router-link>
    <div class="form">
      <input type="text" v-model="form.name" placeholder="Product name*">
      <input type="text" v-model="form.descript" placeholder="Description">
      <input type="text" v-model="form.quantity" placeholder="Quantity">
      <input type="date" v-model="form.freezingDate" placeholder="Freezing date">
      <input type="date" v-model="form.expirationDate" placeholder="Expiration date">
      <select v-model="form.category">
        <option disabled value="">Category*</option>
        <option>Vegetables</option>
        <option>Fruits</option>
        <option>Meat</option>
        <option>Fish</option>
        <option>Dessert</option>
        <option>Dishes</option>
        <option>Other</option>
      </select>
      <button class="btn" @click="saveItem()">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from "vue";
  import HeaderComponent from "../components/HeaderComponent.vue";

  export default {
    data () {
      return {
        form: {
          name: '',
          description: '',
          quantity: '',
          freezingDate: '',
          expirationDate: '',
          category: null
        }
      }
    },
    components: {
      HeaderComponent
    },
    setup() {
      const route = useRoute()

      const drawerNum = computed(() => route.params.drawerNum);
      return {
        drawerNum,
      };
    },
    methods: {
      saveItem() {
        // here we have to check if the drawer exists, also if we are editing an item
        localStorage.setItem('freezer', {[this.drawerNum]: [this.form]})
      }
    }
  }
</script>