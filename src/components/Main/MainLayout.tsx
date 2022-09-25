import { countAtom } from '@states/common';
import { useAtom } from 'jotai';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
  const [num] = useAtom(countAtom);
  return (
    <div className="app">
      <section className="px-16">
        <h1 className="text-2xl font-mono my-6"> React for test🏮--{num} </h1>
        <Outlet />
      </section>
    </div>
  );
};
MainLayout.whyDidYouRender = true;
export default React.memo(MainLayout);
