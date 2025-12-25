import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { ShieldCheck, Cpu, Globe, ArrowRight, Zap, GitPullRequest } from 'lucide-react';

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
            {/* Navigation */}
            <nav className="container mx-auto flex items-center justify-between py-6 px-6">
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-full animate-pulse" />
                    </div>
                    MADAR <span className="text-primary font-light">AI</span>
                </div>
                <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
                    <Button variant="outline" onClick={() => navigate('/contact')}>Contact Sales</Button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 container mx-auto px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 max-w-4xl"
                >
                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary/50 backdrop-blur-sm text-secondary-foreground mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        v2.2 Live: Now with Semantic Search
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 pb-2 h-[1.2em]">
                        The Central Nervous System <br /> for <span className="text-primary typing-cursor">Intelligent Governance</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Orchestrate data, silence the noise, and automate decision-making across all government sectors with a unified AI platform.
                    </p>

                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25" onClick={() => navigate('/dashboard')}>
                            Enter Platform <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
                            View Documentation
                        </Button>
                    </div>
                </motion.div>

                {/* Feature Grid (Bento) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full"
                >
                    {/* Card 1: AI Core */}
                    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-card to-card/50 border-input/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <Cpu className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Centralized Intelligence</CardTitle>
                            <CardDescription>
                                Process millions of unstructured documents, emails, and forms in real-time.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-32 w-full bg-secondary/20 rounded-lg border border-border/50 flex items-center justify-center text-sm text-muted-foreground font-mono">
                                System Architecture Visualization
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2: Security */}
                    <Card className="bg-card/50 hover:bg-card/80 transition-colors">
                        <CardHeader>
                            <ShieldCheck className="h-10 w-10 text-green-500 mb-2" />
                            <CardTitle>Gov-Grade Security</CardTitle>
                            <CardDescription>
                                Role-based access, audit trails, and on-prem deployment ready.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="h-2 w-2 bg-green-500 rounded-full" /> AES-256 Encryption
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="h-2 w-2 bg-green-500 rounded-full" /> Local Data Residency
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 3: Unified Data */}
                    <Card className="bg-card/50 hover:bg-card/80 transition-colors">
                        <CardHeader>
                            <Globe className="h-10 w-10 text-blue-500 mb-2" />
                            <CardTitle>Unified Data Lake</CardTitle>
                            <CardDescription>Connect Municipality, SEDD, and Federal databases.</CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Card 4: Orchestration */}
                    <Card className="col-span-1 md:col-span-2 bg-gradient-to-tl from-card to-secondary/10 border-input/50">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div>
                                <CardTitle>Orchestration & Workflow</CardTitle>
                                <CardDescription className="mt-1">Automate approvals across departments.</CardDescription>
                            </div>
                            <GitPullRequest className="h-8 w-8 text-primary" />
                        </CardHeader>
                        <CardContent className="mt-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="rounded border px-4 py-2 bg-background/50 text-sm">Application</div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                <div className="rounded border px-4 py-2 bg-background/50 text-sm">AI Verification</div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                <div className="rounded border px-4 py-2 bg-primary/20 text-primary text-sm font-medium">Approval</div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>

            <footer className="border-t py-10 text-center text-sm text-muted-foreground">
                © 2025 Madar AI Platform. All rights reserved. Government of the Future.
            </footer>
        </div>
    );
};
