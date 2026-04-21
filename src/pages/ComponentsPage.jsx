import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Avatar, Stack, Divider, IconButton,
  Tooltip, LinearProgress, Badge, Paper, Tabs, Tab,
  List, ListItem, ListItemAvatar, ListItemText, Collapse,
  ToggleButtonGroup, ToggleButton, Fade,
} from '@mui/material';
import { Link } from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BugReportIcon from '@mui/icons-material/BugReport';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ListIcon from '@mui/icons-material/List';

// ═══════════════════════════════════════════════
// COMPONENT 1: NexusStatCard
// ═══════════════════════════════════════════════
function NexusStatCard({ title, value, unit, change, positive, icon, color = 'primary' }) {
  const [hovered, setHovered] = useState(false);
  const isPrimary = color === 'primary';

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? isPrimary
            ? '0 16px 40px rgba(0,229,255,0.2)'
            : '0 16px 40px rgba(255,107,53,0.2)'
          : 'none',
      }}
    >
      {/* Accent bar */}
      <Box
        sx={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: isPrimary
            ? 'linear-gradient(90deg, #00E5FF, #00B2CC)'
            : 'linear-gradient(90deg, #FF6B35, #C43A00)',
        }}
      />
      {/* Subtle bg glow */}
      <Box
        sx={{
          position: 'absolute', top: -30, right: -30, width: 120, height: 120,
          borderRadius: '50%',
          background: isPrimary
            ? 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)',
          transition: 'opacity 0.3s',
          opacity: hovered ? 1 : 0.4,
        }}
      />

      <CardContent sx={{ pt: 3, position: 'relative' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', mb: 1 }}
            >
              {title}
            </Typography>
            <Stack direction="row" alignItems="baseline" spacing={0.5}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Orbitron", sans-serif',
                  fontSize: '2rem',
                  color: isPrimary ? 'primary.main' : 'secondary.main',
                  lineHeight: 1,
                }}
              >
                {value}
              </Typography>
              <Typography variant="body2" color="text.secondary">{unit}</Typography>
            </Stack>
          </Box>
          <Avatar
            sx={{
              bgcolor: isPrimary ? 'rgba(0,229,255,0.08)' : 'rgba(255,107,53,0.08)',
              color: isPrimary ? 'primary.main' : 'secondary.main',
              border: '1px solid',
              borderColor: isPrimary ? 'rgba(0,229,255,0.25)' : 'rgba(255,107,53,0.25)',
              borderRadius: 2, width: 44, height: 44,
            }}
          >
            {icon}
          </Avatar>
        </Stack>

        <Divider sx={{ my: 2, borderColor: 'divider' }} />

        <Stack direction="row" alignItems="center" spacing={0.5}>
          {positive
            ? <TrendingUpIcon sx={{ fontSize: 15, color: 'success.main' }} />
            : <TrendingDownIcon sx={{ fontSize: 15, color: 'error.main' }} />
          }
          <Typography variant="caption" sx={{ color: positive ? 'success.main' : 'error.main', fontWeight: 700 }}>
            {change}
          </Typography>
          <Typography variant="caption" color="text.secondary">vs last month</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

// ═══════════════════════════════════════════════
// COMPONENT 2: NexusProjectCard
// ═══════════════════════════════════════════════
const statusConfig = {
  active:  { label: 'Active',  color: 'success', icon: <CheckCircleIcon sx={{ fontSize: 13 }} /> },
  paused:  { label: 'Paused',  color: 'warning', icon: <PauseCircleIcon sx={{ fontSize: 13 }} /> },
  pending: { label: 'Pending', color: 'default', icon: <AccessTimeIcon  sx={{ fontSize: 13 }} /> },
};

