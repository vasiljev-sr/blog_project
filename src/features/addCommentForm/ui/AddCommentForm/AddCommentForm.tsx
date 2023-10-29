import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getCommentFormText } from '../../model/selectors/commentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  commentFormActions,
  commentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: commentFormReducer,
};

const AddCommentForm = memo(function AddCommentForm(
  props: AddCommentFormProps
) {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const commentText = useSelector(getCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(commentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(commentText || '');
    onCommentTextChange('');
  }, [commentText, onCommentTextChange, onSendComment]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          value={commentText}
          onChange={onCommentTextChange}
          fullWidth
          placeholder={t('Введите текст комментария')}
        />
        <Button
          type="submit"
          theme="outlined"
          className={cls.submitBtn}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
