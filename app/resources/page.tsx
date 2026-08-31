import type { Metadata } from "next";
import { RiseIn } from "@/components/rise-in";
import { GuideHeader, ResourceCard } from "@/components/resource-card";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Edward’s Guidebook — setup notes for Figma MCP, Claude Code, and Mobbin.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <RiseIn>
        <GuideHeader title="Edward’s Guidebook" kicker="Resources" />
      </RiseIn>
      <RiseIn>
        <div className="mt-2">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </RiseIn>
    </div>
  );
}
