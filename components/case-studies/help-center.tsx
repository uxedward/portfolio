import {
  Figure,
  Section,
  StepHeading,
  Subhead,
} from "@/components/case-study/layout";
import { cn } from "@/lib/cn";

export const helpCenterToc = [
  { id: "in-a-nutshell", label: "In A Nutshell" },
  { id: "context", label: "Context" },
  { id: "problem-objective", label: "Problem & Objective" },
  { id: "user-research", label: "User Research" },
  { id: "aligning-goals", label: "Aligning Goals" },
  { id: "how-might-we", label: "How Might We" },
  { id: "design-principles", label: "Design Principles" },
  { id: "final-design", label: "Final Design" },
  { id: "achieving-goals", label: "Achieving the 3 Goals" },
  { id: "success-metrics", label: "Success Metrics" },
  { id: "reflection", label: "Reflection" },
];

const channelUsage = [
  { label: "WhatsApp", value: 37, tone: "bg-ink" },
  { label: "Phone", value: 20, tone: "bg-ink-muted" },
  { label: "Live Chat", value: 15, tone: "bg-ink-soft" },
  { label: "Other", value: 28, tone: "bg-hairline" },
];

function IndexMark({
  children,
  solid = false,
}: {
  children: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full text-[14px] font-medium leading-none",
        solid
          ? "size-10 bg-ink text-paper"
          : "size-[38px] border border-ink text-ink",
      )}
    >
      {children}
    </span>
  );
}

function InsightCard({
  label,
  heading,
  children,
  visual,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[12px] bg-paper-2 p-5 lg:flex-row lg:items-center lg:gap-5">
      <div className="min-w-0 space-y-2 lg:flex-1">
        <p className="text-[12px] font-medium tracking-[0.1em] text-ink-muted">
          {label}
        </p>
        <h3 className="text-lg font-medium leading-snug text-ink sm:text-xl">
          {heading}
        </h3>
        <div className="text-[15px] leading-7 text-ink sm:text-base sm:leading-[1.5]">
          {children}
        </div>
      </div>
      <div className="min-w-0 lg:flex-1">{visual}</div>
    </div>
  );
}

