import mongoose from 'mongoose';

import { Schema, Document, model } from 'mongoose';

// Interface représentant l'horaire de travail
export interface Schedule extends Document {
  employe: string;
  date: string;
  heure_debut: string;
  heure_fin: string;
  pause_minutes?: number;
}

// Schéma Mongoose pour l'horaire de travail
const ScheduleSchema = new Schema({
  employe: { type: String, required: false },
  date: { type: String, required: true },
  heure_debut: { type: String, required: true },
  heure_fin: { type: String, required: true },
  pause_minutes: { type: Number, default: 0 },
});

// Création du modèle Mongoose associé au schéma
export const ScheduleModel = model<Schedule>('Schedule', ScheduleSchema);
