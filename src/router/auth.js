import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/MainView.vue";

const routes = [    
    {path: '/', name: "Home", component: MainView},
    {path: '/login', name: "Login", component: LoginView},
]

export default routes;