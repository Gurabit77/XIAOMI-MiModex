import React from 'react';
export type CheckboxSize = 'small' | 'middle' | 'large';
export interface CheckboxOption {
    /** 选项标签 */
    label: React.ReactNode;
    /** 选项值 */
    value: string | number;
    /** 是否禁用该选项 */
    disabled?: boolean;
}
export interface CheckboxProps {
    /** 选中的值列表（受控） */
    value?: Array<string | number>;
    /** 默认选中的值列表 */
    defaultValue?: Array<string | number>;
    /** 选项列表 */
    options: CheckboxOption[];
    /** 尺寸 */
    size?: CheckboxSize;
    /** 禁用全部 */
    disabled?: boolean;
    /** 布局方向 */
    direction?: 'horizontal' | 'vertical';
    /** 变化回调 */
    onChange?: (values: Array<string | number>) => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
}
export declare const Checkbox: React.FC<CheckboxProps>;
