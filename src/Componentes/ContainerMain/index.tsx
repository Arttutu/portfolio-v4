import React, { ReactNode } from 'react';

interface ContainerMainProps {
  children: ReactNode;
}

const ContainerMain: React.FC<ContainerMainProps> = ({ children }) => {
  return (
    <main className="dark:bg-stone-950 bg-fundo w-full min-h-svh h-auto px-12 sm:px-32 py-8 font-body">
      {children}
    </main>
  );
};

export default ContainerMain;
