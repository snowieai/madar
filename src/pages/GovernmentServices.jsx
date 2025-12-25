import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Send, Bot, User, FileCheck, CheckCircle2 } from 'lucide-react';

export const GovernmentServices = () => {
    const [messages, setMessages] = useState([
        { role: 'ai', text: 'Marhaba! I am the Municipality Assistant. How can I help you today? (e.g., "Renew permit", "Report issue")' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages([...messages, userMsg]);
        setInput('');

        // Simulate AI Auto-fill trigger
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'ai',
                text: 'I can help with that. I have auto-filled the "Construction Permit Renewal" form based on your Emirates ID.',
                isAction: true
            }]);
        }, 1500);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-140px)]">
            {/* Left: Introduction & Value Prop */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-blue-400">Government Services Automation</h2>
                    <p className="text-muted-foreground mt-2">Zero-touch service delivery for citizens and residents.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Auto-Fill Forms</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">AI pulls data from Federal Identity to pre-populate applications.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Instant Verification</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Real-time checks against Municipality databases logic.</p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-blue-500/10 border-blue-500/20">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-blue-400" />
                            <CardTitle>Impact</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Citizen Satisfaction</span>
                            <span className="font-bold text-blue-400">98%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Manual Workload</span>
                            <span className="font-bold text-green-400">-60%</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right: Live Demo (Chat) */}
            <Card className="flex flex-col h-full border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader className="border-b bg-muted/20 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <Bot size={20} />
                        </div>
                        <div>
                            <CardTitle className="text-base">Citizen Support Agent AB-1</CardTitle>
                            <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10 text-[10px]">Online • Municipality Connected</Badge>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                    ? 'bg-primary text-primary-foreground rounded-br-none'
                                    : 'bg-muted text-muted-foreground rounded-bl-none'
                                }`}>
                                {msg.text}
                                {msg.isAction && (
                                    <div className="mt-3 p-3 bg-background rounded-lg border flex items-center gap-3">
                                        <FileCheck className="text-green-500 h-8 w-8" />
                                        <div>
                                            <div className="font-semibold text-foreground">Permit #93821.pdf</div>
                                            <div className="text-xs text-muted-foreground">Ready for review</div>
                                        </div>
                                        <Button size="sm" className="ml-auto">Review</Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </CardContent>

                <div className="p-4 border-t bg-muted/20">
                    <form onSubmit={handleSend} className="flex gap-2">
                        <Input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Type a request..."
                            className="bg-background"
                        />
                        <Button type="submit"><Send size={16} /></Button>
                    </form>
                </div>
            </Card>
        </div>
    );
};
