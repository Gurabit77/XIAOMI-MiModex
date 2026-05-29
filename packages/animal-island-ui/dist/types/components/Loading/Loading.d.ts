import React from 'react';
export interface LoadingProps {
    className?: string;
    style?: React.CSSProperties;
    active?: boolean;
}
export declare const Loading: React.FC<LoadingProps>;
