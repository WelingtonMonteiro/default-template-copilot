
import { Square } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelloWorld = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 text-center max-w-md w-full transform transition-all hover:scale-105">
        <Square className="mx-auto mb-4 text-blue-500" size={64} />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Hello World!</h1>
        <p className="text-gray-600 mb-6">
          Bem-vindo à sua primeira página no Lovable
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          Voltar para Início
        </Link>
      </div>
    </div>
  );
};

export default HelloWorld;
