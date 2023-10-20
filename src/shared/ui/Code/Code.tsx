import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Icon } from 'shared/ui/Icon/Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code(props: CodeProps) {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} onClick={onCopy}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
