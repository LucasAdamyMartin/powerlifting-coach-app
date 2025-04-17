'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {  Users, CalendarCheck, DollarSign, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tableau de bord</h1>

      {/* Résumé rapide */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">Athlètes actifs</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <Users className="w-6 h-6 text-primary" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">Programmations manquantes</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">Séances cette semaine</p>
              <p className="text-2xl font-bold">34</p>
            </div>
            <CalendarCheck className="w-6 h-6 text-green-500" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm text-muted-foreground">Revenus du mois</p>
              <p className="text-2xl font-bold">€540</p>
            </div>
            <DollarSign className="w-6 h-6 text-emerald-500" />
          </CardContent>
        </Card>
      </div>

      {/* Section des athlètes sans programmation */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Programmations à faire</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span>Mathieu D.</span>
            <Button size="sm" variant="outline">Créer la programmation</Button>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span>Julie L.</span>
            <Button size="sm" variant="outline">Créer la programmation</Button>
          </div>
        </div>
      </div>

      {/* Tableau des athlètes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Liste des athlètes</h2>
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Nom</th>
                <th className="p-3">Dernière séance</th>
                <th className="p-3">Paiement</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Mathieu D.</td>
                <td className="p-3">15 avril</td>
                <td className="p-3"><Badge variant="default">Payé</Badge></td>
                <td className="p-3"><Button size="sm" variant="link">Voir</Button></td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Julie L.</td>
                <td className="p-3">13 avril</td>
                <td className="p-3"><Badge variant="destructive">Non payé</Badge></td>
                <td className="p-3"><Button size="sm" variant="link">Voir</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

