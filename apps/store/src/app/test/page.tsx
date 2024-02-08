import usePrefetchQuery from '@/hooks/prefetch-query';
import { AxiosInstance } from 'axios';
import React from 'react'
import { getAPIClient } from '../api/apiConfig';

export default async function Test() {
  async function getAll(serverApi?: AxiosInstance): Promise<any> {
    const response = await serverApi!.get(``)

    return response.data;
  }

  const allUsers = await usePrefetchQuery(getAll)

  console.log(allUsers)

  return (
    <div className="flex-col">
      <div className="space-y-4 lg:p-8 p-4 pt-6">
        Deu certo
      </div>
    </div>
  );
}
