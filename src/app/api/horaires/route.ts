import { connectMongoDB } from "@/libs/mongoConnect";
import { ScheduleModel } from "@/models/Schedule";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    // Récupération des données depuis la requête POST
    console.log("body send")
    const body = await req.json();
    console.log(body);

    const { employe, date, heure_debut, heure_fin, pause_minutes } = body;
    // Validation des données (vous pouvez utiliser `class-validator` comme dans l'exemple précédent)
    try {
        // Création d'une instance du modèle Schedule pour enregistrer l'horaire dans la base de données
        const newSchedule = await ScheduleModel.create({
            employe,
            date,
            heure_debut,
            heure_fin,
            pause_minutes,
        });
        // Enregistrement de l'horaire dans la base de données
        await connectMongoDB();
        await newSchedule.save();

        return NextResponse.json({
            message: 'L\'horaire de travail a été enregistré avec succès.',
        }, {
            status: 200
        }
        );
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
        }, {
            status: 500
        });
    }
}

export async function GET(req: Request) {
    try {
        await connectMongoDB();
        const schedules = await ScheduleModel.find();

        return NextResponse.json({
            data: schedules
        }, {
            status: 200
        }
        );
    } catch (error: any) {
        return NextResponse.json({ data: error.message },{
            status: 500
        });
    }

}