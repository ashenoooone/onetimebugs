import type { ComponentType, JSX } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { ClipboardCheck, House, Trophy, UsersRound } from "lucide-react";

export interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: IndexPage, title: "Home", icon: <House /> },
  {
    path: "/tasks",
    Component: IndexPage,
    title: "Tasks",
    icon: <ClipboardCheck />,
  },
  {
    path: "/leaders",
    Component: IndexPage,
    title: "Leaders",
    icon: <Trophy />,
  },
  {
    path: "/friends",
    Component: IndexPage,
    title: "Friends",
    icon: <UsersRound />,
  },
];
