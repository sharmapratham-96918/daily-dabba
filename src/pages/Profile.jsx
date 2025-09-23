import { ShoppingBag, User, MapPin, Phone, Mail, Edit, Package, Star, Clock, CreditCard } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderComponent from '../components/LoaderComponent';
import { useEffect } from 'react';
import { cancelOrder, getOrders } from '../Features/order/orderSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"



const Profile = () => {

  const {user} = useSelector(state => state.auth)
  const {orders , order , orderSuccess , orderLoading , orderError , orderErrorMessage } = useSelector(state => state.order) 
  const dispatch = useDispatch()
  const navigate = useNavigate()



    const totalSpent = orders.reduce((p,c) => p + c.meal.price , 0)


  useEffect(() => {
      if(!user) {
        navigate("/login")
       }

    dispatch(getOrders())

    if(orderError && orderErrorMessage) {
      toast.error(orderErrorMessage)
    }

  },[user , orderError , orderErrorMessage])

  const handelCancelOrder = (id) => {
    dispatch(cancelOrder(id))
    navigate("/")
  }





  if (orderLoading) {
    return (
      <LoaderComponent />
    )
  }



  return (
        <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm border-gray-500-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-800">Indori LunchBox</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Meals</a>
              <a href="#" className="text-orange-500 font-medium">Profile</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Orders</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{user.name[0]}</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm border-gray-500 p-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{user.name[0]}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">Customer since {new Date(user.createdAt).toLocaleDateString("en-IN")}</p>
                <button className="mt-4 flex items-center space-x-2 text-orange-500 hover:text-orange-600 mx-auto">
                  <Edit className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border-gray-500 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-600">Total Orders</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orders.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">Total Spent</span>
                  </div>
                  <span className="font-semibold text-gray-800">₹{totalSpent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-600">Last Meal</span>
                  </div>
                  <span className="font-semibold text-gray-800">{orders[0]?.meal?.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border-gray-500 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
                <button className="text-orange-500 hover:text-orange-600">
                  <Edit className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-800">{user.name}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-800">{user.email}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-800">+91 {user.phone}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-800">MG Road, Indore, MP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border-gray-500">
              <div className="px-6 py-4 border-gray-500-b">
                <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
              </div>
              
              <div className="divide-y divide-gray-200">

                {
                  orders.map( order => {
                    return(
                                      <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">{order._id}</h3>
                      <p className="text-sm text-gray-600">Placed on {new Date(order.createdAt).toLocaleDateString("en-IN")}</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={order.meal.image} 
                      alt={order.meal.image} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{order.meal.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: 1</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">₹{order.meal.price}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">25 mins</span>
                      </div>
                    </div>
                  </div> 
                  
                  <div className="flex items-center justify-between">
                    <Link to={`/auth/meal/${order.meal._id}`} className="cursor-pointer text-orange-500 hover:text-orange-600 text-sm font-medium">
                      Reorder
                    </Link>
                    <button onClick={() => handelCancelOrder(order._id)} className="cursor-pointer text-red-500 hover:text-orange-600 text-sm font-medium">
                      {order.status === "delivered" ? "" : "Cancel This Order"}
                    </button>

                    <Link to={`/auth/meal/${order.meal._id}`} className="cursor-pointer text-gray-500 hover:text-gray-700 text-sm font-medium">
                      Rate & Review
                    </Link>
                  </div>
                </div>
                    )
                  })
                }

              </div>
              
              <div className="px-6 py-4 border-gray-500-t">
                <button className="text-orange-500 hover:text-orange-600 font-medium">
                  View All Orders →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
