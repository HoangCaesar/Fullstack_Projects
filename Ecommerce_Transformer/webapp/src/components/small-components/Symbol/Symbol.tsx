import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import { Link } from 'react-router-dom';

import './Symbol.scss';

const Symbol = () => {
    return (
        <div className="symbol col l-2 m-2 c-6">
            <Link to="/">
                <span className="logo">
                    <SquareOutlinedIcon sx={{ color: 'white' }} fontSize="medium" />
                </span>
                <button className="name">Prime</button>
            </Link>
        </div>
    );
};

export default Symbol;
