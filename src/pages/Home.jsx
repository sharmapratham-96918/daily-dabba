import { Clock } from "lucide-react"
import FeatureCard from "../components/FeatureCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getMeals } from "../Features/meal/mealSlice"
import LoaderComponent from "../components/LoaderComponent"


const Home = () => {

  const {meals, meal , mealSuccess , mealLoading , mealError , mealErrorMessage} = useSelector(state => state.meal)

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch(getMeals())
  },[])

  if(mealLoading) {
    return <LoaderComponent />
  }



  return (
    <>
         <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-rose-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Authentic <span className="text-orange-500">Indori</span> Flavors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the taste of Indore with our freshly prepared lunch boxes delivered right to your doorstep
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition duration-300 shadow-lg">
            Order Now
          </button>
        </div>
      </section>

            <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Meals</h2>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              meals.map(meal => {
                return   <FeatureCard key={meal._id} meal={meal}  />
              })
            }

          </div>
        </div>
      </section>

            <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Meal</h3>
              <p className="text-gray-600">Browse our delicious menu and select your favorite Indori dishes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Place Your Order</h3>
              <p className="text-gray-600">Quick checkout process with multiple payment options</p>
            </div>
            
            <div className="text-center">
              <div className="bg-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Fresh meals delivered hot to your doorstep within 30 minutes</p>
            </div>
          </div>
        </div>
      </section>





    </>
  )
}

export default Home
