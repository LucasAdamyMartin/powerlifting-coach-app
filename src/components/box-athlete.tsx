import { Calendar, EllipsisVertical, LayoutDashboard, Phone } from "lucide-react";
import Image from "next/image";

export default function BoxAthlete() {
    return (
        <div className="flex flex-col border-1 shadow-md gap-4 rounded-2xl p-5 w-[350px]">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row gap-2">
                            <div className="rounded-full border-2 border-black overflow-hidden">
                                <Image src="/avatar.png" width="40" height="40" className="object-contain" alt="avatar"/>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-bold">Lucas Adamy--Martin</h1>
                                <p className="text-sm font-light">lucas.adamymartin@gmail.com</p>
                            </div>
                        </div>
                        <EllipsisVertical/>
                    </div>
                    <p className="text-sm">Dernière programmation faites : il y a 2 jours</p>
                    <p className="text-sm">Abonnement payé ce mois-ci</p>
                    <div className="flex flex-row justify-between pr-20 pl-20">
                        <a href="/athlete"><LayoutDashboard/></a>
                        <a href="/calendar"><Calendar /></a>
                        <Phone />
                    </div>
                </div>
    )
}