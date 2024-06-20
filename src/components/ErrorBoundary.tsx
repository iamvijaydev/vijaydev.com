import { Component } from "react";

export const Fallback = () => <span>Error!</span>;

export class ErrorBoundary extends Component<any, any> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Fallback />
    }

    return this.props.children;
  }
}
