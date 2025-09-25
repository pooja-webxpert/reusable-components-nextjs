"use client";

import { useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, Chip, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { tv } from "tailwind-variants";
import { routesUrl } from "@/utils/pagesurl";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.5rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
      xl: "text-5xl md:text-6xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      redirect("/form");
    }
  }, [status]);

  return (
    <div className="bg-black min-h-screen text-white">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* Header Chip */}
        <Chip
          label="✨ Introducing Easy NextUI Template"
          className="bg-gradient-to-br from-indigo-500 to-pink-500 text-white font-semibold text-xs"
          sx={{ boxShadow: "0 4px 10px rgba(255, 105, 180, 0.3)" }}
        />

        {/* Hero Heading */}
        <div className="inline-block max-w-sm lg:max-w-4xl text-center text-2xl">
          <h1 className={title({ size: "lg" })}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet", size: "lg" })}>
            Beautiful&nbsp;
          </h1>
          <h1 className={title({ size: "lg" })}>
            Websites using Easy NextUI
          </h1>
          <h2 className="font-normal text-gray-500 py-2">
            Beautiful, fast and modern Easy UI template.
          </h2>
        </div>

        {/* Action Links */}
        <div className="flex gap-3">
          <Link
            href={routesUrl.Login}
            className="text-sm text-blue-400 hover:underline"
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/pooja-webxpert/reusable-components-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white hover:text-gray-300"
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative hidden lg:block mx-auto mt-20">
          <img
            src="/linear-bg.svg"
            className="absolute inset-0 z-0 bg-transparent"
            alt="Background Glow"
          />
          <img
            src="/linear-bgg.svg"
            className="max-w-[1000px] z-10 relative"
            alt="Hero Graphic"
          />
        </div>
      </section>

      {/* ✅ New Content Starts Here */}
      <section className="!m-10 flex gap-10 justify-between !items-center">
        <div className="w-2/5">
          <Typography className="!font-bold !w-full" variant="h2">
            <span style={{ color: "#027ad1" }}>Move faster</span> with intuitive
            React UI tools
          </Typography>
          <Typography className="text-lg mt-4 text-gray-300">
            This site offers a comprehensive suite of free UI tools to help you
            ship new features faster. The library provides a collection of
            pre-built, customizable UI components designed for efficiency and
            ease of use. This site our fully-loaded component library, or bring
            your own design system to our production-ready components.
          </Typography>
        </div>
        <div className="!w-1/2">
          <img
            src="/hands-typing-code-on-laptop.jpg"
            alt="Typing on Laptop"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="px-10">
        <Typography
          className="!mt-20 !font-bold text-center"
          variant="h3"
        >
          A <span style={{ color: "#027ad1" }}>delightful experience</span> for
          you and your users.
        </Typography>
        <div className="flex justify-between gap-10 my-5">
          <Card className="w-1/4 p-5 bg-[#121212]">
            <Typography className="!font-bold text-white">
              Timeless aesthetics
            </Typography>
            <Typography className="text-base text-gray-400">
              Build beautiful UIs with ease. Start with Google's Material
              Design, or create your own sophisticated theme.
            </Typography>
          </Card>
          <Card className="w-1/4 p-5 bg-[#121212]">
            <Typography className="!font-bold text-white">
              Intuitive customization
            </Typography>
            <Typography className="text-base text-gray-400">
              Our components are as flexible as they are powerful. You always
              have full control over how they look and behave.
            </Typography>
          </Card>
          <Card className="w-1/4 p-5 bg-[#121212]">
            <Typography className="!font-bold text-white">
              Unrivaled documentation
            </Typography>
            <Typography className="text-base text-gray-400">
              The answer to your problem can be found in our docs. How can we be
              so sure? Because our docs boast over 2,000 contributors.
            </Typography>
          </Card>
          <Card className="w-1/4 p-5 bg-[#121212]">
            <Typography className="!font-bold text-white">
              Dedicated to accessibility
            </Typography>
            <Typography className="text-base text-gray-400">
              We believe in building for everyone. That's why accessibility is a
              high priority with every new feature we ship.
            </Typography>
          </Card>
        </div>
      </section>
      {/* ✅ New Content Ends Here */}

      {/* Integration Section */}
      <section className="flex flex-col items-center text-center px-10">
        <div className="mb-2">
          <Chip variant="filled" color="secondary" label="Integrations" />
        </div>
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Never Lose Information
        </h1>
        <p className="text-lg lg:text-xl font-normal text-gray-500 mt-2 max-w-[600px]">
          Keep track of all your meetings and what was discussed. Import
          events quickly with our Google Calendar and Outlook integrations.
        </p>
        <img
          src="/integration.svg"
          alt="Integration"
          className="mt-4 lg:mt-10"
        />
      </section>
    </div>
  );
}
