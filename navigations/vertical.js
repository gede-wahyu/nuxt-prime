export default [
  {
    title: "Dashboard",
    icon: { icon: "pi pi-th-large" },
    to: "dashboard",
    active: true,
  },
  { heading: "Classes" },
  {
    title: "Courses",
    icon: { icon: "pi pi-book" },
    to: "classes-courses",
    badge: {
      value: "4",
      severity: "primary",
    },
  },
  {
    title: "Discussions",
    icon: { icon: "pi pi-comments" },
    to: "classes-discussions",
  },
  {
    title: "Tasks",
    icon: { icon: "pi pi-clipboard" },
    to: "classes-tasks",
    badge: {
      value: "2",
    },
  },
  {
    title: "Schedules",
    icon: { icon: "pi pi-calendar-clock" },
    to: "classes-schedules",
  },
  { heading: "Projects" },
  {
    title: "Projects",
    icon: { icon: "pi pi-briefcase" },
    badge: {
      value: "3",
      severity: "danger",
    },
    children: [
      {
        title: "Projects 1",
        to: "projects-project-1",
      },
      {
        title: "Projects 2",
        to: "projects-projects",
        children: [
          {
            title: "Sub Project 2.1",
            to: "projects-project-2.1",
          },
          {
            title: "Sub Project 2.2",
            to: "projects-project-2.2",
          },
          {
            title: "Sub Project 2.3",
            to: "projects-project-2.3",
          },
        ],
      },
      {
        title: "Projects 3",
        to: "projects-project-3",
      },
    ],
  },
  {
    title: "Teams",
    icon: { icon: "pi pi-users" },
    children: [
      {
        title: "Team 1",
        to: "projects-team-1",
      },
      {
        title: "Team 2",
        to: "projects-team-2",
      },
      {
        title: "Team 3",
        to: "projects-team-3",
      },
      {
        title: "Team 4",
        to: "projects-team-4",
      },
      {
        title: "Team 5",
        to: "projects-team-5",
      },
    ],
  },
  {
    title: "Publications",
    icon: { icon: "pi pi-megaphone" },
    children: [
      {
        title: "Regional",
        to: "projects-publications-regional",
      },
      {
        title: "International",
        to: "projects-publications-international",
      },
    ],
  },
  {
    title: "Achievements",
    icon: { icon: "pi pi-star" },
    to: "projects-achievements",
  },
  { heading: "Reports" },
  {
    title: "Overviews",
    icon: { icon: "pi pi-graduation-cap" },
    to: "reports-overviews",
  },
  {
    title: "Grades",
    icon: { icon: "pi pi-sparkles" },
    to: "reports-grades",
  },
];
