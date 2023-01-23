import { Suspense } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) => {
    return (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
};

export default Loadable;
