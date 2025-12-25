import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

export const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full bg-background text-foreground">
            {/* Sidebar - Desktop */}
            <div className="hidden border-r bg-card/60 backdrop-blur-xl md:block md:w-64 md:fixed md:inset-y-0 z-30">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 md:pl-64 transition-all duration-300">
                <TopNav />
                <main className="flex-1 p-6 md:p-8 overflow-y-auto w-full max-w-7xl mx-auto space-y-8 animate-fade-in">
                    {children}
                </main>
            </div>
        </div>
    );
};
