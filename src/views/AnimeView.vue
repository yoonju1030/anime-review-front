<template>
    <v-container fluid>
        <h1>{{ animeInfo.name }}</h1>
        <br/>
        <v-row>
            <v-col cols="3">
                <v-img :src="animeInfo.image">
                </v-img>
            </v-col>
            <v-col cols="9">
                <v-card variant="text">
                        <v-chip 
                        v-for="tag in animeInfo.tags"
                        :key="tag"
                        class="ma-2"
                        variant="outlined">
                            {{tag}}
                        </v-chip>
                        <br/>
                        <div class="ma-2">
                            <v-list lines="three">
                                <v-list-item
                                    v-for="n in infoView"
                                    :key="n"
                                    :title="n.key"
                                    :subtitle="n.value"
                                ></v-list-item>
                            </v-list>
                        </div>
                </v-card>
            </v-col>    
        </v-row>
        <br/>
        <v-dialog
        v-model="dialog"
        width="auto"
        >
        <v-card
            max-width="400"
            prepend-icon="mdi-update"
            text="Your application will relaunch automatically after the update is complete."
            title="Update in progress"
        >
            <template v-slot:actions>
            <v-btn
                class="ms-auto"
                text="Ok"
                @click="dialog = false"
            ></v-btn>
            </template>
        </v-card>
        </v-dialog>
        <v-card variant="outlined">
            <div class="ma-2" align="center" justify="center"><h2>Review</h2></div>
                    <v-row align="center" justify="center">
                        <v-col cols="10">
                            <v-textarea
                            label="comment"
                            row-height="20"
                            rows="2"
                            variant="filled"
                            no-resize
                            ></v-textarea>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn 
                            icon="mdi-plus" 
                            size="small"
                            @click="dialog = true"></v-btn>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="11">
                            <div class="ma-2" 
                            v-for="review in reviews.slice((page-1)*5, page*5)"
                            :key="review">
                                <v-card
                                :title="review.id"
                                :subtitle="review.time"
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
                        </v-col>
                    </v-row>
        </v-card>
    </v-container>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from "vue-router";
import { postAnime } from "../api/anime"; 
export default defineComponent({
    setup() {
        const route = useRoute()
        const id = ref('te')
        const tags = ref([])
        const animeInfo = ref({})
        const infoView = ref([])
        const reviews = ref([])
        const page = ref(1)
        const lengthOfPage = ref(0)
        const dialog = ref(false)
        onMounted(async () => {
            id.value = route.path.split("/")[2]
            let result = await postAnime({"id": id.value})
            console.log(result)
            animeInfo.value = result
            tags.value = animeInfo.value.tags
            Object.keys(animeInfo.value).forEach((k) => {
                if (k !== "image" & k!== "tags" & k!=="name") {
                    let value = animeInfo.value[k].toString()
                    infoView.value.push({key: k, value: value})
                }
            })

            reviews.value = [
                {id: "id-01", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-02", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-03", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-04", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-05", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-06", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-07", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-08", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-09", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-10", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-11", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-12", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-13", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-14", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-15", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-16", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-17", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-18", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-19", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-20", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-21", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
                {id: "id-22", content: "진짜 대박 재미나다", time: "yyyy-mm-dd hh:mm:ss"},
            ],
            lengthOfPage.value = (reviews.value.length / 5) + 1
        })
        return {
            id,
            tags,
            animeInfo,
            infoView,
            reviews,
            page,
            lengthOfPage,
            dialog
        }
    },
})
</script>
