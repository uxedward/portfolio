export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourceStep = {
  title: string;
  body: string;
  command?: string;
  extra?: string;
};

export type Resource = {
  slug: string;
  category: string;
  title: string;
  pageTitle: string;
  summary: string;
  readTime: string;
  cta: string;
  links: ResourceLink[];
  steps: ResourceStep[];
};

export const resources: Resource[] = [
  {
    slug: "figma-claude-setup",
    category: "AI & CODE",
    title: "Figma MCP & Claude Code Setup",
    pageTitle: "Figma MCP & Claude Code Setup",
    summary:
      "Install and configure the Figma Remote MCP Plugin to interact directly with your designs through Claude's command line.",
    readTime: "8 min read",
    cta: "Read Guidebook",
    links: [
      {
        label: "Claude Code Documentation",
        href: "https://code.claude.com/docs/en/overview",
      },
      {
        label: "Figma MCP Documentation",
        href: "https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#claude-code",
      },
    ],
    steps: [
      {
        title: "Get Figma & Claude Paid Plans",
        body: "Minimum Requirements: Figma Professional and Claude Pro",
      },
      {
        title: "Enable Figma MCP",
        body: "Switch to Dev Mode from the bottom toolbar, Enable MCP server and choose Claude Code.",
      },
      {
        title: "Install Claude Code via Terminal",
        body: "Run this command in your terminal:",
        command: "curl -fsSL https://claude.ai/install.sh | bash",
      },
      {
        title: "Install Figma MCP into Claude Code: Figma Remote MCP Plugin",
        body: "Run this command in your terminal:",
        command: "claude plugin install figma@claude-plugins-official",
      },
      {
        title: "Make Figma MCP available for all your Figma projects",
        body: "Run this command in your terminal and verify your Figma account:",
        command:
          "claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp",
      },
      {
        title: "Install Figma into Claude Desktop App",
        body: "Download Claude Desktop and Install Figma Connector & Plugin.",
      },
    ],
  },
  {
    slug: "mobbin-setup",
    category: "AI & CODE",
    title: "Setting up Mobbin MCP",
    pageTitle: "Claude Code & Mobbin Setup",
    summary: "Install Mobbin MCP into Claude Code",
    readTime: "8 min read",
    cta: "Read Guidebook",
    links: [
      {
        label: "Claude Code Documentation",
        href: "https://code.claude.com/docs/en/overview",
      },
      {
        label: "Video Tutorial",
        href: "https://www.instagram.com/reel/DbnuUhIpbrD/?utm_source=ig_web_copy_link",
      },
    ],
    steps: [
      {
        title: "Get Claude & Mobbin Paid Plans",
        body: "Minimum Requirements: Claude Pro & Mobbin Pro",
        extra: "Get 20% off: mobbin.com/edward",
      },
      {
        title: "Install Mobbin via Claude Code Terminal",
        body: "Run this command in your terminal:",
        command:
          "claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp",
      },
      {
        title: "Authenticate Access",
        body: "Authenticate & Sign in with your Mobbin account to authorize access.",
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
