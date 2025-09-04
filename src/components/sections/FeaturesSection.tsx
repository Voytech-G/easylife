import {
  Container,
  Center,
  Title,
  Text,
  SimpleGrid,
  Card,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCalendar,
  IconBell,
  IconMessage,
  IconBrain,
  IconShield,
  IconClock,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconCalendar,
    title: "Smart Scheduling",
    description:
      "Schedule appointments and meetings directly through WhatsApp conversations.",
  },
  {
    icon: IconBell,
    title: "Intelligent Reminders",
    description: "Never miss important tasks with AI-powered reminder system.",
  },
  {
    icon: IconMessage,
    title: "Natural Conversations",
    description:
      "Interact naturally - no complex commands or interfaces to learn.",
  },
  {
    icon: IconBrain,
    title: "AI-Powered",
    description:
      "Advanced AI understands context and provides personalized assistance.",
  },
  {
    icon: IconShield,
    title: "Secure & Private",
    description: "Your data is encrypted and never shared with third parties.",
  },
  {
    icon: IconClock,
    title: "24/7 Available",
    description:
      "Your personal assistant is always ready to help, any time of day.",
  },
];

export default function FeaturesSection() {
  return (
    <Container size="lg" py={80} ta="center">
      <Center>
        <Stack align="center" justify="center" gap="md" maw={800} pb="40">
          <Title ta="center" size="2.5rem">
            Everything You Need in One Place
          </Title>
          <Text size="lg" ta="center" c="dimmed">
            EasyLife brings powerful personal assistance features directly to
            your WhatsApp.
          </Text>
        </Stack>
      </Center>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {features.map((feature) => (
          <Card key={feature.title} p="lg" radius="md" withBorder>
            <Stack align="center" gap="md">
              <ThemeIcon size={60} radius="md" variant="light">
                <feature.icon size={30} />
              </ThemeIcon>
              <Stack align="center" gap={4}>
                <Text fw={600} size="lg">
                  {feature.title}
                </Text>
                <Text ta="center" c="dimmed">
                  {feature.description}
                </Text>
              </Stack>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