function ProblemRow({
  number,
  issue,
  impact,
}: {
  number: string;
  issue: React.ReactNode;
  impact: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 lg:grid lg:grid-cols-[38px_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-x-4">
      <IndexMark>{number}</IndexMark>
      <div className="flex min-w-0 flex-col gap-1 lg:contents">
        <div className="min-w-0 text-[15px] leading-[1.5] text-ink sm:text-base">
          {issue}
        </div>
        <div className="flex items-start gap-3 lg:contents">
          <p
            className="text-[15px] leading-[1.5] text-ink sm:text-base"
            aria-hidden
          >
            →
          </p>
          <div className="min-w-0 text-[15px] leading-[1.5] text-ink sm:text-base">
            {impact}
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberedBlock({
  number,
  title,
  children,
}: {
  number: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <IndexMark>{number}</IndexMark>
      <div className="min-w-0 space-y-1 text-[15px] leading-[1.5] text-ink sm:text-base sm:leading-[1.5]">
        <h3 className="font-bold text-ink">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function MetricRow({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <IndexMark>{number}</IndexMark>
      <p className="min-w-0 text-[15px] font-bold leading-[1.5] text-ink sm:text-base">
        {children}
      </p>
    </div>
  );
}

function GoalCard({
  number,
  title,
  children,
}: {
  number: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] bg-paper-2 p-5">
      <IndexMark solid>{number}</IndexMark>
      <div className="min-w-0 space-y-1 text-[15px] leading-[1.5] text-ink sm:text-base sm:leading-[1.5]">
        {title ? <h3 className="font-bold text-ink">{title}</h3> : null}
        {children}
      </div>
    </div>
  );
}

const nestedListClass = "list-disc space-y-0 pl-[1.15em]";

export function HelpCenterBody() {
  return (
    <>
      <Section
        id="in-a-nutshell"
        label="In A Nutshell"
        heading="Reducing Case-to-Book Ratio Through Self-Service"
        card
      >
        <p>
          This project highlights the{" "}
          <strong>Re-design tiket.com&apos;s Help Center experience</strong> to
          reduce contact-to-agent (CTB) by guiding users toward faster,
          self-service solutions, while keeping human support accessible when
          truly needed. In this project, I had the experience of conducting the
          following:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <em>
              In-App Support Research with 10 users across 3 Help Center
              familiarity levels
            </em>
          </li>
          <li>
            <em>
              CS Agent Research: interviews and observation across L1 and L2
              agent teams
            </em>
          </li>
          <li>
            <em>Leading workshop</em> with new stakeholders: CS (Customer
            Service), CX (Customer Experience), Brand Marketing, Corporate
            Strategy
          </li>
        </ul>
        <p>Here&apos;s how the story goes ▼</p>
        <Figure
          bleed={false}
          src="/images/work/help-center-nutshell.jpg"
          alt="Old Help Center design versus the new halo tiket Customer Support design"
        />
      </Section>

      <Section id="context" label="Context" heading="What is tiket.com?">
        <p>
          tiket.com is a Southeast Asian travel unicorn serving 52+ million
          active users across 10+ travel products, including flights, hotels and
          trains. This was the Help Center we started with.
        </p>
        <Figure
          bleed={false}
          src="/images/work/help-center-context.jpg"
          alt="The original tiket.com Help Center, with search, order help, topic grid, and popular articles"
        />
      </Section>

      <Section
        id="problem-objective"
        label="Problem & Objective"
        heading="Why the Help Center wasn’t working"
      >
        <div className="flex items-center gap-3 rounded-[12px] border border-hairline bg-paper p-5">
          <p className="flex size-12 shrink-0 items-center justify-center rounded-full bg-case-link text-xl font-bold text-paper">
            2x
          </p>
          <div className="min-w-0">
            <p className="text-base font-medium text-ink sm:text-lg">
              Users chose an agent over self-service
            </p>
            <p className="mt-1 text-sm leading-6 text-ink-muted sm:text-base">
              31.1% clicked Contact Us; 16.8% opened an article
            </p>
          </div>
        </div>
        <p>A significant portion of cases are repetitive and low-complexity, such as:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>&quot;Where is my refund / what&apos;s the progress?&quot;</li>
          <li>&quot;Has my ticket been issued?&quot;</li>
          <li>&quot;What&apos;s my booking status?&quot;</li>
        </ul>
        <p>Three structural problems explained why:</p>
        <div className="space-y-6">
          <ProblemRow
            number="1"
            issue={
              <p>
                <strong>Article-heavy layout:</strong> long lists of static,
                text-heavy content
              </p>
            }
            impact={
              <p>
                Discouraged exploration and{" "}
                <strong>pushed users straight to an CS agent</strong>
              </p>
            }
          />
          <ProblemRow
            number="2"
            issue={
              <p>
                <strong>Cluttered information architecture:</strong> too many
                categories and low-value links
              </p>
            }
            impact={
              <p>
                <strong>Overwhelmed users on arrival</strong> and eroded trust in
                the page
              </p>
            }
          />
          <ProblemRow
            number="3"
            issue={
              <p>
                <strong>No personalisation:</strong> content ignored user intent
                and recent activity
              </p>
            }
            impact={
              <p>
                <strong>Users skipped self-service</strong> entirely and went to
                a human
              </p>
            }
          />
        </div>
      </Section>

      <Section
        id="user-research"
        label="User Research"
        heading="How Users Actually Seek Help"
      >
        <p>
          We conducted <strong>10 in-depth interviews and usability tests</strong>{" "}
          with users who had contacted CS about a flight or hotel in the previous
          three months, sampled across three levels of Help Center familiarity:
          never heard of it, aware but never used it, and tried it then stopped.
        </p>

        <InsightCard
          label="Key Insight #1"
          heading="WhatsApp becomes the highest support channel"
          visual={
            <div className="rounded-[12px] border border-hairline bg-paper p-5">
              <p className="text-base font-medium text-ink">
                Support Channel Usage
              </p>
              <ul className="mt-4 space-y-3">
                {channelUsage.map((row) => (
                  <li
                    key={row.label}
                    className="grid grid-cols-[5.5rem_minmax(0,1fr)_2.5rem] items-center gap-3"
                  >
                    <span className="text-sm text-ink">{row.label}</span>
                    <span className="h-3 overflow-hidden rounded-full bg-paper-2">
                      <span
                        className={`block h-full rounded-full ${row.tone}`}
                        style={{ width: `${row.value}%` }}
                      />
                    </span>
                    <span className="text-right text-sm text-ink">
                      {row.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          }
        >
          <p>
            WhatsApp becomes the highest support challenge compared to other
            channels because users are able to access to CS agents directly.
          </p>
        </InsightCard>

        <InsightCard
          label="Key Insight #2"
          heading="Only 46%"
          visual={
            <div className="rounded-[12px] border border-hairline bg-paper p-5">
              <div className="flex flex-wrap items-center gap-4">
                <div
                  className="relative size-[180px] shrink-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(var(--ink) 0 46%, var(--paper-2) 46% 100%)",
                  }}
                  role="img"
                  aria-label="46% recognised, 54% not recognised"
                >
                  <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-paper text-center">
                    <p className="text-lg font-medium text-ink">46%</p>
                    <p className="text-xs text-ink-muted">Recognised</p>
                  </div>
                </div>
                <ul className="min-w-0 space-y-3 text-sm text-ink">
                  <li className="flex items-center gap-2.5">
                    <span className="size-3 rounded-[3px] bg-ink" />
                    Recognised (46%)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="size-3 rounded-[3px] bg-paper-2" />
                    Not recognised (54%)
                  </li>
                </ul>
              </div>
            </div>
          }
        >
          <p>
            of surveyed users recognised the Help Center as a support channel
          </p>
        </InsightCard>

        <InsightCard
          label="Key Insight #3"
          heading="Users first instinct is to call CS regardless of issue severity."
          visual={
            <Figure
              bleed={false}
              src="/images/work/help-center-user-research.jpg"
              alt="Users default to calling customer service instead of using self-service or bots"
            />
          }
        >
          <p>
            Because of this instinct, users do not prefer to be talking to bots.
          </p>
        </InsightCard>
      </Section>

      <Section
        id="aligning-goals"
        label="Aligning Goals"
        heading="User Intention vs Product Intention"
      >
        <p>
          I led a cross-functional workshop with CS, CX, Brand Marketing,
          Corporate Strategy and Tech Leads to surface what each function
          actually needed from the Help Center, before any design work began.
        </p>
        <Figure
          bleed={false}
          src="/images/work/help-center-workshop.jpg"
          alt="Workshop board mapping user intention against product intention for the Help Center"
        />
        <p>Three distinct agendas surfaced:</p>
        <div className="space-y-6">
          <NumberedBlock title="CS (Customer Service) & CX (Customer Experience)" number="1">
            <ul className={nestedListClass}>
              <li>Fewer repetitive inquiries reaching agents.</li>
              <li>
                Cases that arrive pre-categorised, with the order already
                attached.
              </li>
              <li>Automation first, but never blocking the path to a human.</li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="Brand Marketing & Corporate Strategy" number="2">
            <ul className={nestedListClass}>
              <li>Rebrand the Help Center and give it clear USPs.</li>
              <li>
                Build a named service identity, benchmarked against BCA&apos;s
                &quot;HaloBCA&quot;.
              </li>
              <li>Dedicated treatment for Diamond Tier members.</li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="Product & Tech Leads" number="3">
            <ul className={nestedListClass}>
              <li>Reduce Case-to-Book ratio and lift automation adoption.</li>
              <li>Route users to self-service first.</li>
            </ul>
          </NumberedBlock>
        </div>
      </Section>

      <Section
        id="how-might-we"
        label="How Might We"
        heading="HMW Questions"
      >
        <div className="space-y-4">
          <GoalCard number="1">
            <p>
              HMW avoid making users <strong>feel overwhelmed?</strong>
            </p>
          </GoalCard>
          <GoalCard number="2">
            <p>
              HMW encourage users to{" "}
              <strong>resolve their issues through smart self-help?</strong>
            </p>
          </GoalCard>
          <GoalCard number="3">
            <p>
              HMW show <strong>the most relevant actions</strong> based on user
              context (order + time)?
            </p>
          </GoalCard>
        </div>
      </Section>

      <Section
        id="design-principles"
        label="Design Principles"
        heading="Guiding Goals"
      >
        <div className="space-y-4">
          <GoalCard number="1" title="Encourage Automation">
            <ul className={nestedListClass}>
              <li>Lower contact-to-agent for repeatable issues.</li>
              <li>Shift non-urgent help into chat.</li>
              <li>Free agents to focus on genuinely complex cases.</li>
            </ul>
          </GoalCard>
          <GoalCard number="2" title="Contextual">
            <p>Surface the phone only when urgency genuinely warrants it.</p>
          </GoalCard>
          <GoalCard number="3" title="Simplicity">
            <p>
              Recommend help based on the user&apos;s actual order, not a
              generic list.
            </p>
          </GoalCard>
        </div>
      </Section>

      <Section
        id="final-design"
        label="Final Design"
        heading="From Help Center to halo tiket"
      >
        <p>
          Only 46% of users recognised &quot;Help Center&quot; as a support
          channel, and the name itself signalled &quot;article library&quot;. We
          rebranded it as halo tiket Customer Support and rebuilt the page
          around six decisions:
        </p>
        <Figure
          bleed={false}
          src="/images/work/help-center-branding.jpg"
          alt="Annotated halo tiket screen highlighting branding, order card, Priority Lane, 24/7, channels, and language"
        />
        <div className="space-y-4">
          <NumberedBlock title="“halo tiket” branding" number="1">
            <ul className={nestedListClass}>
              <li>
                A new identity developed with Brand Marketing, replacing a label
                most users did not recognise and align with BCA’s HaloBCA (our
                sister company).
              </li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="Order card and FAQ" number="2">
            <ul className={nestedListClass}>
              <li>
                93% of cases come from users with an active order, so the order
                greets them first.
              </li>
              <li>Three prompts only, to cut decision fatigue.</li>
              <li>
                Tapping a prompt directly defines the order ID and category of
                complaint/inquiry, removing friction for the user and manual
                work for the agent in one move.
              </li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="USP #1: Priority Lane for Diamond Tier" number="3">
            <ul className={nestedListClass}>
              <li>
                Placed directly above the channel list, at the moment a user
                decides whether contacting support is worth it.
              </li>
              <li>
                Tier data also drives agent routing, so the promise is backed by
                real handling.
              </li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="USP #2: 24/7 availability" number="4">
            <ul className={nestedListClass}>
              <li>To reassure users that we’re ready to help them anytime</li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="Contact channels" number="5">
            <ul className={nestedListClass}>
              <li>
                Chat sits above Call deliberately, to intercept users scrolling
                for the phone number.
              </li>
              <li>
                &quot;From anywhere in the world&quot; leads with VoIP, since
                call cost was the main reason users avoided phoning.
              </li>
              <li>
                The list changes with urgency: call options appear here, not in
                the Low Emergency state.
              </li>
            </ul>
          </NumberedBlock>
          <NumberedBlock title="Language selector" number="6">
            <ul className={nestedListClass}>
              <li>
                Many Indonesian users browse the app in English but want to be
                answered in Bahasa Indonesia. Capturing that preference
                explicitly also removes the language step from the chatbot flow.
              </li>
              <li>
                Placed at the bottom because it is a set-once preference, not a
                task.
              </li>
            </ul>
          </NumberedBlock>
        </div>
        <Figure
          bleed={false}
          src="/images/work/help-center-final.jpg"
          alt="Three halo tiket states: Low Emergency Order, High Emergency Order, and No Orders"
        />
      </Section>

      <Section
        id="achieving-goals"
        label="Achieving the 3 Goals"
        heading="How the Design Achieves All 3 Guiding Goals"
      >
        <p>
          Each guiding goal maps directly to specific design decisions visible
          across the three contextual states: Low Emergency, High Emergency and
          No Orders.
        </p>

        <StepHeading number="1">Encourage Automation</StepHeading>
        <p>
          Repeatable issues resolve before they reach an agent, non-urgent help
          moves into chat, and agents are freed for genuinely complex cases.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Self-service content</strong> sits above every contact
            channel
          </li>
          <li>
            <strong>Quick Solutions</strong> (Request Reschedule, Request
            Refund) in the Low Emergency state
          </li>
          <li>
            <strong>Chatbot prompts</strong> for common issues, selected by
            order urgency
          </li>
          <li>
            <strong>FAQ-first layout</strong> in the No Orders state, with
            relevant articles before contact options
          </li>
        </ul>
        <Figure
          bleed={false}
          src="/images/work/help-center-automation.jpg"
          alt="Low Emergency halo tiket screen with self-service prompts above chat and other channels"
        />
        <Figure
          bleed={false}
          src="/images/work/help-center-quick-solutions.jpg"
          alt="Quick Solutions for reschedule and refund in the Low Emergency Help Center"
        />

        <StepHeading number="2">Contextual</StepHeading>
        <p>
          By providing solutions based on user’s product journey, what a user
          sees changes with their order and how close their travel date is.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Enable Call for High Emergency state:</strong> Within two
            hours of departure, Free Internet Call, Domestic Call and
            International Call appear. They are absent in every other state.
          </li>
          <li>
            <strong>
              Order card content shifts from general issues to time-critical
              ones:
            </strong>{" "}
            &quot;I cannot check-in at the airport&quot;, &quot;My flight has
            been rescheduled&quot;
          </li>
        </ul>
        <Figure
          bleed={false}
          src="/images/work/help-center-emergency.jpg"
          alt="High Emergency halo tiket screen with call options and time-critical order prompts"
        />

        <StepHeading number="3">Simplicity</StepHeading>
        <p>
          To minimize what users need to learn, we simplified the user
          experience to focus on what really matters to users.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            The order card shows only{" "}
            <strong>the three most relevant topics,</strong> replacing the old
            generic list
          </li>
          <li>
            No Orders state shows <strong>product-tabbed FAQs</strong> with
            relevant help topics
          </li>
        </ul>
        <Figure
          bleed={false}
          src="/images/work/help-center-faqs.jpg"
          alt="No Orders state with product-tabbed FAQs and three relevant help topics"
        />

        <Subhead>What if users already have an open case?</Subhead>
        <p>
          A dynamic entry point appears at the top of the page only when the
          user has an active complaint. It stays hidden entirely when there is
          nothing to track.
        </p>
        <Figure
          bleed={false}
          src="/images/work/help-center-open-case.jpg"
          alt="Dynamic open-case entry point at the top of halo tiket when a complaint is already active"
        />
      </Section>

      <Section
        id="success-metrics"
        label="Success Metrics"
        heading="Key Metrics & Business Value"
      >
        <p>
          Success is measured on whether users reach the right level of support
          at the right time, and on how much repeatable load the design removes
          from human agents.
        </p>
        <div className="space-y-4">
          <MetricRow number="1">
            📉 Contact-to-agent rate for repeatable issues
          </MetricRow>
          <MetricRow number="2">
            📈 Chat share of non-urgent support volume
          </MetricRow>
          <MetricRow number="3">
            💬 Agent capacity redirected to genuinely complex cases
          </MetricRow>
        </div>
      </Section>

      <Section
        id="reflection"
        label="Reflection"
        heading="What I've Learnt & Special Thanks"
      >
        <p>
          Throughout this project, I collaborated with several new stakeholders
          as I just transitioned into joining Customer Service & Fulfilment
          Product & Design Team.
        </p>
        <p>
          I led the redesign of the Help Center Revamp, facilitating workshops
          with stakeholders from CS, CX, Corporate Strategy, and others.
          Additionally, I conducted usability testing alongside the research
          team to optimize the user experience for tiket.com users.
        </p>
        <p>
          I also contributed to the development of tiket.com&apos;s VOIP Call
          system and new chatbot, refining previous data and designs to deliver
          improved solutions that better meet user needs.
        </p>
        <p>
          <strong>Collaborators</strong>
          <br />
          With thanks to everyone I worked alongside on this project.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Product Design team - Yossie Gunawan, Nuriyah Amalia, Mawla Muhdiar,
            Sri Izzati
          </li>
          <li>Product team - Yocky Tegar, Rian Bastian</li>
          <li>Tech Platform Team</li>
          <li>
            CS (Customer Service), CX (Customer Experience), Brand Marketing,
            Corporate Strategy
          </li>
        </ul>
      </Section>
    </>
  );
}
