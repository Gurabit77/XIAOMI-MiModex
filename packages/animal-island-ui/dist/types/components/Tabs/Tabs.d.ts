import React from 'react';
export interface TabItem {
    key: string;
    label: React.ReactNode;
    children: React.ReactNode;
}
export interface TabsProps {
    items: TabItem[];
    defaultActiveKey?: string;
    activeKey?: string;
    onChange?: (key: string) => void;
    className?: string;
    style?: React.CSSProperties;
    leafAnimation?: boolean;
    shadow?: boolean;
}
export declare const Tabs: React.FC<TabsProps>;
