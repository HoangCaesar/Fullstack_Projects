import React from 'react';
import './Ads.scss';
import Grid from '../../grid-responsive/Grid';

const Ads = () => {
    return (
        <div className="ads">
            <div className="ads__overlay">
                <Grid>
                    <a href="#" className="link" target="_blank">
                        <img
                            src="https://transformercaesar.s3.eu-north-1.amazonaws.com/Transformer/main_page/ads_transformer.jpg"
                            alt="Ads image"
                            className="img"
                        />
                    </a>
                </Grid>
            </div>
        </div>
    );
};

export default Ads;
