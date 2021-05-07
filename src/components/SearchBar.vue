<template>
  <div class="container">
      <div class="search-container">
            <input v-model.trim="value"
                type="text"
                placeholder="search"
                @keyup.enter="search"
                class="search-input"
            >
            <div class="label-container">
                <Label v-for="item in labelArray" :key="item" @click.native="setSearchValue(item)" :label="item"></Label>
            </div>

            <div v-if="searchRes.length > 0">
                <ResItem v-for="res in searchRes" :key="res.title" :res="res"></ResItem>
            </div>

            <div class="place-image" v-else-if="searchRes.length === 0">
                占位图
            </div>

      </div>
  </div>
</template>

<script>
import Axios from "axios";
import Label from "../components/Label.vue";
import ResItem from "../components/ResItem.vue";
export default {
    name: 'SearchBar',
    components: {
        Label,
        ResItem,
    },
    data() {
        return {
            value: '',
            labelArray: ['Languages', 'Build', 'Design', 'Cloud'],
            searchRes: [],
        }
    },
    methods: {
        search(e) {
            console.log('search', e.target.value);
            let value = e.target.value;
            let url = `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${value}`
            Axios.get(url).then(res => {
                console.log(res.data);
                if (res.status === 200) {
                    this.searchRes = res.data;
                }
                
            })
        },
        setSearchValue(data) {
            console.log(data);
            this.value = data;
        }
    }
}
</script>

<style>
body {
    background-color: #E5E5E5;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
}
.search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 690px;
    height: 600px;
    /* max-height: 00px; */
    border-radius: 24px;
    padding: 24px;
}
.search-input {
    width: 642px;
    min-height: 74px;
    border: 2px solid #6833FF;
    border-radius: 12px;
    outline: 0;
}
.label-container {
    display: flex;
    width: 642px;
}
.place-image {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #000000;
}

</style>