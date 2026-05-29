import React from 'react';
export type SelectOption = {
    key: string;
    label: string;
};
export interface SelectProps {
    options: SelectOption[];
    value: string;
    onChange: (key: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
export declare const Select: React.FC<SelectProps>;
