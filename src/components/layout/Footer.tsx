import {
  Container,
  Group,
  Text,
  Stack,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";
import Link from "next/link";
import { commonStyles } from "@/styles/common";

export default function Footer() {
  return (
    <footer style={commonStyles.footerStyle}>
      <Container size="lg">
        <Group justify="space-between" align="flex-start">
          <Stack gap="sm">
            <Group gap="sm">
              <Box c="brand.7">
                <IconMessageCircle size={24} />
              </Box>
              <Text fw={600}>EasyLife</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Your personal WhatsApp assistant powered by AI.
            </Text>
          </Stack>

          <Stack gap="xs">
            <Text size="sm" fw={500}>
              Quick Links
            </Text>
            <Link href="/privacy" style={commonStyles.linkSmall}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={commonStyles.linkSmall}>
              Terms of Service
            </Link>
          </Stack>
        </Group>

        <Text ta="center" size="sm" c="dimmed" mt="xl">
          © 2025 EasyLife. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
