import {
  Component,
  FC,
  type ComponentType,
  type GetDerivedStateFromError,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import Duck from "@/shared/assets/duck_cry.png";
import { Button, Text } from "@telegram-apps/telegram-ui";
import { Typography } from "./typography";

export interface ErrorBoundaryProps extends PropsWithChildren {
  fallback?: ReactNode | ComponentType<{ error: unknown }>;
}

interface ErrorBoundaryState {
  error?: unknown;
}

export const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div className="w-full h-screen flex items-center justify-center flex-col">
    <img src={Duck} alt="Crying duck :(" className="w-32" />
    <Typography variant={"h5"} className="text-special-red font-bold">
      {error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : JSON.stringify(error)}
    </Typography>
  </div>
);

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {};

  // eslint-disable-next-line max-len
  static getDerivedStateFromError: GetDerivedStateFromError<
    ErrorBoundaryProps,
    ErrorBoundaryState
  > = (error) => ({ error });

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const {
      state: { error },
      props: { fallback: Fallback, children },
    } = this;

    return "error" in this.state ? (
      typeof Fallback === "function" ? (
        <Fallback error={error} />
      ) : (
        Fallback
      )
    ) : (
      children
    );
  }
}
