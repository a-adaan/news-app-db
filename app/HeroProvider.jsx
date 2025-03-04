"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <ToastProvider
        placement="top-right"
        toastProps={{
          radius: "sm",
          variant: "flat",
          timeout: 2500,
        }}
      />
      {children}
    </HeroUIProvider>
  );
}
