/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  theme?: 'dark' | 'light';
  interval?: string;
  height?: number;
}

export const TradingViewWidget: React.FC<TradingViewWidgetProps> = memo(({
  symbol = 'FX:EURUSD',
  theme = 'dark',
  interval = 'D',
  height = 520,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous children
    containerRef.current.innerHTML = '';

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container__widget';
    widgetContainer.style.height = `${height}px`;
    widgetContainer.style.width = '100%';
    containerRef.current.appendChild(widgetContainer);

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: false,
      width: '100%',
      height: height,
      symbol: symbol,
      interval: interval,
      timezone: 'Etc/UTC',
      theme: theme,
      style: '1',
      locale: 'en',
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      calendar: false,
      hide_volume: false,
      support_host: 'https://www.tradingview.com',
      backgroundColor: '#080B12',
      gridColor: 'rgba(255, 255, 255, 0.05)',
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [symbol, theme, interval, height]);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/[0.1] bg-[#080B12] shadow-2xl">
      <div ref={containerRef} className="tradingview-widget-container" style={{ height: `${height}px` }} />
    </div>
  );
});

TradingViewWidget.displayName = 'TradingViewWidget';
