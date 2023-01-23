// project import
import { SimpleBar } from '../../../../components';
import Navigation from './Navigation/Navigation';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column',
            },
        }}
    >
        <Navigation />
    </SimpleBar>
);

export default DrawerContent;
