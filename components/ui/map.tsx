"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  children?: React.ReactNode;
  marker?: [number, number];
  markerColor?: string;
}

export function Map({ 
  center = [-71.0589, 42.3601], 
  zoom = 11, 
  className = "", 
  children,
  marker,
  markerColor = "#1E6EF4"
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    
    if (!mapContainer.current || map.current) return;

    let currentMap: maplibregl.Map | null = null;
    
    // Suppress AbortError that may bubble up during cleanup
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.name === 'AbortError') {
        event.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    try {
      // CARTO basemap - dark theme
      currentMap = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: center,
        zoom: zoom,
        attributionControl: false,
        interactive: false,
        scrollZoom: false,
        boxZoom: false,
        dragRotate: false,
        dragPan: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false,
        touchPitch: false,
      });

      // Handle AbortError silently - this happens during cleanup
      currentMap.on("error", (e) => {
        if (e.error?.name === "AbortError") {
          // Silently ignore AbortError - expected during cleanup
          return;
        }
        console.error("Map error:", e.error);
      });

      map.current = currentMap;

      // Add marker if provided
      if (marker && currentMap) {
        const addMarker = () => {
          if (!isMounted.current || !map.current) return;
          
          // Remove existing marker if any
          if (markerRef.current) {
            markerRef.current.remove();
          }

          // Create a custom marker element
          const el = document.createElement("div");
          el.className = "custom-marker";
          el.style.width = "12px";
          el.style.height = "12px";
          el.style.borderRadius = "50%";
          el.style.backgroundColor = markerColor;
          el.style.border = "2px solid #fff";
          el.style.boxShadow = `0 0 8px ${markerColor}`;
          el.style.cursor = "pointer";

          markerRef.current = new maplibregl.Marker({
            element: el,
            anchor: "center",
          })
            .setLngLat(marker)
            .addTo(map.current);
        };

        // Add marker when map loads
        if (currentMap.loaded()) {
          addMarker();
        } else {
          currentMap.on("load", addMarker);
        }
      }
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    return () => {
      isMounted.current = false;
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      
      if (markerRef.current) {
        try {
          markerRef.current.remove();
        } catch {
          // Marker may already be removed or aborted
        }
        markerRef.current = null;
      }
      if (map.current) {
        const mapToRemove = map.current;
        map.current = null;
        
        // Check if map is in a valid state before removing
        if ((mapToRemove as unknown as { _removed?: boolean })._removed) return;
        
        // Cancel any pending requests before removal
        try {
          mapToRemove.stop();
        } catch {
          // Ignore errors from stopping
        }
        
        // Delay removal slightly to allow pending operations to complete
        setTimeout(() => {
          try {
            // Double-check map hasn't been removed
            if (!(mapToRemove as unknown as { _removed?: boolean })._removed) {
              mapToRemove.remove();
            }
          } catch {
            // Map may already be removed or aborted (e.g., AbortError)
            // Silently handle the error as the map is being cleaned up anyway
          }
        }, 0);
      }
    };
  }, [center, zoom, marker, markerColor]);

  return (
    <div className={`relative w-full h-full ${className}`} style={{ minHeight: '100%', minWidth: '100%' }}>
      <div ref={mapContainer} className="w-full h-full" style={{ minHeight: '100%', minWidth: '100%' }} />
      {children}
    </div>
  );
}

export function MapControls() {
  // Map controls can be added here if needed
  return null;
}
