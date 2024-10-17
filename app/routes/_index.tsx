import { MetaLink, Meta } from "~types";
import {
  Grid,
  Masthead,
  Text,
  Card,
  ShijiLogo,
  AbcFitnessLogo,
  ConsensysLogo,
  TstreetLogo,
  StayntouchLogo,
  AolLogo,
} from "main";
import {
  Cell,
  type CellProps,
  type SizeType,
} from "~components/core/grid/Grid";

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

const rolesCellProps: CellProps = {
  size: [
    { size: 4 },
    { screen: "md", size: 3 },
    { screen: "lg", size: 4 },
    { screen: "xl", size: 3 },
  ],
};
const teamsCellSize: SizeType = [
  { size: 4 },
  { screen: "md", size: 3 },
  { screen: "lg", size: 4 },
  { screen: "xl", size: 2 },
];

export const RouteComponent = () => (
  <div>
    <section className="bg-linear-grad1 theme-hue">
      <Masthead
        title="Web Architect"
        description="Vijay Dev builds world class web apps for enterprise products and services"
        isTopLevel
      />
      <div className="mb-3xl">
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
            cellProps={rolesCellProps}
            heading="Estimate"
            description="Understand the requirements, budget, and, timeline to create a
              well balanced estimate and strategy."
            icon="conversion_path"
          />
          <Card
            cellProps={rolesCellProps}
            heading="Design"
            description="Set the application architecture with best industry practices,
              tools, and, pipelines."
            icon="stylus_note"
          />
          <Card
            cellProps={rolesCellProps}
            heading="Review"
            description="Closely review each components as it's built and get integrated.
              Realign any divergent patterns."
            icon="data_check"
          />
          <Card
            cellProps={rolesCellProps}
            heading="Deploy"
            description="Launch to cloud with consideration to scalability, cost, security,
              and, governance."
            icon="cloud_upload"
          />
        </Grid>
      </div>
      <div>
        <Text
          as="h2"
          variant="label"
          height="tight"
          dim
          center
          className="mb-m"
          aria-label="Worked with teams in the past"
        >
          Teams
        </Text>
        <Grid>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <ShijiLogo />
          </Cell>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <AbcFitnessLogo />
          </Cell>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <ConsensysLogo />
          </Cell>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <TstreetLogo />
          </Cell>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <StayntouchLogo />
          </Cell>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <AolLogo />
          </Cell>
        </Grid>
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
