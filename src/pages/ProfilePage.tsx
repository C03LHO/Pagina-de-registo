import { useState } from 'react';
import { Camera, Mail, MapPin, Phone, User } from 'lucide-react';

export const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(94) 99999-9999',
    city: 'Parauapebas',
    neighborhood: 'Centro',
    profession: 'Eletricista',
    bio: 'Profissional com mais de 10 anos de experiência em instalações elétricas residenciais e comerciais.',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de salvamento
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#3000BF] to-[#4C2AD9] h-48"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Profile Header */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <img
                  src={profileData.photo}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                  <Camera className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                <p className="text-lg text-[#3000BF] font-medium">{profileData.profession}</p>
                <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profileData.city}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-1" />
                    {profileData.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-1" />
                    {profileData.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#3000BF] focus:ring-[#3000BF]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#3000BF] focus:ring-[#3000BF]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#3000BF] focus:ring-[#3000BF]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bairro</label>
                  <input
                    type="text"
                    value={profileData.neighborhood}
                    onChange={(e) => setProfileData({ ...profileData, neighborhood: e.target.value })}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#3000BF] focus:ring-[#3000BF]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Biografia</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                    rows={4}
                    className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-[#3000BF] focus:ring-[#3000BF]"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#3000BF] text-white rounded-xl hover:bg-[#4C2AD9]"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};