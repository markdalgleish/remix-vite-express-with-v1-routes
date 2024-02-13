import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { createRoutesFromFolders } from "@remix-run/v1-route-convention";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      // Tell Remix to ignore everything in the routes directory.
      // We'll let `createRoutesFromFolders` take care of that.
      ignoredRouteFiles: ["**/*"],
      routes: async (defineRoutes) => {
        // `createRoutesFromFolders` will create routes for all files in the
        // routes directory using the same default conventions as Remix v1.
        return createRoutesFromFolders(defineRoutes, {
          // If you're already using `ignoredRouteFiles` in your Remix config,
          // you can move them to `ignoredFilePatterns` in the plugin's options.
          ignoredFilePatterns: ["**/.*", "**/*.css"],
        });
      },
    }),
    tsconfigPaths(),
  ],
});
