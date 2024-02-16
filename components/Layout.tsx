import { ReactNode } from "react";

type LayoutProps = { children?: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <div className="bubble"></div>
      <div className="main">{children}</div>
    </div>
  );
}
