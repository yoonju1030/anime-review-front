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
        <v-card>
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
                            <v-btn icon="mdi-plus" size="small"></v-btn>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="11">
                            <div class="ma-2">
                            <v-list lines="two">
                                <v-list-item
                                    v-for="n in reviews.slice((page-1)*5, page*5)"
                                    :key="n"
                                    :title="n.id"
                                    :subtitle="n.content"
                                ></v-list-item>
                            </v-list>
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
        onMounted(() => {
            id.value = route.path.split("/")[2]
            tags.value = ["성장", "우정", "스포츠"]
            animeInfo.value = {
                name: '주술회전 2기 : 회옥·옥절',
                airYearQuarter: '2023년 3분기',
                contentRating: '15세 이용가',
                content: '최강의 두 사람이, 이제는 돌아갈 수 없는 푸르른 봄날.\r\n2018년 6월, 양면 스쿠나를 자기 몸속에 깃들게 한 이타도리 유지.\r\n2017년 12월, 오리모토 리카의 저주를 푼 옷코츠 유타.\r\n그리고 더 거슬러 올라가서 때는 2006년 봄. 고전 시절의 고죠 사토루와 게토 스구루.\r\n주술사로서 활약하며 어디에도 적수가 없는 두 사람에게, 불사의 술식을 가진 주술계의 주축 텐겐으로부터 의뢰가 도착한다.\r\n의뢰 내용은 두 가지. 텐겐과의 적합자인 성장체(星漿体) 아마나이 리코의 호위와 말소.\r\n두 사람은 주술계의 존속을 위해서 호위 임무를 수행하게 되지만, 거기에 후시구로라는 주술사 킬러가 성장체의 암살을 노리고 개입한다...\r\n후에 최강의 주술사와 최악의 주저사로 불리는 고죠와 게토, 각각 다른 길을 걷게 된 두 사람의 과거가 밝혀진다.',
                ended: true,
                genres: ['판타지', '액션'],
                image: 'https://image.laftel.net/items/thumbs/big/2f950861-92f1-4627-9d01-87881b1404ca.jpg',
                tags: ['성장', '요괴 및 괴물', '이능력', '열혈', '교복', '판타지', '액션', '학교', '마을', '작화 고퀄', '만화 원작', '블루레이 1만장 돌파', '원작 판매량 1000만부 돌파']
            }
            Object.keys(animeInfo.value).forEach((k) => {
                if (k !== "image" & k!== "tags" & k!=="name") {
                    let value = animeInfo.value[k].toString()
                    infoView.value.push({key: k, value: value})
                }
            })

            reviews.value = [
                {id: "id-01", content: "진짜 대박 재미나다"},
                {id: "id-02", content: "진짜 대박 재미나다"},
                {id: "id-03", content: "진짜 대박 재미나다"},
                {id: "id-04", content: "진짜 대박 재미나다"},
                {id: "id-05", content: "진짜 대박 재미나다"},
                {id: "id-06", content: "진짜 대박 재미나다"},
                {id: "id-07", content: "진짜 대박 재미나다"},
                {id: "id-08", content: "진짜 대박 재미나다"},
                {id: "id-09", content: "진짜 대박 재미나다"},
                {id: "id-10", content: "진짜 대박 재미나다"},
                {id: "id-11", content: "진짜 대박 재미나다"},
                {id: "id-12", content: "진짜 대박 재미나다"},
                {id: "id-13", content: "진짜 대박 재미나다"},
                {id: "id-14", content: "진짜 대박 재미나다"},
                {id: "id-15", content: "진짜 대박 재미나다"},
                {id: "id-16", content: "진짜 대박 재미나다"},
                {id: "id-17", content: "진짜 대박 재미나다"},
                {id: "id-18", content: "진짜 대박 재미나다"},
                {id: "id-19", content: "진짜 대박 재미나다"},
                {id: "id-20", content: "진짜 대박 재미나다"},
                {id: "id-21", content: "진짜 대박 재미나다"},
                {id: "id-22", content: "진짜 대박 재미나다"},
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
            lengthOfPage
        }
    },
})
</script>
