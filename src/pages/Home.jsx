import { Clock, Star, Truck, ShieldCheck, ChevronRight, MapPin, Heart } from "lucide-react"
import { useState, useEffect } from "react"

const Home = () => {
  const [meals, setMeals] = useState([
    {
      _id: 1,
      name: "Classic Indori Poha",
      description: "Traditional flattened rice with spices, curry leaves, and sev",
      price: 80,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
      rating: 4.5
    },
    {
      _id: 2,
      name: "Bhutte Ki Kees",
      description: "Grated corn cooked with spices and garnished with coriander",
      price: 100,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
      rating: 4.7
    },
    {
      _id: 3,
      name: "Dal Bafla Combo",
      description: "Wheat dough balls served with dal, ghee, and churma",
      price: 150,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      rating: 4.8
    },
    {
      _id: 4,
      name: "Sabudana Khichdi",
      description: "Tapioca pearls with peanuts, potatoes, and aromatic spices",
      price: 70,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      rating: 4.3
    },
    {
      _id: 5,
      name: "Garadu",
      description: "Spicy fried yam pieces, a popular Indori street food",
      price: 60,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      rating: 4.6
    },
    {
      _id: 6,
      name: "Jalebi with Rabdi",
      description: "Crispy sweet spirals served with creamy thickened milk",
      price: 90,
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=300&fit=crop",
      rating: 4.9
    },
    {
      _id: 7,
      name: "Indori Namkeen Thali",
      description: "Complete savory meal with multiple dishes and breads",
      price: 180,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      rating: 4.7
    },
    {
      _id: 8,
      name: "Mawa Bati",
      description: "Sweet dessert made with mawa, sugar, and dry fruits",
      price: 120,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
      rating: 4.4
    }
  ])

  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState({})

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const toggleFavorite = (id) => {
    setFavorites(prev => ({...prev, [id]: !prev[id]}))
  }

  if(loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading delicious meals...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Section - Zomato Style */}
      <section className="relative bg-white pb-16 pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-12 pb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Authentic Indori Flavors,<br />
              <span className="text-red-600">Delivered Fresh</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 font-light">
              Craving poha, bhutte ki kees, or dal bafla? Order now and taste Indore at your doorstep
            </p>
            
            {/* Search Bar Style Input */}
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-3 flex flex-col md:flex-row gap-3 mb-8">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg">
                <MapPin className="w-5 h-5 text-red-600" />
                <input 
                  type="text" 
                  placeholder="Enter your delivery location"
                  className="flex-1 outline-none text-gray-700 bg-transparent"
                />
              </div>
              <button className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2 shadow-lg">
                Order Now <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">4.5★ Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="font-medium">30 min delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="font-medium">100% Safe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Popular Dishes Near You
              </h2>
              <p className="text-gray-600 text-lg">Handpicked favorites from Indore</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all">
              See All <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {meals.map(meal => (
              <div key={meal._id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={meal.image} 
                    alt={meal.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button 
                    onClick={() => toggleFavorite(meal._id)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                  >
                    <Heart 
                      className={`w-5 h-5 ${favorites[meal._id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-sm">{meal.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {meal.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {meal.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">
                      ₹{meal.price}
                    </div>
                    <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <button className="inline-flex items-center gap-2 text-red-600 font-semibold text-lg">
              View All Meals <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works - Streamlined */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Get your favorite Indori meals in 3 simple steps
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition duration-300">
                      <span className="text-white font-bold text-3xl">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Browse Menu</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Explore authentic Indori dishes from poha to dal bafla
                  </p>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent -translate-x-4"></div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition duration-300">
                      <span className="text-white font-bold text-3xl">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Place Order</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quick checkout with secure payment options
                  </p>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-300 to-transparent -translate-x-4"></div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition duration-300">
                    <Truck className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hot meals delivered to your door in 30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hungry? Order Now!
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Download our app or order online for exclusive deals and faster checkout
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300 shadow-xl">
              Order on Web
            </button>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition duration-300 shadow-xl">
              Download App
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home