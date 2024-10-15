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

const cellSize: SizeType = [
  { size: 4 },
  { screen: "md", size: 3 },
  { screen: "lg", size: 4 },
  { screen: "xl", size: 3 },
];

export const RouteComponent = () => (
  <div>
    <section className="bg-linear-grad1 theme-hue">
      <Masthead
        title="Web Architect"
        description="Vijay Dev builds world class web apps for enterprise products and services"
        isTopLevel
      />
      <div>
        <Text as="h2" variant="label" height="tight" dim center className="mb-m" aria-label="Professional roles">
          Roles
        </Text>
        <Grid>
          <Cell
            size={cellSize}
            className="px-m py-s radius-m surface-container2 bg"
          >
            <Text gradient branding="slant-flip" as="h3" variant="title-4" className="mb-s">
              Estimate
            </Text>
            <Text as="p" variant="label">
              Understand the requirements, budget, and, timeline to create a
              well balanced estimate and strategy.
            </Text>
            <span aria-hidden="true" className="material-symbols-outlined card-icon">
              conversion_path
            </span>
          </Cell>
          <Cell
            size={cellSize}
            className="px-m py-s radius-m surface-container2 bg"
          >
            <Text gradient branding="slant-flip" as="h3" variant="title-4" className="mb-s">
              Design
            </Text>
            <Text as="p" variant="label">
              Set the application architecture with best industry practices,
              tools, and, pipelines.
            </Text>
            <span aria-hidden="true" className="material-symbols-outlined card-icon">
              stylus_note
            </span>
          </Cell>
          <Cell
            size={cellSize}
            className="px-m py-s radius-m surface-container2 bg"
          >
            <Text gradient branding="slant-flip" as="h3" variant="title-4" className="mb-s">
              Review
            </Text>
            <Text as="p" variant="label">
              Closely review each components as it's built and get integrated.
              Realign any divergent patterns.
            </Text>
            <span aria-hidden="true" className="material-symbols-outlined card-icon">
              data_check
            </span>
          </Cell>
          <Cell
            size={cellSize}
            className="px-m py-s radius-m surface-container2 bg"
          >
            <Text gradient branding="slant-flip" as="h3" variant="title-4" className="mb-s">
              Deploy
            </Text>
            <Text as="p" variant="label">
              Launch to cloud with consideration to scalability, cost, security,
              and, governance.
            </Text>
            <span aria-hidden="true" className="material-symbols-outlined card-icon">
              cloud_upload
            </span>
          </Cell>
        </Grid>
      </div>
      <div>
        <h2 aria-label="Worked with teams at">Teams</h2>
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
