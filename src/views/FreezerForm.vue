<template>
  <div class="main-container">
    <router-link class="close" to="/freezer">
      <img alt="back icon" src="../assets/back.svg">
    </router-link>
    <div class="form">
      <div v-if="isEmpty" class="error">
        <p>Fill the required fields</p>
      </div>
      <div class="block">
        <label class="before name" for="name">Product name *</label>
        <input type="text" name="name" v-model="form.name" required>
      </div>
      <div class="block">
        <label class="before description" for="descrition">Description</label>
        <input name="description" type="text" v-model="form.description">
      </div>
      <div class="block">
        <label class="before quantity" for="quantity">Quantity</label>
        <input name="quantity" type="text" v-model="form.quantity">
      </div>
      <div class="group">
        <div class="block">
          <label class="before freezing" for="freezing-date">Freezing date</label>
          <input name="freezing-date" type="date" v-model="form.freezingDate" placeholder="Freezing date" :class="{ empty: form.freezingDate === '' }">
        </div>
        <div class="block">
          <label class="before expiration" for="expiration-date">Expiration date</label>
          <input name="expiration-date" type="date" v-model="form.expirationDate" placeholder="Expiration date" :class="{ empty: form.expirationDate === '' }">
        </div>
      </div>
      <div class="block">
        <label class="before category" for="category">Category *</label>
        <select name="category" v-model="form.category" required v-bind:class="{ empty: form.category === null }">
          <option disabled value="null">Choose one</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
          <option value="Fish">Fish</option>
          <option value="Dessert">Dessert</option>
          <option value="Dishes">Dishes</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="block">
        <label class="before drawer" for="drawer">Drawer</label>
        <select name="drawer" v-model="form.drawer" required>
          <option v-for="drawer in drawersArray" :key="drawer" :value="drawer +1" :selected="drawer + 1 === form.drawer">{{drawer + 1}}</option>
        </select>
      </div>
      <button @click="checkForm" class="btn">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        item: this.$store.state.itemDetail,
        form: {
          name: null,
          description: '',
          quantity: '',
          freezingDate: '',
          expirationDate: '',
          category: null,
          drawer: null,
        },
        isEmpty: false,
        drawers: localStorage.getItem('drawers')
        ? +localStorage.getItem('drawers')
        : 0,
        drawersArray: this.drawers ? Array.from(Array(this.drawers).keys()) : []
      }
    },
    beforeMount() {
      if (this.item) {
        this.form = this.item;
      }
      this.drawersArray = Array.from(Array(this.drawers).keys())
      this.form.drawer = this.$route.params.drawerId
    },
    methods: {
      generateUUID() {
        // Public Domain/MIT
        let d = new Date().getTime();//Timestamp
        let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
      },
      checkForm() {
        if (!this.form.name || !this.form.category) {
          this.isEmpty = true;
        } else {
          this.saveItem();
        }
      },
      saveItem() {
        if (this.item) {
          this.editItem();
        }
        else {
          this.newItem();
        }
      },
      editItem() {
        let freezer = JSON.parse(localStorage.getItem('freezer'));
        if (this.$route.params.drawerId !== this.form.drawer) {
          // if the user change the drawer
          //first we remove the item from the old drawer
          const index = freezer[this.$route.params.drawerId].findIndex(it => it.id === this.item.id);
          freezer[this.$route.params.drawerId].splice(index, 1);
          //add the item in the new drawer
           if (freezer[this.form.drawer]) {
             freezer[this.form.drawer].push(this.form)
           } else {
             freezer[this.form.drawer] = [this.form]
           }
        } else {
          let freezerDrawer = freezer[this.form.drawer];
          const index = freezerDrawer.findIndex(it => it.id === this.item.id);
          freezerDrawer[index] = this.form;
        }
        localStorage.setItem('freezer', JSON.stringify(freezer))
        this.$store.commit('clearItemDetail')
        this.$router.push({name: 'freezer'})
      },
      newItem() {
        let freezer = JSON.parse(localStorage.getItem('freezer'));
        this.form.id = this.item ? this.item.id : this.generateUUID();
        if (!freezer) {
          // if there is no freezer init
          freezer = {};
          freezer[this.form.drawer] = [this.form]
        } else {
          if (!freezer[this.form.drawer]) {
            // if there is no drawer init
            freezer[this.form.drawer] = [this.form]
          } else {
            freezer[this.form.drawer].push(this.form)
          }
        }
        localStorage.setItem('freezer', JSON.stringify(freezer))
        this.$store.commit('clearItemDetail')
        this.$router.push({name: 'freezer'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close {
    color: #000000;
    display: block;
    font-weight: 700;
    margin-block-end: 20px;
    text-align: left;
    text-decoration: none;
  }
  .form {
    display: grid;
    grid-gap: 20px;

    & .empty {
      color: #c4bdbd;
    }
    & .name:before {
      content: url('../assets/name.svg');
    }
    & .description:before {
      content: url('../assets/description.svg');
    }
    & .quantity:before {
      content: url('../assets/quantity.svg');
    }
    & .freezing:before {
      content: url('../assets/freezing.svg');
    }
    & .expiration:before {
      content: url('../assets/expiration.svg');
    }
    & .category:before {
      content: url('../assets/category.svg');
    }
    & .drawer:before {
      content: url('../assets/drawer.svg');
    }
    & .before:before {
      margin-inline-end: 5px;
      vertical-align: middle;
    }
  }

  .btn {
    inline-size: 100%;
  }

  .error {
    background-color: #ffc0c0ed;
    border-radius: 3px;
    box-sizing: border-box;
    padding-block: 5px;
    padding-inline: 10px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .group {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
  }
</style>