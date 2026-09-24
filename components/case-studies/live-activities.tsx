import Image from "next/image";
import { Figure, Section } from "@/components/case-study/layout";
import { cn } from "@/lib/cn";

export const liveActivitiesToc = [
  { id: "in-a-nutshell", label: "Executive Summary" },
  { id: "context", label: "Context" },
  { id: "the-problem", label: "The Problem" },
  { id: "discovery", label: "Discovery" },
  { id: "defining-goals", label: "Defining Goals" },
  { id: "how-might-we", label: "How Might We" },
  { id: "design-principles", label: "Design Principles" },
  { id: "master-template", label: "The Master Template" },
  { id: "three-types", label: "The Three Types" },
  { id: "type-countdown", label: "Countdown + Action" },
  { id: "type-fyi", label: "FYI for Transports" },
  { id: "self-service", label: "Self-Service Dashboard" },
  { id: "reflection", label: "Reflection" },
];

const caseImageStyle = {
  width: "100%",
  height: "auto",
  aspectRatio: "auto",
} as const;

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
        <div className="min-w-0 text-base leading-[1.55] text-ink sm:text-lg">
          {issue}
        </div>
        <div className="flex items-start gap-3 lg:contents">
          <p
            className="text-base leading-[1.55] text-ink sm:text-lg"
            aria-hidden
          >
            →
          </p>
          <div className="min-w-0 text-base leading-[1.55] text-ink sm:text-lg">
            {impact}
          </div>
        </div>
      </div>
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
      <div className="min-w-0 space-y-1 text-base leading-[1.55] text-ink sm:text-lg sm:leading-[1.55]">
        {title ? (
          <h3 className="text-lg font-bold text-ink sm:text-xl">{title}</h3>
        ) : null}
        {children}
      </div>
    </div>
  );
}

function InfoCard({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex h-full flex-col gap-2.5 rounded-[12px] border border-hairline bg-paper p-5">
      {kicker ? (
        <p className="text-[12px] font-semibold tracking-[0.08em] text-case-link">
          {kicker}
        </p>
      ) : null}
      <h3 className="text-base font-bold text-ink sm:text-lg">{title}</h3>
      <div className="space-y-1 text-sm leading-6 text-ink-muted sm:text-base sm:leading-[1.5]">
        {children}
      </div>
    </article>
  );
}

function SpecBlock({
  label,
  children,
  figure,
}: {
  label: string;
  children: React.ReactNode;
  figure?: React.ReactNode;
}) {
  return (
    <div className="space-y-3 rounded-[12px] border border-hairline bg-paper p-5">
      <p className="text-[12px] font-semibold tracking-[0.08em] text-case-link">
        {label}
      </p>
      <div className="space-y-2 text-sm leading-6 text-ink-muted sm:text-base sm:leading-[1.5]">
        {children}
      </div>
      {figure}
    </div>
  );
}

function DarkFigure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-[12px] bg-ink p-4 sm:p-5">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        sizes="100vw"
        className="block h-auto w-full max-w-full"
        style={caseImageStyle}
      />
    </figure>
  );
}

function LockScreen({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-[12px] bg-ink">
        <Image
          src={src}
          alt={alt}
          width={758}
          height={1548}
          sizes="(min-width: 1024px) 220px, 40vw"
          className="block h-auto w-full"
          style={caseImageStyle}
        />
      </div>
      <figcaption className="mt-2 text-sm font-bold text-ink">{label}</figcaption>
    </figure>
  );
}

const nestedListClass = "list-disc space-y-1 pl-[1.15em]";

