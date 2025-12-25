import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, PanelLeft, ChevronRight } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const TopNav = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    return (
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-6 backdrop-blur-md">
            <Button variant="ghost" size="icon" className="md:hidden">
                <PanelLeft className="h-5 w-5" />
            </Button>

            <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Madar</span>
                {pathSegments.map((segment, index) => (
                    <React.Fragment key={index}>
                        <ChevronRight className="h-4 w-4" />
                        <span className="capitalize text-foreground">{segment.replace('-', ' ')}</span>
                    </React.Fragment>
                ))}
            </div>

            <div className="flex flex-1 items-center gap-4 justify-end">
                <form className="hidden sm:flex w-full max-w-[300px]">
                    <div className="relative w-full">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search licenses, citizens, or ask AI..."
                            className="pl-9 bg-background/50 focus-visible:ring-1"
                        />
                    </div>
                </form>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-background" />
                </Button>
            </div>
        </header>
    );
};
