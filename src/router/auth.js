import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/MainView.vue";
import MypageView from "@/views/MypageView.vue"

const routes = [    
    {path: '/', name: "Home", component: MainView},
    {path: '/login', name: "Login", component: LoginView},
    {path: '/mypage', name: "MyPage", component: MypageView}
]

export default routes;