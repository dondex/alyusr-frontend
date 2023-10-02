import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LegalityView from "../views/LegalityView.vue";
import ServicesView from "../views/ServicesView.vue";
import GalleryView from "../views/GalleryView.vue";
import ContactView from "../views/ContactView.vue";
import ApplicationView from "../views/ApplicationView.vue";
import InquireView from "../views/InquireView.vue";
import AchivementsView from "../views/AchivementsView.vue";
import EventsView from "../views/EventsView.vue";
import StaffView from "../views/StaffView.vue";
import OfficeView from "../views/OfficeView.vue";
import OthersView from "../views/OthersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/legality",
      name: "legality",
      component: LegalityView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/application",
      name: "application",
      component: ApplicationView,
    },
    {
      path: "/inquire",
      name: "inquire",
      component: InquireView,
    },
    {
      path: "/achievements",
      name: "achievements",
      component: AchivementsView,
    },
    {
      path: "/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/staff",
      name: "staff",
      component: StaffView,
    },
    {
      path: "/office",
      name: "office",
      component: OfficeView,
    },
    {
      path: "/others",
      name: "others",
      component: OthersView,
    },
  ],
});

export default router;
