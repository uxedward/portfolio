import {
  Figure,
  Issue,
  Metrics,
  Section,
  StepHeading,
  Subhead,
} from "@/components/case-study/layout";

export const busSearchToc = [
  { id: "in-a-nutshell", label: "In A Nutshell" },
  { id: "background", label: "Background & Context" },
  { id: "research", label: "Research & Prioritization" },
  { id: "root-problem", label: "The Root Problem" },
  { id: "how-might-we", label: "How Might We" },
  { id: "final-designs", label: "Final Designs" },
  { id: "reflection", label: "Reflection" },
];

export function BusSearchBody() {
  return (
    <>
      <Section
        id="in-a-nutshell"
        label="In A Nutshell"
        heading="Small Improvements, Large Impact"
      >
        <p>
          Due to multiple user <em>Error Search Results</em>, my team and I
          conducted the following to improve our design &amp; user experience:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <em>User Behaviour Analysis</em> through Amplitude
          </li>
          <li>
            <em>Usability Testing</em> on Bus &amp; Shuttle Users
          </li>
          <li>
            <em>Impact x Implementation</em> Matrix
          </li>
          <li>
            <em>How Might We</em> Framework
          </li>
        </ul>
        <p>These efforts resulted in a:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>+4.2% increase</strong> in Search to Book CVR.
          </li>
          <li>
            <strong>+7.4% increase</strong> in No Route to Choose Product
            Click-Through Rate (CTR).
          </li>
          <li>
            <strong>+12.4% increase</strong> in No Route to Book Product
            Conversion Rate (CVR).
          </li>
        </ul>
        <p>Here&apos;s how the story goes ▼</p>
        <Figure
          src="/images/work/bus-search-1.jpg"
          alt="Old Design versus New Design"
        />
        <Figure
          src="/images/work/bus-search-11.png"
          alt="Bus & Shuttle Flow [Early 2023]"
        />
      </Section>

      <Section
        id="background"
        label="Background & Context"
        heading="Low Conversion Rate"
      >
        <p>
          tiket.com is a South-east Asia&apos;s Travel unicorn, serving 52+
          millions active users with various travel solutions like Flights,
          Hotels and Trains.
        </p>
        <p>
          Following the release of our Bus &amp; Shuttle product in early 2023,
          we identified a low conversion rate of <strong>6.44%</strong>,
          prompting our team to investigate contributing factors and develop
          effective solutions.
        </p>
      </Section>

      <Section
        id="research"
        label="Research"
        heading="Multiple Problems, Minimal Effort"
      >
        <p>
          To address our low conversion rate, we conducted a comprehensive
          analysis using two research methods which lead us to finding multiple
          potential issues.
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>User Behavior Analysis</strong> via Amplitude&apos;s
            real-time data analytics
          </li>
          <li>
            <strong>Live Usability Testing</strong> to identify user pain
            points.
          </li>
        </ol>
        <p>
          By employing an <strong>Impact x Implementation Matrix</strong> (with
          Product Managers, the Business Team, and the Tech team), we
          prioritized the issues worth solving and concluded that the most
          critical and feasible issue identified was the frequent occurrence of{" "}
          <strong>
            &quot;No result Error&quot; on our Search Result Page.
          </strong>
        </p>
        <Figure
          src="/images/work/bus-search-10.jpg"
          alt="Impact of Ideas versus Implementation Effort matrix"
        />
      </Section>

      <Section
        id="root-problem"
        label="The Root Problem"
        heading="Inaccurate Location Data"
      >
        <p>
          Our Bus &amp; Shuttle users often encounter a &quot;No result
          Error&quot; due to inaccurate location data from third-party
          aggregators.
        </p>
        <Subhead>The Cause</Subhead>
        <p>
          Vendors can define their own <em>departure and arrival locations</em>,
          causing multiple entries for the same place.
        </p>
        <Figure
          src="/images/work/bus-search-9.jpg"
          alt="Agent 1 and Agent 2 using different names for the same departure and arrival locations"
        />
        <Subhead>The Effect</Subhead>
        <p>
          This inconsistency results in users finding{" "}
          <em>no search results</em> when looking for locations from different
          vendors.
        </p>
        <Figure
          src="/images/work/bus-search-4.jpg"
          alt="Search #1 returning a result versus Search #2 returning No Result"
        />
      </Section>

      <Section
        id="how-might-we"
        label="No Result Errors"
        heading="Deep-diving into the Errors"
      >
        <p>
          Users will receive two different types of errors depending on what
          they search:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-3">
            <Issue
              number="1"
              title={
                <>
                  Error <strong>with Alternative Routes</strong>
                </>
              }
            />
            <Figure
              src="/images/work/bus-search-6.jpg"
              alt="Error with recommended alternatives, City to City Jakarta to Bandung"
            />
          </div>
          <div className="space-y-3">
            <Issue
              number="2"
              title={
                <>
                  Error <strong>without Alternative Routes</strong>
                </>
              }
            />
            <Figure
              src="/images/work/bus-search-13.jpg"
              alt="Error message with no alternatives and a Change search button"
            />
          </div>
        </div>
        <p className="pt-4 text-[12px] uppercase tracking-[0.16em] text-ink-soft">
          Design Evaluation
        </p>
        <Subhead>Issues &amp; How Might We</Subhead>
        <Figure
          src="/images/work/bus-search-2.jpg"
          alt="Annotated old error page: Misleading Header, Huge Error Message, Unclear Alternative Routes"
        />
        <div className="space-y-3">
          <Issue number="1" title="🚧 Misleading Header">
            <p>
              When users search for a specific terminal, the header only
              displays <em>City to City</em>.
            </p>
            <p>
              ❓ <em>How Might We</em>
              <br />
              Present accurate information to avoid misleading users.
            </p>
          </Issue>
          <Issue number="2" title="🚧 Huge Error Message">
            <p>
              The large error message overwhelms users and obscures alternative
              routes.
            </p>
            <p>
              ❓ <em>How Might We</em>
              <br />
              Reduce the error message&apos;s prominence to avoid misperception
              of search results.
            </p>
          </Issue>
          <Issue number="3" title="🚧 Unclear Alternative Routes">
            <p>
              There&apos;s no information displaying what the recommended
              routes are based off.
            </p>
            <p>
              ❓ <em>How Might We</em>
              <br />
              Display relevant alternative routes clearly and seamlessly.
            </p>
          </Issue>
        </div>
      </Section>

      <Section
        id="final-designs"
        label="Solutions"
        heading="Small Improvement, Large Impacts"
      >
        <p>
          We improved 3 main aspects of our Bus &amp; Shuttle Search Error
          Result Experience.
        </p>
        <StepHeading number="1">Header: Precise Search Results</StepHeading>
        <p>
          Instead of a generalized &quot;City to City&quot; header, we now
          display the exact search terms entered by users to avoid confusion
          and misinformation.
        </p>
        <Figure
          src="/images/work/bus-search-3.jpg"
          alt="Clear Header Information showing the exact terminal search"
        />
        <StepHeading number="2">
          Error Message: Reduced Error Perception
        </StepHeading>
        <p>
          We redesigned the error message to occupy less space and appear less
          like an error state, reassuring users that their search results are
          not incorrect.
        </p>
        <Figure
          src="/images/work/bus-search-7.jpg"
          alt="Minimal Error Message: Currently available routes"
        />
        <StepHeading number="3">
          Alternative Routes: Seamless Recommendations
        </StepHeading>
        <p>
          By clearly indicating the recommended routes (e.g., City to City),
          users can easily understand which Bus &amp; Shuttle terminals are
          being suggested.
        </p>
        <Figure
          src="/images/work/bus-search-5.jpg"
          alt="Relevant Alternative Routes on the search results list"
        />
        <StepHeading number="4">Before, After &amp; Imapct</StepHeading>
        <p>
          To validate whether my designs worked, we conducted an A/B Experiment
          to test both designs. The new designs resulted in the following
          results:
        </p>
        <Figure
          src="/images/work/bus-search-12.jpg"
          alt="Old Design versus New Design with annotated improvements"
        />
        <Metrics
          items={[
            {
              value: "+4.2%",
              label: "Increased CVR from Search to book",
            },
            {
              value: "+7%",
              label: "Increased CTR from No Route Error to Product Detail",
            },
            {
              value: "+12%",
              label: "Increased CVR from No Route Error to Purchase by 12%",
            },
          ]}
        />
        <Figure
          src="/images/work/bus-search-8.jpg"
          alt="Bus & Shuttle search and results screens"
        />
        <Figure
          src="/images/work/bus-search-cover.jpg"
          alt="Bus & Shuttle search and currently available routes"
        />
        <Figure
          src="/images/work/bus-search-14.jpg"
          alt="Desktop search results with currently available routes"
        />
      </Section>

      <Section
        id="reflection"
        label="Reflection"
        heading="What I've Learnt & Special Thanks"
      >
        <p>During this project, I&apos;ve got the opportunity to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Learnt more about User Behaviour Analysis (Amplitude)</li>
          <li>
            Leading Workshops &amp; Using &quot;Impact-to-Implementation&quot;
            Matrix
          </li>
          <li>Working with Business Intelligence Team</li>
          <li>Conducted A/B Experiment and having the new designs win</li>
        </ul>
        <p>
          However, although this project is deemed successful, the best
          solution would be to improve our location datas.
        </p>
        <p>
          <strong>Shoutout to all collaborators</strong>
          <br />
          Huge shoutout to everyone I collaborated with during this project
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Product Design team - Ule, Nindya, Yossie, Ryan S</li>
          <li>Product team - Agung, Alwan, Hanifa</li>
          <li>Business Intelligence team</li>
          <li>Tech team</li>
          <li>and many more others.</li>
        </ul>
      </Section>
    </>
  );
}
