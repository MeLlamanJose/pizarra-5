import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPlatos, fetchPedidos } from '../lib/api';
import { Layout } from '../components/Layout';
import { PedidosList } from '../components/PedidosList';
import { PlatosGrid } from '../components/PlatosGrid';

export default function PizarraVirtual() {
  const { data: platos } = useQuery({
    queryKey: ['platos'],
    queryFn: fetchPlatos
  });

  const { data: pedidos } = useQuery({
    queryKey: ['pedidos'],
    queryFn: () => fetchPedidos()
  });

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <PlatosGrid platos={platos || []} />
        <PedidosList pedidos={pedidos || []} />
      </div>
    </Layout>
  );
}