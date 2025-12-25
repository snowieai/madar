import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Search, Building2, Gavel, FileCheck, Truck, Stethoscope, Filter, Server, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allServices = [
    { id: 1, title: 'Commercial Licensing', dept: 'Economic Dept', category: 'Business', icon: FileCheck, tags: ['Business', 'Core'], status: 'Online' },
    { id: 2, title: 'Building Permits', dept: 'Municipality', category: 'Engineering', icon: Building2, tags: ['Construction', 'Engineering'], status: 'Online' },
    { id: 3, title: 'Legal Consultation', dept: 'Courts', category: 'Legal', icon: Gavel, tags: ['Legal', 'Advisory'], status: 'Busy' },
    { id: 4, title: 'Transport Logistics', dept: 'Transport Authority', category: 'Logistics', icon: Truck, tags: ['Logistics', 'Fleet'], status: 'Maintenance' },
    { id: 5, title: 'Health Inspection', dept: 'Health Authority', category: 'Health', icon: Stethoscope, tags: ['Health', 'Safety'], status: 'Online' },
    { id: 6, title: 'Digital Residency', dept: 'ICP', category: 'Immigration', icon: Server, tags: ['Identity', 'Visa'], status: 'Online' },
];

export const Services = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const departments = ['All', 'Economic Dept', 'Municipality', 'Courts', 'Transport Authority', 'Health Authority', 'ICP'];

    const filteredServices = allServices.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesDept = selectedDept === 'All' || service.dept === selectedDept;
        return matchesSearch && matchesDept;
    });

    return (
        <div className="flex flex-col md:flex-row gap-8 min-h-[calc(100vh-140px)]">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-6">
                <div className="sticky top-24">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Filter size={16} /> Filters
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-2 block">Department</label>
                            <div className="space-y-1">
                                {departments.map(dept => (
                                    <button
                                        key={dept}
                                        onClick={() => setSelectedDept(dept)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedDept === dept ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted text-muted-foreground'
                                            }`}
                                    >
                                        {dept}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Catalog */}
            <div className="flex-1 space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Services Catalog</h2>
                        <p className="text-muted-foreground"> Deploy AI-powered government services instantly.</p>
                    </div>
                    <div className="w-full sm:w-80 relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search 150+ services..."
                            className="pl-9"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Results Grid */}
                <AnimatePresence>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="group h-full flex flex-col hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <service.icon size={24} />
                                            </div>
                                            <ServiceStatusBadge status={service.status} />
                                        </div>
                                        <CardTitle className="line-clamp-1">{service.title}</CardTitle>
                                        <CardDescription className="line-clamp-2">Automated end-to-end processing with AI verification.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <div className="text-xs text-muted-foreground mb-2">Department</div>
                                        <div className="font-medium text-sm">{service.dept}</div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center border-t bg-muted/20 p-4 mt-auto">
                                        <div className="flex gap-2 flex-wrap">
                                            {service.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-xs text-muted-foreground bg-background border px-2 py-1 rounded-md">{tag}</span>
                                            ))}
                                        </div>
                                        <Button size="sm" variant="ghost" className="group-hover:text-primary p-0 h-auto font-semibold">Launch <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20 bg-muted/10 rounded-xl border border-dashed">
                        <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-20" />
                        <h3 className="font-semibold text-lg">No services found</h3>
                        <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
                        <Button variant="link" onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}>Clear all filters</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

const ServiceStatusBadge = ({ status }) => {
    const variants = {
        'Online': 'bg-green-500/10 text-green-500 border-green-500/20',
        'Busy': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        'Maintenance': 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
        <Badge variant="outline" className={`text-[10px] ${variants[status] || variants['Online']}`}>
            {status === 'Online' && <CheckCircle2 size={10} className="mr-1" />}
            {status}
        </Badge>
    );
};
