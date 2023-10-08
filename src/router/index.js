import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LegalityView from "../views/LegalityView.vue";
import ServicesView from "../views/ServicesView.vue";
import GalleryView from "../views/GalleryView.vue";
import ContactView from "../views/ContactView.vue";
import ApplicationView from "../views/ApplicationView.vue";
import InquireView from "../views/InquireView.vue";
import ViewJobs from "../views/jobs/ViewJobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import ApplyNow from "../views/jobs/ApplyNow.vue";

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
      path: "/jobs",
      name: "jobs",
      component: ViewJobs,
    },
    {
      path: "/jobs/get/:uuid",
      name: "job-details",
      component: JobDetails,
      props: true,
    },
    {
      path: "/application/:agencyId/job/:uuid", // Include agencyId in the route
      name: "applyNow",
      component: ApplyNow,
      props: (route) => ({
        uuid: route.params.uuid,
        agencyId: route.params.agencyId,
      }), // Pass uuid and agencyId as props
    },
  ],
});

export default router;
