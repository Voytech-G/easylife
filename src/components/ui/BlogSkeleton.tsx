import { Card, Skeleton, Stack } from "@mantine/core";

export default function BlogSkeleton() {
  return (
    <Card p="lg" radius="md" withBorder>
      <Stack gap="md">
        <Skeleton height={200} radius="md" />
        <Stack gap="sm">
          <Skeleton height={28} radius="md" width="70%" />
          <Skeleton height={20} />
          <Skeleton height={20} radius="md" width="80%" />
        </Stack>
        <Skeleton height={24} width="40%" />
      </Stack>
    </Card>
  );
}
