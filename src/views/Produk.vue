<template>
  <h1>Produk</h1>
  <div class="flex-container">
    <div v-for="produk in state" :key="produk.id" class="card">
      <img class="img" :src="getImgSrc(produk.img)" alt="Category image">
    <router-link class="container" :to="{ name: 'Detail', params: {id_produk: produk.id}}">
      <h4>{{ produk.nama }}</h4>
      <h3>{{ produk.harga }}</h3>
    </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { produk } from '@/assets/produk';

export default {
  setup(props, context) {
    const state = reactive(produk["produk"])

    onMounted(() => {
      context.emit('id-menu', 4);
    });
    const getImgSrc = (imgFileName) => {
        return '../src/assets/img/' + imgFileName + '';
      }
    return {
      state,
      getImgSrc
    }
  },
};
</script>

<style scoped>
.img{
  width: 100px;
  margin-top: 50px;
  position: sticky;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}
h1{
  text-align: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 10px;
  min-width: 200px;
  cursor: pointer;
  text-align: center;
  border-radius: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-color: black;
}

.container {
  padding: 2px 16px;
  color: black;
  text-decoration: none;
  position: sticky;
}
</style>