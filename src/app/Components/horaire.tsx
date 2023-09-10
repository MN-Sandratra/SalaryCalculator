import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Horaire = (props: any) => {
  const { date, heuresTravail, heureDebut, heureFin, pause } = props;

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="mr-2">
            <FontAwesomeIcon icon={faPencil} className="w-5 h-5" />
          </button>
          <button>
            <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
          </button>
        </div>
        <h4 className="text-lg font-semibold">{date}</h4>
      </div>
      <div className="flex justify-between text-gray-300">
        <p className="flex items-center">
          <span>Nombre d'heures de travail: {heuresTravail}h</span>
        </p>
      </div>
      <div className="text-gray-500">
        <p>Heure de début: <span className="font-semibold">{heureDebut}</span></p>
        <p>Heure de fin: <span className="font-semibold">{heureFin}</span></p>
        <p>Pause: <span className="font-semibold">{pause}</span></p>
      </div>
    </div>
  );
};

export default Horaire;
