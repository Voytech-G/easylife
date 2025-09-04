import { ColorSchemeScript } from "@mantine/core";
import CustomMantineProvider from "@/components/MantineProvider";

export const metadata = {
  title: "EasyLife - Your Personal WhatsApp Assistant",
  description:
    "Streamline your life with AI-powered personal assistance through WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <CustomMantineProvider>{children}</CustomMantineProvider>
      </body>
    </html>
  );
}
