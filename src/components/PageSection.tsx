import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  id: string;
  title: string;
};

export const PageSection = ({ id, title, children }: PageSectionProps) => {
  return (
    <section
      id={id}
      className="safe-area snap-start scroll-m-0 scroll-p-0 py-12"
    >
      <h3 className="mb-16 text-center uppercase text-darkgray dark:text-secondary">
        {title}
      </h3>
      {children}
    </section>
  );
};
