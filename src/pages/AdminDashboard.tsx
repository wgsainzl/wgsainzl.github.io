import React from 'react';
import { Card, Title, Text, BarChart, DonutChart } from '@tremor/react';
import { Users, Bell, Shield, BarChart2 } from 'lucide-react';

const userStats = [
  { month: 'Ene', usuarios: 120 },
  { month: 'Feb', usuarios: 145 },
  { month: 'Mar', usuarios: 185 },
  { month: 'Abr', usuarios: 210 },
  { month: 'May', usuarios: 245 },
  { month: 'Jun', usuarios: 280 },
];

const cultivos = [
  { name: 'Maíz', hectareas: 1200 },
  { name: 'Trigo', hectareas: 800 },
  { name: 'Soja', hectareas: 650 },
  { name: 'Girasol', hectareas: 450 },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Panel de Administración</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center">
              <Users className="h-10 w-10 text-emerald-600" />
              <div className="ml-4">
                <Text className="text-gray-600">Total Usuarios</Text>
                <Title className="text-2xl font-bold text-gray-900">1,234</Title>
              </div>
            </div>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center">
              <BarChart2 className="h-10 w-10 text-emerald-600" />
              <div className="ml-4">
                <Text className="text-gray-600">Hectáreas Monitoreadas</Text>
                <Title className="text-2xl font-bold text-gray-900">3,100</Title>
              </div>
            </div>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center">
              <Bell className="h-10 w-10 text-emerald-600" />
              <div className="ml-4">
                <Text className="text-gray-600">Alertas Activas</Text>
                <Title className="text-2xl font-bold text-gray-900">23</Title>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <Title className="text-lg font-semibold mb-6">Crecimiento de Usuarios</Title>
            <BarChart
              data={userStats}
              index="month"
              categories={["usuarios"]}
              colors={["blue"]}
              yAxisWidth={56}
              showAnimation={true}
              className="h-80 mt-4"
              showLegend={false}
              showTooltip={true}
              showGridLines={true}
              valueFormatter={(value) => `${value.toLocaleString()} usuarios`}
              customTooltip={({ payload }) => {
                if (!payload[0]) return null;
                return (
                  <div className="bg-white shadow-lg rounded-lg p-3 border border-emerald-100">
                    <div className="text-emerald-700 font-medium">
                      {payload[0].payload.month}
                    </div>
                    <div className="text-emerald-900">
                      {`${payload[0].value.toLocaleString()} usuarios`}
                    </div>
                  </div>
                );
              }}
            />
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <Title className="text-lg font-semibold mb-6">Distribución de Cultivos</Title>
            <DonutChart
              data={cultivos}
              category="hectareas"
              index="name"
              valueFormatter={(value) => `${value.toLocaleString()} ha`}
              colors={["emerald", "teal", "green", "lime"]}
              className="h-80 mt-4"
              showAnimation={true}
              showTooltip={true}
              customTooltip={({ payload }) => {
                if (!payload[0]) return null;
                return (
                  <div className="bg-white shadow-lg rounded-lg p-3 border border-emerald-100">
                    <div className="text-emerald-700 font-medium">
                      {payload[0].payload.name}
                    </div>
                    <div className="text-emerald-900">
                      {`${payload[0].payload.hectareas.toLocaleString()} ha`}
                    </div>
                  </div>
                );
              }}
            />
          </Card>
        </div>

        {/* User Management */}
        <Card className="mb-6 p-6 hover:shadow-lg transition-shadow duration-200">
          <Title className="text-lg font-semibold mb-6">Gestión de Usuarios</Title>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: 'Juan Pérez', email: 'juan@example.com', role: 'Agricultor', status: 'Activo' },
                  { name: 'María García', email: 'maria@example.com', role: 'Agricultor', status: 'Pendiente' },
                  { name: 'Carlos López', email: 'carlos@example.com', role: 'Administrador', status: 'Activo' },
                ].map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Activo' ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-emerald-600 hover:text-emerald-900 mr-3 font-medium">Editar</button>
                      <button className="text-red-600 hover:text-red-900 font-medium">Desactivar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-emerald-600 mr-2" />
            <Title className="text-lg font-semibold">Configuración de Seguridad</Title>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Text className="text-gray-900 font-medium">Autenticación de dos factores</Text>
                <p className="text-sm text-gray-500 mt-1">Aumenta la seguridad de las cuentas de usuario</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Text className="text-gray-900 font-medium">Registro de actividad</Text>
                <p className="text-sm text-gray-500 mt-1">Monitorear todas las acciones de los usuarios</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;