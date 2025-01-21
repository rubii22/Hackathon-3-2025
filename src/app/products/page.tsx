'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Side from '../components/Side';
import Header2 from '../components/Header2';
import client from '../../sanity/lib/client';

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  description: string;
  imageUrl?: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        productName,
        category,
        price,
        inventory,
        colors,
        status,
        description,
        "imageUrl": image.asset->url
      }`;

      try {
        const productsData: Product[] = await client.fetch(query);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    // Load products
    fetchProducts();

    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as Product[];
    setWishlist(storedWishlist);
  }, []);

  // Add product to wishlist
  const handleAddToWishlist = (product: Product) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Remove product from wishlist
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  if (!products || products.length === 0) {
    return <p className="text-center mt-10">Loading.....</p>;
  }

  return (
    <div className="flex flex-col">
      <Header2 />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4">
          <Side />
        </div>

        {/* Product Grid */}
        <div className="w-3/4">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="border rounded-lg p-4 shadow-md flex flex-col items-center"
                >
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
                    <button className="mt-2 bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                      View Product
                    </button>
                  </Link>

                  {/* Heart Icon (Add to Wishlist) */}
                  <button
                    onClick={() =>
                      wishlist.some((item) => item._id === product._id)
                        ? handleRemoveFromWishlist(product._id)
                        : handleAddToWishlist(product)
                    }
                    className="mt-2 text-2xl text-gray-600 hover:text-red-500 transition-colors duration-300"
                  >
                    {wishlist.some((item) => item._id === product._id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
