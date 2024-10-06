import { css } from '@emotion/css';
import { useTranslation } from '@org/i18n';
import { Button } from '@org/ui';
import { useState } from 'react';
import { CreateTodo } from './create';

export function ActionTodoList() {
  const [isShowCreate, setIsShowCreate] = useState(false);

  const { t } = useTranslation();

  const handleClickCreate = () => {
    setIsShowCreate(true);
  };
  const handleClose = () => {
    setIsShowCreate(false);
  };

  return (
    <div
      className={css`
        display: flex;
      `}
    >
      <Button onClick={handleClickCreate}>{t('create')}</Button>
      <CreateTodo
        close={handleClose}
        isOpen={isShowCreate}
      />
    </div>
  );
}
