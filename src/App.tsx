import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, HomeIcon, UsersIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, ChartPieIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', initial: 'H' },
  { id: 2, name: 'Tailwind Labs', initial: 'T' },
  { id: 3, name: 'Workcation', initial: 'W' },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const users = [
  {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Software Engineer',
    department: 'Engineering',
    role: 'Admin',
    status: 'Active',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-e9df14d4d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Product Manager',
    department: 'Product',
    role: 'User',
    status: 'Inactive',
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1514535075764-4b943b2f3f3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'UX Designer',
    department: 'Design',
    role: 'User',
    status: 'Active',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-full bg-gray-100">
      {/* Top header remains as is */}
      <Disclosure as="nav" className="bg-white shadow-sm fixed w-full z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="mr-4 rounded-md p-2 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {sidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="size-8"
              />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div className="w-full max-w-md">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <input
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                  <svg className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button type="button" className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-indigo-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative">
                  <MenuButton className="flex items-center text-sm focus:outline-none">
                    <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                    <span className="ml-2 font-medium text-gray-900">{user.name}</span>
                  </MenuButton>
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      {/* Sidebar */}
      <div className={classNames(
        'fixed top-20 left-0 z-10 h-[calc(100vh-2rem)] m-4 flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300',
        sidebarOpen ? 'w-72' : 'w-16'
      )}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center py-6">
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-8 mb-8"
            />
            <nav className="flex-1 w-full">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                        'group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        sidebarOpen ? 'justify-start' : 'justify-center'
                      )}
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                      {sidebarOpen && <span className="ml-2">{item.name}</span>}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className={classNames('px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider', sidebarOpen ? '' : 'sr-only')}>Your teams</h3>
                <ul className="mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.id}>
                      <a href="#" className={classNames('group flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600', sidebarOpen ? 'justify-start' : 'justify-center')}>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">{team.initial}</span>
                        {sidebarOpen && <span className="ml-2">{team.name}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="mt-auto w-full">
              <a href="#" className={classNames('flex items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600', sidebarOpen ? 'justify-start' : 'justify-center')}> <Cog6ToothIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" /> {sidebarOpen && <span className="ml-2">Settings</span>} </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main content area */}
      <div className={classNames('transition-all duration-300', sidebarOpen ? 'ml-80' : 'ml-24', 'pt-24 p-8')}> 
        <header className="bg-white shadow-sm rounded-xl mb-8">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Stats Section Start */}
            <section className="mb-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Last 30 days</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="rounded-xl bg-white shadow p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <UsersIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Total Subscribers</div>
                      <div className="text-2xl font-bold text-gray-900">71,897 <span className="ml-2 text-sm font-medium text-green-600">↑ 122</span></div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">View all</a>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="rounded-xl bg-white shadow p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <DocumentDuplicateIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Avg. Open Rate</div>
                      <div className="text-2xl font-bold text-gray-900">58.16% <span className="ml-2 text-sm font-medium text-green-600">↑ 5.4%</span></div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">View all</a>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="rounded-xl bg-white shadow p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <ChartPieIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Avg. Click Rate</div>
                      <div className="text-2xl font-bold text-gray-900">24.57% <span className="ml-2 text-sm font-medium text-red-600">↓ 3.2%</span></div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">View all</a>
                  </div>
                </div>
              </div>
            </section>
            {/* Stats Section End */}
            {/* Users Table Section Start */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">With avatars and multi-line content <span className="ml-2 rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">Preview</span></h2>
                <a href="#" className="text-sm font-medium text-sky-600 hover:underline flex items-center gap-1">Get the code <span aria-hidden="true">→</span></a>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Users</h3>
                    <p className="mt-1 text-sm text-gray-600">A list of all the users in your account including their name, title, email and role.</p>
                  </div>
                  <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Add user</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Role</th>
                        <th className="px-6 py-3" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {users.map((user) => (
                        <tr key={user.email}>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={user.imageUrl} alt="" className="h-10 w-10 rounded-full object-cover" />
                              <div>
                                <div className="font-medium text-gray-900">{user.name}</div>
                                <div className="text-gray-500 text-sm">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-gray-900 font-medium">{user.title}</div>
                            <div className="text-gray-500 text-sm">{user.department}</div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-gray-900">{user.role}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-right">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900 font-medium text-sm">Edit</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Users Table Section End */}
            {/* Contact Cards Grid Section Start */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Contacts <span className="ml-2 rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">Preview</span></h2>
                <a href="#" className="text-sm font-medium text-sky-600 hover:underline flex items-center gap-1">Get the code <span aria-hidden="true">→</span></a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example contact cards, you can map over a contacts array for dynamic data */}
                {[{
                  name: 'Leslie Alexander',
                  title: 'Co-Founder / CEO',
                  email: 'leslie.alexander@example.com',
                  imageUrl: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  phone: '+1-202-555-0170',
                  location: 'San Francisco, CA',
                }, {
                  name: 'Michael Foster',
                  title: 'Co-Founder / CTO',
                  email: 'michael.foster@example.com',
                  imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  phone: '+1-202-555-0147',
                  location: 'New York, NY',
                }, {
                  name: 'Dries Vincent',
                  title: 'Manager, Business Relations',
                  email: 'dries.vincent@example.com',
                  imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                  phone: '+1-202-555-0114',
                  location: 'Los Angeles, CA',
                }].map((contact) => (
                  <div key={contact.email} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col items-center text-center">
                    <img src={contact.imageUrl} alt={contact.name} className="h-20 w-20 rounded-full object-cover mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                    <div className="text-sm text-gray-500 mb-2">{contact.title}</div>
                    <div className="flex flex-col gap-1 text-sm text-gray-600 mb-4">
                      <span>{contact.email}</span>
                      <span>{contact.phone}</span>
                      <span>{contact.location}</span>
                    </div>
                    <a href={`mailto:${contact.email}`} className="mt-auto inline-block rounded-md bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-100">Contact</a>
                  </div>
                ))}
              </div>
            </section>
            {/* Contact Cards Grid Section End */}
            {/* Invoice Section Start */}
            <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Invoice Card */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Invoice</h2>
                      <div className="mt-1 flex flex-col sm:flex-row sm:gap-8 text-sm text-gray-500">
                        <span>Issued on <span className="font-medium text-gray-900">January 23, 2023</span></span>
                        <span>Due on <span className="font-medium text-gray-900">January 31, 2023</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">From</div>
                      <div className="text-gray-900">Acme, Inc.</div>
                      <div>7363 Cynthia Pass</div>
                      <div>Toronto, ON N3Y 4H8</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">To</div>
                      <div className="text-gray-900">Tuple, Inc</div>
                      <div>886 Walter Street</div>
                      <div>New York, NY 12345</div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-2 text-left font-semibold text-gray-900">Projects</th>
                          <th className="py-2 text-right font-semibold text-gray-900">Hours</th>
                          <th className="py-2 text-right font-semibold text-gray-900">Rate</th>
                          <th className="py-2 text-right font-semibold text-gray-900">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-4 align-top">
                            <div className="font-medium text-gray-900">Logo redesign</div>
                            <div className="text-gray-500">New logo and digital asset playbook.</div>
                          </td>
                          <td className="py-4 text-right align-top">20.0</td>
                          <td className="py-4 text-right align-top">$100.00</td>
                          <td className="py-4 text-right align-top">$2,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-4 align-top">
                            <div className="font-medium text-gray-900">Website redesign</div>
                            <div className="text-gray-500">Design and program new company website.</div>
                          </td>
                          <td className="py-4 text-right align-top">52.0</td>
                          <td className="py-4 text-right align-top">$100.00</td>
                          <td className="py-4 text-right align-top">$5,200.00</td>
                        </tr>
                        <tr>
                          <td className="py-4 align-top">
                            <div className="font-medium text-gray-900">Business cards</div>
                            <div className="text-gray-500">Design and production of 3.5'' x 2.0'' business cards.</div>
                          </td>
                          <td className="py-4 text-right align-top">12.0</td>
                          <td className="py-4 text-right align-top">$100.00</td>
                          <td className="py-4 text-right align-top">$1,200.00</td>
                        </tr>
                        <tr>
                          <td className="py-4 align-top">
                            <div className="font-medium text-gray-900">T-shirt design</div>
                            <div className="text-gray-500">Three t-shirt design concepts.</div>
                          </td>
                          <td className="py-4 text-right align-top">4.0</td>
                          <td className="py-4 text-right align-top">$100.00</td>
                          <td className="py-4 text-right align-top">$400.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={3} className="pt-6 text-right font-semibold text-gray-900">Subtotal</td>
                          <td className="pt-6 text-right font-semibold text-gray-900">$8,800.00</td>
                        </tr>
                        <tr>
                          <td colSpan={3} className="text-right text-gray-700">Tax</td>
                          <td className="text-right text-gray-700">$1,760.00</td>
                        </tr>
                        <tr>
                          <td colSpan={3} className="pt-2 text-right font-bold text-gray-900">Total</td>
                          <td className="pt-2 text-right font-bold text-gray-900">$10,560.00</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              {/* Invoice Sidebar */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-900">Amount</div>
                    <span className="rounded bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700">Paid</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">$10,560.00</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4m0-4h.01" /></svg>
                    Alex Curren
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    January 31, 2023
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" /></svg>
                    Paid with MasterCard
                  </div>
                  <a href="#" className="block w-full rounded-md bg-gray-50 px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100">Download receipt &rarr;</a>
                </div>
                {/* Activity Feed */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col h-full">
                  <div className="text-sm font-semibold text-gray-900 mb-4">Activity</div>
                  <ol className="relative border-l border-gray-200 pl-4 flex-1">
                    <li className="mb-6">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                      </span>
                      <div className="text-sm text-gray-700"><span className="font-medium">Chelsea Hagon</span> created the invoice.</div>
                      <div className="text-xs text-gray-400">7d ago</div>
                    </li>
                    <li className="mb-6">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                      </span>
                      <div className="text-sm text-gray-700"><span className="font-medium">Chelsea Hagon</span> edited the invoice.</div>
                      <div className="text-xs text-gray-400">6d ago</div>
                    </li>
                    <li className="mb-6">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                      </span>
                      <div className="text-sm text-gray-700"><span className="font-medium">Chelsea Hagon</span> sent the invoice.</div>
                      <div className="text-xs text-gray-400">6d ago</div>
                    </li>
                    <li className="mb-6">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Chelsea Hagon" className="h-6 w-6 rounded-full object-cover border-2 border-white" />
                      </span>
                      <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700 mb-1"><span className="font-medium">Chelsea Hagon</span> commented<br /><span className="text-gray-600">Called client, they reassured me the invoice would be paid by the 25th.</span></div>
                      <div className="text-xs text-gray-400">3d ago</div>
                    </li>
                    <li className="mb-6">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                      </span>
                      <div className="text-sm text-gray-700"><span className="font-medium">Alex Curren</span> viewed the invoice.</div>
                      <div className="text-xs text-gray-400">2d ago</div>
                    </li>
                    <li className="mb-6">
                      <span className="absolute -left-2 flex h-4 w-4 items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                      </span>
                      <div className="text-sm text-gray-700"><span className="font-medium">Alex Curren</span> paid the invoice.</div>
                      <div className="text-xs text-gray-400">1d ago</div>
                    </li>
                  </ol>
                  <form className="mt-4 flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="h-8 w-8 rounded-full object-cover" />
                    <input type="text" placeholder="Add your comment..." className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                    <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Comment</button>
                  </form>
                </div>
              </div>
            </section>
            {/* Invoice Section End */}
            <div className="h-[400px] rounded-2xl border border-dashed border-gray-200 bg-[repeating-linear-gradient(135deg,#f3f4f6_0_2px,transparent_2px,transparent_24px)]" />
          </div>
        </main>
      </div>
    </div>
  )
}
