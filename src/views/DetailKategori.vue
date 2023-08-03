<template>
  <div v-if="data.length == 0"> 
  <h1> Produk tidak tersedia</h1>
  </div>
  <div v-else>
  <h1>Kategori {{ detail.nama }}</h1>
  <div class="flex-container">
      <div v-for="produk in data" :key="produk.id" class="card">
        <img class="img" :src="getImgSrc(produk.img)" alt="Category image">
      <router-link class="container" :to="{ name : 'Detail', params:{id_produk : produk.id}}">
          <h4>{{produk.nama }}</h4>
      </router-link>
  </div>
  </div>
</div>
</template>
<script>
import { produk } from '../assets/produk';
import { kategori } from '../assets/kategori';


export default {
  props: [
      "id_kategori",
  ],
  setup(props){
    
      const detail = kategori["kategori"].find(function(item) {
          return item.id == props.id_kategori
          
      });
      const data = produk["produk"].filter(function(a){
          return detail.id == a.id_kategori
          
      });
      const getImgSrc = (imgFileName) => {
        return '../src/assets/img/' + imgFileName + '';
      }
      
      
      return{
          detail,
          data,
          getImgSrc
          

      }
  }
}
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
h1, h4{
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