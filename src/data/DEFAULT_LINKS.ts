import { LinkGroup, AllLinkGroups } from "../Links";
import { EMPTY_ITEM } from "./CONSTANTS";

const SOCIAL_LINKS: LinkGroup = {
  title: "Socials",
  links: [
    {
      "display text": "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      "display text": "Facebook",
      href: "https://www.facebook.com/",
    },
    {
      "display text": "Outlook",
      href: "https://outlook.live.com/",
    },
    {
      "display text": "Reddit",
      href: "https://www.reddit.com/",
    },
    {
      "display text": "Discord",
      href: "https://www.discord.com/",
    },
    {
      "display text": "Gmail",
      href: "https://www.gmail.com/",
    },
    {
      "display text": "LinkedIn",
      href: "https://www.linkedin.com/",
    },
  ],
};

const REDDIT_LINKS: LinkGroup = {
  title: "Reddit",
  links: [
    {
      "display text": "UnixPorn",
      href: "https://www.reddit.com/r/unixporn/",
    },
    {
      "display text": "Startpages",
      href: "https://www.reddit.com/r/startpages/",
    },
    {
      "display text": "NBA",
      href: "https://www.reddit.com/r/nba/",
    },
    {
      "display text": "Neovim",
      href: "https://www.reddit.com/r/neovim/",
    },
    {
      "display text": "Rust",
      href: "https://www.reddit.com/r/rust/",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

const TOOLS_LINKS: LinkGroup = {
  title: "Tools",
  links: [
    {
      "display text": "Github",
      href: "https://github.com/",
    },
    {
      "display text": "Gemini",
      href: "https://gemini.google.com/",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

const FAVORITES_LINKS: LinkGroup = {
  title: "Personal",
  links: [
    {
      "display text": "Portfolio",
      href: "https://lumosdhia.com",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};
const MEDIA_LINKS: LinkGroup = {
  title: "Media",
  links: [
    {
      "display text": "Youtube",
      href: "http://www.youtube.com",
    },
    {
      "display text": "YT Music",
      href: "https://music.youtube.com",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
    {
      "display text": EMPTY_ITEM,
      href: "",
    },
  ],
};

export const DEFAULT_LINKS: AllLinkGroups = [
  SOCIAL_LINKS,
  REDDIT_LINKS,
  TOOLS_LINKS,
  MEDIA_LINKS,
  FAVORITES_LINKS,
];
