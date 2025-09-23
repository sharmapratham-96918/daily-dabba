import { 
  Users, 
  Bell,
  Search,
  Menu,
  Plus,
  Edit,
  Trash2,
  Mail,
  Phone,
  User
} from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import LoaderComponent from "../../components/LoaderComponent"
import { getAllUsers } from "../../features/admin/adminSlice"

const AdminUser = () => {

const {allUsers , adminLoading } = useSelector(state => state.admin)

const dispatch = useDispatch()


useEffect(() => {
  if(allUsers?.length === 0 ){
       dispatch(getAllUsers())
  }
},[])

if(adminLoading) {
  return <LoaderComponent />
}


  return (
      <div className="ml-64 flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-gray-500-b h-16 flex items-center justify-between px-6">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 md:hidden" />
            <h1 className="text-2xl font-semibold text-gray-800 ml-4">User Management</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border-gray-500 border-gray-500-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-gray-500-orange-500 outline-none"
              />
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add User</span>
            </button>
            <Bell className="h-6 w-6 text-gray-600" />
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
          </div>
        </header>

        {/* Users Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Users</p>
                  <p className="text-3xl font-bold text-gray-800">{allUsers?.length}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-gray-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New This Month</p>
                  <p className="text-3xl font-bold text-gray-800">{allUsers?.length}</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl shadow-sm border-gray-500">
            <div className="px-6 py-4 border-gray-500-b flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">All Users</h2>
              <div className="flex items-center space-x-2">
                <select className="border-gray-500 border-gray-500-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <select className="border-gray-500 border-gray-500-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Sort by Date</option>
                  <option>Sort by Name</option>
                  <option>Sort by Orders</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                  {
                  allUsers?.map( User =>{
                      return (
                                          <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{User?.name.split(" ")[0][0]}</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{User?.name}</p>
                          <p className="text-sm text-gray-500">{User?.isAdmin ? "Admin" : "Customer"}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2 text-sm text-gray-700">
                        <Mail className="h-4 w-4" />
                        <span>{User?.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-700 mt-1">
                        <Phone className="h-4 w-4" />
                        <span>{User?.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">N/A</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">N/A</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(User?.createdAt).toLocaleDateString("en-us")}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                      )
                    } )
                  }



                  

                  

                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-6 py-4 border-gray-500-t flex items-center justify-between">
              <p className="text-sm text-gray-700">Showing 1 to 3 of 2,847 results</p>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border-gray-500 border-gray-500-gray-300 rounded-lg text-sm hover:bg-gray-50">Previous</button>
                <button className="px-3 py-2 bg-orange-500 text-white rounded-lg text-sm">1</button>
                <button className="px-3 py-2 border-gray-500 border-gray-500-gray-300 rounded-lg text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border-gray-500 border-gray-500-gray-300 rounded-lg text-sm hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border-gray-500 border-gray-500-gray-300 rounded-lg text-sm hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>  )
}

export default AdminUser
