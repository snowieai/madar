import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Activity, Users, AlertTriangle, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const data = [
    { name: 'Mon', transactions: 4000, approvals: 2400 },
    { name: 'Tue', transactions: 3000, approvals: 1398 },
    { name: 'Wed', transactions: 2000, approvals: 9800 },
    { name: 'Thu', transactions: 2780, approvals: 3908 },
    { name: 'Fri', transactions: 1890, approvals: 4800 },
    { name: 'Sat', transactions: 2390, approvals: 3800 },
    { name: 'Sun', transactions: 3490, approvals: 4300 },
];

export const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Command Center</h2>
                    <p className="text-muted-foreground">Real-time platform overview and decision intelligence.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">Download Report</Button>
                    <Button>Create Request</Button>
                </div>
            </div>

            {/* KPI Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45,231</div>
                        <p className="text-xs text-muted-foreground text-green-500 flex items-center mt-1">
                            <ArrowUpRight className="h-3 w-3 mr-1" /> +20.1% from last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,350</div>
                        <p className="text-xs text-muted-foreground text-yellow-500 flex items-center mt-1">
                            Needs Attention
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">98.2%</div>
                        <p className="text-xs text-muted-foreground text-green-500 flex items-center mt-1">
                            +1.2% model improvement
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Health</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">Operational</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            0 downtime in 30 days
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Decision Intelligence Row (New v2.1) */}
            <h3 className="text-xl font-bold tracking-tight mt-8">Decision Intelligence Engines</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {/* Bottleneck Detection */}
                <Card className="bg-gradient-to-br from-card to-red-500/5">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <CardTitle className="text-base">Bottleneck Detection</CardTitle>
                                <CardDescription>Real-time SLA tracking across departments</CardDescription>
                            </div>
                            <Badge variant="outline" className="text-red-500 border-red-500/20 bg-red-500/10 animate-pulse">
                                <AlertTriangle size={12} className="mr-1" /> 2 Critical
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Commercial License Renewal (SEDD)</span>
                                <span className="text-red-400 font-bold">+4.2 hrs delay</span>
                            </div>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-red-500 h-full w-[85%]"></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Cause: High volume of "Trade Name" verifications.</p>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Civil Defense Inspection</span>
                                <span className="text-green-400 font-bold">On Track</span>
                            </div>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[45%]"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Predictive Analytics */}
                <Card className="bg-gradient-to-br from-card to-purple-500/5">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <CardTitle className="text-base">Predictive Risk Model</CardTitle>
                                <CardDescription>Future compliance forecast (Next 30 Days)</CardDescription>
                            </div>
                            <Badge variant="outline" className="text-purple-500 border-purple-500/20 bg-purple-500/10">
                                <TrendingUp size={12} className="mr-1" /> AI Forecast
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-4 items-center">
                        <div className="flex-1 space-y-3">
                            <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                <div className="text-2xl font-bold text-purple-400">89 Potential Violations</div>
                                <div className="text-xs text-muted-foreground">Predicted based on expiry trends & new federal law updates.</div>
                            </div>
                            <Button size="sm" variant="secondary" className="w-full">View Detailed Report</Button>
                        </div>
                        <div className="h-24 w-24 rounded-full border-4 border-muted border-t-purple-500 flex items-center justify-center">
                            <span className="font-bold text-xl">High</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-7">
                <Card className="col-span-4 bg-card/50">
                    <CardHeader>
                        <CardTitle>Transaction Orchestration Volume</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorTrans" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value} `} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                                    />
                                    <Area type="monotone" dataKey="transactions" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorTrans)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 bg-card/50">
                    <CardHeader>
                        <CardTitle>Approvals by Department</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }} />
                                    <Bar dataKey="approvals" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Alerts (List) */}
            <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle>Recent Orchestration Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Activity size={18} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Automated Renewal #2039{i}</p>
                                        <p className="text-xs text-muted-foreground">Issued via SEDD Integration</p>
                                    </div>
                                </div>
                                <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10">Completed</Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
