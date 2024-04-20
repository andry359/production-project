import React, {
    FC, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    type?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    autofocus?: boolean;
}

export const Input: FC<InputProps> = React.memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCarriagePosition(e.target.value.length);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onSelect = (e: any) => {
        setCarriagePosition(e?.target.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classNames(cls.placeholder)}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.carriageWrapper}>
                <input
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    ref={ref}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.carriage}
                        style={{ left: `${carriagePosition * 6.7}px` }}
                    />
                )}
            </div>
        </div>
    );
});