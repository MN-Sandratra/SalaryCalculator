import { connectMongoDB } from "@/libs/mongoConnect";
import { ScheduleModel } from "@/models/Schedule";
import { NextResponse } from "next/server";

export async function GET(req:Request,{params}) {
    const id=params.id;

    try{
        await connectMongoDB();
        const currentHoraire=await ScheduleModel.findById(id);
        return NextResponse.json({data: currentHoraire},{status: 200})

    }catch(error:any){
        return NextResponse.json({message:error.message},{status:500})
    }
}

export async function DELETE(req:Request,{params}) {
    const id = params.id;

    try {
        await connectMongoDB();
        // Find and delete the schedule by ID
        const deletedSchedule = await ScheduleModel.findByIdAndDelete(id);

        if (!deletedSchedule) {
            return NextResponse.json({ message: 'Schedule not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Schedule deleted successfully' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function PUT(req:Request,{params}) {
    const id = params.id;

    try {
        await connectMongoDB();
        // Find and update the schedule by ID
        const updatedSchedule = await ScheduleModel.findByIdAndUpdate(
            id,
            req.json(), // Assuming the request body contains the updated schedule data
            { new: true } // Setting { new: true } returns the modified document rather than the original one
        );

        if (!updatedSchedule) {
            return NextResponse.json({ message: 'Schedule not found' }, { status: 404 });
        }

        return NextResponse.json({ data: updatedSchedule }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}