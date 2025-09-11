"use client";

import { useState } from "react";
import { TextInput, Button, Group, Text, Card } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconMail, IconCheck } from "@tabler/icons-react";

export default function NewsletterSignup() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (values: { email: string }) => {
    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Something went wrong. Please try again later.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card p="lg" radius="md" withBorder>
      <Group align="center" mb="md">
        <IconMail size={24} color={"var(--mantine-color-grey-6)"} />
        <Text fw={600} size="lg">
          Stay Updated
        </Text>
      </Group>
      <Text c="dimmed" mb="md">
        Get the latest productivity tips and LifeAgent updates delivered to your
        inbox.
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group>
          <TextInput
            placeholder="your@email.com"
            style={{ flex: 1 }}
            {...form.getInputProps("email")}
          />
          <Button type="submit" loading={loading}>
            Subscribe
          </Button>
        </Group>
      </form>
    </Card>
  );
}
