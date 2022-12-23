<template>
  <div class="main-container">
    <div class="close" @click="close()">
      <img alt="back icon" src="../assets/back.svg">
    </div>
    <div class="wrapper-info">
      <div class="main-info">
        <div class="col1">
          <p class="name">{{item.name}}</p>
          <p v-if="item.description" class="description">{{item.description}}</p>
        </div>
        <div class="col2">
          <img v-if="item.category.toLowerCase() === 'vegetables'" alt="Vegetables icon" src="../assets/veggies.svg">
          <img v-if="item.category.toLowerCase() === 'meat'" alt="Meat icon" src="../assets/meat.svg">
          <img v-if="item.category.toLowerCase() === 'fish'" alt="Fish icon" src="../assets/fish.svg">
          <img v-if="item.category.toLowerCase() === 'dessert'" alt="Dessert icon" src="../assets/dessert.svg">
          <img v-if="item.category.toLowerCase() === 'dishes'" alt="Dishes icon" src="../assets/dishes.svg">
          <img v-if="item.category.toLowerCase() === 'other'" alt="Other icon" src="../assets/other.svg">
        </div>
      </div>
      <div class="additional-info">
        <div class="block" v-if="item.quantity">
          <img alt="icon" src="../assets/quantity.svg">
          <div class="additional-text">
            <p class="title">Quantity</p>
            <p class="text">{{item.quantity}}</p>
          </div>
        </div>
        <div class="block" v-if="item.freezingDate">
          <img alt="icon" src="../assets/freezing.svg">
          <div class="additional-text">
            <p class="title">Freezing date</p>
            <p class="text">{{item.freezingDate}}</p>
          </div>
        </div>
        <div class="block" v-if="item.expirationDate">
          <img alt="icon" src="../assets/expiration.svg">
          <div class="additional-text">
            <p class="title">Expiration date</p>
            <p class="text">{{item.expirationDate}}</p>
          </div>
        </div>
        <div class="block" v-if="item.category">
          <img alt="icon" src="../assets/category.svg">
          <div class="additional-text">
            <p class="title">Category</p>
            <p class="text">{{item.category}}</p>
          </div>
        </div>
        <div class="block" v-if="item.drawer">
          <img alt="icon" src="../assets/drawer.svg">
          <div class="additional-text">
            <p class="title">Drawer</p>
            <p class="text">{{item.drawer}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="btn" @click="editItem()">Edit</button>
      <button class="btn delete" @click="deleteItem()">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">

  export default {
    data () {
      return {
        item: this.$store.state.itemDetail,
        drawer: this.$store.state.currentDrawer
      }
    },
    methods: {
      close() {
        this.$store.commit('clearItemDetail')
        this.$router.push({name: 'freezer'})
      },
      editItem() {
        this.$router.push({name: 'freezerForm', params: { drawerId: this.drawer}});
      },
      deleteItem() {
        let freezer = JSON.parse(localStorage.getItem('freezer'));
        const index = freezer[this.drawer].findIndex(it => it.id === this.item.id);
        freezer[this.drawer].splice(index, 1);
        localStorage.setItem('freezer', JSON.stringify(freezer))
        this.$store.commit('clearItemDetail')
        this.$router.push({name: 'freezer'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close {
    text-align: left;
    font-weight: 700;
  }

  .wrapper-info {
    border: 1px solid #3f63c8;
    border-radius: 10px;
    margin-block-start: 15px;
    padding-inline: 20px;
    padding-block: 5px 20px;
  }

  .main-info {
    display: grid;
    grid-template-columns: 78% 18%;
    grid-gap: 4%;
    margin-block-start: 20px;


    & .name {
      font-size: 18px;
      font-weight: 700;
    }

    & .description {
      font-size: 14px;
    }
  }

  .additional-info {
    margin-block-start: 25px;
  }

  .block {
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-gap: 15px;
    margin-block-start: 15px;

    & .title {
      font-size: 14px;
      font-weight: 700;
    }

    & img {
      justify-self: center;
      align-self: start;
    }

    & .text {
      font-size: 14px;
    }
  }

  .actions {
    margin-block-start: 10px;

    & .btn {
      inline-size: 100%;
      margin-block-start: 10px;

      &.delete {
        background-color: white;
        border: 1px solid #3f63c8;
        color: #3f63c8;
      }
    }
  }
</style>
