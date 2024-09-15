import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ context }) => {
    console.log("_AUTH");
    if (!context.auth.isPending && !context.auth.isAuthenticated)
      throw redirect({
        to: "/signin",
        search: {
          redirect: location.href,
        },
      });
  },
});
