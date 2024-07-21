"use client";

import { SessionProvider } from "next-auth/react";
import React, { FC, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Props {
  children?: React.ReactNode;
}

const Providers: FC<Props> = (props) => {
  const { children } = props;
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        {process.env.NODE_ENV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
