import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/userStore"; // Import Pinia store
import AuthPage from "../views/AuthPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path: "/auth",
    name: "AuthPage",
    component: AuthPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  // Ensure user data is loaded once
  if (!userStore.token) {
    userStore.loadUser();
  }

  // If the route requires authentication and the user is not authenticated, redirect to /auth
  if (to.meta.requiresAuth && !userStore.token) {
    next("/auth");
  }
  // If the user is authenticated and tries to access public pages, redirect to /dashboard
  else if (
    !to.meta.requiresAuth &&
    userStore.token &&
    (to.path === "/auth" || to.path === "/signup")
  ) {
    next("/dashboard");
  }
  // Allow access to the route
  else {
    next();
  }
});

export default router;
