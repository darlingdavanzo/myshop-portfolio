// src/components/Navbar/Navbar.tsx
import { Link } from 'react-router-dom';
import { Disclosure, Menu } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingCartIcon, 
  UserIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'motion/react';
import { useCart } from '../../hooks/useCart';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary">
                  MyShop
                </Link>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:flex md:space-x-8 md:items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md">
                    <UserIcon className="w-5 h-5 mr-1" aria-hidden="true"/>
                    Account
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/login"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Sign In
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/orders"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Orders
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <Link to="/cart" className="relative inline-flex items-center px-3 py-2">
                  <ShoppingCartIcon className="w-6 h-6 text-gray-700 hover:text-primary" />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true"/>
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true"/>
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden bg-white backdrop-blur-sm bg-opacity-50">
            <motion.div
              initial="closed"
              animate={open ? 'open' : 'closed'}
              variants={{
                open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05 } },
                closed: { opacity: 0, height: 0 },
              }}
              className="px-2 pt-2 pb-3 space-y-1"
            >
              {navItems.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
