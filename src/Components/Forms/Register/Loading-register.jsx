import React from "react";

export default function LoadingRegister() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mx-auto mb-4" />
        <p className="text-xl font-semibold text-gray-700">Redirigiendo...</p>
      </div>
    </div>
  );
}