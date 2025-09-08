import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Badge,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog - LifeAgent",
  description:
    "Latest news, tips, and insights about personal productivity and WhatsApp automation.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 120px)" }}>
        <Container size="lg" py={80}>
          <Stack gap="xl">
            <Stack align="center" gap="md">
              <Title ta="center" size="2.5rem">
                LifeAgent Blog
              </Title>
              <Text ta="center" c="dimmed" size="lg">
                Latest insights on productivity, AI, and WhatsApp automation
              </Text>
            </Stack>

            <Stack gap="lg">
              {posts.map((post) => (
                <Card
                  key={post.slug}
                  p="lg"
                  radius="md"
                  withBorder
                  component={Link}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Stack gap="md">
                    <Group justify="space-between" align="flex-start">
                      <Stack gap="sm" style={{ flex: 1 }}>
                        <Title order={2} size="1.5rem">
                          {post.title}
                        </Title>
                        <Text c="dimmed">{post.excerpt}</Text>
                      </Stack>
                    </Group>

                    <Group justify="space-between">
                      <Group gap="xs">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="light" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </Group>
                      <Text size="sm" c="dimmed">
                        {new Date(post.date).toLocaleDateString()} •{" "}
                        {post.author}
                      </Text>
                    </Group>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
