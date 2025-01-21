'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  imageUrl?: string;
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as Product[];
    setWishlist(storedWishlist);
  }, []);

  // Function to remove item from wishlist
  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-center mt-10">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 shadow-md flex flex-col items-center relative"
              >
                {/* Cross icon to remove */}
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500 transition-colors"
                >
                  &times;
                </button>

                {/* Product Image */}
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="mb-4 rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center">
                    No Image Available
                  </div>
                )}

                {/* Product Details */}
                <h2 className="text-lg font-semibold text-center">{product.productName}</h2>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-sm font-medium text-gray-800">Price: ${product.price}</p>

                {/* Link to Product Details */}
                <Link href={`/product/${product._id}`}>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    View Product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
