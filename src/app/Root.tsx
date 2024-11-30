import { SDKProvider, useLaunchParams } from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC, useEffect, useMemo } from 'react';

import {
  ErrorBoundary,
  ErrorBoundaryError,
} from '@/shared/ui/ErrorBoundary.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';
import { AppState } from './ui/app-state';

const queryClient = new QueryClient();

const Inner: FC = () => {
  const debug = useLaunchParams().startParam === 'debug';
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider acceptCustomStyles debug={debug}>
        <AppState>
          <App />
        </AppState>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <QueryClientProvider client={queryClient}>
      <Inner />
    </QueryClientProvider>
  </ErrorBoundary>
);
