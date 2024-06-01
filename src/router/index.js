import {createRouter, createWebHistory} from 'vue-router';
import test from "./test"
import auth from "./auth"
import anime from "./anime"

const routes=[
    ...test,
    ...auth,
    ...anime
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;