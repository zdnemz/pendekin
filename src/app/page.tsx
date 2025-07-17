"use client";

import * as React from "react";
import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ApiResponse } from "@/types/response";

export default function Home() {
  const [url, setUrl] = React.useState<string>("");
  const [shortUrl, setShortUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!url.trim()) return toast("Please enter a valid URL");

    setUrl(""); // reset after submit

    try {
      const res = await fetch("/api/urls/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          original_url: url,
        }),
      });

      const json: ApiResponse<{ short_url: string }> = await res.json();

      if (!json.success) {
        throw new Error(json.error!);
      }

      setShortUrl(json.data!.short_url);

      toast("Your url has been shorten");
    } catch (err) {
      toast((err as Error).message);
    }
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
        {shortUrl && (
          <div>
            <p className="text-muted-foreground">
              Your Shorten Link :{" "}
              <span className="px-2 bg-accent text-accent-foreground">
                {shortUrl}
              </span>
            </p>
          </div>
        )}
      </section>
    </RootLayout>
  );
}
