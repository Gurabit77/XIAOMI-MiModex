import React from 'react';
export type IconName = 'icon-miles' | 'icon-camera' | 'icon-chat' | 'icon-critterpedia' | 'icon-design' | 'icon-diy' | 'icon-helicopter' | 'icon-map' | 'icon-shopping' | 'icon-variant';
export interface IconProps {
    name: IconName;
    size?: number | string;
    className?: string;
    style?: React.CSSProperties;
    bounce?: boolean;
}
export declare const Icon: React.FC<IconProps>;
export declare const ICON_LIST: {
    name: IconName;
    label: string;
}[];
