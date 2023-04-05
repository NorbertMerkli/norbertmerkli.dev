import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  title: string;
};

export const PageSection = ({ title, children }: PageSectionProps) => (
  <section className="page-section">
    <h3>{title}</h3>
    {children}
  </section>
);
