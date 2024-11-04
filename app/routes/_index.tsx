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
  { size: 2 },
  { screen: "md", size: 3 },
  { screen: "lg", size: 4 },
  { screen: "xl", size: 3 },
];
const featuredCellSize: SizeType = [
  { size: 2 },
  { screen: "md", size: 3 },
  { screen: "lg", size: 4 },
];
const firstFeaturedCellSize: CellProps = {
  size: [
    ...featuredCellSize,
    { screen: "xl", position: "start", size: 3 },
    { screen: "xl", position: "end", size: 7 },
  ],
};
const lastFeaturedCellSize: CellProps = {
  size: [
    ...featuredCellSize,
    { screen: "xl", position: "start", size: 7 },
    { screen: "xl", position: "end", size: 11 },
  ],
};

export const RouteComponent = () => (
  <div>
    <section className="theme-hue">
      <Masthead
        title="Web Architect"
        description="Vijay Dev builds world class web apps for enterprise products and services"
        isTopLevel
      />
      <div className="pb-3xl">
        <Text
          as="h2"
          variant="label"
          height="tight"
          dim
          center
          lineThrough
          className="mb-m"
          aria-label="Professional roles"
        >
          Active roles
        </Text>
        <Grid>
          <Card
            isHeadingGradient
            cellProps={rolesCellProps}
            heading="Estimate"
            description="Understand the requirements, budget, and, timeline to create a
              well balanced estimate and strategy."
            icon="conversion_path"
          />
          <Card
            isHeadingGradient
            cellProps={rolesCellProps}
            heading="Design"
            description="Set the application architecture with best industry practices,
              tools, and, pipelines."
            icon="stylus_note"
          />
          <Card
            isHeadingGradient
            cellProps={rolesCellProps}
            heading="Review"
            description="Closely review each components as it's built and get integrated.
              Realign any divergent patterns."
            icon="data_check"
          />
          <Card
            isHeadingGradient
            cellProps={rolesCellProps}
            heading="Deploy"
            description="Launch to cloud with consideration to scalability, cost, security,
              and, governance."
            icon="cloud_upload"
          />
        </Grid>
      </div>
      <div className="py-3xl theme-hue">
        <Text
          as="h2"
          variant="label"
          height="tight"
          dim
          center
          lineThrough
          className="mb-m"
          aria-label="Worked with teams in the past"
        >
          Past teams
        </Text>
        <Grid>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <ShijiLogo />
          </Cell>
          <Cell size={teamsCellSize} className="grid content-center teams-logo">
            <ConsensysLogo />
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
    <section className="py-3xl theme-hue">
      <Text
        as="h2"
        variant="label"
        height="tight"
        dim
        center
        lineThrough
        className="mb-m"
        aria-label="Professional roles"
      >
        Featured works
      </Text>
      <Grid>
        <Card
          cellProps={firstFeaturedCellSize}
          heading="Custom text layout engine"
          description="A translated document, rendered in a multi layered texts, representing each facets of the translation."
        />
        <Card
          cellProps={lastFeaturedCellSize}
          heading="Canvas document editor"
          description="Set the application architecture with best industry practices,
              tools, and, pipelines."
        />
      </Grid>
    </section>
    <section className="py-3xl theme-hue">
      <Text
        as="h2"
        variant="label"
        height="tight"
        dim
        center
        lineThrough
        className="mb-m"
        aria-label="Professional roles"
      >
        Posts
      </Text>
      <Grid>
        <Card
          cellProps={rolesCellProps}
          heading="Mutable React Context store"
          description="Understand the requirements, budget, and, timeline to create a
              well balanced estimate and strategy."
          icon="outbound"
        />
        <Card
          cellProps={rolesCellProps}
          heading="Folder based routing with import map supported build system"
          description="Set the application architecture with best industry practices,
              tools, and, pipelines."
          icon="outbound"
        />
        <Card
          cellProps={rolesCellProps}
          heading="A sleepy little village"
          description="Closely review each components as it's built and get integrated.
              Realign any divergent patterns."
          icon="outbound"
        />
        <Card
          cellProps={rolesCellProps}
          heading="Deploy"
          description="Launch to cloud with consideration to scalability, cost, security,
              and, governance."
          icon="outbound"
        />
      </Grid>
    </section>
  </div>
);

RouteComponent.displayName = "HomeRoute";