export function LiveActivitiesBody() {
  return (
    <>
      <Section
        id="in-a-nutshell"
        label="In A Nutshell"
        heading="Standardizing Live Activity Notifications"
        card
      >
        <p>
          This project covers the{" "}
          <strong>
            standardization of tiket.com&apos;s Live Activities into a single
            template system
          </strong>
          . By replacing WhatsApp and SMS reminders that cost Rp1.76B per
          quarter with a channel that is free to update once triggered, the work
          aimed to reduce notification costs while preserving user engagement.
          In this project, I led the following efforts:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Discovery:</strong> Conducted vertical discovery across 25
            teams to collect every proposed Live Activity use case
          </li>
          <li>
            <strong>Pattern analysis:</strong> mapped 40+ proposed use cases
            from 25 verticals onto the customer purchase journey
          </li>
        </ul>
        <p>These efforts resulted in a:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            A three-type template that covers every vertical use case, replacing
            per-vertical builds
          </li>
          <li>
            <strong>40+ use case requests</strong> consolidated into three
            reusable types.
          </li>
        </ul>
        <p>Here&apos;s how the story unfolds ▼</p>
        <Figure
          bleed={false}
          src="/images/work/live-activities-1.png"
          alt="Old Live Activity designs versus the new standardized template"
        />
      </Section>

      <Section
        id="context"
        label="Context"
        heading="Live Activities at tiket.com"
      >
        <p>
          tiket.com is a Southeast Asian travel unicorn serving 52+ million
          active users across 10+ travel products. Live Activities launched in
          2024 as a more visible and cost-effective alternative to WhatsApp and
          SMS, but each implementation shipped as a standalone project.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard kicker="2025" title="Flight status">
            <p>
              A second use case was built from scratch again, with a different
              layout, different states, and no shared components.
            </p>
          </InfoCard>
          <InfoCard kicker="2024" title="Payment reminders">
            <p>
              The first Live Activity at tiket.com. One use case, with its own
              design and its own logic.
            </p>
          </InfoCard>
        </div>
        <Figure
          bleed={false}
          src="/images/work/live-activities-2.jpg"
          alt="Early Live Activity implementations for payment reminders and flight status"
        />
      </Section>

      <Section
        id="the-problem"
        label="The Problem Statement"
        heading="Two Builds, Two Experiences, Rising Costs"
      >
        <p>
          Live Activities proved their value, but the first two implementations
          were not shared. Payment reminders and flight status each had their
          own design, logic, and release cycle, while the notification bill they
          were meant to replace continued to grow.
        </p>
        <p>Three core problems were identified:</p>
        <div className="space-y-6">
          <ProblemRow
            number="1"
            issue={
              <p>
                <strong>Fragmented implementations:</strong> Payment and flight
                status ran on separate designs and separate logic.
              </p>
            }
            impact={<p>The experience feels inconsistent across products</p>}
          />
          <ProblemRow
            number="2"
            issue={
              <p>
                <strong>High development overhead:</strong> each new use case
                took around two quarters of engineering.
              </p>
            }
            impact={<p>Verticals default back to WhatsApp and SMS</p>}
          />
          <ProblemRow
            number="3"
            issue={
              <p>
                <strong>No self-service layer:</strong> Teams could not
                configure or launch a Live Activity without engineering.
              </p>
            }
            impact={<p>Every request queues behind the platform team</p>}
          />
        </div>
      </Section>

      <Section
        id="discovery"
        label="Discovery"
        heading="40+ Requests, 25 Verticals, Three Patterns"
      >
        <p>
          My team and I conducted a request round with every vertical,
          collecting each proposed Live Activity and mapping it onto the
          customer purchase journey. Once the requests were side by side, we
          concluded that three reusable patterns could cover the set.
        </p>
        <Figure
          bleed={false}
          src="/images/work/live-activities-3.jpg"
          alt="Discovery board of Live Activity requests mapped across tiket.com verticals"
        />
        <Figure
          bleed={false}
          src="/images/work/live-activities-4.jpg"
          alt="Three reusable Live Activity patterns identified from the request round"
        />
      </Section>

      <Section
        id="defining-goals"
        label="Defining Goals"
        heading="What Each Side Needed from the Platform"
      >
        <p>
          Three groups had distinct needs from the same system. To ensure the
          template would work for everyone, I documented what each side actually
          needed before designing the solution.
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoCard title="Product Verticals">
            <ul className={nestedListClass}>
              <li>
                Launch on their own journeys without waiting for engineering
                support
              </li>
              <li>Control copy, labels, and deep links per use case</li>
            </ul>
          </InfoCard>
          <InfoCard title="Product & Strategy">
            <ul className={nestedListClass}>
              <li>Reduce notification costs from Rp1.76B per quarter</li>
            </ul>
          </InfoCard>
          <InfoCard title="Tech Platform & Design System">
            <ul className={nestedListClass}>
              <li>
                One API contract and one component set, not one build per
                vertical
              </li>
              <li>
                Governance rules that prevent verticals from breaking the layout
              </li>
              <li>
                Apple&apos;s guidance respected so the feature is not rejected
              </li>
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section
        id="how-might-we"
        label="How Might We"
        heading="How Might We Questions"
      >
        <div className="space-y-4">
          <GoalCard number="1">
            <p>
              HMW <strong>shift reminders off WhatsApp and SMS</strong> without
              losing engagement?
            </p>
          </GoalCard>
          <GoalCard number="2">
            <p>
              HMW cover every vertical&apos;s use case with{" "}
              <strong>a fixed set of templates?</strong>
            </p>
          </GoalCard>
          <GoalCard number="3">
            <p>
              HMW let teams launch a Live Activity{" "}
              <strong>without engineering effort?</strong>
            </p>
          </GoalCard>
        </div>
      </Section>

      <Section
        id="design-principles"
        label="Design Principles"
        heading="Design Principles"
      >
        <div className="space-y-4">
          <GoalCard number="1" title="Contextual">
            <ul className={nestedListClass}>
              <li>
                The type follows the shape of the information, not the product
                it belongs to.
              </li>
            </ul>
          </GoalCard>
          <GoalCard number="2" title="Standardization">
            <ul className={nestedListClass}>
              <li>One skeleton for every Live Activity.</li>
              <li>
                Components switch on and off, the layout order never changes.
              </li>
            </ul>
          </GoalCard>
          <GoalCard number="3" title="Governed">
            <ul className={nestedListClass}>
              <li>
                Colours come only from semantic tokens and illustrations from a
                shared library, so every Live Activity stays consistent in light
                and dark mode.
              </li>
            </ul>
          </GoalCard>
        </div>
      </Section>

      <Section
        id="master-template"
        label="The Master Template"
        heading="The Master Template: One Skeleton, Three States"
      >
        <p>
          Every Live Activity is built from the same component skeleton: logo,
          label, subtexts, title, progress bar, countdown or illustration, trio
          info and button. Switching components on or off produces three types:{" "}
          <strong>Countdown, Action and FYI.</strong>
        </p>
        <div className="rounded-[12px] bg-paper-2 p-5">
          <p className="text-[12px] font-semibold tracking-[0.08em] text-ink-muted">
            The Same Skeleton, Rendered as Three Types
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            <LockScreen
              src="/images/work/live-activities-countdown.png"
              alt="Countdown Live Activity on the lock screen"
              label="Countdown"
            />
            <LockScreen
              src="/images/work/live-activities-action.png"
              alt="Action Live Activity on the lock screen"
              label="Action"
            />
            <LockScreen
              src="/images/work/live-activities-fyi.png"
              alt="FYI Live Activity on the lock screen"
              label="FYI"
            />
          </div>
        </div>
      </Section>

      <Section
        id="three-types"
        label="Three Types"
        heading="Each Type Answers a Different Question About Time"
      >
        <p>
          The three types are not interchangeable. A vertical selects the type
          based on the shape of the information, not the product it belongs to,
          and works through the questions in order, stopping at the first one
          that applies.
        </p>
        <Figure
          bleed={false}
          src="/images/work/live-activities-types.png"
          alt="Countdown, Action, and FYI Live Activity templates compared"
        />
      </Section>

      <Section
        id="type-countdown"
        label="Type 01"
        heading="Countdown + Action"
      >
        <p>
          This type captures moments when users are waiting for something to{" "}
          <strong>start or finish.</strong>
        </p>
        <SpecBlock label="PURPOSE">
          <ul className={nestedListClass}>
            <li>
              <strong>Progress to Finish</strong> shows an ongoing activity
              until it&apos;s done, keeping users updated continuously.
            </li>
            <li>
              <strong>Progress to Start</strong> builds excitement for something
              about to begin.
            </li>
          </ul>
        </SpecBlock>
        <SpecBlock
          label="STRUCTURE"
          figure={
            <DarkFigure
              src="/images/work/live-activities-countdown-structure.png"
              alt="Countdown Live Activity structure with two states"
            />
          }
        >
          <p>
            Only two states exist. The layout stays fixed; only the title and
            button change.
          </p>
        </SpecBlock>
        <SpecBlock
          label="VARIANT A · Progress to Finish"
          figure={
            <DarkFigure
              src="/images/work/live-activities-variant-a.png"
              alt="Progress to Finish variant tracking an ongoing payment window"
            />
          }
        >
          <p>
            This tracks something already underway until it finishes, like a
            payment window, giving users real-time updates.
          </p>
        </SpecBlock>
        <SpecBlock
          label="VARIANT B · Progress to Start"
          figure={
            <DarkFigure
              src="/images/work/live-activities-variant-b.png"
              alt="Progress to Start variant building anticipation for a campaign"
            />
          }
        >
          <p>
            This builds anticipation for an event that hasn&apos;t started yet,
            such as a special campaign countdown.
          </p>
        </SpecBlock>
      </Section>

      <Section id="type-fyi" label="Type 02" heading="FYI for Transports">
        <p>
          Designed for long events where users want quick updates without
          reading details.
        </p>
        <SpecBlock label="WHEN TO USE">
          <p>
            When status changes multiple times over hours and users check often.
          </p>
        </SpecBlock>
        <SpecBlock
          label="STRUCTURE"
          figure={
            <DarkFigure
              src="/images/work/live-activities-fyi-structure.png"
              alt="FYI Live Activity structure with start, middle, and end states"
            />
          }
        >
          <p>
            Any number of middle states can appear between start and end. The
            trio&apos;s positions remain constant.
          </p>
        </SpecBlock>
        <SpecBlock
          label="EXAMPLE · FLIGHT DAY"
          figure={
            <DarkFigure
              src="/images/work/live-activities-flight-day.png"
              alt="Flight day Live Activity updating gate and baggage information"
            />
          }
        >
          <p>
            Flight status is shown in real-time using Live Activity, updating
            key details like gate changes and baggage drop information
            instantly.
          </p>
        </SpecBlock>
      </Section>

      <Section
        id="self-service"
        label="Type 03"
        heading="Self-Service Dashboard"
      >
        <p>
          Designed for product verticals to simulate the Live Activity they want
          to create.
        </p>
        <Figure
          bleed={false}
          src="/images/work/live-activities-dashboard-1.jpg"
          alt="Self-service dashboard for configuring a Live Activity template"
        />
        <Figure
          bleed={false}
          src="/images/work/live-activities-dashboard-2.jpg"
          alt="Self-service dashboard previewing the Live Activity on a lock screen"
        />
      </Section>

      <Section
        id="reflection"
        label="Reflection"
        heading="What I've Learnt & Special Thanks"
      >
        <p>During this project, I&apos;ve had the opportunity to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Conducted a vertical discovery round across 25 teams and mapped
            every proposed use case
          </li>
          <li>
            Consolidated 40+ requested designs into a three-type template
            system
          </li>
          <li>
            All of this is very possible with the help of my senior designer
            &amp; researcher (Zidny &amp; Lia)
          </li>
        </ul>
        <p>After the standardization, we conducted the following</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Designed the guided creation flow and its approval states</li>
          <li>
            Presented the standardization to stakeholders across Product, Tech
            Platform, and the verticals
          </li>
        </ul>
        <p>
          <strong>Shoutout to main collaborators</strong>
          <br />
          Huge shoutout to everyone I collaborated with during this project
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Product Design team - Yossie Gunawan, Irfan Zidny &amp; Nuriyah
            Amalia
          </li>
          <li>Product team - Yocky, Rian Bastian</li>
          <li>Tech Platform Team</li>
        </ul>
      </Section>
    </>
  );
}
