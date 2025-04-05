'use client';

import { Open_Sans } from 'next/font/google'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix missing marker icons (from Leaflet CDN)
// imports the markers from the leaflet package
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ["700"],
  display: 'swap',
})

const locations: { city: string; coords: [number, number]; slug: string }[] = [
    { city: 'New York City', coords: [40.7128, -74.0060], slug: 'newyork' },
    { city: 'Boston', coords: [42.3601, -71.0589], slug: 'boston' },
    { city: 'Seattle', coords: [47.6062, -122.3321], slug: 'seattle' },
    { city: 'Chicago', coords: [41.8781, -87.6298], slug: 'chicago' },
    { city: 'Denver', coords: [39.7392, -104.9903], slug: 'denver' },
    { city: 'Washington D.C.', coords: [38.9072, -77.0369], slug: 'dc' },
    // Add more as needed
];

export default function Map() {
    return (
      <section id="travel" className="text-gray-200 py-20 px-6 w-full h-full" style={{ backgroundColor: 'rgb(25, 27, 28)' }}>
        <div className="max-w-7xl mx-auto">
            <h1 className={`text-center text-2xl font-bold mb-12 ${openSans.className}`}
            style={{letterSpacing: '0.4rem'}}>
            PLACES I&apos;VE SOLO TRAVELLED
            </h1>

            <MapContainer
                center={[40.7, -98.35]} // Center of US
                zoom={4}
                scrollWheelZoom={false}
                className="h-[575px] w-full rounded-xl z-0"
                dragging={false}
                doubleClickZoom={false}
                zoomControl={false}
                touchZoom={false}
                keyboard={false}
                >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location, index) => {
                    return(
                        <Marker key={index} position={location.coords} >
                            <Popup className='font-semibold underline'>
                                {location.city}
                            </Popup>
                        </Marker>
                    )
                })}

            </MapContainer>


        </div>

      </section>
    );
}
