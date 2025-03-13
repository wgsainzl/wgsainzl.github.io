import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sprout as Drone, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Drone className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AgroScan</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Inicio
              </Link>
              <a href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Características
              </a>
              <a href="#testimonials" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Testimonios
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Contacto
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/login" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Registrarse
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900">
              Inicio
            </Link>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Características
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Testimonios
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Contacto
            </a>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="block px-3 py-2 text-base font-medium text-green-600 hover:text-green-700">
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;