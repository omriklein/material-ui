import * as React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import GradientText from 'docs/src/components/typography/GradientText';
import GetStartedButtons from 'docs/src/components/home/GetStartedButtons';
import HeroContainer from 'docs/src/layouts/HeroContainer';

function createLoading(sx: BoxProps['sx']) {
  return function Loading() {
    return (
      <Box
        sx={[
          (theme) => ({
            borderRadius: 1,
            bgcolor: 'grey.100',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.800',
            }),
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    );
  };
}

const TaskCard = dynamic(() => import('../showcase/TaskCard'), {
  ssr: false,
  loading: createLoading({ width: 360, height: 280 }),
});
const PlayerCard = dynamic(() => import('../showcase/PlayerCard'), {
  ssr: false,
  loading: createLoading({ width: 360, height: 146 }),
});
const ThemeToggleButton = dynamic(() => import('../showcase/ThemeToggleButton'), {
  ssr: false,
  loading: createLoading({ width: 360, height: 48 }),
});
const ThemeSwitch = dynamic(() => import('../showcase/ThemeSwitch'), {
  ssr: false,
  loading: createLoading({ width: 108, height: 20 }),
});
const ThemeChip = dynamic(() => import('../showcase/ThemeChip'), {
  ssr: false,
  loading: createLoading({ width: 212, height: 32 }),
});
const ThemeTimeline = dynamic(() => import('../showcase/ThemeTimeline'), {
  ssr: false,
  loading: createLoading({ width: 360, height: 180 }),
});
const FolderTable = dynamic(() => import('../showcase/FolderTable'), {
  ssr: false,
  loading: createLoading({ width: 360, height: 212 }),
});
const ThemeDatePicker = dynamic(() => import('../showcase/ThemeDatePicker'), {
  ssr: false,
  loading: createLoading({ width: { md: 360, xl: 400 }, height: 260 }),
});
const ThemeTabs = dynamic(() => import('../showcase/ThemeTabs'), {
  ssr: false,
  loading: createLoading({ width: { md: 360, xl: 400 }, height: 48 }),
});
const ThemeSlider = dynamic(() => import('../showcase/ThemeSlider'), {
  ssr: false,
  loading: createLoading({ width: { md: 124, xl: 164 }, height: 214 }),
});
const ViewToggleButton = dynamic(() => import('../showcase/ViewToggleButton'), {
  ssr: false,
  loading: createLoading({ width: 196, height: 40 }),
});
const ThemeButton = dynamic(() => import('../showcase/ThemeButton'), {
  ssr: false,
  loading: createLoading({ width: 196, height: 154 }),
});
const ThemeAccordion = dynamic(() => import('../showcase/ThemeAccordion'), {
  ssr: false,
  loading: createLoading({ width: { md: 360, xl: 400 }, height: 171 }),
});
const NotificationCard = dynamic(() => import('../showcase/NotificationCard'), {
  ssr: false,
  loading: createLoading({ width: { md: 360, xl: 400 }, height: 146 }),
});

export default function Hero() {
  const globalTheme = useTheme();
  const isMdUp = useMediaQuery(globalTheme.breakpoints.up('md'));
  return (
    <HeroContainer
      linearGradient
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h1" sx={{ my: 2, maxWidth: 500 }}>
            <GradientText>Move faster</GradientText> <br />
            with intuitive React UI tools
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 500 }}>
            MUI offers a comprehensive suite of free UI tools to help you ship new features faster.
            Start with Material UI, our fully-loaded component library, or bring your own design
            system to our production-ready components.
          </Typography>
          <GetStartedButtons primaryLabel="Discover the Core libraries" primaryUrl="/core/" />
        </Box>
      }
      rightSx={{
        p: 3,
        ml: 2,
        minWidth: 2000,
        overflow: 'hidden', // the components in the Hero section are mostly illustrative, even though they're interactive. That's why scrolling is disabled.
        '& > div': {
          width: 360,
          display: 'inline-flex',
          verticalAlign: 'top',
          '&:nth-of-type(2)': {
            width: { xl: 400 },
          },
        },
        '&& *': {
          fontFamily: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(
            ',',
          ),
        },
      }}
      right={
        <React.Fragment>
          {isMdUp && (
            <Stack spacing={4} sx={{ '& > .MuiPaper-root': { maxWidth: 'none' } }}>
              <TaskCard />
              <PlayerCard />
              <ThemeToggleButton />
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <ThemeSwitch />
                <Box sx={{ width: 40 }} />
                <ThemeChip />
              </Box>
              <ThemeTimeline />
              <FolderTable />
            </Stack>
          )}
          {isMdUp && (
            <Stack spacing={4} sx={{ ml: 4, '& > .MuiPaper-root': { maxWidth: 'none' } }}>
              <ThemeDatePicker />
              <ThemeTabs />
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}>
                  <ThemeSlider />
                </Box>
                <Stack spacing={2} sx={{ ml: 4 }}>
                  <ViewToggleButton />
                  <ThemeButton />
                </Stack>
              </Box>
              <ThemeAccordion />
              <NotificationCard />
            </Stack>
          )}
        </React.Fragment>
      }
    />
  );
}