function NexusProjectCard({ name, description, progress, status, tags, team, starred: initStarred }) {
  const [starred, setStarred] = useState(initStarred);
  const [liked,   setLiked]   = useState(false);
  const s = statusConfig[status];

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1.5 }}>
          <Box sx={{ flex: 1, pr: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5, flexWrap: 'wrap', gap: 0.5 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{name}</Typography>
              <Chip
                label={s.label} color={s.color} size="small" icon={s.icon}
                sx={{ height: 20, fontSize: '0.65rem', '& .MuiChip-label': { px: 1 } }}
              />
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '0.84rem' }}>
              {description}
            </Typography>
          </Box>
          <Tooltip title={starred ? 'Unstar' : 'Star'}>
            <IconButton size="small" onClick={() => setStarred(!starred)}
              sx={{ color: starred ? '#FFD700' : 'text.secondary', transition: 'color 0.2s' }}>
              {starred ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Progress */}
        <Box sx={{ mb: 2.5 }}>
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.8 }}>
            <Typography variant="caption" color="text.secondary">Progress</Typography>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>{progress}%</Typography>
          </Stack>
          <LinearProgress
            variant="determinate" value={progress}
            sx={{
              height: 5, borderRadius: 3,
              backgroundColor: 'rgba(0,229,255,0.08)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
                background: progress > 80
                  ? 'linear-gradient(90deg, #27C93F, #00B2CC)'
                  : 'linear-gradient(90deg, #00E5FF, #00B2CC)',
              },
            }}
          />
        </Box>

        {/* Tags */}
        <Stack direction="row" spacing={0.8} flexWrap="wrap" sx={{ mb: 2.5, gap: 0.8 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" variant="outlined"
              sx={{ height: 20, fontSize: '0.65rem', borderColor: 'rgba(0,229,255,0.2)', color: 'text.secondary' }} />
          ))}
        </Stack>

        <Box sx={{ mt: 'auto' }}>
          <Divider sx={{ mb: 2, borderColor: 'divider' }} />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {/* Team avatars */}
            <Stack direction="row" sx={{ '& > *': { ml: '-6px !important' }, '& > *:first-of-type': { ml: '0 !important' } }}>
              {team.map((member, i) => (
                <Tooltip key={i} title={member}>
                  <Avatar sx={{
                    width: 26, height: 26, fontSize: '0.62rem',
                    bgcolor: ['primary.dark','secondary.dark','success.dark'][i % 3],
                    border: '2px solid', borderColor: 'background.paper',
                    fontFamily: '"Rajdhani", sans-serif', fontWeight: 700,
                  }}>
                    {member[0]}
                  </Avatar>
                </Tooltip>
              ))}
            </Stack>
            {/* Actions */}
            <Stack direction="row" spacing={0.3}>
              <Tooltip title={liked ? 'Unlike' : 'Like'}>
                <IconButton size="small" onClick={() => setLiked(!liked)}
                  sx={{ color: liked ? 'error.main' : 'text.secondary', transition: 'color 0.2s' }}>
                  {liked ? <FavoriteIcon sx={{ fontSize: 15 }} /> : <FavoriteBorderIcon sx={{ fontSize: 15 }} />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                  <ShareIcon sx={{ fontSize: 15 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="More">
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                  <MoreVertIcon sx={{ fontSize: 15 }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

// ═══════════════════════════════════════════════
// COMPONENT 3: NexusNotificationItem
// ═══════════════════════════════════════════════
function NexusNotificationItem({ type, title, message, time, unread, onRead }) {
  const map = { info: 'primary', success: 'success', warning: 'warning', error: 'error' };
  const color = map[type] || 'primary';

  return (
    <Paper
      elevation={0}
      onClick={onRead}
      sx={{
        p: 2,
        backgroundColor: unread ? 'rgba(0,229,255,0.04)' : 'transparent',
        border: '1px solid',
        borderColor: unread ? 'rgba(0,229,255,0.18)' : 'rgba(255,255,255,0.04)',
        borderRadius: 2,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: 'rgba(0,229,255,0.07)',
          borderColor: 'rgba(0,229,255,0.25)',
          transform: 'translateX(4px)',
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Badge variant="dot" color={color} invisible={!unread}
          sx={{ '& .MuiBadge-dot': { top: 4, right: 4 } }}>
          <Avatar sx={{
            width: 38, height: 38,
            bgcolor: `${color}.main`,
            opacity: unread ? 1 : 0.45,
          }}>
            <NotificationsIcon sx={{ fontSize: 18 }} />
          </Avatar>
        </Badge>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
            <Typography variant="body2"
              sx={{ fontWeight: unread ? 700 : 500, color: unread ? 'text.primary' : 'text.secondary', fontSize: '0.88rem' }}>
              {title}
            </Typography>
            <Typography variant="caption" color="text.secondary"
              sx={{ flexShrink: 0, fontSize: '0.7rem', mt: '2px' }}>
              {time}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.81rem', mt: 0.3, lineHeight: 1.55 }}>
            {message}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

// ═══════════════════════════════════════════════
// COMPONENT 4: NexusActivityFeed
// ═══════════════════════════════════════════════
const activityIcons = {
  deploy:  { icon: <RocketLaunchIcon sx={{ fontSize: 16 }} />, color: 'success' },
  bug:     { icon: <BugReportIcon    sx={{ fontSize: 16 }} />, color: 'error'   },
  merge:   { icon: <MergeTypeIcon    sx={{ fontSize: 16 }} />, color: 'primary' },
  member:  { icon: <PersonAddIcon    sx={{ fontSize: 16 }} />, color: 'secondary'},
  security:{ icon: <SecurityIcon     sx={{ fontSize: 16 }} />, color: 'warning' },
};

function NexusActivityFeed({ activities, title = 'Activity Feed' }) {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? activities
    : activities.filter((a) => a.type === filter);

  return (
    <Card>
      <CardContent>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{title}</Typography>
          <Chip
            label={`${filtered.length} events`}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ height: 20, fontSize: '0.68rem' }}
          />
        </Stack>

        {/* Filter pills */}
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, v) => { if (v) setFilter(v); }}
          size="small"
          sx={{
            mb: 2.5,
            '& .MuiToggleButton-root': {
              color: 'text.secondary',
              borderColor: 'divider',
              fontSize: '0.68rem',
              py: 0.3,
              px: 1.2,
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: 700,
              letterSpacing: '0.08em',
              '&.Mui-selected': {
                color: 'primary.main',
                backgroundColor: 'rgba(0,229,255,0.08)',
                borderColor: 'rgba(0,229,255,0.3)',
              },
            },
          }}
        >
          {['all','deploy','bug','merge','member','security'].map((f) => (
            <ToggleButton key={f} value={f}>{f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}</ToggleButton>
          ))}
        </ToggleButtonGroup>

        {/* Feed list */}
        <List disablePadding>
          {filtered.map((activity, i) => {
            const cfg = activityIcons[activity.type];
            const isOpen = expanded === activity.id;
            const isLast = i === filtered.length - 1;

            return (
              <React.Fragment key={activity.id}>
                <ListItem
                  alignItems="flex-start"
                  disablePadding
                  sx={{
                    py: 1.2,
                    px: 1,
                    borderRadius: 2,
                    cursor: activity.detail ? 'pointer' : 'default',
                    transition: 'background-color 0.15s',
                    '&:hover': activity.detail
                      ? { backgroundColor: 'rgba(0,229,255,0.04)' }
                      : {},
                  }}
                  onClick={() => activity.detail && setExpanded(isOpen ? null : activity.id)}
                >
                  <ListItemAvatar sx={{ minWidth: 44 }}>
                    <Avatar
                      sx={{
                        width: 32, height: 32,
                        bgcolor: `${cfg.color}.main`,
                        opacity: 0.9,
                      }}
                    >
                      {cfg.icon}
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.86rem' }}>
                          {activity.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            {activity.time}
                          </Typography>
                          {activity.detail && (
                            <Box sx={{ color: 'text.secondary', display: 'flex' }}>
                              {isOpen ? <ExpandLessIcon sx={{ fontSize: 16 }} /> : <ExpandMoreIcon sx={{ fontSize: 16 }} />}
                            </Box>
                          )}
                        </Stack>
                      </Stack>
                    }
                    secondary={
                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.78rem' }}>
                        {activity.subtitle}
                      </Typography>
                    }
                  />
                </ListItem>

                {/* Expandable detail */}
                {activity.detail && (
                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        ml: 5.5, mb: 1, p: 1.5,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: 1.5,
                        border: '1px solid rgba(0,229,255,0.1)',
                      }}
                    >
                      <Typography variant="caption" sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.7 }}>
                        {activity.detail}
                      </Typography>
                    </Box>
                  </Collapse>
                )}

                {!isLast && <Divider sx={{ borderColor: 'divider', opacity: 0.5 }} />}
              </React.Fragment>
            );
          })}
        </List>

        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body2" color="text.secondary">No events for this filter.</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

// ═══════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════
const stats = [
  { title: 'Monthly Revenue', value: '$84.2', unit: 'K', change: '+12.4%', positive: true,  icon: <TrendingUpIcon />,  color: 'primary'   },
  { title: 'Active Projects', value: '247',   unit: '',  change: '+8.1%',  positive: true,  icon: <ArrowUpwardIcon />, color: 'primary'   },
  { title: 'Response Time',   value: '0.8',   unit: 'ms',change: '-23.6%', positive: true,  icon: <TrendingUpIcon />,  color: 'secondary' },
  { title: 'Error Rate',      value: '0.02',  unit: '%', change: '+0.003%',positive: false, icon: <TrendingDownIcon />,color: 'secondary' },
];

const projects = [
  {
    name: 'API Gateway v3',
    description: 'Next-gen routing with dynamic load balancing and circuit breaker patterns.',
    progress: 78, status: 'active',
    tags: ['Node.js', 'Redis', 'k8s'],
    team: ['Alex', 'Mia', 'Dan'],
    starred: true,
  },
  {
    name: 'Dashboard Redesign',
    description: 'Full UX overhaul with real-time analytics and customizable widget system.',
    progress: 45, status: 'active',
    tags: ['React', 'MUI', 'D3'],
    team: ['Sara', 'Tom'],
    starred: false,
  },
  {
    name: 'Auth Microservice',
    description: 'Centralized auth with OAuth2, SAML, and biometric support for enterprise.',
    progress: 92, status: 'paused',
    tags: ['Go', 'JWT', 'OAuth2'],
    team: ['Leo', 'Kim', 'Ray'],
    starred: true,
  },
];

const activityData = [
  { id: 1, type: 'deploy',   title: 'Production Deploy #1142', subtitle: 'nexus-api → v3.4.1 · by alex@team',   time: '2m ago',  detail: 'Build: 1m 43s  ·  Tests: 312 passed  ·  Coverage: 94%\nContainers: 6 pods scaled · Zero downtime ✓' },
  { id: 2, type: 'bug',      title: 'Bug #884 Resolved',       subtitle: 'Memory leak in WebSocket handler',     time: '18m ago', detail: 'Root cause: EventEmitter not cleaned up on disconnect.\nFix: Added removeAllListeners() in close handler.' },
  { id: 3, type: 'merge',    title: 'PR #341 Merged',          subtitle: 'feat: add rate-limit middleware',       time: '1h ago',  detail: null },
  { id: 4, type: 'member',   title: 'New Member Joined',       subtitle: 'priya@example.com added to Backend',   time: '3h ago',  detail: null },
  { id: 5, type: 'security', title: 'Security Scan Complete',  subtitle: '0 critical · 2 low severity findings', time: '5h ago',  detail: 'Scan engine: Trivy v0.48\nFindings: CVE-2024-1234 (low), CVE-2024-5678 (low)\nAction: Patched in next release.' },
  { id: 6, type: 'deploy',   title: 'Staging Deploy #1141',    subtitle: 'nexus-dashboard → v2.9.0-beta',        time: '7h ago',  detail: null },
  { id: 7, type: 'merge',    title: 'PR #338 Merged',          subtitle: 'fix: resolve CORS on OPTIONS preflight',time: '1d ago',  detail: null },
];

// ═══════════════════════════════════════════════
// COMPONENT METADATA (for showcase cards)
// ═══════════════════════════════════════════════
const componentMeta = [
  {
    id: 0,
    name: 'NexusStatCard',
    description: 'Animated KPI card with gradient accent bar, hover lift, trend indicators, and color variants.',
    props: ['title', 'value', 'unit', 'change', 'positive', 'icon', 'color'],
  },
  {
    id: 1,
    name: 'NexusProjectCard',
    description: 'Interactive project card with gradient progress bar, status badge, team avatars, star/like toggles.',
    props: ['name', 'description', 'progress', 'status', 'tags', 'team', 'starred'],
  },
  {
    id: 2,
    name: 'NexusNotificationItem',
    description: 'Notification row with type badge, unread glow state, and slide-right hover animation.',
    props: ['type', 'title', 'message', 'time', 'unread', 'onRead'],
  },
  {
    id: 3,
    name: 'NexusActivityFeed',
    description: 'Filterable activity timeline with expandable detail rows and type-colored avatars.',
    props: ['activities', 'title'],
  },
];

// ═══════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════
export default function ComponentsPage() {
  const [tab, setTab] = useState(0);
  const [layout, setLayout] = useState('grid');

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', title: 'Deployment Complete',  message: 'Production build deployed successfully with zero downtime.',       time: '2m ago',  unread: true  },
    { id: 2, type: 'warning', title: 'High CPU Usage',       message: 'Server nexus-prod-02 is at 87% CPU. Consider scaling.',            time: '14m ago', unread: true  },
    { id: 3, type: 'info',    title: 'New Integration',      message: 'Stripe webhook integration is now active and receiving events.',    time: '1h ago',  unread: false },
    { id: 4, type: 'error',   title: 'Build Failed',         message: 'staging/feature-auth pipeline failed at unit-tests stage.',        time: '2h ago',  unread: false },
    { id: 5, type: 'info',    title: 'Scheduled Maintenance','message': '2h maintenance window starts tonight at 02:00 UTC.',             time: '3h ago',  unread: false },
  ]);
  const markRead = (id) => setNotifications((p) => p.map((n) => n.id === id ? { ...n, unread: false } : n));
  const unreadCount = notifications.filter((n) => n.unread).length;

  const activeComponent = componentMeta[tab];

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', pt: 10, pb: 10 }}>

      {/* ── Hero banner ── */}
      <Box
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          py: 6,
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative glow */}
        <Box sx={{
          position: 'absolute', right: -80, top: -80, width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'center' }} spacing={3}>
            <Box>
              <Chip
                label="MUI COMPONENT LIBRARY"
                size="small" color="primary" variant="outlined"
                icon={<AutoAwesomeIcon sx={{ fontSize: '13px !important' }} />}
                sx={{ mb: 2 }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, mb: 1.5 }}>
                Custom MUI Components
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540 }}>
                Four production-ready components built entirely with MUI's <code>sx</code> prop and theme tokens.
                Zero external CSS — pure Material UI composition.
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{ flexShrink: 0 }}>
              <Button variant="outlined" color="primary" startIcon={<CodeIcon />} size="small">
                View Source
              </Button>
              <Button variant="contained" color="primary" component={Link} to="/register" size="small">
                Get Started
              </Button>
            </Stack>
          </Stack>

          {/* Component overview cards */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            {componentMeta.map((c) => (
              <Grid item xs={12} sm={6} md={3} key={c.id}>
                <Paper
                  elevation={0}
                  onClick={() => setTab(c.id)}
                  sx={{
                    p: 2, borderRadius: 2, cursor: 'pointer',
                    border: '1px solid',
                    borderColor: tab === c.id ? 'primary.main' : 'divider',
                    backgroundColor: tab === c.id ? 'rgba(0,229,255,0.05)' : 'background.default',
                    transition: 'all 0.2s ease',
                    '&:hover': { borderColor: 'primary.main', backgroundColor: 'rgba(0,229,255,0.04)' },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 700, color: tab === c.id ? 'primary.main' : 'text.primary', fontSize: '0.85rem', mb: 0.5 }}>
                    {c.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.74rem', lineHeight: 1.5 }}>
                    {c.props.length} props
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">

        {/* ── Tabs ── */}
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={2} sx={{ mb: 4 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              borderBottom: '1px solid', borderColor: 'divider',
              '& .MuiTab-root': { fontFamily: '"Rajdhani", sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '0.82rem', minWidth: 'unset', px: 2 },
              '& .Mui-selected': { color: 'primary.main' },
              '& .MuiTabs-indicator': { backgroundColor: 'primary.main', height: 2 },
            }}
          >
            {componentMeta.map((c) => (
              <Tab key={c.id} label={c.name} />
            ))}
          </Tabs>

          {/* layout toggle — only for grid-able tabs */}
          {(tab === 0 || tab === 1) && (
            <ToggleButtonGroup value={layout} exclusive onChange={(_, v) => { if (v) setLayout(v); }} size="small">
              <ToggleButton value="grid" sx={{ px: 1.2, py: 0.4, borderColor: 'divider', color: layout === 'grid' ? 'primary.main' : 'text.secondary' }}>
                <ViewModuleIcon sx={{ fontSize: 18 }} />
              </ToggleButton>
              <ToggleButton value="list" sx={{ px: 1.2, py: 0.4, borderColor: 'divider', color: layout === 'list' ? 'primary.main' : 'text.secondary' }}>
                <ListIcon sx={{ fontSize: 18 }} />
              </ToggleButton>
            </ToggleButtonGroup>
          )}
        </Stack>

        {/* ── Active component meta ── */}
        <Fade in key={tab} timeout={300}>
          <Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{ sm: 'center' }} spacing={1.5} sx={{ mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>{activeComponent.name}</Typography>
              <Stack direction="row" spacing={0.8} flexWrap="wrap">
                {activeComponent.props.map((p) => (
                  <Chip key={p} label={p} size="small" variant="outlined"
                    sx={{ height: 20, fontSize: '0.67rem', borderColor: 'rgba(0,229,255,0.25)', color: 'primary.light', fontFamily: 'monospace' }} />
                ))}
              </Stack>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              {activeComponent.description}
            </Typography>

            {/* ── STAT CARDS ── */}
            {tab === 0 && (
              <Grid container spacing={3}>
                {stats.map((stat) => (
                  <Grid item xs={12} sm={6} lg={layout === 'list' ? 12 : 3} key={stat.title}>
                    <NexusStatCard {...stat} />
                  </Grid>
                ))}
              </Grid>
            )}

            {/* ── PROJECT CARDS ── */}
            {tab === 1 && (
              <Grid container spacing={3}>
                {projects.map((p) => (
                  <Grid item xs={12} md={layout === 'list' ? 12 : 4} key={p.name}>
                    <NexusProjectCard {...p} />
                  </Grid>
                ))}
              </Grid>
            )}

            {/* ── NOTIFICATIONS ── */}
            {tab === 2 && (
              <Box sx={{ maxWidth: 680 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                  <Badge badgeContent={unreadCount} color="primary">
                    <NotificationsIcon sx={{ color: 'text.secondary' }} />
                  </Badge>
                  <Button
                    size="small" variant="text" color="primary"
                    onClick={() => setNotifications((p) => p.map((n) => ({ ...n, unread: false })))}
                    disabled={unreadCount === 0}
                    sx={{ fontSize: '0.76rem' }}
                  >
                    Mark all read
                  </Button>
                </Stack>
                <Stack spacing={1.2}>
                  {notifications.map((n) => (
                    <NexusNotificationItem key={n.id} {...n} onRead={() => markRead(n.id)} />
                  ))}
                </Stack>
              </Box>
            )}

            {/* ── ACTIVITY FEED ── */}
            {tab === 3 && (
              <Box sx={{ maxWidth: 700 }}>
                <NexusActivityFeed activities={activityData} title="Project Activity" />
              </Box>
            )}
          </Box>
        </Fade>

        {/* ── Zero CSS note ── */}
        <Paper
          elevation={0}
          sx={{
            mt: 8, p: 3,
            border: '1px solid rgba(0,229,255,0.15)',
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(0,229,255,0.03) 0%, rgba(255,107,53,0.02) 100%)',
          }}
        >
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Avatar sx={{ bgcolor: 'rgba(0,229,255,0.1)', color: 'primary.main', borderRadius: 1.5 }}>
              <CodeIcon />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 0.8, fontSize: '1rem' }}>
                100% MUI — Zero External CSS
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every pixel in these components is driven by MUI's <code>sx</code> prop, theme tokens,
                and <code>createTheme()</code> overrides in <code>theme.js</code>. No CSS files, no styled-components,
                no Tailwind — just pure Material UI composition and the design system's own primitives.
              </Typography>
            </Box>
          </Stack>
        </Paper>

      </Container>
    </Box>
  );
}
