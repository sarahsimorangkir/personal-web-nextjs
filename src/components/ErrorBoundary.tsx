import React, { Component, ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface Props {
  fallback: ReactNode;
  children: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  static state = {
    hasError: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log("masuk fallback")
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
