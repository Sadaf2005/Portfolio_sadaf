import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import XIcon from "@/components/icons/x";
import { FileUser, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SocailMedia() {
  return (
    <>
      <aside className="flex py-2 items-center gap-4">
        <a href={"/Resume-updated.pdf"} target="_blank">
          <FileUser />
        </a>
        <Link href={""} target="_blank">
          <XIcon />
        </Link>
        <Link href={"https://github.com/Sadaf2005"} target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/sadaf-63aa001b6/"}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link href={"mailto:alisadaf434@gmail.com"} target="_blank">
          <Mail />
        </Link>

      </aside>
    </>
  );
}
