import {
  Figure,
  Issue,
  Metrics,
  Section,
  StepHeading,
  Subhead,
} from "@/components/case-study/layout";

export const carRentalsToc = [
  { id: "in-a-nutshell", label: "In A Nutshell" },
  { id: "context", label: "Context" },
  { id: "problem-discovery", label: "Problem Discovery" },
  { id: "problem-1", label: "Problem #1: Educate" },
  { id: "solution-1", label: "Solution #1" },
  { id: "problem-2", label: "Problem #2: Zone" },
  { id: "zone-2-1", label: "Zone Problem #2.1" },
  { id: "zone-2-2", label: "Zone Problem #2.2" },
  { id: "solution-2", label: "Solution #2" },
  { id: "reflection", label: "Reflection" },
];

export function CarRentalsBody() {
  return (
    <>
      <Section
        id="in-a-nutshell"
        label="In A Nutshell"
        heading="Revamping Business Model & User Experience"
      >
        <p>
          In response to numerous complaints about our business model and user
          experience, my team and I took several steps to improve our design
          and user experience:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <em>User Interview</em> from Customer Service Complaints
          </li>
          <li>
            <em>User Behaviour Analysis</em> through Amplitude
          </li>
          <li>
            <em>Usability Testing</em> on Car Rental users
          </li>
          <li>
            <em>How Might We</em> Framework
          </li>
        </ul>
        <p>These efforts led to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>+16.7% Increased CVR</strong> from Landing Page to Search
            Result Page
          </li>
          <li>
            <strong>+218% Increased CVR</strong> viewing Car information
          </li>
          <li>
            <strong>+19.8% Increased CVR</strong> from Product Detail Page to
            Booking Form
          </li>
          <li>
            <strong>+8.2% Increased CVR</strong> from Booking Form Page to
            Payment Page
          </li>
          <li>
            <strong>-5% Decreased</strong> in inquiries regarding How to Rent
          </li>
          <li>
            <strong>-8% Decreased</strong> in complaints regarding Area/Zone
            Usage
          </li>
        </ul>
        <p>Here&apos;s how the story goes ▼</p>
      </Section>

      <Section
        id="context"
        label="Context"
        heading="Understanding Car Rentals"
      >
        <p>
          tiket.com is a South-east Asia&apos;s Travel unicorn, serving 52+
          millions active users. Offering 10+ travel solutions like Flights,
          Hotels and Trains.
        </p>
        <p>
          Car Rentals by tiket.com offers car rental services across Indonesia,
          with options to rent with or without a driver. The main product flow
          includes:
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>Landing Page:</strong> Users input the rental city, date,
            time, and duration.
          </li>
          <li>
            <strong>Search &amp; Vendor Selection:</strong> Users choose the car
            type, vendor, and package from tiket.com.
          </li>
          <li>
            <strong>Product Detail Page:</strong> Users review the selected car,
            vendor, and package details.
          </li>
          <li>
            <strong>Booking Form:</strong> Users enter their pickup and drop-off
            locations, along with any additional Area/Zones they plan to visit.
          </li>
        </ol>
        <Figure
          src="/images/work/car-6.png"
          alt="Car Rental Flow [Late 2021]"
        />
      </Section>

      <Section
        id="problem-discovery"
        label="Problem Discovery"
        heading="High Complaints & Inquiries"
      >
        <p>
          During October 2021 - February 2022 period, there are a large number
          of complaints and inquiries regarding Car Rentals.
        </p>
        <div className="space-y-3">
          <Issue number="1" title="🚨 No Incentive to Explore">
            <p>44% - General Information of Car Rentals</p>
            <p>20% - How to order Car Rental at tiket.com</p>
          </Issue>
          <Issue number="2" title="🚨 Unclear Business & User Experience">
            <p>12% - Additional Payment &amp; Zone Issue</p>
          </Issue>
        </div>
      </Section>

      <Section
        id="problem-1"
        label="Problem #1"
        heading="No Incentive to Explore"
      >
        <p>
          Rather than exploring the product, users were directly reaching out
          to Customer Service with inquiries such as:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>How to Book Car Rentals in tiket.com?</li>
          <li>What are the regulations for renting in tiket.com?</li>
        </ul>
        <p className="pt-4 text-[12px] uppercase tracking-[0.16em] text-ink-soft">
          Insight #1
        </p>
        <Subhead>High Drop-off Rate in Landing Page</Subhead>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>62% user dropped-off</strong> from Landing Page without
            continuing to Search Result Page
          </li>
          <li>
            <strong>only 8.5% of</strong> total users viewed Car Rental
            Regulations
          </li>
        </ul>
        <p>
          <strong>🚧 Lack of Guidance</strong>
          <br />
          We hypothesize that the lack of step-by-step guidance &amp; visible
          entry points causes this confusion.
        </p>
        <p>
          ❓ <em>How Might We</em>
          <br />
          Educate users early on the car rental booking process and rental
          regulations on tiket.com
        </p>
        <Figure
          src="/images/work/car-10.jpg"
          alt="Landing Page — 38% users clicked search, 8.5% users clicked regulations"
        />
      </Section>

      <Section
        id="solution-1"
        label="Solutions #1"
        heading="Guiding Our Users"
      >
        <p>
          To educate our users early in the process, we improved our landing
          page by designing 3 new features:
        </p>
        <Figure
          src="/images/work/car-3.jpg"
          alt="NEW Landing Page with How to Rent info, video, and FAQ"
        />
        <StepHeading number="1">
          Info Page Banner - <em>How to Rent Cars in tiket.com</em>
        </StepHeading>
        <p>
          Create a clear entry point for users to access a step-by-step car
          rental guide on tiket.com before booking.
        </p>
        <Figure
          src="/images/work/car-18.jpg"
          alt="NEW Landing Page and How to Order Info Page"
        />
        <StepHeading number="2">
          Video - <em>How to Rent Cars in tiket.com</em>
        </StepHeading>
        <p>
          A visual guide that walks users through the car rental process on
          tiket.com.
        </p>
        <Figure
          src="/images/work/car-11.jpg"
          alt="How to Rent Video Tutorial on the landing page"
        />
        <StepHeading number="3">Frequently Asked Questions Page</StepHeading>
        <p>
          A comprehensive FAQ section answering the most common inquiries about
          the Car Rental product.
        </p>
        <Figure
          src="/images/work/car-17.jpg"
          alt="Frequently Asked Questions page"
        />
        <StepHeading number="4">
          <em>NEW</em> Landing Page &amp; Impact
        </StepHeading>
        <p>
          To validate whether my designs worked, we conducted an A/B Experiment
          to test both designs. The new designs resulted in the following
          results:
        </p>
        <Metrics
          items={[
            {
              value: "+16.7%",
              label:
                "Increased CVR (Conversion Rate) from Landing Page to Search Result Page",
            },
            {
              value: "+218%",
              label:
                "Increased CVR (Conversion Rate) viewing Car information including 3 new features above.",
            },
            {
              value: "-5%",
              label: "Decreased in inquiries regarding How to Rent",
            },
          ]}
        />
      </Section>

      <Section
        id="problem-2"
        label="Problem #2"
        heading="Unclear Business Model & User Experience"
      >
        <p>Users were complaining about:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Additional charges imposed by vendors.</li>
          <li>Confusion around the concept of &quot;Zones.&quot;</li>
          <li>The user experience when adding Zones for rental.</li>
        </ul>
        <p className="pt-4 text-[12px] uppercase tracking-[0.16em] text-ink-soft">
          Undestanding Zones
        </p>
        <Subhead>
          What is <em>“Zone Usage”</em>?
        </Subhead>
        <p>Zone Usage defines the distance coverage for a rented car.</p>
        <p>Each city has a Main Zone and 2-4 additional zones.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Zone 0 / Main Zone:</strong> No additional charges.
          </li>
          <li>
            <strong>Zones 1, 2, 3, 4:</strong> Additional charges apply,
            increasing with each zone beyond the Main Zone, and are billed
            daily.
          </li>
        </ul>
        <p>Example (Bali):</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Zone 0:</strong> Kuta, Denpasar, Sanur, Uluwatu, Canggu.
          </li>
          <li>
            <strong>Zone 1:</strong> Zone 0 + Tanah Lot, Tabanan, Gianyar, Ubud.
          </li>
          <li>
            <strong>Zone 2:</strong> Zone 0, 1 + Bedugul, Bangli, Karangasem,
            Klungkung.
          </li>
          <li>
            <strong>Zone 3:</strong> Zone 0, 1, 2 + Singaraja, Buleleng, Negara.
          </li>
        </ul>
        <p>
          Hence, Purchasing Zone 3 for the same day includes Zones 1 and 2, so
          no additional payment is required for those zones.
        </p>
        <Figure
          src="/images/work/car-16.jpg"
          alt="Bali - Zone Usage Map [Early 2022]"
        />
        <Subhead>Problems with Zones</Subhead>
        <p>
          User Interviews (from Customer Service Complaints) and User Behaviour
          Analysis (using Amplitude) revealed that most customers who complained
          about the Zone feature were:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Unaware of the Zone Concepts,</li>
          <li>
            Uninformed that purchasing a larger Zone includes all preceding
            Zones, and
          </li>
          <li>
            Perceived the cost of adding Zones as excessively high after
            selection in the app.
          </li>
        </ul>
        <p>
          In which, we can conclude <strong>2 main problems:</strong>
        </p>
        <div className="space-y-3">
          <Issue number="1" title="🚨 Unclear Education of Zone Concept" />
          <Issue
            number="2"
            title="🚨 Missing Important Information + Usability Problems"
          />
        </div>
      </Section>

      <Section
        id="zone-2-1"
        label="Zone Problem #2.1"
        heading="Unclear Education of Zone Concept"
      >
        <p>
          We evaluated our designs by identifying the sections across different
          pages that provide information on Zone and Zone Usage.
        </p>
        <StepHeading number="1">Product Detail Page</StepHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Informs <em>Your Rental Area</em> (covering the city&apos;s Main
            Zone / Zone 0) <strong>but lacks details of other zones.</strong>
          </li>
          <li>
            <strong>No information</strong> which areas are considered within
            the city (Main Zone) or outside the city (Zone 1, 2 &amp; 3).
          </li>
        </ul>
        <Figure
          src="/images/work/car-15.jpg"
          alt="Product Detail Page — Your Rental Area and package details"
        />
        <StepHeading number="2">Booking Form Page</StepHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Informs <em>Your Rental Area</em> (covering the city&apos;s Main
            Zone / Zone 0) <strong>but lacks details of other zones.</strong>
          </li>
          <li>
            Users will only know what Zone their designated location is at{" "}
            <strong>
              when filling in their Pickup &amp; Drop-off location.
            </strong>
          </li>
        </ul>
        <Figure
          src="/images/work/car-14.jpg"
          alt="Booking Form Page pickup and drop-off zone fees"
        />
        <StepHeading number="3">Additional Zone Page</StepHeading>
        <ul className="list-disc space-y-1 pl-5">
          <li>Contains information about Zone concepts</li>
          <li>
            Since it is optional and not prominently highlighted,{" "}
            <strong>
              users often overlook it and remain uninformed.
            </strong>
          </li>
        </ul>
        <Figure
          src="/images/work/car-21.jpg"
          alt="Additional Zone Page from the booking form"
        />
        <Subhead>How Might We 💡</Subhead>
        <p>
          Seamlessly inform users regarding the concepts of Zone Usage during
          their booking process
        </p>
      </Section>

      <Section
        id="zone-2-2"
        label="Zone Problem #2.2"
        heading="Missing Important Information + Usability Problem"
      >
        <p>
          Our designs do not present clear information regarding Zone Concepts,
          resulting users in surprise when charged by our Car Rental vendors.
        </p>
        <Figure
          src="/images/work/car-19.jpg"
          alt="Adding Zones flow forcing payment for Zones 1 and 2 after selecting Zone 3"
        />
        <Subhead>Adding Zones Page (Booking Form Page)</Subhead>
        <p>
          Our current design requires users to select Zones first and then
          choose the days for travel, leading to confusion when they are
          incorrectly forced to pay for Zones 1 &amp; 2 after selecting Zone 3.
        </p>
        <p>
          <strong>
            This creates a significant usability issue, giving the impression of
            overcharging.
          </strong>
        </p>
        <p>
          Additionally, after users add Zones, the booking form{" "}
          <strong>
            does not clearly display the cost for each selected Zone.
          </strong>
        </p>
        <Subhead>How Might We 💡</Subhead>
        <p>
          Communicate that a larger Zone includes all preceding Zones to
          minimize confusion and extra charges
        </p>
      </Section>

      <Section
        id="solution-2"
        label="Solutions #2"
        heading="Revamping our Business Model & User Experience"
      >
        <p>
          Through multiple iterations and usability tests, we refined three key
          pages: the Product Detail Page, Booking Form Page, and Adding Zones
          Page.
        </p>
        <p>
          Before breaking down each page, we also found through qualitative
          research that users found the term <em>&quot;Zone&quot;</em> unclear,
          prompting us to replace it with <em>&quot;Area&quot;</em> for improved
          clarity.
        </p>
        <h3 className="pt-6 font-sans text-2xl tracking-tight text-ink">
          Product Detail Page
        </h3>
        <StepHeading number="1">Restructuring Information Architect</StepHeading>
        <p>
          We restructured our Product Detail Page by aligning it with our
          users&apos; primary intentions when exploring the page, prioritizing
          the following order:
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Car &amp; Vendor Details</li>
          <li>Rental Details</li>
          <li>What’s Included &amp; What’s Not</li>
        </ol>
        <Figure
          src="/images/work/car-4.jpg"
          alt="Product Detail Page — old versus NEW"
        />
        <StepHeading number="2">New Section: Your Rental Area</StepHeading>
        <p>
          Provide users with early education on their city’s Rental Area(s).
        </p>
        <Figure
          src="/images/work/car-13.jpg"
          alt="NEW Product Detail Page and Coverage Areas in Bali"
        />
        <StepHeading number="3">Improved Package Details</StepHeading>
        <p>
          Simplified the section and emphasized key information, particularly
          regarding the Rental Area.
        </p>
        <Figure
          src="/images/work/car-2.jpg"
          alt="NEW Product Detail Page — emphasized package details"
        />
        <StepHeading number="4">
          <em>NEW</em> Product Detail Page
        </StepHeading>
        <p>
          To validate whether my designs worked, we conducted an A/B Experiment
          to test both designs. The new designs resulted in the following
          results:
        </p>
        <Metrics
          items={[
            {
              value: "49.3%",
              label: "CTR (Click-through Rate) of Your Rental Area",
            },
            {
              value: "+19.8%",
              label:
                "Increased CVR (Conversion Rate) from Product Detail Page to Booking Form",
            },
          ]}
        />
        <h3 className="pt-6 font-sans text-2xl tracking-tight text-ink">
          Booking Form Page
        </h3>
        <StepHeading number="1">From 1 Page to 2 Pages</StepHeading>
        <p>We restructured our Booking Form into two distinct pages:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            <strong>First Page:</strong> Users input location and area details.
          </li>
          <li>
            <strong>Second Page:</strong> A summary of the entered information,
            along with Things You Need to Know.
          </li>
        </ol>
        <Figure
          src="/images/work/car-5.jpg"
          alt="Booking Form Page Improvements — from 1 page to 2 pages"
        />
        <StepHeading number="2">Pickup &amp; Drop-off Area Fees</StepHeading>
        <p>
          When users select their Pickup &amp; Drop-off locations, we inform
          them of the associated Area fees and provide an explanation for the
          charges.
        </p>
        <Figure
          src="/images/work/car-9.jpg"
          alt="Pickup and Drop-off location Area fees"
        />
        <StepHeading number="3">Adding a Rental Area</StepHeading>
        <p>
          Informs users of the Areas added, whether through Pickup/Drop-off
          selection or adding them manually.
        </p>
        <Figure
          src="/images/work/car-7.jpg"
          alt="Adding a Rental Area on the booking form"
        />
        <h3 className="pt-6 font-sans text-2xl tracking-tight text-ink">
          Add Area Page
        </h3>
        <StepHeading number="1">Selecting Area by Date</StepHeading>
        <p>
          We improved the flow by displaying dates with an expandable view,
          allowing users to select the furthest Area/Zone they&apos;d like to
          travel to on a given day. This prevents any unnecessary overcharges
          when adding an Area/Zone.
        </p>
        <Figure
          src="/images/work/car-8.jpg"
          alt="OLD Add Area Page versus NEW Add Area Page"
        />
        <StepHeading number="2">Informative Area Information</StepHeading>
        <p>
          We emphasized that purchasing a further Area/Zone automatically
          includes all preceding Zones (e.g., purchasing Zone 3 for the same day
          also covers Zones 1 and 2, with no additional charges required).
        </p>
        <Figure
          src="/images/work/car-20.jpg"
          alt="OLD Area Information versus NEW Area Information"
        />
        <StepHeading number="3">What is My Route&apos;s Area?</StepHeading>
        <p>
          Users can now search to identify the Area/Zone associated with their
          designated route or location.
        </p>
        <Figure
          src="/images/work/car-1.jpg"
          alt="NEW Search Bar to check a location's Area"
        />
        <Subhead>
          <em>NEW</em> Business Scheme &amp; User Experience Impact
        </Subhead>
        <p>
          To validate whether my designs worked, we conducted an A/B Experiment
          to test both designs. The new designs resulted in the following
          results:
        </p>
        <Metrics
          items={[
            {
              value: "+8.2%",
              label: "Increased CTR from Booking Form Page to Payment Page",
            },
            {
              value: "+20%",
              label: "Increased CTR of Add Area Page",
            },
            {
              value: "-8%",
              label: "Decreased in complaints regarding Area/Zone Usage",
            },
          ]}
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
          <li>Conducted Live Usability Tests with Research Team</li>
          <li>Conducted A/B Experiment and having the new designs win</li>
        </ul>
        <p>
          <strong>Shoutout to all collaborators</strong>
          <br />
          Huge shoutout to everyone I collaborated with during this project
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Product Design team - Emilia, Datuk, Nindya, Misbeh, Ryan S</li>
          <li>Product team - Alwan, Yocky, Babas</li>
          <li>Tech team</li>
          <li>and many more others.</li>
        </ul>
      </Section>
    </>
  );
}
