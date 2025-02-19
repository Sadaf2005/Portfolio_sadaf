import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export default function LeetCodeIcon({ className }: IconProps) {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#FFA116"
        d="M14.274 1.67l-8.495 8.493a1.5 1.5 0 000 2.121l8.494 8.493a1.5 1.5 0 002.122-2.12l-7.433-7.434 7.433-7.433A1.5 1.5 0 0014.274 1.67z"
      />
      <path
        fill="#000"
        d="M18.21 16.783H7.986a1.5 1.5 0 000 3h10.222a1.5 1.5 0 000-3z"
      />
    </svg>
  );
}
