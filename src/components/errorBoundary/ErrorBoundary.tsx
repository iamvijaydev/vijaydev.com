import { PropsWithChildren, Component, ReactNode } from "react";

type Props = {
  fallback?: ReactNode;
}

type State = {
  hasError: boolean;
}

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.warn(error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>An unexpected error happened!</div>;
    }

    return this.props.children;
  }
}