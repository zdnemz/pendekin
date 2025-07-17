"use client";

import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function NotFound() {
  const router = useRouter();

  return (
    <RootLayout>
      <section className="flex flex-col items-center justify-center min-h-screen text-center space-y-2">
        <h1 className="text-4xl font-bold">
          <span className="text-background bg-secondary px-1 -mr-1">404</span>{" "}
          Not Found
        </h1>
        <p className="text-sm text-muted-foreground">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button
          className="flex items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft /> <span>Go to Home</span>
        </Button>
      </section>
    </RootLayout>
  );
}
