"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const theme = createTheme({
  primaryColor: "brand",
  colors: {
    brand: [
      "#e3f2fd",
      "#ECE5DD",
      "#90caf9",
      "#64b5f6",
      "#42a5f5",
      "#DCF8C6",
      "#128C7E",
      "#25D366",
      "#34B7F1", // Primary brand color
      "#075E54",
    ],
    grey: [
      "#f8f9fa", // grey50
      "#f1f3f4", // grey100
      "#e8eaed", // grey200
      "#eaeaea", // grey300 - in use
      "#bdc1c6", // grey400
      "#9aa0a6", // grey500
      "#80868b", // grey600
      "#666666", // grey700
      "#3c4043", // grey800
      "#202124", // grey900
    ],
  },
});

export default function CustomMantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
