import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import { Badge, SxProps, Theme } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { isAuthenticated } from '../../../utils/authHandler';
import stringAvatar from '../../../utils/stringAvatar';
import Grid from '../../grid-responsive/Grid';
import { Symbol } from '../../small-components';
import { Link } from 'react-router-dom';
import './Header.scss';

interface Nav {
    nav: boolean;
}

interface LabelIconStyle {
    height: string;
    width: string;
    color: string;
}

interface SubnavIconStyle {
    sx: SxProps<Theme>;
    fontSize: 'inherit' | 'large' | 'small' | 'medium' | undefined;
}

const sx: LabelIconStyle = {
    height: '12px',
    width: '12px',
    color: 'inherit',
};

const subnavIconStyle: SubnavIconStyle = {
    sx: { color: 'white' },
    fontSize: 'large',
};

const iconList: Array<ReactElement> = [
    <SquareOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <ForumOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <AutoAwesomeOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <GradeOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <SearchOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <ContentCopyOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <ImportContactsOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
    <HelpOutlineOutlinedIcon sx={subnavIconStyle.sx} fontSize={subnavIconStyle.fontSize} />,
];

const theme = createTheme({
    palette: {
        primary: {
            main: '#eaff96',
        },
    },
});

const Header = ({ nav }: Nav) => {
    const [open, setOpen] = useState<boolean>(false);
    const [hasToken, setHasToken] = useState<boolean>(false);
    const username: string | null = localStorage.getItem('username');

    useEffect(() => {
        (async () => {
            const res = await isAuthenticated();
            if (res) setHasToken(true);
            else setHasToken(false);
        })();
    }, []);

    const handleModal = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="header">
            <Grid>
                <div className="header__container row no-gutters">
                    <Symbol />
                    {nav && (
                        <div className="header__container--navbar col l-8 l-o-2 m-8 m-o-2 c-6">
                            <ul className="list">
                                <li className="item">
                                    <span className="label">
                                        Product
                                        <KeyboardArrowDownOutlinedIcon sx={sx} />
                                    </span>
                                    <ul className="subnav">
                                        <li className="item">
                                            {iconList[0]}
                                            <a href="#">Autobot</a>
                                        </li>
                                        <li className="item">
                                            {iconList[0]}
                                            <a href="#">Decepticon</a>
                                        </li>
                                        <li className="item">
                                            {iconList[0]}
                                            <a href="#">Avatar</a>
                                        </li>
                                        <li className="item">
                                            {iconList[1]}
                                            <a href="#">Feedback</a>
                                        </li>
                                        <li className="item">
                                            <AutoAwesomeOutlinedIcon
                                                sx={{ color: 'white' }}
                                                fontSize="large"
                                            />
                                            <a href="#">What's new</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <span className="label">
                                        Explore
                                        <KeyboardArrowDownOutlinedIcon color="action" sx={sx} />
                                    </span>
                                    <ul className="subnav">
                                        <li className="item">
                                            <GradeOutlinedIcon
                                                sx={{ color: 'white' }}
                                                fontSize="large"
                                            />
                                            <a href="#">Feature</a>
                                        </li>
                                        <li className="item">
                                            <SearchOutlinedIcon
                                                sx={{ color: 'white' }}
                                                fontSize="large"
                                            />
                                            <a href="#">Search</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <span className="label">
                                        Resources
                                        <KeyboardArrowDownOutlinedIcon color="action" sx={sx} />
                                    </span>
                                    <ul className="subnav">
                                        <li className="item">
                                            <ContentCopyOutlinedIcon
                                                sx={{ color: 'white' }}
                                                fontSize="large"
                                            />
                                            <a href="#">Documentation</a>
                                        </li>
                                        <li className="item">
                                            <ImportContactsOutlinedIcon
                                                sx={{ color: 'white' }}
                                                fontSize="large"
                                            />
                                            <a href="#">Stories</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <span className="label">
                                        Support
                                        <KeyboardArrowDownOutlinedIcon color="action" sx={sx} />
                                    </span>
                                    <ul className="subnav">
                                        <li className="item">
                                            <HelpOutlineOutlinedIcon
                                                sx={{ color: 'white' }}
                                                fontSize="large"
                                            />
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </li>
                                <div className="item">
                                    <p className="text">Pricing</p>
                                </div>
                                <div className="item">
                                    <ThemeProvider theme={theme}>
                                        <Badge
                                            color="primary"
                                            badgeContent={1}
                                            sx={{ fontSize: '13px', color: '#999999' }}
                                            className="text"
                                        >
                                            Cart
                                        </Badge>
                                    </ThemeProvider>
                                </div>
                                {!hasToken && (
                                    <Link to="/auth/login">
                                        <div className="item">
                                            <p className="text">Sign In</p>
                                        </div>
                                    </Link>
                                )}
                                <div className="item">
                                    <button className="btn">Create Blog</button>
                                </div>
                                {hasToken && (
                                    <Link to="/user">
                                        <div className="item">
                                            <Avatar {...stringAvatar(username)} />
                                        </div>
                                    </Link>
                                )}
                            </ul>
                            <div className="mobile-menu-btn">
                                {hasToken ? (
                                    <div className="item">
                                        <Avatar {...stringAvatar(username)} />
                                    </div>
                                ) : (
                                    <h3 className="heading">Sign In</h3>
                                )}
                                {open ? (
                                    <CloseOutlinedIcon
                                        fontSize="large"
                                        sx={{ color: '#fff', cursor: 'pointer' }}
                                        onClick={handleModal}
                                    />
                                ) : (
                                    <MenuOutlinedIcon
                                        fontSize="large"
                                        sx={{ color: '#fff', cursor: 'pointer' }}
                                        onClick={handleModal}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                    <SubnavModal open={open} />
                </div>
            </Grid>
        </div>
    );
};

interface Open {
    open: boolean;
}

const SubnavModal = ({ open }: Open) => {
    const modalRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        if (open) {
            modalRef.current?.classList.add('open');
        } else {
            modalRef.current?.classList.remove('open');
        }
    }, [open]);

    return (
        <>
            {open && (
                <div className="subnavModal" ref={modalRef}>
                    <ul className="subnavModal__list">
                        <li className="subnavModal__list--item">
                            <span className="label">Product</span>
                            <ul className="subnav">
                                <li className="item">
                                    {iconList[0]}
                                    <a href="#">Autobot</a>
                                </li>
                                <li className="item">
                                    {iconList[0]}
                                    <a href="#">Decepticon</a>
                                </li>
                                <li className="item">
                                    {iconList[0]}
                                    <a href="#">Avatar</a>
                                </li>
                                <li className="item">
                                    {iconList[1]}
                                    <a href="#">Feedback</a>
                                </li>
                                <li className="item">
                                    <AutoAwesomeOutlinedIcon
                                        sx={{ color: 'white' }}
                                        fontSize="large"
                                    />
                                    <a href="#">What's new</a>
                                </li>
                            </ul>
                        </li>
                        <li className="subnavModal__list--item col">
                            <span className="label">Explore</span>
                            <ul className="subnav">
                                <li className="item">
                                    <GradeOutlinedIcon sx={{ color: 'white' }} fontSize="large" />
                                    <a href="#">Feature</a>
                                </li>
                                <li className="item">
                                    <SearchOutlinedIcon sx={{ color: 'white' }} fontSize="large" />
                                    <a href="#">Search</a>
                                </li>
                            </ul>
                        </li>
                        <li className="subnavModal__list--item col">
                            <span className="label">Resources</span>
                            <ul className="subnav">
                                <li className="item">
                                    <ContentCopyOutlinedIcon
                                        sx={{ color: 'white' }}
                                        fontSize="large"
                                    />
                                    <a href="#">Documentation</a>
                                </li>
                                <li className="item">
                                    <ImportContactsOutlinedIcon
                                        sx={{ color: 'white' }}
                                        fontSize="large"
                                    />
                                    <a href="#">Stories</a>
                                </li>
                            </ul>
                        </li>
                        <li className="subnavModal__list--item col">
                            <span className="label">Support</span>
                            <ul className="subnav">
                                <li className="item">
                                    <HelpOutlineOutlinedIcon
                                        sx={{ color: 'white' }}
                                        fontSize="large"
                                    />
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </li>
                        <div className="subnavModal__list--item col">
                            <button className="btn">Create Blog</button>
                        </div>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
