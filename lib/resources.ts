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
  link?: ResourceLink;
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
    summary: "Install Figma MCP into Claude Code and Claude Desktop",
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
        label: "Claude Desktop",
        href: "https://claude.com/download",
      },
      {
        label: "Figma MCP Documentation",
        href: "https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#claude-code",
      },
    ],
    steps: [
      {
        title: "Claude & Figma plans",
        body: "Make sure you have Pro plans for Claude & Figma.",
        plans: [
          {
            name: "Claude Pro or Max",
            logo: "/images/brands/claude.png",
          },
          {
            name: "Figma Professional Plan (or higher)",
            logo: "/images/brands/figma.png",
          },
        ],
      },
      {
        title: "Install Claude Code via Terminal",
        body: "Run this command in your terminal:",
        command: "curl -fsSL https://claude.ai/install.sh | bash",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-install.png",
            alt: "Terminal showing Claude Code installed with the install script",
          },
        ],
      },
      {
        title: "Start Claude Code",
        body: "To start Claude Code, run this command:",
        command: "claude",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-start.png",
            alt: "Terminal with the claude command to start Claude Code",
          },
        ],
      },
      {
        title: "Add Figma MCP",
        body: "Run this command to add Figma MCP",
        command:
          "claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-figma-desktop.png",
            alt: "Claude Code terminal adding the local Figma desktop MCP server",
          },
        ],
      },
      {
        title: "Make Figma MCP available to all projects",
        body: "Run this command to make Figma MCP available to all projects in Figma",
        command:
          "claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-figma-remote.png",
            alt: "Claude Code terminal adding the Figma remote MCP server",
          },
        ],
      },
      {
        title: "Authenticate Access",
        body: "Authentication process will happen either directly or after you restart the terminal & Claude Code",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-auth.png",
            alt: "Figma authorization screen for Figma MCP in Claude Code",
          },
        ],
      },
      {
        title: "Confirm Terminal Install",
        body: "Installed!",
        extra: "Restart Claude Code (if needed)",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-installed.png",
            alt: "Claude Code terminal after Figma MCP has been installed",
          },
        ],
      },
      {
        title: "Check MCP List",
        body: "Run this command after running Claude Code",
        command: "/mcp",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-mcp-list.png",
            alt: "Claude Code terminal running /mcp to list connected servers",
          },
        ],
      },
      {
        title: "Confirm Figma MCP Connected",
        body: "You will see “figma” MCP connected",
        images: [
          {
            src: "/images/resources/figma-mcp/terminal-mcp-connected.png",
            alt: "Claude Code terminal showing the figma MCP server connected",
          },
        ],
      },
      {
        title: "Download Claude Desktop",
        body: "Download Claude Desktop",
        link: {
          label: "https://claude.com/download",
          href: "https://claude.com/download",
        },
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-download.png",
            alt: "Claude download page for macOS, Windows, and mobile",
          },
        ],
      },
      {
        title: "Open Claude Code in Desktop",
        body: "You can open Claude Code on the top right",
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-open-code.png",
            alt: "Claude Desktop with Claude Code available in the top right",
          },
        ],
      },
      {
        title: "Open Dev Mode in Figma",
        body: "Go to the top right of Figma, and click on Dev Mode.",
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-dev-mode.png",
            alt: "Figma toolbar with Dev Mode highlighted",
          },
        ],
      },
      {
        title: "Open the MCP panel",
        body: "Click + in the MCP panel.",
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-mcp-panel.png",
            alt: "Figma MCP panel with the add control highlighted",
          },
        ],
      },
      {
        title: "Install in Claude Desktop",
        body: "Click + Install in Claude Desktop.",
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-connect.png",
            alt: "Add Figma to Claude Desktop with Install in Claude Desktop highlighted",
          },
        ],
      },
      {
        title: "Install the Figma plugin",
        body: "Click Install.",
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-install.png",
            alt: "Claude Desktop Directory with the Figma plugin Install button highlighted",
          },
        ],
      },
      {
        title: "Confirm Desktop Connect",
        body: "Figma MCP is now connected!",
        images: [
          {
            src: "/images/resources/figma-mcp/desktop-connected.png",
            alt: "Claude Desktop showing the Figma plugin installed and connected",
          },
        ],
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
