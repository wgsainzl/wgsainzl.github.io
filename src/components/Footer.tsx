import React from 'react';
import { Sprout as Drone, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Drone className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold">AgroScan</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Transformando la agricultura con tecnología de vanguardia
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Soluciones</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white">Monitoreo de Cultivos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Análisis de Datos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Inteligencia Artificial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Visión Computacional</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">info@agroscan.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">+34 900 123 456</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">Guadalajara, Mexico</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} AgroScan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;