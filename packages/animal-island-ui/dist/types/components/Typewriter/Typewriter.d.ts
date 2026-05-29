import React from 'react';
export interface TypewriterProps {
    /** 需要逐字显示的内容，支持 ReactNode，保留原有元素结构/换行/样式 */
    children?: React.ReactNode;
    /** 每字间隔 (ms), 默认 90 */
    speed?: number;
    /**
     * 外部触发重新播放。值变化即重启动画。
     * 常见用法是把弹窗的 open 次数或一个递增的 key 传进来。
     */
    trigger?: unknown;
    /** 是否自动从头开始播放，默认 true；设为 false 可直接显示全部 */
    autoPlay?: boolean;
    /** 播放完成回调 */
    onDone?: () => void;
}
/**
 * Typewriter 打字机组件
 * - 按字符逐个显示，保留原 children 的元素结构、换行和样式
 * - 不引入任何外层包裹元素，对布局 / 字号 / 颜色 / 字体均零影响
 */
export declare const Typewriter: React.FC<TypewriterProps>;
