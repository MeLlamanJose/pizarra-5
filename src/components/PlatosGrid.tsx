import React from 'react';
import { Plato } from '../types';

interface PlatosGridProps {
  platos: Plato[];
}

export function PlatosGrid({ platos }: PlatosGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {platos.map((plato) => (
        <div
          key={plato.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          {plato.imagen && (
            <img
              src={plato.imagen}
              alt={plato.nombre}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{plato.nombre}</h3>
            <p className="text-sm text-gray-500">{plato.dia_semana}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">
                €{plato.precio.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500">
                Disponibles: {plato.restantes}/{plato.cocinados}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}