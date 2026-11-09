/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const CandlestickChartVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  // Preset institutional price candles showing a sweep of liquidity, FVG formation, and BOS expansion
  const candles = [
    { o: 80, c: 65, h: 88, l: 60, type: 'bear' },
    { o: 65, c: 50, h: 70, l: 48, type: 'bear' },
    { o: 50, c: 38, h: 54, l: 30, type: 'bear' }, // Liquidity sweep low
    { o: 38, c: 62, h: 68, l: 34, type: 'bull' }, // Strong displacement
    { o: 62, c: 85, h: 90, l: 60, type: 'bull' }, // FVG formed
    { o: 85, c: 78, h: 88, l: 72, type: 'bear' }, // Pullback into FVG
    { o: 78, c: 102, h: 108, l: 75, type: 'bull' }, // BOS break
    { o: 102, c: 118, h: 122, l: 99, type: 'bull' },
    { o: 118, c: 112, h: 124, l: 108, type: 'bear' },
    { o: 112, c: 135, h: 140, l: 110, type: 'bull' },
    { o: 135, c: 152, h: 158, l: 132, type: 'bull' },
  ];

  const svgHeight = 200;
  const candleWidth = 14;
  const candleGap = 24;

  return (
    <div className={`relative overflow-hidden rounded-xl bg-[#080B12]/80 border border-white/[0.06] p-4 ${className}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Top Legend */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 border-b border-white/[0.05] pb-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">EURUSD</span>
          <span className="text-slate-500">·</span>
          <span>15M Execution</span>
          <span className="text-emerald-400 font-semibold">+0.68%</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-blue-500/40 inline-block border border-blue-400/60" />
            <span>FVG Zone</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-0.5 bg-cyan-400 inline-block" />
            <span>BOS Level</span>
          </span>
        </div>
      </div>

      {/* Candlestick SVG Container */}
      <div className="relative z-10 w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 320 180"
          className="w-full h-44 text-slate-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* FVG Highlight Zone */}
          <rect
            x={100}
            y={80}
            width={120}
            height={35}
            fill="rgba(22, 119, 255, 0.12)"
            stroke="rgba(0, 213, 255, 0.3)"
            strokeDasharray="2 2"
            rx="2"
          />
          <text x={104} y={102} fill="#00D5FF" fontSize="7" fontFamily="monospace" fontWeight="600">
            15M Fair Value Gap (CE 50%)
          </text>

          {/* BOS Horizontal Dotted Line */}
          <line
            x1={50}
            y1={65}
            x2={310}
            y2={65}
            stroke="#00D5FF"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text x={260} y={60} fill="#00D5FF" fontSize="8" fontFamily="monospace" fontWeight="bold">
            BOS ↑
          </text>

          {/* Sell-side sweep line */}
          <line
            x1={20}
            y1={155}
            x2={160}
            y2={155}
            stroke="#EF4444"
            strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          <text x={25} y={166} fill="#EF4444" fontSize="7" fontFamily="monospace">
            Sell-Side Liquidity Swept
          </text>

          {/* Candles */}
          {candles.map((c, i) => {
            const x = 20 + i * candleGap;
            const isBull = c.type === 'bull';
            const color = isBull ? '#10B981' : '#EF4444';
            const wickColor = isBull ? '#10B981' : '#EF4444';
            
            // Map values to y coords (inverted SVG y)
            const yHigh = svgHeight - 20 - c.h;
            const yLow = svgHeight - 20 - c.l;
            const yOpen = svgHeight - 20 - c.o;
            const yClose = svgHeight - 20 - c.c;
            const yTop = Math.min(yOpen, yClose);
            const bodyHeight = Math.max(3, Math.abs(yClose - yOpen));

            return (
              <g key={i} className="hover:opacity-80 transition-opacity">
                {/* Wick */}
                <line
                  x1={x + candleWidth / 2}
                  y1={yHigh}
                  x2={x + candleWidth / 2}
                  y2={yLow}
                  stroke={wickColor}
                  strokeWidth="1.2"
                />
                {/* Body */}
                <rect
                  x={x}
                  y={yTop}
                  width={candleWidth}
                  height={bodyHeight}
                  fill={isBull ? '#10B981' : '#EF4444'}
                  stroke={color}
                  strokeWidth="1"
                  rx="1"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-white/[0.05]">
        <span>London Open Manipulation → Institutional Expansion</span>
        <span>Algorithm: Order Flow Active</span>
      </div>
    </div>
  );
};
