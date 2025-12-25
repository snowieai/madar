import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AlertTriangle, TrendingUp, ShieldAlert, Check } from 'lucide-react';

const data = [
    { name: 'Compliant', value: 75, color: '#22c55e' }, // Green
    { name: 'Review Needed', value: 15, color: '#eab308' }, // Yellow
    { name: 'High Risk', value: 10, color: '#ef4444' }, // Red
];

export const BusinessIntelligence = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-amber-400">Business & Licensing Intelligence</h2>
                <p className="text-muted-foreground mt-2">AI-driven risk scoring and automated compliance monitoring.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Risk Visualization */}
                <Card className="lg:col-span-2 bg-gradient-to-br from-card to-amber-500/5">
                    <CardHeader>
                        <CardTitle>Trade License Portfolio Risk</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center justify-between">
                        <div className="h-[250px] w-full md:w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', border: 'none' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-lg border bg-background/50">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-2 rounded text-green-500"><Check size={16} /></div>
                                    <span className="font-medium">Fully Compliant</span>
                                </div>
                                <span className="text-2xl font-bold">1,240</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg border bg-background/50">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-500/20 p-2 rounded text-red-500"><ShieldAlert size={16} /></div>
                                    <span className="font-medium">Risk Detected</span>
                                </div>
                                <span className="text-2xl font-bold">84</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Insights Panel */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="text-amber-400" />
                            <CardTitle>Predictive Insights</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Renewal Surge Prediction</span>
                                <Badge variant="outline" className="text-amber-500 border-amber-500/20">High Confidence</Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">AI predicts a <span className="text-foreground font-bold">+40%</span> surge in license renewals next month based on historical 2024 patterns.</p>
                        </div>

                        <div className="h-px bg-border my-4"></div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Fraud Detection</span>
                                <Badge variant="outline" className="text-red-500 border-red-500/20">Active Alert</Badge>
                            </div>
                            <div className="flex items-start gap-2 p-2 bg-red-500/10 rounded border border-red-500/10 text-xs">
                                <AlertTriangle size={14} className="text-red-500 mt-0.5" />
                                <span className="text-red-200">2 Entities flagged for inconsistent beneficial owner declarations across SEDD/Bank data.</span>
                            </div>
                            <Button size="sm" variant="ghost" className="w-full text-red-400 hover:text-red-300">Investigate</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
