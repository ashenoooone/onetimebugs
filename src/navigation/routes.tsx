import type { ComponentType, JSX } from "react";

import {
  ClipboardCheck,
  Gamepad2,
  House,
  Trophy,
  UsersRound,
} from "lucide-react";
import { FriendsPage } from "@/pages/friends";
import { LeaderBoardPage } from "@/pages/leaderboard";
import { TasksPage } from "@/pages/tasks";
import { IndexPage } from "@/pages/IndexPage";

export interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
  styles?: string;
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
    path: "/game",
    Component: LeaderBoardPage,
    title: "Game",
    icon: <Gamepad2 />,
    styles: "",
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
