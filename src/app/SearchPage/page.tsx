// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import client from '../../sanity/lib/client';

// const ProductSearchPage = () => {
//   const [products, setProducts] = useState<any[]>([]);
//   const [searchResults, setSearchResults] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == "product"] {
//         _id,
//         productName,
//         category,
//         price,
//         inventory,
//         colors,
//         status,
//         description,
//         "imageUrl": image.asset->url
//       }`;

//       try {
//         const productsData = await client.fetch(query);
//         setProducts(productsData);
//         setSearchResults(productsData);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (!query.trim()) {
//       setSearchResults(products);
//     } else {
//       const filteredResults = products.filter((product) =>
//         product.productName.toLowerCase().includes(query.toLowerCase())
//       );
//       setSearchResults(filteredResults);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-black text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-xl font-bold">Product Search</h1>
//           <input
//             type="text"
//             placeholder="Search for a product..."
//             value={searchQuery}
//             onChange={(e) => handleSearch(e.target.value)}
//             className="p-2 rounded-lg text-black"
//           />
//         </div>
//       </header>

//       <div className="container mx-auto p-6">
//         {searchResults.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {searchResults.map((product) => (
//               <div
//                 key={product._id}
//                 className="border rounded-lg p-4 bg-white shadow-md cursor-pointer"
//                 onClick={() => router.push(`/product/${product._id}`)} // Navigate to the detail page
//               >
//                 {product.imageUrl ? (
//                   <Image
//                     src={product.imageUrl}
//                     alt={product.productName}
//                     width={200}
//                     height={200}
//                     className="mb-4 rounded-lg object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center">
//                     No Image Available
//                   </div>
//                 )}
//                 <h2 className="text-lg font-semibold">{product.productName}</h2>
//                 <p className="text-gray-800 font-medium">Price: ₹{product.price}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600 mt-10">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductSearchPage;
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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
  imageUrl: string | null;
}

const ProductSearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

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
        setSearchResults(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults(products);
    } else {
      const filteredResults = products.filter((product) =>
        product.productName.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Product Search</h1>
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 rounded-lg text-black"
          />
        </div>
      </header>

      <div className="container mx-auto p-6">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 bg-white shadow-md cursor-pointer"
                onClick={() => router.push(`/product/${product._id}`)} // Navigate to the detail page
              >
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
                <h2 className="text-lg font-semibold">{product.productName}</h2>
                <p className="text-gray-800 font-medium">Price: ₹{product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductSearchPage;
