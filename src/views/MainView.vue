<template>
    <v-container fluid>
        <h1>アニメ</h1>
        <br/>
        <v-card>
            <v-row>
                <v-col
                v-for="n in list.filter(l => (l.idx < page * 18) & (l.idx >= (page-1) * 18))"
                :key="n"
                cols="12" 
                md="2">
                    <v-card @click="clickAnime(n.id)">
                        <v-img
                        :src="n.Image"
                        height="400"
                        cover
                        ></v-img>
                        <p>{{ n.Name }}</p>
                    </v-card>   
                </v-col>
            </v-row>
            <v-pagination
            v-model="page"
            :length="lengthOfPage">
            </v-pagination>


        </v-card>
    </v-container>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter()
        const list = [
            {idx: 0, id: "000",Name: "주술회전", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 1, id: "001",Name: "귀멸의 칼날", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 2, id: "002",Name: "하이큐", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 3, id: "003",Name: "스파이패밀리", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 4, id: "004",Name: "최애의 아이", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 5, id: "005",Name: "슬램덩크", Image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},
            {idx: 6, id: "006",Name: "주술회전", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 7, id: "007",Name: "귀멸의 칼날", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 8, id: "008",Name: "하이큐", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 9, id: "009",Name: "스파이패밀리", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 10, id: "010", Name: "최애의 아이", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 11, id: "011", Name: "슬램덩크", Image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},
            {idx: 12, id: "012", Name: "주술회전", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 13, id: "013", Name: "귀멸의 칼날", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 14, id: "014", Name: "하이큐", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 15, id: "015", Name: "스파이패밀리", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 16, id: "016", Name: "최애의 아이", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 17, id: "017", Name: "슬램덩크", Image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},
            {idx: 18, id: "018", Name: "주술회전", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 19, id: "018", Name: "귀멸의 칼날", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 20, id: "020", Name: "하이큐", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 21, id: "021", Name: "스파이패밀리", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 22, id: "022", Name: "최애의 아이", Image:"https://thumbnail.laftel.net/items/thumbs/big/16d51a75-8fda-4f9b-939b-d6c1b54408e3.jpg"},
            {idx: 23, id: "023", Name: "슬램덩크", Image:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},
        ]
        
        const page = ref(1)
        const lengthOfPage = ref(0)
        const viewArray = ref(list)

        onMounted(() => {
            lengthOfPage.value = (list.length / 18) + 1
            viewArray.value = list.filter(l => {(l.idx < page.value * 18) & (l.idx >= (page.value-1) * 18)})
        })

        const clickAnime = (id) => {
            router.push({path: `/anime/${id}`})
        }

        return {
            list, page, 
            lengthOfPage, viewArray,
            clickAnime
        }
    }
})

</script>