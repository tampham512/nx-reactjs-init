import { css, cx } from '@emotion/css';
import { ChangeEvent, FormEvent, HTMLAttributes, useState } from 'react';
import { withForm } from '../../../form';
import { Space } from '../space';
import { mediaTablet } from '@org/utils';
import { If, Then } from 'react-if';

export enum TypeInput {
  Password = 'password',
  Text = 'text',
}

export type IInput = HTMLAttributes<HTMLInputElement> & {
  name: string;
  onChange?: (value: string) => void;
  value?: any;
  labelInput?: string;
  $type?: TypeInput;
  label?: string;
  required?: boolean;
  [k: string]: unknown;
};

export function Input({
  onChange,
  value,
  labelInput,
  className,
  $type,
  required,
  ...props
}: IInput) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      {labelInput && (
        <label
          className={css`
            display: block;
            padding-bottom: 0.3rem;
            font-size: 1.3rem;
          `}
        >
          {labelInput}
          {required && <span className='text-red-700'> *</span>}
        </label>
      )}
      <Space
        className={css`
          position: relative;
          width: 100%;
        `}
      >
        <input
          className={cx(
            css`
              border: 0.1rem solid #c5c4c5;
              width: 100%;
              margin-bottom: 0.5rem;
              padding: 0.8rem 1rem;
              font-size: 1.5rem;
              ${mediaTablet} {
                font-size: 1.3rem;
                padding: 0.6rem 0.7rem;
              }
              border-radius: 0.5rem;
              outline: none;

              padding-right: ${TypeInput.Password === $type ? '3rem' : 'auto'};

              &::placeholder {
                font-size: 1.4rem;
                ${mediaTablet} {
                  font-size: 1.3rem;
                }
              }
            `,
            className,
          )}
          {...props}
          type={TypeInput.Password === $type && hidePassword ? TypeInput.Password : TypeInput.Text}
          onChange={(e: FormEvent<HTMLInputElement>) => {
            onChange && onChange(e.currentTarget.value);
          }}
          value={value && value}
        />
        <If condition={$type === TypeInput.Password}>
          <Then>
            <Space
              onClick={() => setHidePassword((prev) => !prev)}
              className={css`
                position: absolute;
                right: 1rem;
                top: 50%;
                transform: translateY(-60%);
              `}
            />
          </Then>
        </If>
      </Space>
    </>
  );
}
export const InputForm = withForm<IInput>(Input);

export type ITextArea = HTMLAttributes<HTMLInputElement> & {
  name: string;
  onChange?: (value: string) => void;
  value?: any;
  labelInput?: string;
  label: string;
  required?: boolean;
};
export function TextArea({ onChange, value, labelInput, className, required }: ITextArea) {
  return (
    <>
      {labelInput && (
        <label
          className={css`
            display: block;
            padding-bottom: 0.3rem;
            font-size: 1.3rem;
          `}
        >
          {labelInput}
          {required && <span className='text-red-700'>*</span>}
        </label>
      )}
      <Space
        className={css`
          position: relative;
          width: 100%;
        `}
      >
        <textarea
          className={cx(
            css`
              border: 0.1rem solid #c5c4c5;
              width: 100%;
              margin-bottom: 0.5rem;
              padding: 0.8rem 1rem;
              border-radius: 0.5rem;
              outline: none;
              font-size: 1.5rem;

              &::placeholder {
                font-size: 1.4rem;
              }
            `,
            className,
          )}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            onChange && onChange(e.currentTarget.value);
          }}
          defaultValue={value && value}
        />
      </Space>
    </>
  );
}

export const TextAreaForm = withForm<ITextArea>(TextArea);
