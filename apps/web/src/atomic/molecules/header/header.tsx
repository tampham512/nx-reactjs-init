import { css, merge } from '@emotion/css';
import { i18nContant, useTranslation } from '@org/i18n';
import { BoxCenter, Dropdown, MenuProps, TranslationOutlined } from '@org/ui';
import { COLOR } from '@org/utils';
export const itemsLanguge: MenuProps['items'] = [
  {
    key: 'vi-VN',
    label: i18nContant('vi-VN'),
  },
  {
    key: 'en-EN',
    label: i18nContant('en-EN'),
  },
];
export function Header() {
  const { i18n } = useTranslation();

  const changeLangue: MenuProps['onClick'] = (value) => {
    i18n.changeLanguage(value.key);
    localStorage.setItem('language', value.key);
  };
  return (
    <div
      className={css`
        display: flex;
        justify-content: flex-end;
      `}
    >
      <Dropdown
        placement='bottomRight'
        arrow
        trigger={['click']}
        menu={{
          items: itemsLanguge,
          onClick: changeLangue,
          selectedKeys: [i18n.language],
        }}
      >
        <BoxCenter
          className={merge(
            css`
              background-color: ${COLOR.Primary};
              cursor: pointer;
              border-radius: 9999px;
              padding: 10px;
              color: ${COLOR.White};
            `,
          )}
        >
          <TranslationOutlined style={{ fontSize: '20px' }} />
        </BoxCenter>
      </Dropdown>
    </div>
  );
}
