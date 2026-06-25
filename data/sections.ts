import { Experience, Profile, Skills, Info, Education } from "@/components";

export const sections = [
  { id: "profile", label: "Profile", icon: "fa-user", component: Profile },
  { id: "experience", label: "Experience", icon: "fa-briefcase", component: Experience },
  { id: "projects", label: "Projects", icon: "fa-suitcase", component: Info },
  { id: "skills", label: "Skills", icon: "fa-code", component: Skills },
  {
    id: "education",
    label: "Education",
    icon: "fa-book-bookmark",
    component: Education,
  },
];
