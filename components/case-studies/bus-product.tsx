import {
  Figure,
  Section,
  Subhead,
} from "@/components/case-study/layout";

export const busProductToc = [
  { id: "in-a-nutshell", label: "In A Nutshell" },
  { id: "research", label: "Research" },
  { id: "insights", label: "Insights" },
  { id: "design", label: "Design" },
  { id: "copy", label: "Copy & Emotion" },
  { id: "illustration", label: "Illustration" },
  { id: "takeaways", label: "Takeaways" },
];

export function BusProductBody() {
  return (
    <>
      <Section
        id="in-a-nutshell"
        label="In A Nutshell"
        heading='The Design Odyssey of "Bus and Shuttle"'
      >
        <p>
          In the bustling landscape of Indonesia&apos;s transportation, buses
          and shuttles weave an essential thread by connecting people and
          cultures. Recognizing the pivotal role these modes of transport play
          in the lives of millions, we embarked on a design journey to enhance
          the way people move using buses and shuttles.
        </p>
        <p>
          With buses and shuttles securing the top two spots in search inquiries
          on tiket.com, our team set out to address the unique needs of our
          users, ensuring a seamless and efficient booking process.
        </p>
        <p>
          The goal was clear: to elevate the user journey, streamline processes,
          and boost the market presence of buses and shuttles on our platform.
        </p>
        <Figure
          src="/images/work/bus-odyssey-01.gif"
          alt="Bus and Shuttle product exploration"
        />
        <p className="text-sm text-ink-soft">
          Originally published on tiket.design · 7 Jun 2024 · Contributors:
          Zahra Auliaul, Edward Sudjono, Nindya Ardyani, Ryan Setiawan
        </p>
      </Section>

      <Section
        id="research"
        label="Research"
        heading="What approach and methods were used for research?"
      >
        <p>
          We first conducted several <strong>workshops</strong> to gather
          hypotheses on what bus and shuttle users are like and intents from
          each stakeholder as well as the Business, Product, User, and Tech
          Team.
        </p>
        <Subhead>Online Workshop</Subhead>
        <Figure
          src="/images/work/bus-odyssey-02.jpg"
          alt="Online workshop"
        />
        <p>
          <strong>Second</strong>, we also conduct <strong>field research
          trips</strong> to experience the products and gather real-life
          insights and additional hypotheses.
        </p>
        <p>
          In parallel, we invited some people who previously used bus and
          shuttle services from various communities to have a{" "}
          <strong>user interview</strong>.
        </p>
        <Subhead>Field Research - Buying Bus tickets &amp; Riding</Subhead>
        <Figure
          src="/images/work/bus-odyssey-03.webp"
          alt="Field research — buying bus tickets and riding"
        />
        <Figure
          src="/images/work/bus-odyssey-04.webp"
          alt="Field research documentation"
        />
        <p>
          However, we still needed to compare our ideas and solutions with
          competitors so we did a <strong>competitor analysis</strong>.
        </p>
        <Figure
          src="/images/work/bus-odyssey-05.webp"
          alt="Competitor analysis"
        />
      </Section>

      <Section
        id="insights"
        label="Insights from Research"
        heading="Four pillars"
      >
        <p>
          There are a lot of pain points, behaviors, needs, and wants that we
          discovered from our research. We grouped them into 4 pillars to
          organize and act on the ideas for the design solution. The pillars
          are:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Anxiety/Worried</strong>, capture the user&apos;s feelings
            of uncertainty about comfort, security, and the seamless of the
            experience.
          </li>
          <li>
            <strong>Confused/Complicated</strong>, capture the difficulties
            faced when purchasing the ticket.
          </li>
          <li>
            <strong>Lack of Nudging</strong>, capture the user&apos;s wants for
            benefits, flexibility, or personal preference needs.
          </li>
          <li>
            <strong>Lack of Information</strong> capture the user&apos;s needs
            for some important information to help their purchase decision.
          </li>
        </ul>
        <Figure
          src="/images/work/bus-odyssey-06.gif"
          alt="Research insights grouped into four pillars"
        />
      </Section>

      <Section
        id="design"
        label="Design"
        heading="How to implement the research result to the design?"
      >
        <p>
          After building 4 pillars of the insight, we can define our Product
          Design Principle to guide us throughout our Product Creation process.
          We would like to solve them by creating designs that are Smart,
          Customizable, Motivating Users, and Educative.
        </p>
        <p>Example:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Smart:</strong> Guiding users to the next step, recommending
            what&apos;s relevant for them
          </li>
          <li>
            <strong>Customizable:</strong> Allowing users to customize to
            personal preferences
          </li>
          <li>
            <strong>Motivating Users:</strong> Nudging users to purchase
          </li>
          <li>
            <strong>Educative:</strong> Informing users important and relevant
            information
          </li>
        </ol>
        <Figure
          src="/images/work/bus-odyssey-08.webp"
          alt="Product design principles from research"
        />
        <Figure
          src="/images/work/bus-odyssey-09.webp"
          alt="Design principle examples"
        />
        <Figure
          src="/images/work/bus-odyssey-10.gif"
          alt="Bus and Shuttle product design implementation"
        />
      </Section>

      <Section
        id="copy"
        label="Copy & Emotion"
        heading="What emotions or feelings do you hope to evoke?"
      >
        <p>We have two things to aim while crafting the wording.</p>
        <p>
          <strong>First,</strong> we aim to build confidence and trust in the
          users by highlighting the reliability and trustworthiness of our
          product. We highlighted the assurance of securing a seat reservation
          to address the worry of loyal users accustomed to ordering directly
          from trusted partners.
        </p>
        <p>
          <strong>Second,</strong> we want to evoke a sense of joy and
          excitement upon hearing about the launch of our Bus and Shuttle
          product. We want our users to have a satisfying experience while they
          try the product. And most importantly, our users can appreciate the
          design.
        </p>
        <Subhead>Example of wording that we&apos;ve crafted based on our goal.</Subhead>
        <Figure
          src="/images/work/bus-odyssey-12.webp"
          alt="Example of wording crafted for Bus and Shuttle"
        />
        <Figure
          src="/images/work/bus-odyssey-13.gif"
          alt="Copy explorations for Bus and Shuttle"
        />
      </Section>

      <Section
        id="illustration"
        label="Illustration"
        heading="What are the challenges you found throughout this project?"
      >
        <p>
          For our Bus &amp; Shuttle illustrations &amp; product icon, I have to
          collaborate with Edward as a designer &amp; Nindya as a UX writer.
          Edward helped me to facilitate the brainstorming session and Nindya
          helped me by providing the copy to keep the illustration in context.
          Hence, my iterations will align with their intentions.
        </p>
        <p>
          Once I had a baseline to work with, I started my exploration through
          3D models, where I enjoyed creating the small details of the
          illustration.
        </p>
        <Figure
          src="/images/work/bus-odyssey-15.webp"
          alt="Bus and Shuttle illustration exploration"
        />
        <Figure
          src="/images/work/bus-odyssey-17.webp"
          alt="Bus and Shuttle product illustrations"
        />
      </Section>

      <Section
        id="takeaways"
        label="Takeaways"
        heading="What are the key takeaways and lessons learned from this project?"
      >
        <p>
          &quot;Through this project, I&apos;ve learnt that being a product
          designer requires listening to stakeholder&apos;s wants &amp; needs
          through alignment, kick-off and workshops. I&apos;ve also learn that
          sometimes the design solutions we may not always be the best, so being
          open to suggestions and criticism is important.&quot;
        </p>
        <p>
          <strong>Lawrence Edward</strong>
        </p>
        <p>
          &quot;Understanding the difference among the markets, users, and
          operational aspects of bus and transportation services is important.
          Also, it&apos;s essential to recognize that not all challenges can be
          readily addressed by a company, regardless of its well-meaning
          intentions. A thorough comprehension of the product is crucial for
          grasping the user&apos;s perspective effectively. With a solid grasp
          of product knowledge, reliance on others for information is reduced,
          facilitating smoother decision-making processes.&quot;
        </p>
        <p>
          <strong>Nindya Ardyani</strong>
        </p>
        <p>
          &quot;Compared to Hotels and Flights users, Bus and Shuttle users are
          not used by purchasing their tickets online. Hence, only using
          competitive analysis as a research method is not enough to cater all
          the users concern.&quot;
        </p>
        <p>
          <strong>Zahra Auliaul</strong>
        </p>
        <p>
          &quot;Illustrating the Bus and Shuttle project is challenging but
          exciting. I got many insights that I haven&apos;t gained from
          non-flight transportation before, such as bus type and their technical
          specification. The team was accommodating throughout the crafting
          process and helped me with their feedback. I hope Bus and Shuttle will
          keep on growing.&quot;
        </p>
        <p>
          <strong>Ryan Setiawan</strong>
        </p>
      </Section>
    </>
  );
}
