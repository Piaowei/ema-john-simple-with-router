import React, { useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		// console.log("Hello bay bay");
		fetch('./products.json')
			.then(res => res.json())
			.then(data => setProducts(data));

	}, [])
	// console.log("p--", products, "s--", setProducts)

	return [products, setProducts];
};

export default useProducts;