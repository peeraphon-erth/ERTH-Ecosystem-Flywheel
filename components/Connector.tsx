import React from 'react';
import {
    ChevronRight,
    ChevronDown,
    ChevronUp,
    ChevronLeft,
} from 'lucide-react';

interface ConnectorProps {
    direction?: 'right' | 'left' | 'down' | 'up';
    label?: string;
    className?: string;
}

/**
 * Connector Component: The simplified arrow solution.
 * Uses CSS borders for lines and Lucide Chevrons for arrowheads.
 */
const Connector: React.FC<ConnectorProps> = ({ direction = 'right', label, className = "" }) => {
    const isHorizontal = direction === 'right' || direction === 'left';
    const isAbsolute = className.includes('absolute');

    return (
        <div className={`${isAbsolute ? '' : 'relative'} w-full h-full flex items-center justify-center pointer-events-none ${className}`}>
            {/* Line Container */}
            <div className={`relative flex items-center justify-center ${isHorizontal ? 'w-full h-px' : 'h-full w-px'}`}>
                {/* The Actual Line */}
                <div className={`absolute border-slate-300 ${isHorizontal ? 'w-full border-t-2' : 'h-full border-l-2'} ${label === 'MRV DATA' ? 'border-dashed' : 'border-solid'}`} />

                {/* Arrowhead (Icon) */}
                <div className={`absolute text-slate-400 flex items-center justify-center bg-slate-50 p-0.5 rounded-full z-10
                    ${direction === 'right' ? 'right-0 translate-x-1/2' : ''}
                    ${direction === 'left' ? 'left-0 -translate-x-1/2' : ''}
                    ${direction === 'down' ? 'bottom-0 translate-y-1/2' : ''}
                    ${direction === 'up' ? 'top-0 -translate-y-1/2' : ''}
                `}>
                    {direction === 'right' && <ChevronRight size={14} strokeWidth={3} />}
                    {direction === 'left' && <ChevronLeft size={14} strokeWidth={3} />}
                    {direction === 'down' && <ChevronDown size={14} strokeWidth={3} />}
                    {direction === 'up' && <ChevronUp size={14} strokeWidth={3} />}
                </div>

                {/* Label Pill */}
                {label && (
                    <div className="z-20 px-2 py-1 bg-white border border-slate-100 rounded shadow-sm">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                            {label}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Connector;
