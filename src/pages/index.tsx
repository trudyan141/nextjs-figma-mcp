import * as React from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";
import Header from "@/components/Header";
import TicketCard from "@/components/TicketCard";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Active Prize Pools</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TicketCard 
              currency="USDT"
              amount="54,241"
              prizeWorth="$54,241"
              numWinners={5}
              network="Ethereum"
              status="active"
              countdown={{
                days: "00",
                hours: "10",
                minutes: "23",
                seconds: "05"
              }}
            />
            
            <TicketCard 
              currency="ONE"
              amount="25,113"
              prizeWorth="$54,241"
              numWinners={5}
              network="Harmony"
              status="awarding"
            />
            
            <TicketCard 
              currency="ETH"
              amount="54,241"
              prizeWorth="$54,241"
              numWinners={5}
              network="Polygon"
              status="active"
              countdown={{
                days: "01",
                hours: "00",
                minutes: "23",
                seconds: "03"
              }}
            />
            
            <TicketCard 
              currency="TOMO"
              amount="5,638"
              prizeWorth="$54,241"
              numWinners={5}
              network="Ethereum"
              status="awarding"
            />
          </div>
        </div>
      </main>
      
      <div className="fixed inset-0 -z-10 bg-[url('/images/bg-pattern.png')] bg-cover bg-center opacity-30" />
    </div>
  );
}
