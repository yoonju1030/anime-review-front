<template>
    <h1>{{ id }}</h1>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from "vue-router";
export default defineComponent({
    setup() {
        const route = useRoute()
        const id = ref('te')
        onMounted(() => {
            id.value = route.path.split("/")[2]
        })
        return {id}
    },
})
</script>
