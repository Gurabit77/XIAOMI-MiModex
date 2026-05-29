import React from 'react';
export interface CollapseProps {
    /** 问题标题 */
    question: React.ReactNode;
    /** 答案内容 */
    answer: React.ReactNode;
    /** 是否默认展开 */
    defaultExpanded?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
}
export declare const Collapse: React.FC<CollapseProps>;
