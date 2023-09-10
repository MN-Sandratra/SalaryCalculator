'use client';
import React, { useEffect, useState } from "react"
import { error } from "console";
import Horaire from "../Components/horaire";

export default function schedules() {
    const [schedules, setSchedules] = useState([]);
    const getAllSchedule = () => {
        fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/horaires`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setSchedules(data.data)
            }).catch(error => console.log(error))
    }

    useEffect(() => {
        getAllSchedule();
    }, []);

    return (
        <div className="flex h-screen flex-col items-center py-12 px-12">
            <header className="container flex justify-between">
                <h1 className="text-3xl font-bold mb-4">Schedule</h1>
                <button className=" bg-gray-800 rounded-lg shadow-md text-white font-bold py-2 px-4 rounded">Ajouter un nouvel horaire</button>
            </header>
            <div className="flex py-10">
                {
                    schedules.map((el: any) => <>
                        <Horaire
                            date={el.date}
                            heuresTravail={el.heure_debut}
                            heureDebut={el.heure_debut}
                            heureFin={el.heure_fin}
                            pause={el.pause_minutes}
                        />
                    </>)
                }
            </div>
        </div>
    );
}