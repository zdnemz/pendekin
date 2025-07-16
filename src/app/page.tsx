import RootLayout from "@/components/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">
          Short Your Link With{" "}
          <span className="bg-accent text-background px-1 -ml-1">Pendekin</span>
        </h1>
        <p className="text-sm text-muted-foreground">
          Pendekin is a simple URL shortener that allows you to create short
          links easily.
        </p>
      </section>
    </RootLayout>
  );
}
