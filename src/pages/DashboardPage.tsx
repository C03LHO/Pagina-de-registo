import { useState } from 'react';
import { Bell, Calendar, ChevronDown, Search, Settings, User } from 'lucide-react';

export const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentActivities = [
    {
      id: 1,
      type: 'appointment',
      title: 'Agendamento confirmado',
      description: 'Serviço de Eletricista com João Silva',
      date: '2024-03-15T10:00:00',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'review',
      title: 'Nova avaliação recebida',
      description: 'Maria Santos avaliou seu serviço',
      date: '2024-03-14T15:30:00',
      status: 'new'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Eletricista',
      provider: 'João Silva',
      date: '2024-03-15T10:00:00',
      status: 'confirmed'
    },
    {
      id: 2,
      service: 'Encanador',
      provider: 'Pedro Santos',
      date: '2024-03-16T14:30:00',
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#3000BF] to-[#4C2AD9] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/70" />
              </div>

              <button className="p-2 rounded-full hover:bg-white/10">
                <Bell className="h-6 w-6 text-white" />
              </button>

              <div className="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDown className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Atividades Recentes</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
                  >
                    <div className="flex-shrink-0">
                      {activity.type === 'appointment' ? (
                        <Calendar className="h-5 w-5 text-blue-500" />
                      ) : (
                        <User className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(activity.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Configurações Rápidas</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Perfil</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Notificações</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Column - Appointments */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Próximos Agendamentos</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{appointment.service}</p>
                      <p className="text-sm text-gray-500">com {appointment.provider}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(appointment.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {appointment.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Serviços Populares</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Eletricista', 'Encanador', 'Pintor', 'Diarista'].map((service) => (
                  <div
                    key={service}
                    className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
                  >
                    <h3 className="font-medium text-gray-900">{service}</h3>
                    <p className="text-sm text-gray-500">A partir de R$ 50/hora</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};