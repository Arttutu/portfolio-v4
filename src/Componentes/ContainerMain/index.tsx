import React, { ReactNode } from 'react';

interface ContainerMainProps {
  children: ReactNode;
}

const ContainerMain: React.FC<ContainerMainProps> = ({ children }) => {
  return (
    <main className="dark:bg-stone-950 bg-fundo w-full h-auto px-8 py-8 font-body">
      {children}
    </main>
  );
};

export default ContainerMain;
