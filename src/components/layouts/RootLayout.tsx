import * as React from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode | React.ReactNode[];
  footer?: React.ReactNode | React.ReactNode[];
}

export default function RootLayout({
  children,
  header,
  footer,
}: RootLayoutProps) {
  return (
    <>
      <header className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
        {header}
      </header>
      <main className="first:pt-12 last:pb-12 [&>*]:px-6 [&>*]:sm:px-12 [&>*]:md:px-24 [&>*]:lg:px-36 [&>*]:xl:px-48 [&>*]:2xl:px-60">
        {children}
      </main>
      <footer className="px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
        {footer}
      </footer>
    </>
  );
}
