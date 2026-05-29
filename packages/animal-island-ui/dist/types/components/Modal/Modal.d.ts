import React from 'react';
export interface ModalProps {
    /** 是否可见 */
    open: boolean;
    /** 标题 */
    title?: React.ReactNode;
    /** 宽度 */
    width?: number | string;
    /** 点击遮罩关闭 */
    maskClosable?: boolean;
    /** 底部按钮区域 */
    footer?: React.ReactNode | null;
    /** 关闭回调 */
    onClose?: () => void;
    /** 确认回调 */
    onOk?: () => void;
    /** 自定义内容 */
    children?: React.ReactNode;
    className?: string;
    /** 打字机每字间隔 (ms), 默认 80 */
    typeSpeed?: number;
    /** 是否启用打字机效果, 默认 true */
    typewriter?: boolean;
}
export declare const Modal: React.FC<ModalProps>;
