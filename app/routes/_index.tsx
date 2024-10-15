import { MetaLink, Meta } from "~types";
import { Grid, Masthead, Text, Card } from "main";
import { Cell, type CellProps } from "~components/core/grid/Grid";

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

const cellProps: CellProps = {
  size: [
    { size: 4 },
    { screen: "md", size: 3 },
    { screen: "lg", size: 4 },
    { screen: "xl", size: 3 },
  ],
};

export const RouteComponent = () => (
  <div>
    <section className="bg-linear-grad1 theme-hue">
      <Masthead
        title="Web Architect"
        description="Vijay Dev builds world class web apps for enterprise products and services"
        isTopLevel
      />
      <div>
        <Text
          as="h2"
          variant="label"
          height="tight"
          dim
          center
          className="mb-m"
          aria-label="Professional roles"
        >
          Roles
        </Text>
        <Grid>
          <Card
            cellProps={cellProps}
            heading="Estimate"
            description="Understand the requirements, budget, and, timeline to create a
              well balanced estimate and strategy."
            icon="conversion_path"
          />
          <Card
            cellProps={cellProps}
            heading="Design"
            description="Set the application architecture with best industry practices,
              tools, and, pipelines."
            icon="stylus_note"
          />
          <Card
            cellProps={cellProps}
            heading="Review"
            description="Closely review each components as it's built and get integrated.
              Realign any divergent patterns."
            icon="data_check"
          />
          <Card
            cellProps={cellProps}
            heading="Deploy"
            description="Launch to cloud with consideration to scalability, cost, security,
              and, governance."
            icon="cloud_upload"
          />
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
