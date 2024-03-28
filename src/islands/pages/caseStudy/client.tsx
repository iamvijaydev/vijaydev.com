import type { MetaProps } from "types";
import { Layout } from "main";

export const metaProps: MetaProps = {
  pathname: "/case-study",
  permalink: "/case-study.html",
  title: "Case study",
  description: "Place the case study meta description text here",
};

export const PageComponent = () => {
  return (
    <Layout>
      <div className="col-12 p-l" style={{ padding: '50px', backgroundColor: 'hsl(220.85deg 70.12% 0%)' }}>
        <div  style={{ width: '120px', height: '100px', borderRadius: '5px', backgroundColor: 'hsl(220.85deg 70.12% 10%)' }}>5%</div>
        <div  style={{ width: '120px', height: '100px', borderRadius: '5px', backgroundColor: 'hsl(220.85deg 70.12% 20%)' }}>10%</div>
        <div  style={{ width: '120px', height: '100px', borderRadius: '5px', backgroundColor: 'hsl(220.85deg 70.12% 30%)' }}>15%</div>
        <div  style={{ width: '120px', height: '100px', borderRadius: '5px', backgroundColor: 'hsl(220.85deg 70.12% 50%)' }}>20%</div>
      </div>
    </Layout>
  )
};
