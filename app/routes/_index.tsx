import { MetaLink, Meta } from "~types";
import { Grid, Masthead, Text } from "main";
import { Cell, SizeType } from "~components/core/grid/Grid";

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

const cellSize: SizeType = [{ size: 4 }, { screen: "md", size: 3 }, { screen: "lg", size: 2 }, { screen: "xl", size: 3 }];

export const RouteComponent = () => (
  <div>
    <section className="bg-linear-grad1 theme-hue">
      <Masthead
        title="Web Architect"
        description="Vijay Dev builds world class web apps for enterprise products and services"
        branding="primary" />
      <div>
        <Text as="h2" variant="title-5" center className="mb-m">Roles</Text>
        <Grid>
          <Cell size={cellSize} className="p-s radius-m surface-container2 bg">
            <Text as="h3" variant="title-4" className="mb-s">Estimate & Plot</Text>
            <Text as="p" variant="label">Understand the requirements, budget, and, timeline to create a well balanced estimate and strategy.</Text>
          </Cell>
          <Cell size={cellSize} className="p-s radius-m surface-container2 bg">
            <Text as="h3" variant="title-4" className="mb-s">Plan & Design</Text>
            <Text as="p" variant="label">Set the application architecture with best industry practices, tools, and, pipelines.</Text>
          </Cell>
          <Cell size={cellSize} className="p-s radius-m surface-container2 bg">
            <Text as="h3" variant="title-4" className="mb-s">Review & Approve</Text>
            <Text as="p" variant="label">Closely review each components as it's built and get integrated. Realign any divergent patterns.</Text>
          </Cell>
          <Cell size={cellSize} className="p-s radius-m surface-container2 bg">
            <Text as="h3" variant="title-4" className="mb-s">Deploy & Scale</Text>
            <Text as="p" variant="label">Launch to cloud with consideration to scalability, cost, security, and, governance.</Text>
          </Cell>
        </Grid>
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

RouteComponent.displayName = "HomeRoute";
