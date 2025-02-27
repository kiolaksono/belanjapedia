import { Button } from "@/components/ui/button";
import { ShoppingCart, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import Link from "next/link";

export default function MenuItems(){
    return(
        <>
            <ModeToggle/>
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                        <ShoppingCart size={24} /> Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href='/sign-in'>
                        <UserIcon size={24} /> Sign In
                    </Link>
                </Button>
        </>
    )
}