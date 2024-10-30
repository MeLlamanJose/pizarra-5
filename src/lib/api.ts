const API_URL = import.meta.env.VITE_API_URL;

export async function fetchPlatos() {
  const response = await fetch(`${API_URL}/platos`);
  if (!response.ok) throw new Error('Error fetching platos');
  return response.json();
}

export async function fetchPedidos(fecha?: string) {
  const url = fecha ? `${API_URL}/pedidos?fecha=${fecha}` : `${API_URL}/pedidos`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error fetching pedidos');
  return response.json();
}

export async function toggleRecogido(id: number) {
  const response = await fetch(`${API_URL}/pedidos/${id}/toggle-recogido`, {
    method: 'POST',
  });
  if (!response.ok) throw new Error('Error toggling recogido status');
  return response.json();
}

export async function crearPedido(pedido: Omit<Pedido, 'id'>) {
  const response = await fetch(`${API_URL}/pedidos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pedido),
  });
  if (!response.ok) throw new Error('Error creating pedido');
  return response.json();
}