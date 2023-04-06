import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  title: string;
};

export const PageSection = ({ title, children }: PageSectionProps) => {
  return (
    <section className="px-6 py-12">
      <h3 className="mb-16 text-center uppercase text-darkgray dark:text-secondary">
        {title}
      </h3>
      {children}
    </section>
  );
};
