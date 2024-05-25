import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import invariant from "tiny-invariant";

// read more https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = (args) => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  // const contact = await getContact(params.contactId);
  // if (!contact) {
  //   throw new Response("Not Found", { status: 404 });
  // }
  // return json({ contact });
};

export default function ThoughtById() {
  return (
    <main><p>Hi</p></main>
  );
}