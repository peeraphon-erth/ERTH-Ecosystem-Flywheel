'use client';

import React, { useState } from 'react';
import {
    Building2,
    Coins,
    Settings,
    Zap,
    Factory,
    Lock,
    Info,
    Activity,
    ShoppingBag
} from 'lucide-react';
import Connector from './Connector';

interface ModuleItem {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    desc: string;
    color: 'emerald' | 'indigo' | 'blue' | 'amber' | 'slate' | 'violet';
    pos: string;
    items: string[];
}

interface Modules {
    [key: string]: ModuleItem;
}

const EcosystemFlow: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const modules: Modules = {
        // ROW 1: STRATEGIC / FINANCIAL
        retail: {
            id: "retail",
            title: "RETAIL USERS",
            subtitle: "LIQUIDITY & UTILITY",
            icon: <ShoppingBag className="w-5 h-5 text-violet-600" />,
            desc: "Individual traders and SMEs providing market liquidity and utilizing carbon tokens for micro-offsets or exclusive ecosystem benefits.",
            color: "violet",
            pos: "md:col-start-1 md:row-start-1",
            items: ["TOKEN TRADING", "MICRO-OFFSETS", "LOYALTY REWARDS"]
        },
        token: {
            id: "token",
            title: "TOKEN LAYER",
            subtitle: "VALUE CAPTURE",
            icon: <Coins className="w-5 h-5 text-amber-600" />,
            desc: "Captures ecosystem value via programmatic buybacks and burns using real SaaS revenue, creating a deflationary floor.",
            color: "amber",
            pos: "md:col-start-2 md:row-start-1",
            items: ["LIQUIDITY", "BUYBACK & BURN", "GOVERNANCE", "POLICY"]
        },
        partners: {
            id: "partners",
            title: "PARTNERS / LOCKERS",
            subtitle: "UTILITY & ACCESS",
            icon: <Lock className="w-5 h-5 text-slate-600" />,
            desc: "System participants who lock tokens to access premium tiers, discounted services, and governance rights.",
            color: "slate",
            pos: "md:col-start-3 md:row-start-1",
            items: ["STAKING TIERS", "FEE DISCOUNTS"]
        },
        // ROW 2: OPERATIONAL / PHYSICAL
        projects: {
            id: "projects",
            title: "PROJECT OWNERS",
            subtitle: "THE SUPPLY",
            icon: <Factory className="w-5 h-5 text-emerald-600" />,
            desc: "The source of truth. Physical facilities providing the verified emissions data that powers the entire credit market.",
            color: "emerald",
            pos: "md:col-start-1 md:row-start-2",
            items: ["WASTE-TO-VALUE", "NATURE-BASED", "RENEWABLE ENERGY"]
        },
        opco: {
            id: "opco",
            title: "SAAS + MRV OPCO",
            subtitle: "THE ENGINE",
            icon: <Settings className="w-5 h-5 text-indigo-600" />,
            desc: "The software core that automates measurement, reporting, and verification (MRV) to convert raw data into financial value.",
            color: "indigo",
            pos: "md:col-start-2 md:row-start-2",
            items: ["VERIFICATION", "AUTOMATION", "REPORTING"]
        },
        enterprise: {
            id: "enterprise",
            title: "ENTERPRISE USERS",
            subtitle: "THE CAPITAL",
            icon: <Building2 className="w-5 h-5 text-blue-600" />,
            desc: "Institutional buyers and corporate users whose cash flow provides the external capital that sustains the token economy.",
            color: "blue",
            pos: "md:col-start-3 md:row-start-2",
            items: ["SUBSCRIPTION FEES", "CREDIT OFFSETS"]
        }
    };

    const colors: Record<ModuleItem['color'], string> = {
        emerald: "bg-emerald-50 border-emerald-200 text-emerald-900",
        indigo: "bg-indigo-50 border-indigo-200 text-indigo-900",
        blue: "bg-blue-50 border-blue-200 text-blue-900",
        amber: "bg-amber-50 border-amber-200 text-amber-900",
        slate: "bg-slate-50 border-slate-200 text-slate-900",
        violet: "bg-slate-50 border-violet-200 text-violet-900"
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-12 font-sans text-slate-900">
            <div className="max-w-6xl mx-auto">

                <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight text-slate-800 flex items-center gap-4">
                            <img src="logo.png" alt="ERTH Logo" className="w-10 h-10 object-contain" />
                            ERTH Ecosystem Flywheel
                        </h1>
                        <p className="text-slate-500 font-medium mt-1 uppercase text-[10px] tracking-widest">Two-Axis Value & Operations Matrix</p>
                    </div>
                    <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Supply
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-indigo-500" /> Engine
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-amber-500" /> Economy
                        </div>
                    </div>
                </header>

                {/* The Grid Board */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12 md:gap-x-24 md:gap-y-24 p-2">

                    {/* CONNECTORS (Desktop Only - Grid Overlay) */}
                    <div className="hidden md:grid absolute inset-0 z-20 pointer-events-none grid-cols-[1fr_6rem_1fr_6rem_1fr] grid-rows-[1fr_6rem_1fr] p-2">
                        {/* Retail -> Token (Horizontal gap between col 1 and 2, row 1) */}
                        <div className="row-start-1 col-start-2">
                            <Connector direction="right" label="LIQUIDITY" />
                        </div>

                        {/* Token <-> Partners (Horizontal gap between col 2 and 3, row 1) */}
                        <div className="row-start-1 col-start-4">
                            <Connector direction="right" />
                        </div>

                        {/* Project -> Retail (Vertical gap between row 2 and 1, col 1) */}
                        <div className="row-start-2 col-start-1">
                            <Connector direction="up" label="SUPPLY TRADING" />
                        </div>

                        {/* OpCo -> Token (Vertical gap between row 2 and 1, col 2) */}
                        <div className="row-start-2 col-start-3">
                            <Connector direction="up" label="BUYBACK & BURN" />
                        </div>

                        {/* Partners -> Enterprise (Vertical gap between row 1 and 2, col 3) */}
                        <div className="row-start-2 col-start-5">
                            <Connector direction="down" label="UTILITY ACCESS" />
                        </div>

                        {/* Project -> OpCo (Horizontal gap between col 1 and 2, row 2) */}
                        <div className="row-start-3 col-start-2">
                            <Connector direction="right" label="MRV DATA" />
                        </div>

                        {/* Enterprise -> OpCo (Horizontal gap between col 3 and 2, row 2) */}
                        <div className="row-start-3 col-start-4">
                            <Connector direction="left" label="REVENUE" />
                        </div>
                    </div>

                    {Object.values(modules).map((m) => (
                        <div
                            key={m.id}
                            className={`${m.pos} relative ${hovered === m.id ? 'z-30' : 'z-10'} group transition-all duration-300 ${hovered && hovered !== m.id ? 'opacity-40 scale-[0.98]' : 'scale-100'}`}
                            onMouseEnter={() => setHovered(m.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <div className={`h-full p-8 rounded-2xl border-2 shadow-sm flex flex-col transition-all bg-white ${colors[m.color]} hover:shadow-xl hover:border-current relative overflow-visible`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 bg-white rounded-xl shadow-inner ring-1 ring-black/5">
                                        {m.icon}
                                    </div>
                                    <Info className={`w-4 h-4 transition-opacity duration-300 ${hovered === m.id ? 'opacity-100 text-current' : 'opacity-20'}`} />
                                </div>

                                <h3 className="font-black text-sm md:text-[13px] uppercase tracking-tighter leading-none mb-1">{m.title}</h3>
                                <p className="text-[9px] opacity-60 font-bold mb-4 uppercase tracking-tight">{m.subtitle}</p>

                                <p className="text-[11px] leading-relaxed mb-6 font-medium opacity-80">{m.desc}</p>

                                <div className="mt-auto flex flex-col gap-2">
                                    {m.items.map(item => (
                                        <div key={item} className="text-[9px] font-black bg-white/70 px-3 py-1.5 rounded-lg border border-black/5 uppercase tracking-tighter flex items-center justify-between group-hover:bg-white transition-colors">
                                            {item}
                                            <Zap className="w-2.5 h-2.5 opacity-30" />
                                        </div>
                                    ))}
                                </div>

                                {/* TOOLTIP PILL */}
                                {hovered === m.id && (
                                    <div className="absolute top-full left-0 right-0 mt-4 bg-slate-900 text-white p-4 rounded-xl shadow-2xl z-50 text-[11px] font-medium leading-relaxed animate-in fade-in slide-in-from-top-2">
                                        <div className="absolute -top-1 w-3 h-3 bg-slate-900 rotate-45 left-8" />
                                        {m.desc}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Informational Footer */}
                <div className="mt-32 flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left border-t border-slate-200 pt-12">
                    <div className="flex-1">
                        <h4 className="font-black text-xs uppercase text-slate-400 tracking-[0.2em] mb-4">Value Flow Logic</h4>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">01</div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    <span className="font-bold text-slate-800 uppercase">Supply Generation:</span> Raw impact data from projects is ingested and verified by the SaaS engine.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">02</div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    <span className="font-bold text-slate-800 uppercase">Revenue Recirculation:</span> Enterprise cash flow is used to programmatically buy back and burn tokens.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">03</div>
                                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                    <span className="font-bold text-slate-800 uppercase">Ecosystem Locking:</span> Strategic partners lock tokens to lower operational costs, creating circular demand.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-64 p-6 bg-slate-900 rounded-2xl text-white shadow-2xl">
                        <Activity className="text-indigo-400 mb-3 w-6 h-6" />
                        <h4 className="text-sm font-black uppercase tracking-tight mb-2">Network Health</h4>
                        <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-bold tracking-wider">
                            This model ensures the token is not a speculative byproduct, but a primary utility driver for the platform's long-term sustainability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcosystemFlow;
