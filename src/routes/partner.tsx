import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/partner")({
  loader: () => { throw redirect({ to: "/" }); },
});
