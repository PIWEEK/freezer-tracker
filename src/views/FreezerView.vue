<template>
  <div class="main-container">
    <!--<div v-if="drawers" class="edit-drawers">Edit drawers</div>-->
    <div v-if="drawers" class="freezer">
      <div class="drawers">
        <div class="drawer-wrapper" v-for="(drawer, index) in drawersArray" :key="drawer">
          <div class="actions">
            <span class="drawer-number">#{{index + 1}}</span>
            <router-link class="add-link" :to="{name: 'freezerForm', params: { drawerId: drawer + 1}}">+ Add item</router-link>
          </div>
          <div v-if="freezer && freezer[index + 1] && freezer[drawer + 1].length" class="drawer">
            <template v-for="(item, index) in freezer[drawer + 1]" :key="index">
              <div :class="`item-wrapper ${item.category} ${isExpired(item) ? 'expired': ''}`" @click="goToDetail(item, drawer + 1)">
              <div :class="`item ${isExpired(item) ? 'opacity': ''}`">
                  <img v-if="item && item.category === 'Vegetables'" alt="Vegetables icon" src="../assets/veggies.svg">
                  <img v-if="item && item.category === 'Meat'" alt="Meat icon" src="../assets/meat.svg">
                  <img v-if="item && item.category === 'Fish'" alt="Fish icon" src="../assets/fish.svg">
                  <img v-if="item && item.category === 'Dessert'" alt="Dessert icon" src="../assets/dessert.svg">
                  <img v-if="item && item.category === 'Dishes'" alt="Dishes icon" src="../assets/dishes.svg">
                  <img v-if="item && item.category === 'Other'" alt="Other icon" src="../assets/other.svg">
                  <div>
                    <span class="name">{{item.name}}</span>
                    <span class="quantity">{{item.quantity}}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <div v-else class="drawer empty">Drawer is empty</div>
        </div>
      </div>
    </div>
    <div v-else class="empty freezer">
      <div class="content">
        <label class="drawers" for="drawers">Number of drawers *</label>
        <input type="number" name="drawers" v-model="drawersForm">
        <button class="btn" @click="saveDrawers()">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  export default {
    data () {
      return {
        drawers: localStorage.getItem('drawers')
        ? +localStorage.getItem('drawers')
        : 0,
        drawersForm: null,
        drawersArray: this.drawers ? Array.from(Array(this.drawers).keys()) : [],
        freezer: localStorage.getItem('freezer')
        ? JSON.parse(localStorage.getItem('freezer'))
        : {},
      }
    },
    beforeMount() {
      this.drawersArray = Array.from(Array(this.drawers).keys())
      this.$store.commit('clearItemDetail')
    },
    methods: {
      saveDrawers() {
        localStorage.setItem('drawers', this.drawersForm)
        this.drawers = this.drawersForm
        this.drawersArray = [...Array(this.drawersForm)]
      },
      goToDetail(item, drawer) {
        this.$store.commit('setItemDetail', { item, drawer })
        this.$router.push({name: 'item'})
      },
      isExpired(item) {
        if (item.expirationDate) {
          const today = new Date().setHours(0,0,0,0);
          const expiration = new Date(item.expirationDate).setHours(0,0,0,0);
          return expiration  < today;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .edit-drawers {
    color: #3f63c8;
    font-weight: 700;
    text-align: right;
  }

  .freezer {
    display: flex;
    flex-direction: column;
    block-size: calc(100vh - 155px);
    border: 3px solid #dadfe9;
    border-radius: 10px;
    margin-inline: auto;
    margin-block-start: 10px;
    overflow: auto;

    &.empty {
      border: 3px dashed #dadfe9;
      justify-content: center;
      margin-block-start: 25px;
    }
  }

  .content {
    padding-inline: 20px;

    button {
      inline-size: 100%;
      margin-block-start: 20px;
    }
  }

  .actions {
    color: #3f63c8;
    display: flex;
    justify-content: space-between;
    margin-block-end: 5px;

    & .add-link {
      color: #3f63c8;
      font-weight: 700;
      text-align: right;
      text-decoration: none;
    }
  }

  .drawer-wrapper {
    border-bottom: 3px solid #dadfe9;
    padding: 20px;
  }

  .drawer {
    align-items: center;
    border: 1px solid #dadfe9;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    min-block-size: 155px;
    max-block-size: 155px;
    overflow-x: auto;
    padding: 10px;

    &.empty {
      border: 1px dashed #b1b2b5;
      color: #b1b2b5;
      justify-content: center;
    }
  }

  .item-wrapper {
    block-size: 130px;
    border-radius: 3px;
    box-sizing: border-box;
    color: #000000;

    margin-inline-end: 10px;
    inline-size: 95px;
    min-inline-size: 95px;
    padding: 10px;
    position: relative;
    text-decoration: none;

    &.expired:before {
      align-items: center;
      background-color: rgb(255 255 255 / 30%);
      block-size: 100%;
      content: url("../assets/skull.svg");
      display: flex;
      font-weight: 700;
      inline-size: 100%;
      justify-content: center;
      left: 0;
      opacity: 100%;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    & .item {
      display: grid;
      grid-template-rows: 65px 1fr;
    }

    & .opacity {
      opacity: 30%;
    }

    & img {
      align-self: center;
      justify-self: center;
      padding: 5px;
      transform: scale(0.95);
    }

    &.Vegetables {
      background-color: #c4ddb3;
    }
    &.Meat {
      background-color: #f8c9c9;
    }
    &.Fish {
      background-color: #acdddb;
    }
    &.Dessert {
      background-color: #e2a7d7;
    }
    &.Dishes {
      background-color: #ffd0b5;
    }
    &.Other {
      background-color: #ebf18b;
    }

    & .name, .quantity {
      font-size: 12px;
      display: block;
      font-weight: 600;
      text-align: left;
    }

    & .name {
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      }
  }
</style>