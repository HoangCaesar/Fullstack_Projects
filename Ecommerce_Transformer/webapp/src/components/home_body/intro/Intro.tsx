import './Intro.scss';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import Grid from '../../grid-responsive/Grid';

const Intro = () => {
    return (
        <div className="intro">
            <Grid>
                <div className="intro__container">
                    <h3 className="heading">Transformer</h3>
                    <h1 className="content">
                        There's A Thin Line Between Being A Hero, And Being A Memory.
                    </h1>
                    <p className="desc">Buy, write blog, and read our stories.</p>
                    <div className="icon">
                        <a href="">
                            <SquareOutlinedIcon sx={{ color: 'inherit', fontSize: '50px' }} />
                        </a>
                        <a href="">
                            <CircleOutlinedIcon sx={{ color: 'inherit', fontSize: '50px' }} />
                        </a>
                        <a href="">
                            <ChangeHistoryOutlinedIcon
                                sx={{ color: 'inherit', fontSize: '50px' }}
                            />
                        </a>
                        <a href="">
                            <RectangleOutlinedIcon sx={{ color: 'inherit', fontSize: '50px' }} />
                        </a>
                        <a href="">
                            <StarBorderPurple500OutlinedIcon
                                sx={{ color: 'inherit', fontSize: '50px' }}
                            />
                        </a>
                    </div>
                    <button className="btn">Shopping Now</button>
                </div>
            </Grid>
        </div>
    );
};

export default Intro;
