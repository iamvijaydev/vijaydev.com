import { MetaLink, Meta } from "~types";
import { Masthead } from "main";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/featured",
  },
  {
    rel: "prefetch",
    href: "/blog",
  },
  {
    rel: "prefetch",
    href: "/learn",
  },
];

export const meta: Meta[] = [
  {
    name: "title",
    content: "Vijay Dev",
  },
  {
    name: "description",
    content: "Welcome to the personal website of Vijay Dev.",
  },
];

export const RouteComponent = () => {
  return (
    <div>
      <section className="bg-linear-grad theme-hue">
        <Masthead
          title="Web Architect"
          description="Vijay Dev builds world class web apps for enterprise products and services"
          branding="primary"
        />
        <div>
          <h2>My roles</h2>
          <div>
            <div>
              <h3>Estimate & Stratergize</h3>
              <p>Estimate & Stratergize</p>
            </div>
            <div>
              <h3>Plan & Design</h3>
              <p>Plan & Design</p>
            </div>
            <div>
              <h3>Review & Approve</h3>
              <p>Review & Approve</p>
            </div>
            <div>
              <h3>Deploy & Scale</h3>
              <p>Deploy & Scale</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Noted clients</h2>
          <ol>
            <li>Google</li>
            <li>Microsoft</li>
            <li>Amazon</li>
            <li>Facebook</li>
          </ol>
        </div>
      </section>
      <section>
        <h2>Featured Works</h2>
        <div>
          <div>
            <h3>Project 1</h3>
            <p>Project 1</p>
          </div>
          <div>
            <h3>Project 2</h3>
            <p>Project 2</p>
          </div>
          <div>
            <h3>Project 3</h3>
            <p>Project 3</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Learn fff</h2>
        <div>
          <div>
            <h3>Learn 1</h3>
            <p>Learn 1</p>
          </div>
          <div>
            <h3>Learn 1</h3>
            <p>Learn 1</p>
          </div>
          <div>
            <h3>Learn 1</h3>
            <p>Learn 1</p>
          </div>
        </div>
      </section>
    </div>
  );
};

RouteComponent.displayName = "HomeRoute";
