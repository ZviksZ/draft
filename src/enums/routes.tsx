export enum RoutesPaths {
  home = "/",
  projects = "/projects",
  my_tasks = "/my-tasks",
}

export const Routes = [
  {
    path: RoutesPaths.home,
    name: "Home",
  },
  {
    path: RoutesPaths.projects,
    name: "Projects",
  },
  {
    path: RoutesPaths.my_tasks,
    name: "My tasks",
  },
];
