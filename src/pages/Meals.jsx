import { useState, useEffect } from 'react'
import { Search, SlidersHorizontal, Star, Heart, ChevronDown, X } from 'lucide-react'

const Meals = () => {
  const [meals, setMeals] = useState([
    {
      _id: 1,
      name: "Classic Indori Poha",
      description: "Traditional flattened rice with spices, curry leaves, and sev",
      price: 80,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Breakfast",
      isVeg: true,
      prepTime: "15 min"
    },
    {
      _id: 2,
      name: "Bhutte Ki Kees",
      description: "Grated corn cooked with spices and garnished with coriander",
      price: 100,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Snacks",
      isVeg: true,
      prepTime: "20 min"
    },
    {
      _id: 3,
      name: "Dal Bafla Combo",
      description: "Wheat dough balls served with dal, ghee, and churma",
      price: 150,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Main Course",
      isVeg: true,
      prepTime: "30 min"
    },
    {
      _id: 4,
      name: "Sabudana Khichdi",
      description: "Tapioca pearls with peanuts, potatoes, and aromatic spices",
      price: 70,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Breakfast",
      isVeg: true,
      prepTime: "18 min"
    },
    {
      _id: 5,
      name: "Garadu",
      description: "Spicy fried yam pieces, a popular Indori street food",
      price: 60,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Snacks",
      isVeg: true,
      prepTime: "12 min"
    },
    {
      _id: 6,
      name: "Jalebi with Rabdi",
      description: "Crispy sweet spirals served with creamy thickened milk",
      price: 90,
      image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=300&fit=crop",
      rating: 4.9,
      category: "Desserts",
      isVeg: true,
      prepTime: "10 min"
    },
    {
      _id: 7,
      name: "Indori Namkeen Thali",
      description: "Complete savory meal with multiple dishes and breads",
      price: 180,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Main Course",
      isVeg: true,
      prepTime: "25 min"
    },
    {
      _id: 8,
      name: "Mawa Bati",
      description: "Sweet dessert made with mawa, sugar, and dry fruits",
      price: 120,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Desserts",
      isVeg: true,
      prepTime: "15 min"
    },
    {
      _id: 9,
      name: "Ratlami Sev",
      description: "Crispy spicy noodles, perfect evening snack from nearby Ratlam",
      price: 50,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      rating: 4.2,
      category: "Snacks",
      isVeg: true,
      prepTime: "5 min"
    },
    {
      _id: 10,
      name: "Khopra Patties",
      description: "Coconut filled pastry, sweet and crispy Indori specialty",
      price: 40,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Desserts",
      isVeg: true,
      prepTime: "8 min"
    },
    {
      _id: 11,
      name: "Chakki ki Shaak",
      description: "Traditional wheat cake curry, unique to Indore region",
      price: 110,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Main Course",
      isVeg: true,
      prepTime: "22 min"
    },
    {
      _id: 12,
      name: "Moong Dal Halwa",
      description: "Rich dessert made with yellow lentils, ghee, and sugar",
      price: 130,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Desserts",
      isVeg: true,
      prepTime: "35 min"
    }
  ])

  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [showFilters, setShowFilters] = useState(false)

  const categories = ['All', 'Breakfast', 'Main Course', 'Snacks', 'Desserts']

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const toggleFavorite = (id) => {
    setFavorites(prev => ({...prev, [id]: !prev[id]}))
  }

  const filteredMeals = meals
    .filter(meal => 
      (selectedCategory === 'All' || meal.category === selectedCategory) &&
      (meal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       meal.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'priceLow') return a.price - b.price
      if (sortBy === 'priceHigh') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })

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
      {/* Header Section */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center">
              All <span className="text-red-600">Indori Delights</span>
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8">
              {filteredMeals.length} dishes available for delivery
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-2 mb-6">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for dishes..."
                className="flex-1 outline-none text-gray-700 py-3 bg-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-5 py-2 rounded-full font-medium whitespace-nowrap bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Sort
              </button>
            </div>

            {/* Sort Dropdown */}
            {showFilters && (
              <div className="mt-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { value: 'popular', label: 'Most Popular' },
                    { value: 'rating', label: 'Highest Rated' },
                    { value: 'priceLow', label: 'Price: Low to High' },
                    { value: 'priceHigh', label: 'Price: High to Low' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value)
                        setShowFilters(false)
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        sortBy === option.value
                          ? 'bg-red-50 text-red-600 font-semibold'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Meals Grid Section */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {filteredMeals.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No meals found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMeals.map(meal => (
                <div key={meal._id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={meal.image} 
                      alt={meal.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Veg Badge */}
                    <div className="absolute top-3 left-3 bg-white rounded-lg px-2 py-1 flex items-center gap-1 shadow-md">
                      <div className={`w-3 h-3 rounded-sm border-2 ${meal.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${meal.isVeg ? 'bg-green-600' : 'bg-red-600'} m-auto mt-0.5`}></div>
                      </div>
                    </div>

                    {/* Favorite Button */}
                    <button 
                      onClick={() => toggleFavorite(meal._id)}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites[meal._id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </button>

                    {/* Rating Badge */}
                    <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-sm">{meal.rating}</span>
                    </div>

                    {/* Prep Time Badge */}
                    <div className="absolute bottom-3 right-3 bg-gray-900 bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {meal.prepTime}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors flex-1">
                        {meal.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {meal.description}
                    </p>

                    <div className="inline-block bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {meal.category}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-gray-900">
                        ₹{meal.price}
                      </div>
                      <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Meals