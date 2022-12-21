/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "fresh/server.ts";
import Layout from "../components/Layout.tsx";

export const handler: Handlers = {
  async GET(request, ctx) {
    const response: Response = await ctx.render();
    return response;
  },
};

export default ({ data, url }: PageProps) => {
  return (
    <Layout>
      <div>Broken Deploy example</div>
    </Layout>
  );
};
