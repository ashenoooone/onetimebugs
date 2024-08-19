import type { ComponentType, JSX } from "react";

import { IndexPage } from "@/pages/IndexPage/IndexPage";
import { ClipboardCheck, House, Trophy, UsersRound } from "lucide-react";
import { FriendsPage } from "@/pages/friends";
import { LeaderBoardPage } from "@/pages/leaderboard";
import { TasksPage } from "@/pages/tasks";

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
    Component: TasksPage,
    title: "Tasks",
    icon: <ClipboardCheck />,
  },
  {
    path: "/leaders",
    Component: LeaderBoardPage,
    title: "Leaders",
    icon: <Trophy />,
  },
  {
    path: "/friends",
    Component: FriendsPage,
    title: "Friends",
    icon: <UsersRound />,
  },
];
