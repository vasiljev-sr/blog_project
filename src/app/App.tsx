import { Suspense, useState } from 'react';
import { useTheme } from 'shared/config/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';

export const App = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <Modal isOpen={open} closeModal={() => setOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
          consectetur cum deleniti dignissimos dolorem doloribus dolorum ducimus
          eaque eius esse eveniet, explicabo facere facilis fugiat illum laborum
          laudantium minus molestias necessitatibus officiis placeat porro
          possimus quas quis quo sapiente suscipit tempore vitae voluptatibus.
          Accusamus alias consectetur consequatur corporis cum cupiditate
          doloribus error esse, eum explicabo fugiat incidunt ipsa itaque iure
          labore magnam maxime nihil odio perspiciatis quisquam quo rem
          similique suscipit ut velit voluptate voluptatem! Ab, accusantium
          cumque cupiditate deleniti, dignissimos, dolor eos eveniet illum
          impedit inventore iste laboriosam molestias nisi non odio officia
          perspiciatis saepe suscipit veniam voluptatum!
        </Modal>
        <Button onClick={() => setOpen(true)} theme={'outlined'}>
          open
        </Button>
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
