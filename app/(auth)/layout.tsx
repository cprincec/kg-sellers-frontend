"use client";

import ErrorBoundaryFallbackUI from "../ui/ErrorBoundaryFallbackUI";
import { ErrorBoundary } from "react-error-boundary";
const Layout = ({ children }: { children: React.ReactNode }) => {
    return <ErrorBoundary FallbackComponent={ErrorBoundaryFallbackUI}>{children}</ErrorBoundary>;
};

export default Layout;
