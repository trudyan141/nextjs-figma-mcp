import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border/30">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center">
          <Link href="/" className="mr-10">
            <Image 
              src="/images/gstake-logo.svg" 
              alt="GStake Logo" 
              width={152} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-10">
            <Link href="/play" className="text-primary font-medium text-sm">
              Play
            </Link>
            <Link href="/account" className="text-muted-foreground font-medium text-sm hover:text-primary">
              Account
            </Link>
            <Link href="/randao" className="text-muted-foreground font-medium text-sm hover:text-primary">
              RANDAO
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="space-x-2 bg-transparent">
                <Image src="/images/flag-en.svg" alt="English" width={20} height={20} />
                <BsChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Vietnamese</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="bg-background border-border/50">
                All networks
                <BsChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Ethereum</DropdownMenuItem>
              <DropdownMenuItem>Polygon</DropdownMenuItem>
              <DropdownMenuItem>Harmony</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            className="bg-gradient-to-r from-accent to-secondary text-white"
            size="sm"
          >
            <Image src="/images/mm-icon.svg" alt="Metamask" width={20} height={20} />
            <span>Connect with Metamask</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 