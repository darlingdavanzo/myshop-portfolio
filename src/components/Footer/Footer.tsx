// src/components/Footer/Footer.tsx
import React from 'react';
import { motion } from 'motion/react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';        // ← React Icons Font Awesome
import { EnvelopeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Newsletter */}
        <div>
          <h4 className="text-white text-xl font-bold mb-4">MyShop</h4>
          <p className="text-sm mb-6">
            Elevate your shopping with curated collections and seamless experiences.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 text-white rounded-r-lg hover:bg-emerald-600 transition"
            >
              <EnvelopeIcon className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h5 className="text-white font-semibold mb-4">Shop</h5>
          <ul className="space-y-2 text-sm">
            {['All Products', 'New Arrivals', 'Best Sellers', 'Sale'].map(link => (
              <li key={link}>
                <a href="/shop" className="flex items-center hover:text-white transition">
                  <ChevronRightIcon className="w-4 h-4 mr-2 text-emerald-400" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-white font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-sm">
            {['About Us', 'Blog', 'Careers', 'Contact'].map(link => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                  className="flex items-center hover:text-white transition"
                >
                  <ChevronRightIcon className="w-4 h-4 mr-2 text-emerald-400" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h5 className="text-white font-semibold mb-4">Connect with us</h5>
          <div className="flex space-x-4 mb-6">
            {[
              { Icon: FaTwitter, href: '#' },
              { Icon: FaInstagram, href: '#' },
              { Icon: FaFacebookF, href: '#' },
              { Icon: FaLinkedinIn, href: '#' },
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
