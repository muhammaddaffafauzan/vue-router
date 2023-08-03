<template>
  <h1>kategori</h1>
  <div class="flex-container">
      <div v-for="kategori in cek" :key="kategori.id" class="card">
        <img class="img" :src="getImgSrc(kategori.img)" alt="Category image">
      <router-link class="container" :to="{ name : 'DetailKategori', params:{id_kategori : kategori.id}}">
          <h4>{{ kategori.nama }}</h4>
      </router-link>
  </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/Kategori';

export default{
  setup(props,context){

      const cek = reactive(kategori["kategori"]);
    
      const getImgSrc = (imgFileName) => {
        return '../src/assets/img/' + imgFileName + '';
      }
      onMounted(() => {
          context.emit("id-menu",5)
      });

      return{
          cek,
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