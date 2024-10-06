import { useMessageHook } from '@org/core';
import { i18next, useTranslation } from '@org/i18n';
import {
  BoxCenter,
  Button,
  Drawer,
  FormProvider,
  InputForm,
  SIZE,
  Spin,
  TYPE_BUTTON,
  useForm,
  yupResolver,
} from '@org/ui';
import { useCreateTodoListMutation } from '@store/services';

import * as yup from 'yup';

const dataInit = {
  title: '',
};
type ICreateTodoData = typeof dataInit;

export type ICreateTodoProps = {
  close: () => void;
  isOpen: boolean;
};
export function CreateTodo({ close, isOpen }: ICreateTodoProps) {
  const { t } = useTranslation();
  const form = useForm<ICreateTodoData>({
    defaultValues: dataInit,
    resolver: yupResolver(
      yup.object({
        title: yup.string().required(i18next.t('required.field')),
      }),
    ),
  });

  const { messageError, messageSuccess, contextHolder } = useMessageHook();

  const [createData, { isLoading: isLoadingCreate }] = useCreateTodoListMutation();

  const handleSave = async (data: ICreateTodoData) => {
    createData(data)
      .then(() => {
        messageSuccess(t('add.success'));
      })
      .catch(() => {
        messageError(t('add.error'));
      })
      .finally(() => {
        handleClose();
      });
  };

  const handleClose = () => {
    form.reset();
    close();
  };
  return (
    <>
      {contextHolder}
      <Drawer
        title={t('create')}
        placement={'right'}
        width={500}
        onClose={handleClose}
        open={isOpen}
        extra={
          <BoxCenter>
            <Button
              $type={TYPE_BUTTON.Primary}
              $size={SIZE.ExtraSmall}
              onClick={form.handleSubmit((value: ICreateTodoData) => {
                handleSave(value);
              })}
            >
              {t('button.save')}
            </Button>
          </BoxCenter>
        }
      >
        <Spin spinning={isLoadingCreate}>
          <FormProvider {...form}>
            <InputForm
              name='title'
              label={t('title')}
              required
            />
          </FormProvider>
        </Spin>
      </Drawer>
    </>
  );
}
