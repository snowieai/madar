import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
    Database, Brain, GitBranch, Smartphone,
    Server, FileText, Globe, Bot, ShieldCheck,
    ArrowDown, ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

// Layer Data aligned with Framework Doc
const layers = [
    {
        id: 'experience',
        title: '5. EXPERIENCE LAYER',
        icon: Smartphone,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        description: 'Unified access via Web, Mobile, Chat, and API.',
        items: [
            { label: 'Web Dashboard', icon: Globe },
            { label: 'Mobile App', icon: Smartphone },
            { label: 'AI Assistant', icon: Bot },
        ]
    },
    {
        id: 'security',
        title: '4. SECURITY & GOVERNANCE',
        icon: ShieldCheck,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        description: 'Role-based access, Audit logs, Encryption.',
        items: [
            { label: 'RBAC Access', icon: ShieldCheck },
            { label: 'Audit Trails', icon: FileText },
        ]
    },
    {
        id: 'workflow',
        title: '3. WORKFLOW & AUTOMATION',
        icon: GitBranch,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        description: 'Auto-routing, SLA tracking, Approval chains.',
        items: [
            { label: 'Rule Engine', icon: GitBranch },
            { label: 'SLA Tracker', icon: ArrowDown },
        ]
    },
    {
        id: 'intelligence',
        title: '2. AI INTELLIGENCE LAYER',
        icon: Brain,
        color: 'text-pink-400',
        bg: 'bg-pink-400/10',
        description: 'NLP, OCR, Predictive Analytics, Fraud Detection.',
        items: [
            { label: 'NLP/Arabic', icon: Brain },
            { label: 'OCR Engine', icon: FileText },
            { label: 'Risk Model', icon: ShieldCheck },
        ]
    },
    {
        id: 'data',
        title: '1. DATA INTEGRATION LAYER',
        icon: Database,
        color: 'text-amber-400',
        bg: 'bg-amber-400/10',
        description: 'Connects Government portals, CRMs, ERPs, and Docs.',
        items: [
            { label: 'Muncipality API', icon: Server },
            { label: 'SEDD DB', icon: Database },
            { label: 'Federal Docs', icon: FileText },
        ]
    }
];

export const Orchestration = () => {
    const [activeLayer, setActiveLayer] = useState(null);

    return (
        <div className="flex flex-col h-[calc(100vh-100px)] gap-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Platform Architecture</h2>
                <p className="text-muted-foreground">The "Madar Framework": Transforming disconnected data into unified experiences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
                {/* Layer Stack Visualization */}
                <div className="lg:col-span-8 flex flex-col gap-4 relative">
                    <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-20 hidden md:block rounded-full"></div>

                    {layers.map((layer, index) => (
                        <motion.div
                            key={layer.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setActiveLayer(layer.id === activeLayer ? null : layer.id)}
                            className={cn(
                                "relative md:ml-12 p-6 rounded-xl border bg-card/50 backdrop-blur-sm transition-all cursor-pointer group hover:border-primary/50",
                                activeLayer === layer.id ? "ring-2 ring-primary/50 bg-card/80" : ""
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110", layer.bg, layer.color)}>
                                        <layer.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={cn("font-bold text-lg", layer.color)}>{layer.title}</h3>
                                        <p className="text-sm text-muted-foreground">{layer.description}</p>
                                    </div>
                                </div>
                                <ChevronRight className={cn("text-muted-foreground transition-transform", activeLayer === layer.id ? "rotate-90" : "")} />
                            </div>

                            {/* Expanded Details */}
                            <AnimatePresence>
                                {activeLayer === layer.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-background/50 rounded-lg border border-border/50">
                                            {layer.items.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-white/5">
                                                    <item.icon size={16} className="text-muted-foreground" />
                                                    <span className="text-sm font-medium">{item.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Live Metrics / "Why Madar?" Panel */}
                <div className="lg:col-span-4 space-y-6">
                    <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                        <CardHeader>
                            <CardTitle>Streamlining Effect</CardTitle>
                            <CardDescription>Impact of the Single Platform approach.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Manual Data Entry</span>
                                    <span className="font-bold text-red-400">-85%</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-[15%]"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Turnaround Time</span>
                                    <span className="font-bold text-green-400">3x Faster</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[75%]"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Visibility</span>
                                    <span className="font-bold text-primary">100% End-to-End</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-full"></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Active Connections</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <div className="flex items-center justify-between p-2 rounded bg-green-500/10 border border-green-500/20">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-sm font-medium">Municipality API</span>
                                </div>
                                <span className="text-xs text-green-400">Connected</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-green-500/10 border border-green-500/20">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-sm font-medium">SEDD Database</span>
                                </div>
                                <span className="text-xs text-green-400">Syncing (45ms)</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-yellow-500/10 border border-yellow-500/20">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                    <span className="text-sm font-medium">Legacy CRM</span>
                                </div>
                                <span className="text-xs text-yellow-400">Polling (5m)</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
