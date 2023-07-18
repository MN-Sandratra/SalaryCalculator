import { connectMongoDB } from "@/libs/mongoConnect";
import { ScheduleModel } from "@/models/Schedule";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
    // Récupération des données depuis la requête POST
    const { employe, date, heure_debut, heure_fin, pause_minutes } = req.body;

    // Validation des données (vous pouvez utiliser `class-validator` comme dans l'exemple précédent)
    try {
        // Création d'une instance du modèle Schedule pour enregistrer l'horaire dans la base de données
        const newSchedule = new ScheduleModel({
            employe,
            date,
            heure_debut,
            heure_fin,
            pause_minutes,
        });

        console.log(newSchedule);

        // Enregistrement de l'horaire dans la base de données
        await connectMongoDB();
        await newSchedule.save();

        return NextResponse.json({
            status: 'success',
            message: 'L\'horaire de travail a été enregistré avec succès.',
        });
    } catch (error:any) {
        return NextResponse.json({
            status: 'error',
            message: error.message,
        });
    }
}

export async function GET(req:Request) {
    return NextResponse.json({
        msg:"hello world"
    })
}