"use client";

import * as React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Home() {
  const [url, setUrl] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!url.trim()) return toast("Please enter a valid URL");
    console.log("Shortening URL:", url);
    // TODO: Add API call for URL shortening
    setUrl(""); // reset after submit
  };

  return (
    <RootLayout>
      <section className="flex flex-col w-full items-center justify-center min-h-screen text-center space-y-4">
        <div>
          <h1 className="text-4xl font-bold">
            Short Your Link With{" "}
            <span className="bg-accent text-background px-1 -ml-1">
              Pendekin
            </span>
          </h1>
          <p className="text-sm text-muted-foreground">
            Pendekin is a simple URL shortener that allows you to create short
            links easily.
          </p>
        </div>
        <div className="w-full max-w-md">
          <form
            className="flex w-full gap-2 items-center"
            onSubmit={handleSubmit}
          >
            <Input
              className="w-full"
              placeholder="Enter your URL here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button type="submit" className="cursor-pointer">
              Shorten Link
            </Button>
          </form>
        </div>
      </section>
    </RootLayout>
  );
}
