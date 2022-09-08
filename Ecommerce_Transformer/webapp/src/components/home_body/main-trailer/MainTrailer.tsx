import AutobotIcon from '../../../assets/img/icon_item_autobot.png';
import BmwIcon from '../../../assets/img/icon_item_bmw.png';
import DecepticonIcon from '../../../assets/img/icon_item_decepticon.png';
import KawasakiIcon from '../../../assets/img/icon_item_kawasaki.jpg';
import MercedesIcon from '../../../assets/img/icon_item_mercedes.jpg';
import MagatronImg from '../../../assets/img/megatron.jpg';
import OptimusImg from '../../../assets/img/optimus.jpg';
import PosterTrailer from '../../../assets/img/PosterTrailer.jpg';
import './MainTrailer.scss';
import TabsUI from './tabs-ui/TabsUI';
import Grid from '../../grid-responsive/Grid';

const MainTrailer = () => {
    return (
        <div className="mainTrailer">
            <Grid>
                <div className="mainTrailer__container">
                    <div className="col l-7 m-12 c-12">
                        <TabsUI />
                    </div>

                    <div className="mainTrailer__container--video col l-10 m-12 c-12">
                        <video
                            muted
                            poster={PosterTrailer}
                            loop
                            autoPlay={true}
                            src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/main_page/TRANSFORMERS-+DARK+OF+THE+MOON+Clip+-+-Prime+vs.+Prime-+(2011)_Trim.mp4"
                            width="100%"
                        ></video>
                    </div>

                    <div className="mainTrailer__container--logo col l-12 m-12 c-0">
                        <div className="list">
                            <a href="#" className="item">
                                <img src={AutobotIcon} alt="Autobot icon" />
                            </a>
                            <a href="#" className="item">
                                <img src={DecepticonIcon} alt="DecepticonIcon icon" />
                            </a>
                            <a href="#" className="item">
                                <img src={MercedesIcon} alt="MercedesIcon icon" />
                            </a>
                            <a href="#" className="item">
                                <img src={KawasakiIcon} alt="KawasakiIcon icon" />
                            </a>
                            <a href="#" className="item">
                                <img src={BmwIcon} alt="BmwIcon icon" />
                            </a>
                        </div>
                    </div>

                    <div className="mainTrailer__container--image row">
                        <div className="item col l-6 m-6 c-6">
                            <img src={MagatronImg} />
                        </div>
                        <div className="item col l-6 m-6 c-6">
                            <img src={OptimusImg} />
                        </div>
                    </div>

                    <div className="mainTrailer__container--text col">
                        <h3 className="heading">Families in Transformer</h3>
                        <h1 className="content">Autobot or Decepticon?</h1>
                        <p className="desc">Choose your side and start your journey.</p>
                        <button className="btn">Learn more</button>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default MainTrailer;
