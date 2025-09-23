import { ChefHat, Coffee, Pizza, Truck, Utensils } from 'lucide-react'
import React from 'react'

const LoaderComponent = () => {
  return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
            <div className="relative">
                {/* Central cooking pot/plate */}
                <div className="relative w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                    <ChefHat className="w-16 h-16 text-white animate-bounce" />

                    {/* Steam effect */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-1 h-8 bg-white opacity-60 rounded-full animate-ping"></div>
                        <div className="w-1 h-6 bg-white opacity-40 rounded-full animate-ping animation-delay-75 ml-2"></div>
                        <div className="w-1 h-4 bg-white opacity-20 rounded-full animate-ping animation-delay-150 ml-4"></div>
                    </div>
                </div>

                {/* Orbiting food icons */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                    {/* Pizza */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <Pizza className="w-6 h-6 text-red-600" />
                    </div>

                    {/* Coffee */}
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                        <Coffee className="w-6 h-6 text-white" />
                    </div>

                    {/* Utensils */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <Utensils className="w-6 h-6 text-white" />
                    </div>

                    {/* Another food item */}
                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Delivery truck animation */}
                <div className="absolute -bottom-20 left-0 right-0">
                    <div className="relative overflow-hidden h-12">
                        <div className="absolute animate-bounce" style={{
                            animation: 'slideIn 3s ease-in-out infinite',
                            animationDelay: '1s'
                        }}>
                            <Truck className="w-8 h-8 text-orange-600" />
                        </div>
                    </div>
                </div>

                {/* Loading dots */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>


            </div>

            <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateX(-100px); opacity: 0; }
          50% { transform: translateX(100px); opacity: 1; }
          100% { transform: translateX(300px); opacity: 0; }
        }
        .animation-delay-75 {
          animation-delay: 0.075s;
        }
        .animation-delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
        </div>

  )
}

export default LoaderComponent
