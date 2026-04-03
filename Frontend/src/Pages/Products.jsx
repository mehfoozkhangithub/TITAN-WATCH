import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { products } from '../Redux/Products/productsSlicer';

export const Products = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((store) => store.products);
  console.log('🚀 ~ productData:', productData);

  useEffect(() => {
    dispatch(products());
  }, []);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
      {/* Image */}
      <img
        className="w-full h-60 object-cover"
        src="https://via.placeholder.com/300"
        alt="product"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Rolex Submariner
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Premium diving watch with stainless steel body.
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-green-600">₹8,20,000</span>
            <span className="text-sm text-gray-400 line-through ml-2">
              ₹8,50,000
            </span>
          </div>

          <span className="text-yellow-500 font-medium">⭐ 4.9</span>
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
