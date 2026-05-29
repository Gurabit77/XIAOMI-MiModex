import React from 'react';
export type FooterType = 'sea' | 'tree';
export interface FooterProps {
    /** Footer 类型 */
    type?: FooterType;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
}
export declare const Footer: React.FC<FooterProps>;
