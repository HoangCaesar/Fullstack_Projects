import { useRef, useState } from 'react';

// material-ui
import {
    Avatar,
    Badge,
    Box,
    ClickAwayListener,
    Divider,
    IconButton,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Popper,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { MainCard, Transitions } from '../../../../components';

// assets
import {
    BellOutlined,
    CheckOutlined,
    CloseOutlined,
    GiftOutlined,
    InfoCircleOutlined,
    InfoOutlined,
    MessageOutlined,
    SettingOutlined,
    WarningOutlined,
} from '@ant-design/icons';

// sx styles
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem',
};

const actionSX = {
    mt: '6px',
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',

    transform: 'none',
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Notification = () => {
    const theme: any = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const anchorRef = useRef<any>(null);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: globalThis.MouseEvent | TouchEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const iconBackColorOpen = 'grey.300';
    const iconBackColor = 'grey.100';

    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <IconButton
                disableRipple
                color="secondary"
                sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Badge badgeContent={4} color="primary">
                    <BellOutlined />
                </Badge>
            </IconButton>
            <Popper
                placement={matchesXs ? 'bottom' : 'bottom-end'}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [matchesXs ? -5 : 0, 9],
                            },
                        },
                    ],
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="fade" in={open} {...TransitionProps}>
                        <Paper
                            sx={{
                                boxShadow: theme.customShadows.z1,
                                width: '100%',
                                minWidth: 285,
                                maxWidth: 420,
                                [theme.breakpoints.down('md')]: {
                                    maxWidth: 285,
                                },
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard
                                    title="Notification"
                                    elevation={0}
                                    border={false}
                                    content={false}
                                    secondary={
                                        <IconButton size="small" onClick={handleToggle}>
                                            <CloseOutlined />
                                        </IconButton>
                                    }
                                >
                                    <List
                                        component="nav"
                                        sx={{
                                            p: 0,
                                            '& .MuiListItemButton-root': {
                                                py: 0.5,
                                                '& .MuiAvatar-root': avatarSX,
                                                '& .MuiListItemSecondaryAction-root': {
                                                    ...actionSX,
                                                    position: 'relative',
                                                },
                                            },
                                        }}
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    sx={{
                                                        color: 'success.main',
                                                        bgcolor: 'success.lighter',
                                                    }}
                                                >
                                                    <CheckOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        This is a pet project for the challenge from
                                                        <Typography
                                                            component="span"
                                                            variant="subtitle1"
                                                        >
                                                            {' '}
                                                            Solia
                                                        </Typography>{' '}
                                                        .
                                                    </Typography>
                                                }
                                                secondary="A few seconds ago"
                                            />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" noWrap>
                                                    2:45 PM
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItemButton>
                                        <Divider />
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    sx={{
                                                        color: 'primary.main',
                                                        bgcolor: 'primary.lighter',
                                                    }}
                                                >
                                                    <InfoCircleOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        Click, hold and drag on
                                                        <Typography
                                                            component="span"
                                                            variant="subtitle1"
                                                        >
                                                            {' '}
                                                            Total Using Distance In 3 Months
                                                        </Typography>{' '}
                                                        area chart to zoom.
                                                    </Typography>
                                                }
                                                secondary="20 minutes ago"
                                            />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" noWrap>
                                                    3:00 AM
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItemButton>
                                        <Divider />
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    sx={{
                                                        color: 'warning.main',
                                                        bgcolor: 'warning.lighter',
                                                    }}
                                                >
                                                    <WarningOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        If data is not specified yet,
                                                        <Typography
                                                            component="span"
                                                            variant="subtitle1"
                                                        >
                                                            {' '}
                                                            please reload the page.
                                                        </Typography>{' '}
                                                    </Typography>
                                                }
                                                secondary="1 Janurary"
                                            />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" noWrap>
                                                    6:00 PM
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItemButton>
                                        <Divider />
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    sx={{
                                                        color: 'primary.main',
                                                        bgcolor: 'primary.lighter',
                                                    }}
                                                >
                                                    C
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6">
                                                        <Typography
                                                            component="span"
                                                            variant="subtitle1"
                                                        >
                                                            Have a nice day, guys.
                                                        </Typography>{' '}
                                                    </Typography>
                                                }
                                                secondary="5 August"
                                            />
                                            <ListItemSecondaryAction>
                                                <Typography variant="caption" noWrap>
                                                    00:00 AM
                                                </Typography>
                                            </ListItemSecondaryAction>
                                        </ListItemButton>
                                        <Divider />
                                        <ListItemButton
                                            sx={{ textAlign: 'center', py: `${12}px !important` }}
                                        >
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6" color="primary">
                                                        View All
                                                    </Typography>
                                                }
                                            />
                                        </ListItemButton>
                                    </List>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </Box>
    );
};

export default Notification;
