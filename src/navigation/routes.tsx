import type { ComponentType, JSX } from 'react';

import {
  ClipboardCheck,
  Gamepad2,
  House,
  Trophy,
  UsersRound,
} from 'lucide-react';
import { FriendsPage } from '@/pages/friends';
import { LeaderBoardPage } from '@/pages/leaderboard';
import { TasksPage } from '@/pages/tasks';
import { IndexPage } from '@/pages/IndexPage';
import { GamePage } from '@/pages/game';
import { Task } from '@/shared/icons/task';
import { Cool } from '@/shared/icons/cool';
import { Server } from '@/shared/icons/server';
import { Award } from '@/shared/icons/award';

export interface Route {
  path: '/' | '/tasks' | '/game' | '/leaders' | '/friends';
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
  styles?: string;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage, title: 'Home', icon: <Server /> },
  {
    path: '/tasks',
    Component: TasksPage,
    title: 'Tasks',
    icon: <Task />,
  },
  {
    path: '/game',
    Component: GamePage,
    title: 'Game',
    icon: <Gamepad2 />,
  },
  {
    path: '/leaders',
    Component: LeaderBoardPage,
    title: 'Leaders',
    icon: <Award />,
  },
  {
    path: '/friends',
    Component: FriendsPage,
    title: 'Friends',
    icon: <Cool />,
  },
];
