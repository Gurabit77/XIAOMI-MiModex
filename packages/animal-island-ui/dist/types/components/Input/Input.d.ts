import React from 'react';
export type InputSize = 'small' | 'middle' | 'large';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
    /** 输入框尺寸 */
    size?: InputSize;
    /** 前缀图标 */
    prefix?: React.ReactNode;
    /** 后缀图标 */
    suffix?: React.ReactNode;
    /** 允许清除 */
    allowClear?: boolean;
    /** 错误状态 */
    status?: 'error' | 'warning';
    /** 是否显示阴影 */
    shadow?: boolean;
    /** 值变化回调 */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** 清除回调 */
    onClear?: () => void;
}
export declare const Input: React.FC<InputProps>;
