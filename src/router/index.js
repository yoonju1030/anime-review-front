import {createRouter, createWebHistory} from 'vue-router';
import test from "./test"
import auth from "./auth"

const routes=[
    ...test,
    ...auth
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;