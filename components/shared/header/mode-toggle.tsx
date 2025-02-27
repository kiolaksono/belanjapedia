'use client';

import { useTheme } from "next-themes";
import { DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem
 } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { useEffect, useState } from "react";

export default function ModeToggle(){

    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                    {theme === 'system' ?(
                        <SunMoon/>
                    ) : theme === 'dark' ? (
                        <MoonIcon/>
                    ) : (
                        <SunIcon/>
                    )
                }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side={'right'}>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem 
                    checked={theme === 'system'} 
                    onChange={()=>setTheme('system')}
                >
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    checked={theme === 'dark'} 
                    onChange={()=>setTheme('dark')}
                >
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    checked={theme === 'light'} 
                    onChange={()=>setTheme('light')}
                >
                    Light
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}