import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] justify-center items-center px-4 py-5 rounded-xl border border-white/10 focus:border focus:border-accent font-light bg-primary outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Input };
