import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Briefcase, FileText, Settings, Activity, Hexagon, Building2, BarChart3, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';

export const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Command Center', path: '/dashboard' },
        { icon: Hexagon, label: 'Orchestration', path: '/orchestration' },
        { icon: Building2, label: 'Gov Services', path: '/solutions/government' },
        { icon: BarChart3, label: 'Business Intel', path: '/solutions/business' },
        { icon: BookOpen, label: 'Document AI', path: '/solutions/documents' },
        { icon: Briefcase, label: 'All Solutions', path: '/services' },
        { icon: Activity, label: 'Analytics', path: '/analytics' },
    ];

    return (
        <div className="flex h-full flex-col gap-2">
            <div className="flex h-16 items-center border-b px-6">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <Hexagon size={18} fill="currentColor" />
                    </div>
                    <span>MADAR</span>
                </div>
            </div>

            <div className="flex-1 overflow-auto py-4 px-3">
                <nav className="grid gap-1">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) => cn(
                                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground",
                                isActive ? "bg-primary/10 text-primary hover:bg-primary/15" : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                            {item.badge && (
                                <Badge variant="glass" className="ml-auto h-5 px-1.5 text-[10px] bg-green-500/10 text-green-500 border-green-500/20">
                                    {item.badge}
                                </Badge>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="mt-auto border-t p-4">
                <div className="flex items-center gap-3 rounded-lg bg-accent/50 p-3">
                    <div className="h-9 w-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                        JD
                    </div>
                    <div className="text-sm">
                        <p className="font-medium leading-none">Officer John Doe</p>
                        <p className="text-xs text-muted-foreground mt-1">Municipality Admin</p>
                    </div>
                    <Settings className="ml-auto h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
                </div>
            </div>
        </div>
    );
};
