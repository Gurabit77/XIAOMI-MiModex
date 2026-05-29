import React from 'react';
export type DividerType = 'line-brown' | 'line-teal' | 'line-white' | 'line-yellow' | 'wave-yellow';
export interface DividerProps {
    /** 分隔线类型 */
    type?: DividerType;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
}
export declare const Divider: React.FC<DividerProps>;
