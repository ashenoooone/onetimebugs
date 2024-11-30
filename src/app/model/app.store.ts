import { createStore } from 'zustand';
import { AppStateType, AppStoreType } from './types';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from '@/shared/utils';

const appStoreBase = createStore<AppStoreType>()(
  immer((set) => ({
    appState: 'default',
    errorMessage: '',
    setErrorMessage: (message: string) =>
      set((state) => {
        state.errorMessage = message;
      }),
    setAppState: (newState: AppStateType) =>
      set((state) => {
        state.appState = newState;
      }),
  })),
);

export const appStore = createSelectors(appStoreBase);
