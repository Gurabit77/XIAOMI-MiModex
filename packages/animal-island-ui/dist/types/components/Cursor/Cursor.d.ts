import React from 'react';
import './cursor.css';
export interface CursorProps {
    /** 子元素 */
    children?: React.ReactNode;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
}
export declare const Cursor: React.FC<CursorProps>;
