import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TicketCardProps {
  currency: "USDT" | "ETH" | "ONE" | "TOMO";
  amount: string;
  prizeWorth: string;
  numWinners: number;
  network: "Ethereum" | "Polygon" | "Harmony";
  status: "active" | "awarding";
  countdown?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

const currencyIcons = {
  USDT: "/images/usdt-icon.svg",
  ETH: "/images/eth-icon.svg",
  ONE: "/images/one-icon.svg",
  TOMO: "/images/tomo-icon.svg",
};

const networkColors = {
  Ethereum: "text-[#3C9AE8]",
  Polygon: "text-[#8C6CD5]",
  Harmony: "text-[#00AEE9]",
};

const TicketCard: React.FC<TicketCardProps> = ({
  currency,
  amount,
  prizeWorth,
  numWinners,
  network,
  status,
  countdown,
}) => {
  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-secondary to-background border-none rounded-3xl overflow-hidden relative">
      {/* Circle cutouts */}
      <div className="absolute -left-3 top-1/2 w-6 h-6 bg-background rounded-full" />
      <div className="absolute -right-3 top-1/2 w-6 h-6 bg-background rounded-full" />
      
      <div className="p-6 flex flex-col gap-8">
        {/* Prize section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={currencyIcons[currency]}
              alt={currency}
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium text-white">{amount}</span>
                <span className="text-2xl text-white">{currency}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted">Prize worth:</span>
                <span className="text-[#49AA19] font-medium">{prizeWorth}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border" />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">Compound Yield</span>
              <Image
                src="/images/tomo-icon.svg"
                alt="TOMO"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">No. of winners:</span>
              <span className="text-white font-bold text-sm">{numWinners}</span>
            </div>
          </div>
        </div>
        
        {/* Timer or Status section */}
        {status === "active" && countdown ? (
          <div className="flex flex-col gap-2">
            <div className="flex justify-center gap-1">
              {/* Days */}
              <div className="flex gap-1">
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.days[0]}</span>
                </div>
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.days[1]}</span>
                </div>
              </div>
              
              <span className="text-[#8C6CD5] text-2xl">:</span>
              
              {/* Hours */}
              <div className="flex gap-1">
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.hours[0]}</span>
                </div>
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.hours[1]}</span>
                </div>
              </div>
              
              <span className="text-[#8C6CD5] text-2xl">:</span>
              
              {/* Minutes */}
              <div className="flex gap-1">
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.minutes[0]}</span>
                </div>
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.minutes[1]}</span>
                </div>
              </div>
              
              <span className="text-[#8C6CD5] text-2xl">:</span>
              
              {/* Seconds */}
              <div className="flex gap-1">
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.seconds[0]}</span>
                </div>
                <div className="bg-[#311C61] w-8 h-10 rounded flex items-center justify-center">
                  <span className="text-[#8C6CD5] text-2xl">{countdown.seconds[1]}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center text-center gap-6">
              <span className="text-xs text-muted w-[50px]">Day</span>
              <span className="text-xs text-muted w-[50px]">Hr</span>
              <span className="text-xs text-muted w-[50px]">Min</span>
              <span className="text-xs text-muted w-[50px]">Sec</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 py-4">
            <div className="bg-gradient-to-r from-accent to-primary w-6 h-6 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-accent text-xl font-medium">Awarding prize...</span>
          </div>
        )}
        
        <div className="border-t border-border border-dashed" />
        
        {/* Footer section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">Network:</span>
              <span className={`text-xs ${networkColors[network]}`}>{network}</span>
            </div>
            <span className="text-xs text-primary cursor-pointer">View pool</span>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-accent to-secondary text-white"
          >
            <Image src="/images/mm-icon.svg" alt="Metamask" width={20} height={20} />
            <span>Connect to Metamask</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TicketCard; 