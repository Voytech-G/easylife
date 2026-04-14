import { Container, Title, Text, Badge, Group, Stack } from "@mantine/core";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - LifeAgent Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 120px)" }}>
        <Container size="md" py={80}>
          <Stack gap="xl">
            <Stack gap="md">
              <Title size="2.5rem" style={{ lineHeight: 1.2 }}>
                {post.title}
              </Title>

              <Group>
                <Text c="dimmed">
                  {new Date(post.date).toLocaleDateString()} • {post.author}
                </Text>
              </Group>

              <Group gap="xs">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="light">
                    {tag}
                  </Badge>
                ))}
              </Group>
            </Stack>

            <div
              dangerouslySetInnerHTML={{ __html: contentHtml }}
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            />
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
