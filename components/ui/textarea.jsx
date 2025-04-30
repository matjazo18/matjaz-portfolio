import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h[80px] bg-primary rounded-xl px-4 py-2 focus:border focus:border-accent text-vase placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent foucs-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
