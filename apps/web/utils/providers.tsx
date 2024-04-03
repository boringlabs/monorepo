"use client";

import { Toaster } from "sonner";
import { ApolloProvider, client } from '@utils/graphql';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Toaster className="dark:hidden" />
      <Toaster theme="dark" className="hidden dark:block" />
      {children}
    </ApolloProvider>
  );
}