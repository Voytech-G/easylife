"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  TextInput,
  Textarea,
  Button,
  Select,
  Stack,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { title } from "process";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    initialValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      interest: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        value && !/^\+?[0-9\s\-()]+$/.test(value)
          ? "Invalid phone number"
          : null,
      message: (value) =>
        value.length < 10 ? "Message must have at least 10 letters" : null,
      interest: (value) => (value ? null : "Please select your interest"),
    },
  });

  const handleSubmit = async (values: ContactFormData) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch (error) {
      notifications.show({
        title: "Error",
        message:
          "There was an error submitting the form. Please try again later.",
        color: "red",
        icon: <IconX size={16} />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="sm" py={80}>
      <Stack align="center" gap="xl">
        <Stack align="center" gap="md">
          <Title ta="center" size="2rem">
            Get Started with LifeAgent
          </Title>
          <Text ta="center" c="dimmed" size="lg">
            Ready to transform your productivity? Let&apos;s get you set up!
          </Text>
        </Stack>

        <Card w="100%" p="xl" radius="md" withBorder>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <Group grow>
                <TextInput
                  label="Full Name"
                  placeholder="Your full name"
                  required
                  {...form.getInputProps("name")}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  required
                  {...form.getInputProps("email")}
                />
              </Group>

              <Group grow>
                <TextInput
                  label="Company"
                  placeholder="Your company"
                  {...form.getInputProps("company")}
                />
                <TextInput
                  label="Phone"
                  placeholder="+5 (555) 123-4567"
                  {...form.getInputProps("phone")}
                />
              </Group>

              <Select
                label="I'm interested in"
                placeholder="Select your primary interest"
                required
                data={[
                  { value: "personal", label: "Personal Assistant Features" },
                  { value: "business", label: "Business/Team Solutions" },
                  { value: "integration", label: "WhatsApp Integration" },
                  { value: "demo", label: "Product Demo" },
                  { value: "other", label: "Other" },
                ]}
                {...form.getInputProps("interest")}
              />

              <Textarea
                label="Your Message"
                placeholder="Type your message here"
                required
                minRows={4}
                {...form.getInputProps("message")}
              />

              <Button type="submit" size="lg" loading={loading} mt="md">
                Send Message
              </Button>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Container>
  );
}
