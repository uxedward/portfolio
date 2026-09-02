export type ResourceLink = {
  label: string;
  href: string;
};

export type ResourcePlan = {
  name: string;
  logo: string;
};

export type ResourceStep = {
  title: string;
  body: string;
  command?: string;
  extra?: string;
  plans?: ResourcePlan[];
  images?: { src: string; alt: string }[];
};

export type Resource = {
  slug: string;
  category: string;
  title: string;
  pageTitle: string;
  summary: string;
  readTime: string;
  cta: string;
  logos: { src: string; alt: string }[];
  links: ResourceLink[];
  steps: ResourceStep[];
};

export type ResourceItem = {
  title: string;
  href: string;
  body: string;
  external: boolean;
  logo: string;
  logoAlt: string;
};

export const resourceItems: ResourceItem[] = [
  {
    title: "Figma agent Playground",
    href: "https://psxid.figma.com/edward_agent",
    body: "Explore the capabilities of Figma's agents.",
    external: true,
    logo: "/images/brands/figma.png",
    logoAlt: "Figma",
  },
  {
    title: "Mobbin",
    href: "https://mobbin.com/edward",
    body: "Get 20% off your annual plan. Mobile and web app design library.",
    external: true,
    logo: "/images/brands/mobbin.png",
    logoAlt: "Mobbin",
  },
  {
    title: "Try Claude Cowork",
    href: "https://clau.de/ux.edward1",
    body: "The AI for problem solvers.",
    external: true,
    logo: "/images/brands/claude-cowork.png",
    logoAlt: "Claude Cowork",
  },
  {
    title: "Try Claude Code",
    href: "https://clau.de/ux.edward",
    body: "Describe what you need, and Claude handles the rest.",
    external: true,
    logo: "/images/brands/claude-code.png",
    logoAlt: "Claude Code",
  },
  {
    title: "Notion AI",
    href: "https://ntn.so/uxedward",
    body: "The AI workspace that works for you.",
    external: true,
    logo: "/images/brands/notion.png",
    logoAlt: "Notion AI",
  },
  {
    title: "PipDecks",
    href: "https://pipdecks.com/uxedward",
    body: "Ditch dull meetings. Design better products and services.",
    external: true,
    logo: "/images/brands/pipdecks.png",
    logoAlt: "PipDecks",
  },
];

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
    logos: [
      { src: "/images/brands/claude.png", alt: "Claude" },
      { src: "/images/brands/mcp.png", alt: "MCP" },
      { src: "/images/brands/figma.png", alt: "Figma" },
    ],
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
    summary: "Install Mobbin MCP into Claude Code and Claude Desktop",
    readTime: "8 min read",
    cta: "Read Guidebook",
    logos: [
      { src: "/images/brands/claude.png", alt: "Claude" },
      { src: "/images/brands/figma.png", alt: "Figma" },
      { src: "/images/brands/mobbin.png", alt: "Mobbin" },
    ],
    links: [
      {
        label: "Claude Code Documentation",
        href: "https://code.claude.com/docs/en/overview",
      },
      {
        label: "Claude Desktop",
        href: "https://claude.ai/download",
      },
      {
        label: "Video Tutorial",
        href: "https://www.instagram.com/reel/DbnuUhIpbrD/?utm_source=ig_web_copy_link",
      },
    ],
    steps: [
      {
        title: "Get Claude, Figma & Mobbin Paid Plans",
        body: "Make sure you have Pro plans for Claude, Figma & Mobbin.",
        extra: "Get 20% off: mobbin.com/edward",
        plans: [
          {
            name: "Claude Pro or Max",
            logo: "/images/brands/claude.png",
          },
          {
            name: "Figma Professional Plan (or higher)",
            logo: "/images/brands/figma.png",
          },
          {
            name: "Mobbin Pro Plan",
            logo: "/images/brands/mobbin.png",
          },
        ],
      },
      {
        title: "Install Mobbin via Claude Code Terminal",
        body: "Run this command in Claude Code Terminal:",
        command:
          "claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp",
        images: [
          {
            src: "/images/resources/mobbin/terminal-command.png",
            alt: "Claude Code terminal with the Mobbin MCP install command",
          },
        ],
      },
      {
        title: "Authenticate Access",
        body: "Authenticate & Sign in with your Mobbin account to authorize access.",
        images: [
          {
            src: "/images/resources/mobbin/terminal-auth.png",
            alt: "Connect Claude Code with Mobbin MCP authorization screen",
          },
        ],
      },
      {
        title: "Confirm Authentication",
        body: "Successfully authenticate Mobbin & Claude Code!",
        images: [
          {
            src: "/images/resources/mobbin/terminal-success.png",
            alt: "Claude Code terminal showing Mobbin MCP authentication successful",
          },
        ],
      },
      {
        title: "Install Mobbin MCP in Claude Desktop",
        body: "Download Claude Desktop. Run this command in Claude Desktop:",
        command:
          "claude mcp add mobbin --scope user --transport http https://api.mobbin.com/mcp",
        images: [
          {
            src: "/images/resources/mobbin/desktop-command.png",
            alt: "Claude Desktop with the Mobbin MCP install command",
          },
        ],
      },
      {
        title: "Confirm Desktop Install",
        body: "You can see it says it has been installed because we’ve installed it in our terminal.",
        images: [
          {
            src: "/images/resources/mobbin/desktop-connected.png",
            alt: "Claude Desktop showing Mobbin MCP already connected",
          },
        ],
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
