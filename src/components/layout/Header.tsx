"use client";

import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconMessageCircle } from "@tabler/icons-react";
import { commonStyles } from "@/styles/common";
const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Pricing" },
  { link: "/blog", label: "Blog" },
  { link: "/contact", label: "Contact" },
];

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <header style={commonStyles.borderBottomLight}>
      <Container size="lg">
        <Group h={60} justify="space-between">
          {/* Logo */}
          <Group>
            <Box c="brand.7">
              <IconMessageCircle size={28} />
            </Box>
            <Link href="/" style={commonStyles.linkBold}>
              EasyLife
            </Link>
          </Group>

          {/* Desktop navigation */}
          <Group visibleFrom="sm">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                style={commonStyles.linkClean}
              >
                <Button variant="subtle">{link.label}</Button>
              </Link>
            ))}
            <Button component={Link} href="/contact">
              Get Started
            </Button>
          </Group>

          {/* Mobile menu Button */}
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Navigation"
        hiddenFrom="sm"
        size="xs"
      >
        <Stack>
          {links.map((link) => (
            <Button
              key={link.label}
              component={Link}
              href={link.link}
              variant="subtle"
              onClick={closeDrawer}
            >
              {link.label}
            </Button>
          ))}
          <Button component={Link} href="/contact" onClick={closeDrawer}>
            Get Started
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
