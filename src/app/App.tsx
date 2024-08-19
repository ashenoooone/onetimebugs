import { useIntegration } from "@telegram-apps/react-router-integration";
import {
  bindMiniAppCSSVars,
  bindViewportCSSVars,
  initNavigator,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { type FC, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { routes } from "@/navigation/routes.tsx";
import { Navigation } from "@/shared/ui/navigation.tsx";

export const App: FC = () => {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const viewport = useViewport();

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  useEffect(() => {
    miniApp.setHeaderColor("#141414");
    miniApp.setBgColor("#141414");
  }, []);

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300} exit={false}>
            <Routes location={location}>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Navigation />
      </BrowserRouter>
    </AppRoot>
  );
};
