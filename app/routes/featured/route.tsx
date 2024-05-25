import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Featured() {
  return (
    <main><p>Hi</p></main>
  );
}

export const Svg = () => <span>SVG</span>

export const Timeline = () => {
  return (
    <div>
      <h2>Timeline</h2>
      
      <hr />

      <Svg />
      <h3>Pre era</h3>
      <ol>
        <li>Build website templates</li>
        <li>Fix notorious issues specific to IE6 and IE7</li>
      </ol>

      <Svg />
      <h3>Printup North</h3>
      <ol>
        <li>Build various kinds of image sliders from scratch</li>
      </ol>

      <Svg />
      <h3>Manekeno</h3>
      <p>Build HTML5 video subtitle editor</p>

      <Svg />
      <h3>AOL</h3>
      <p>Build iPad online Magazine with smooth scrolling and paper turn effect</p>

      <Svg />
      <h3>Customnade</h3>
      <p>Build infinite product listing page with virtualization and page scroll restoration</p>

      <Svg />
      <h3>StayNTouch</h3>
      <ol>
        <li>Custom data cache for quick access and local encryption</li>
        <li>Connected scroll UI component to show reports</li>
        <li>App that shows twelve hour calendar view and management of hourly reservation</li>
      </ol>

      <Svg />
      <h3>All Traffic Control</h3>
      <ol>
        <li>Node API endpoint creation</li>
        <li>Create schemas and migrations for ORM</li>
        <li>Biliboard clipart creation application</li>
        <li>Implement entitlements</li>
      </ol>

      <Svg />
      <h3>Concensys</h3>
      <ol>
        <li>Show cryptocurrency volatile price fluctions, streaming from a websocket, in meaningful charts and tables.</li>
        <li>The irradic data flow from websocket is scheduled, processed, and finally interpolated to the UI elements</li>
      </ol>

      <Svg />
      <h3>TStreet</h3>
      <p>Implement a text rendering engine that shows translation of source document as - each word translation and each statement translation.</p>

      <Svg />
      <h3>ABC Fitness</h3>
      <ol>
        <li>Implement a full HTML5 Canvas based legal documents/contract generation application with drag and drop features</li>
        <li>Implement text editor capabilities in HTML5 Canvas (API used predomenently for drawing)</li>
        <li>Implement the feature of creating canned template with placeholders (for e.g. address).</li>
        <li>Implement auto spacial correction when placeholder is replaced with actual text</li>
        <li>Implement find, replace and spell check using WASM</li>
      </ol>

      <Svg />
      <h3>Shiji</h3>
      <ol>
        <li>Bulk select</li>
        <li>Large codebase migrations</li>
        <li>Mutable React Context state management library</li>
        <li>Technical document writing and documentation</li>
      </ol>

      <Svg />
      <h3>Zafin</h3>
      <ol>
        <li>Financial product creation and management with drag and drop features</li>
        <li>DB designs</li>
        <li>Product technical management</li>
        <li>Deployments, Kubernetics + Kustomize scripts</li>
      </ol>
    </div>
  );
}