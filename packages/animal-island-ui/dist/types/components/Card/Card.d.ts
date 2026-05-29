import React from 'react';
export type CardType = 'default' | 'title' | 'dashed';
export type CardColor = 'default' | 'app-pink' | 'purple' | 'app-blue' | 'app-yellow' | 'app-orange' | 'app-teal' | 'app-green' | 'app-red' | 'lime-green' | 'yellow-green' | 'brown' | 'warm-peach-pink';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** 卡片类型 */
    type?: CardType;
    /** 背景颜色类型 */
    color?: CardColor;
    /** 自定义内容 */
    children?: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
