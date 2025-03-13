import React, { useState } from 'react';
import { BarChart, Card, Title, Text } from '@tremor/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Camera, Upload, MessageSquare, BarChart2, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const chartdata = [
  { month: 'Ene', rendimiento: 2890 },
  { month: 'Feb', rendimiento: 2756 },
  { month: 'Mar', rendimiento: 3322 },
  { month: 'Abr', rendimiento: 3470 },
  { month: 'May', rendimiento: 3475 },
  { month: 'Jun', rendimiento: 3129 },
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('statistics');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Panel de Control</h1>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <nav className="flex space-x-4 p-4">
            <button
              onClick={() => setSelectedTab('statistics')}
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'statistics'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart2 className="inline-block w-5 h-5 mr-2" />
              Estadísticas
            </button>
            <button
              onClick={() => setSelectedTab('maps')}
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'maps'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MapPin className="inline-block w-5 h-5 mr-2" />
              Mapas
            </button>
            <button
              onClick={() => setSelectedTab('documents')}
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'documents'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Upload className="inline-block w-5 h-5 mr-2" />
              Documentos
            </button>
            <button
              onClick={() => setSelectedTab('images')}
              className={`px-4 py-2 rounded-md ${
                selectedTab === 'images'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Camera className="inline-block w-5 h-5 mr-2" />
              Imágenes
            </button>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {selectedTab === 'statistics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-200 p-6">
                <Title className="text-lg font-semibold mb-6">Rendimiento de Cultivos (kg/ha)</Title>
                <BarChart
                  data={chartdata}
                  index="month"
                  categories={["rendimiento"]}
                  colors={["emerald"]}
                  yAxisWidth={56}
                  showAnimation={true}
                  className="h-80 mt-4"
                  showLegend={false}
                  showTooltip={true}
                  showGridLines={true}
                  valueFormatter={(value) => `${value.toLocaleString()} kg/ha`}
                  customTooltip={({ payload }) => {
                    if (!payload[0]) return null;
                    return (
                      <div className="bg-white shadow-lg rounded-lg p-3 border border-emerald-100">
                        <div className="text-emerald-700 font-medium">
                          {payload[0].payload.month}
                        </div>
                        <div className="text-emerald-900">
                          {`${payload[0].value.toLocaleString()} kg/ha`}
                        </div>
                      </div>
                    );
                  }}
                />
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-200 p-6">
                <Title className="text-lg font-semibold mb-6">Estado de Salud de Cultivos</Title>
                <div className="mt-4 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <Text className="text-gray-600">Índice de Vegetación</Text>
                      <span className="text-emerald-600 font-semibold text-lg">0.82</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div 
                        className="bg-emerald-500 h-3 rounded-full transition-all duration-500 ease-in-out hover:bg-emerald-600" 
                        style={{ width: '82%' }}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <Text className="text-gray-600">Humedad del Suelo</Text>
                      <span className="text-emerald-600 font-semibold text-lg">75%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div 
                        className="bg-emerald-500 h-3 rounded-full transition-all duration-500 ease-in-out hover:bg-emerald-600" 
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {selectedTab === 'maps' && (
            <Card className="p-6">
              <Title className="text-lg font-semibold mb-6">Mapa de Cultivos</Title>
              <div className="h-[500px] w-full mt-4">
                <MapContainer
                  center={[40.416775, -3.703790]}
                  zoom={13}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[40.416775, -3.703790]}>
                    <Popup>
                      Parcela A1 <br /> Estado: Saludable
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </Card>
          )}

          {selectedTab === 'documents' && (
            <Card className="p-6">
              <Title className="text-lg font-semibold mb-6">Gestión de Documentos</Title>
              <div className="mt-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-emerald-400" />
                  <p className="mt-4 text-sm text-gray-600">
                    Arrastra y suelta archivos aquí o
                    <button className="ml-1 text-emerald-600 hover:text-emerald-500 font-medium">
                      selecciona archivos
                    </button>
                  </p>
                </div>
              </div>
            </Card>
          )}

          {selectedTab === 'images' && (
            <Card className="p-6">
              <Title className="text-lg font-semibold mb-6">Galería de Imágenes</Title>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                    <img
                      src={`https://images.unsplash.com/photo-158677110744${i}-d3ca888129ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                      alt={`Imagen ${i}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="text-white px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 transition-colors">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Chatbot */}
        <div className="fixed bottom-6 right-6">
          <button
            className="bg-emerald-600 text-white rounded-full p-4 shadow-lg hover:bg-emerald-700 transition-colors"
            onClick={() => console.log('Open chatbot')}
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;