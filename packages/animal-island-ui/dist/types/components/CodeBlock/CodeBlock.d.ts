import React from 'react';
export interface CodeBlockProps {
    code: string;
    style?: React.CSSProperties;
    className?: string;
}
export declare const CodeBlock: React.FC<CodeBlockProps>;
