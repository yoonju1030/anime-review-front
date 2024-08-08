<template>
    <v-container fluid>
        <v-card
        variant="text"
        :title="id"
        subtitle="작성 댓글 모음">
        </v-card>
        <v-card
        title="reviews">
        <div class="ma-2" 
        v-for="review in reviews.slice((page-1)*5, page*5)"
        :key="review">
            <v-card
            variant="text"
            :title="review.name"
            :subtitle="review.time"
            @click="move(review.id)"
            >
                <v-card-text class="bg-surface-light pt-4">{{review.content}}</v-card-text>
            </v-card>                            
        </div>
        <br/>
            <div class="ma-2">
                <v-pagination
                    v-model="page"
                    :length="lengthOfPage">
                </v-pagination>
            </div>
        
        </v-card>
    </v-container>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
    setup() {
        const router = useRouter()
        const store = useStore()
        const id = store.getters["userStore/getUserId"]
        const reviews = ref([])
        const page = ref(1)
        const lengthOfPage = ref(0)
        onMounted(() => {
            reviews.value = [
                {name: "id-01", id: "001", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-02", id: "002", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-03", id: "003", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-04", id: "004", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-05", id: "005", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-06", id: "006", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-07", id: "007", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-08", id: "008", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-09", id: "009", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-10", id: "010", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-11", id: "011", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-12", id: "012", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-13", id: "013", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-14", id: "014", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-15", id: "015", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-16", id: "016", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-17", id: "017", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {name: "id-18", id: "018", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
            ]
            lengthOfPage.value = (reviews.value.length / 5) + 1
        })

        const move = (id) => {
            router.push(`/anime/${id}`)
        }
       return {
        id,
        reviews, lengthOfPage,
        page,
        move
       } 
    },
})
</script>
