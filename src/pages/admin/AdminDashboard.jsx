import { 
  ShoppingBag, 
  Users, 
  UtensilsCrossed, 
  ShoppingCart, 
  Star, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Menu,
  Key
} from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom';
import LoaderComponent from '../../components/LoaderComponent';
import { getAllOrders, getAllRatings, getAllUsers } from '../../features/admin/adminSlice';



const AdminDashboard = () => {

const dispatch = useDispatch()


const {allUsers , allOrders , allRatings , adminLoading , adminsuccess , adminError , adminErrorMessage} =  useSelector(state => state.admin)

const revenue = allOrders?.filter(item => item.status !== "cancelled").reduce((p,c) => p + c.meal?.price ,0)

const avgRating = allRatings.reduce((p, c) => p + c.rating / allRatings.length, 0).toFixed(2)

useEffect(() => {

  //fetch all users
 dispatch(getAllUsers())

 //fetch all orders
 dispatch(getAllOrders())

//  //fetching all ratings
 dispatch(getAllRatings())



  if(adminError && adminErrorMessage){
    toast.error(adminErrorMessage)
  }
},[])
if(adminLoading){
  return <LoaderComponent />
}

  return (
        <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 border-gray-500-b">
          <ShoppingBag  className="h-8 w-8 text-orange-500" />
          <span className="ml-2 text-xl font-bold text-gray-800">Admin Panel</span>
        </div>
        
        <nav className="mt-8">
          <div className="px-4 space-y-2">
                                    <Link to={"/admin"} className={location.pathname === "/admin" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <BarChart3 className="h-5 w-5 mr-3" />
                            Dashboard
                        </Link>
                        <Link to={'/admin/users'} className={location.pathname === "/admin/users" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <Users className="h-5 w-5 mr-3" />
                            Users
                        </Link>
                        <Link to={"/admin/meals"} className={location.pathname === "/admin/meals" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <UtensilsCrossed className="h-5 w-5 mr-3" />
                            Meals
                        </Link>
                        <Link to={"/admin/orders"} className={location.pathname === "/admin/orders" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <ShoppingCart className="h-5 w-5 mr-3" />
                            Orders
                        </Link>
                        <Link to={"/admin/ratings"} className={location.pathname === "/admin/ratings" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <Star className="h-5 w-5 mr-3" />
                            Ratings
                        </Link>
                        <Link to={"/admin/settings"} className={location.pathname === "/admin/settings" ? "flex items-center px-4 py-3 text-gray-700 bg-orange-50 rounded-lg" : "flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg"}>
                            <Settings className="h-5 w-5 mr-3" />
                            Settings
                        </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-gray-500-b h-16 flex items-center justify-between px-6">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 md:hidden" />
            <h1 className="text-2xl font-semibold text-gray-800 ml-4">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border-gray-500 border-gray-500-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-gray-500-orange-500 outline-none"
              />
            </div>
            <Bell className="h-6 w-6 text-gray-600" />
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-800">{allUsers?.length}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">+12.5%</span>
                <span className="text-gray-600 text-sm"> from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-800">{allOrders?.length}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <ShoppingCart className="h-8 w-8 text-green-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">+8.2%</span>
                <span className="text-gray-600 text-sm"> from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-3xl font-bold text-gray-800">₹{revenue}</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <BarChart3 className="h-8 w-8 text-orange-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">+15.3%</span>
                <span className="text-gray-600 text-sm"> from last month</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <p className="text-3xl font-bold text-gray-800">{avgRating}</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">+0.2</span>
                <span className="text-gray-600 text-sm"> from last month</span>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl shadow-sm border-gray-500">
            <div className="px-6 py-4 border-gray-500-b">
              <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    allOrders?.map( order => {
                      return (

                        <tr className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order?._id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order?.user?.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order?.meal?.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{order?.meal?.price}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${order?.status === "pending" ? "bg-yellow-100 text-yellow-800" : order?.status === "delivered" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{order?.status}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(order?.createdAt).toLocaleDateString('en-IN')}</td>
                                            </tr>
                                      

                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard