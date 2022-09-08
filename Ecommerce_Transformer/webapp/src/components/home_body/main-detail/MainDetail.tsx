import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { ReactElement } from 'react';
import { card } from '../../../assets/data/homeData';
import MainDetailMainImg from '../../../assets/img/main_detail_main.jpg';
import Card from './card/Card';
import Grid from '../../grid-responsive/Grid';
import './MainDetail.scss';

interface StyleIcon {
    color: string;
    fontSize: string;
}

const styleIcon: StyleIcon = {
    color: 'white',
    fontSize: '60px',
};

const icon: Array<ReactElement> = [
    <BookOutlinedIcon sx={styleIcon} />,
    <DesignServicesOutlinedIcon sx={styleIcon} />,
    <QuestionAnswerOutlinedIcon sx={styleIcon} />,
    <ShoppingCartCheckoutOutlinedIcon sx={styleIcon} />,
    <PaymentOutlinedIcon sx={styleIcon} />,
    <ManageAccountsOutlinedIcon sx={styleIcon} />,
];

const MainDetail = () => {
    return (
        <div className="mainDetail">
            <Grid>
                <div className="mainDetail__container row">
                    <div className="mainDetail__container--image col l-10 m-12 c-12">
                        <div
                            className="main"
                            style={{ backgroundImage: `url(${MainDetailMainImg})` }}
                        ></div>
                    </div>

                    <div className="mainDetail__container--text col l-12 m-12 c-12">
                        <h3 className="heading">Write your own stories easily.</h3>
                        <p className="desc">
                            An account is all you need to hop into a robot and keep transformer work
                            flowing.
                        </p>
                    </div>

                    <div className="mainDetail__container--card row no-gutters">
                        <Card icon={icon[0]} header={card[0].header} desc={card[0].desc} />
                        <Card icon={icon[1]} header={card[1].header} desc={card[1].desc} />
                        <Card icon={icon[2]} header={card[2].header} desc={card[2].desc} />
                    </div>

                    <div className="mainDetail__container--text col l-12 m-12 c-12">
                        <h3 className="heading">Write your own stories easily.</h3>
                        <p className="desc">
                            An account is all you need to hop into a robot and keep transformer work
                            flowing.
                        </p>
                    </div>

                    <div className="mainDetail__container--card row no-gutters">
                        <Card icon={icon[3]} header={card[3].header} desc={card[3].desc} />
                        <Card icon={icon[4]} header={card[4].header} desc={card[4].desc} />
                        <Card icon={icon[5]} header={card[5].header} desc={card[5].desc} />
                    </div>

                    <div className="mainDetail__container--text col l-12 m-12 c-12">
                        <h3 className="heading">Free for personal use.</h3>
                        <p className="desc">
                            Create a public blog, write your plot, or buy Transformer stuff with our
                            community.
                        </p>
                        <button className="btn">Get started, it's free</button>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default MainDetail;
