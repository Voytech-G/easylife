import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import { IconBrandWhatsapp, IconRocket } from "@tabler/icons-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Container size="lg" py={80}>
      <Stack align="center" gap="md" maw={600}>
        <Title ta="center" size="3rem" fw={800} style={{ lineHeight: 1.2 }}>
          Your Personal Assisstant, &nbsp;
          <Text component="span" c="brand.7" inherit>
            Right in WhatsApp
          </Text>
        </Title>

        <Text size="xl" ta="center" c="dimmed">
          EasyLife integrates seamlessly with WhatsApp to help you manage tasks,
          schedule appointments, and stay organized - all through simple
          conversations.
        </Text>
      </Stack>

      <Group justify="center" pt={{ base: 20, sm: 40 }}>
        <Button
          size="lg"
          leftSection={<IconRocket size={20} />}
          component={Link}
          href="/contact"
        >
          Start Free Trial
        </Button>

        <Button
          size="lg"
          variant="outline"
          leftSection={<IconBrandWhatsapp size={20} />}
        >
          See Demo
        </Button>
      </Group>
    </Container>
  );
}
