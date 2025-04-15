import BoxAthlete from "@/components/box-athlete";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const array = [1, 2, 3, 4, 5,6 ,7 ,8];

export default function AthletesPage() {
    return(
        <div className="p-5 h-[100%]">
            <div className="flex flex-row justify-between w-[100%]">
                <h1 className="text-2xl">Athlètes</h1>
                <Button variant="destructive">
                    <Plus className="size-5"/>
                    <p>Ajouter Athlète</p>
                </Button>
            </div>
            <div className="flex flex-wrap mt-5 gap-11">
                {array.map((element) => (
                    <BoxAthlete key={element} />
                ))}
            </div>
        </div>
    )
}