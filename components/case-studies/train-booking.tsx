import {
  Figure,
  Metrics,
  Section,
  StepHeading,
} from "@/components/case-study/layout";

export const trainBookingToc = [
  { id: "in-a-nutshell", label: "In A Nutshell" },
  { id: "context", label: "Context" },
  { id: "churning-users", label: "Churning Users" },
  { id: "p1", label: "P1: Price Breakdown" },
  { id: "p2", label: "P2: Countdown" },
  { id: "p3", label: "P3: Passenger Details" },
  { id: "design-solutions", label: "Design Solutions" },
  { id: "reflection", label: "Reflection" },
];

export function TrainBookingBody() {
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
            <em>Usability Testing</em> on Train Users
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
            <strong>+2.12 % increase</strong> in Train&apos;s Booking Rates.
          </li>
          <li>
            <strong>90% users</strong> filling in Passenger Details.
          </li>
        </ul>
        <p>Here&apos;s how the story goes ▼</p>
        <Figure
          src="/images/work/train-3.jpg"
          alt="Old Design versus New Design of the Train booking form"
        />
      </Section>

      <Section id="context" label="Context" heading="Context">
        <p>
          tiket.com is a South-east Asia&apos;s Travel unicorn, serving 52+
          millions active users. Offering 10+ travel solutions like Flights,
          Hotels and Trains.
        </p>
        <Figure
          src="/images/work/train-1.jpg"
          alt="Previous Train Booking Form Flow [Early 2023]"
        />
      </Section>

      <Section
        id="churning-users"
        label="Research Findings"
        heading="Churning Users"
      >
        <p>
          After releasing our new Train Booking Form designs in early 2023, we
          found that{" "}
          <strong>62.5% of users dropped off after the first page.</strong>
        </p>
        <p>
          To address this, our team first conducted the following methods to
          identify potential problems:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <em>Deep User Behaviour Analysis</em> through Amplitude
          </li>
          <li>
            <em>Live Usability Testing</em> on Train Users
          </li>
        </ul>
        <p>
          After identifying potential issues, I facilitated an ideation session
          with key stakeholders (Product Managers, Tech Leaders, Commercial, and
          Business Intelligence teams) to gather data and brainstorm potential
          solutions.
        </p>
        <p>
          We then used an <em>Impact x Implementation Matrix</em> to prioritize
          high-impact problems, leading us to focus on the three issues below.
        </p>
        <Figure
          src="/images/work/train-2.png"
          alt="Workshop board mapping train booking problems, impact, and solutions"
        />
      </Section>

      <Section
        id="p1"
        label="Problem #1"
        heading="Difficulty in Viewing Final Price Breakdown Early"
      >
        <p>
          Train users compare prices across OTAs and seek a final price
          breakdown before payment, but our design only provides this on Booking
          Form Page 2,{" "}
          <strong>which users view as a barrier.</strong>
        </p>
        <Figure
          src="/images/work/train-5.jpg"
          alt="Train booking form price breakdown problem"
        />
      </Section>

      <Section
        id="p2"
        label="Problem #2"
        heading="Difficulty Understanding Countdown Meaning"
      >
        <p>
          Train users often mistake the countdown in our Booking Form for
          payment duration rather than booking process duration,{" "}
          <strong>leading to concerns about accidental bookings</strong> and
          higher drop-off rates.
        </p>
        <Figure
          src="/images/work/train-12.jpg"
          alt="Train booking form countdown problem"
        />
      </Section>

      <Section
        id="p3"
        label="Problem #3"
        heading="Difficulty noticing Passenger Details"
      >
        <p>
          Participants see the{" "}
          <strong>passenger detail form as a barrier</strong> to accessing the
          final price breakdown, so evaluating its accessibility is crucial to
          avoid user frustration and incomplete transactions.
        </p>
        <Figure
          src="/images/work/train-8.jpg"
          alt="Train booking form passenger details problem"
        />
      </Section>

      <Section
        id="design-solutions"
        label="Solutions"
        heading="Small Improvement, Large Impacts"
      >
        <p>We improved 3 main aspects of our Train Booking Form.</p>
        <StepHeading number="1">Header: Guiding instead of Pressuring</StepHeading>
        <p>
          We removed the booking countdown to prevent early drop-offs and added
          a stepper to visually guide users through the booking steps before
          payment.
        </p>
        <Figure
          src="/images/work/train-9.jpg"
          alt="Header with stepper guiding instead of pressuring"
        />
        <StepHeading number="2">
          Passenger Details: Improved Copywriting &amp; Icon
        </StepHeading>
        <p>
          By testing different copywritings &amp; icons during usability tests,
          the new wording uses &quot;Fill&quot; to invite users to enter
          passenger details, and the pencil icon indicates information to be
          filled or edited.
        </p>
        <Figure
          src="/images/work/train-11.jpg"
          alt="Improved passenger details copywriting and icon"
        />
        <StepHeading number="3">
          Price Details: Inform price breakdown early
        </StepHeading>
        <p>
          We added a price breakdown entry point to provide users with full
          transparency on ticket prices and service fees before proceeding. This
          allows users to easily compare prices with other OTAs.
        </p>
        <Figure
          src="/images/work/train-4.jpg"
          alt="Price breakdown shown early in the booking form"
        />
        <StepHeading number="4">Final Booking Form Flow &amp; Impact</StepHeading>
        <p>
          To validate whether my designs worked, we conducted an A/B Experiment
          to test both designs. The new designs resulted in the following
          results:
        </p>
        <Figure
          src="/images/work/train-6.jpg"
          alt="Final booking form flow"
        />
        <Metrics
          items={[
            {
              value: "+2.12%",
              label:
                "Increased CVR (Conversion Rate) from Booking Form Page 1 to Purchase",
            },
            {
              value: "90%",
              label: "Filled in Passenger Details",
            },
          ]}
        />
        <Figure
          src="/images/work/train-10.jpg"
          alt="Train booking form screens"
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
          <li>Product Design team - Lia, Nindya, Yossie, Misbeh, Ryan S</li>
          <li>Product team - Alwan, Agung, Yocky, Babas</li>
          <li>Commercial Team - Julian, Hendi &amp; Caca</li>
          <li>Tech Leads - Adhy, Endy, Fakhri &amp; Setiady</li>
          <li>and many more others.</li>
        </ul>
      </Section>
    </>
  );
}
