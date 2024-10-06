import { css } from '@emotion/css';
import { Rate as RateBase } from 'antd';
import { withForm } from '../../../form';
import { Space } from '../space';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
interface IRate {
  disabled?: boolean;
  onChange?: any;
  name: string;
  value?: number;
  [k: string]: any;
}

export function Rate({ onChange, value, ...props }: IRate) {
  return (
    <Space
      className={css`
        div {
          color: unset;
        }
      `}
    >
      <RateBase
        value={value}
        tooltips={desc}
        onChange={onChange}
        {...props}
      />
    </Space>
  );
}

export const RateForm = withForm<IRate>(Rate);
