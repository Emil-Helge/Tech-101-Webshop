import {
  ActionIcon,
  Anchor,
  Button,
  createStyles,
  Group,
  Input,
  rem,
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  actionIcon: {
    background:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    '&:hover': {
      background:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[2],
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },

  form: {
    display: 'flex',
    alignItems: 'center',
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },

  input: {
    marginRight: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing.md,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="gray"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  const [email, setEmail] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>

        <form onSubmit={handleFormSubmit} className={classes.form}>
          <label htmlFor="email"></label>
          <Input
            className={classes.input}
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <Button type="submit" variant="outline">
            Sign up
          </Button>
        </form>

        <Group spacing="xs" position="right" noWrap mt={10}>
          <ActionIcon
            size="lg"
            variant="outline"
            radius="xl"
            className={classes.actionIcon}
          >
            <img src="./assets/instagram-icon.svg" alt="logo of Instagram" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="outline"
            radius="xl"
            className={classes.actionIcon}
          >
            <img src="./assets/twitter-icon.svg" alt="logo of Twitter" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="outline"
            radius="xl"
            className={classes.actionIcon}
          >
            <img src="./assets/youtube-icon.svg" alt="logo of Youtube" />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
