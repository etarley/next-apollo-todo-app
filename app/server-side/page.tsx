import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import React from 'react';

export const dynamic = 'force-dynamic';

const query = gql`
  query {
    hello
  }
`;

interface Response {
  hello: string;
}

export default async function ServerSide() {
  const data = await getClient().query<Response>({
    query,
  });

  return (
    <main>
      <h1>{data.data.hello}</h1>
    </main>
  );
}
