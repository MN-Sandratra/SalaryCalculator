import React from 'react';

export const Horaire = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="mr-2">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 10h16M4 14h16M10 4h4v16h-4z" />
            </svg>
          </button>
          <button>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm0 8a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1z" />
            </svg>
          </button>
        </div>
        <h4 className="text-lg font-semibold">12/07/2023</h4>
      </div>
      <div className="flex justify-between text-gray-300">
        <p className="flex items-center">
          <span>Nombre d'heures de travail: 5h</span>
        </p>
      </div>
      <div className="text-gray-500">
        <p>Heure de début: <span className="font-semibold">9:00</span></p>
        <p>Heure de fin: <span className="font-semibold">17:00</span></p>
      </div>
    </div>
  );
};
 