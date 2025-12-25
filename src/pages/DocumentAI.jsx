import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search, FileText, Sparkles, UploadCloud } from 'lucide-react';

export const DocumentAI = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query) return;

        // Simulate search
        setTimeout(() => {
            setResults([
                { title: 'Federal Law No. 32 (Zones)', summary: 'Defines new regulations for commercial zoning in sector 4. Updated Article 12 regarding noise pollution.', confidence: 98 },
                { title: 'Internal SOP: Licensing v2.4', summary: 'Standard Operating Procedure for handling high-risk entities. Requires Level-3 Approval.', confidence: 92 },
            ]);
        }, 800);
    };

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4 py-8">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1">Internal Reference</Badge>
                <h2 className="text-4xl font-bold tracking-tight">Document & Knowledge AI</h2>
                <p className="text-muted-foreground text-lg">Instant answers from across 10,000+ government regulations and contracts.</p>
            </div>

            {/* Search Bar */}
            <Card className="border-purple-500/30 shadow-lg shadow-purple-500/10">
                <CardContent className="p-2">
                    <form onSubmit={handleSearch} className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-3.5 text-muted-foreground" size={20} />
                            <Input
                                className="pl-12 h-12 text-lg border-0 focus-visible:ring-0 bg-transparent"
                                placeholder="Ask a question (e.g., 'What are the new zoning requirements?')"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                            />
                        </div>
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 h-12 px-8">Calculate Answer</Button>
                    </form>
                </CardContent>
            </Card>

            {/* Results */}
            {results ? (
                <div className="space-y-4 animate-fade-in">
                    <h3 className="text-sm font-semi-bold text-muted-foreground uppercase tracking-wider">AI Generated Summary</h3>
                    {results.map((res, i) => (
                        <Card key={i} className="hover:border-purple-500/50 transition-colors cursor-pointer">
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <FileText className="text-purple-400" size={18} />
                                        <h4 className="font-bold text-lg text-purple-200">{res.title}</h4>
                                    </div>
                                    <Badge variant="secondary" className="bg-green-500/10 text-green-400">{res.confidence}% Relevance</Badge>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{res.summary}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 border border-dashed rounded-xl bg-muted/10 flex flex-col items-center justify-center text-center gap-2 text-muted-foreground hover:bg-muted/20 transition-colors cursor-pointer">
                        <UploadCloud size={32} />
                        <p>Upload Policy PDF</p>
                    </div>
                    <div className="p-6 border border-dashed rounded-xl bg-muted/10 flex flex-col items-center justify-center text-center gap-2 text-muted-foreground hover:bg-muted/20 transition-colors cursor-pointer">
                        <FileText size={32} />
                        <p>Browse SOP Library</p>
                    </div>
                </div>
            )}
        </div>
    );
};

// Need access to React for this file
const Badge = ({ variant, className, children }) => (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
        {children}
    </div>
);
