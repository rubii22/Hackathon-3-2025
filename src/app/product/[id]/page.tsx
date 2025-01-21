'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import client from '../../../sanity/lib/client';
import { useCart } from '../../context/CartContext';

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

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == $id][0] {
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
        const productData = await client.fetch(query, { id: params.id });
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (!product) {
    return <div className="text-center py-10">Loading product details...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-10 flex-grow">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Product Image */}
          <div className="flex-1 max-w-sm">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={400}
                height={400}
                className="w-full rounded-lg object-contain"
              />
            ) : (
              <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-lg">
                No Image Available
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{product.productName || 'Product Name'}</h1>
            <p className="text-gray-700 text-lg leading- mb-4">
              {product.description ||
                'No description available for this product. Please check back later for more details about this item.'}
            </p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              <span className="text-blue-600">MRP:</span> ₹{product.price || 'N/A'}
            </p>

            {/* Colors Section */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Available Colors:</h3>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              className="flex items-center justify-center bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300"
              onClick={() => {
                addItem({
                  id: parseInt(product._id, 10), // Convert string ID to number
                  image: product.imageUrl || '/default-image.jpg',
                  productName: product.productName,
                  detail: product.description || '',
                  quantity: 1,
                  price: product.price.toString(), // Ensure price is passed as a string
                });

                // Navigate to the cart page after adding the product
                router.push('/cart');
              }}
            >
              <span className="mr-2">🛒</span> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
