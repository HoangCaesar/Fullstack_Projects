import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

export default interface MenuItems {
    id: string;
    title: string;
    type: string;
    children: {
        id?: string;
        title?: string;
        type?: string;
        url?: string;
        icon?: React.ForwardRefExoticComponent<Pick<AntdIconProps, any> & React.RefAttributes<any>>;
        breadcrumbs?: boolean;
        external?: boolean;
        target?: boolean;
        disbaled?: boolean;
        chip?: {
            color: 'primary' | 'default' | 'error' | 'secondary' | 'info' | 'success' | 'warning';
            variant: 'outlined' | 'filled';
            size: 'small' | 'medium';
            label: React.ReactNode;
            avatar: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
        };
    }[];
}

export interface ChildrenOfMenuItems {
    id?: string;
    title?: string;
    type?: string;
    url?: string;
    icon?: React.ForwardRefExoticComponent<Pick<AntdIconProps, any> & React.RefAttributes<any>>;
    breadcrumbs?: boolean;
    external?: boolean;
    target?: boolean;
    disbaled?: boolean;
    chip?: {
        color: 'primary' | 'default' | 'error' | 'secondary' | 'info' | 'success' | 'warning';
        variant: 'outlined' | 'filled';
        size: 'small' | 'medium';
        label: React.ReactNode;
        avatar: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    };
}
