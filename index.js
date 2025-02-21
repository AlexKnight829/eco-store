import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Reusable Water Bottle",
    price: "$25",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Biodegradable Cleaning Kit",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sustainable Cotton T-Shirt",
    price: "$30",
    image: "https://via.placeholder.com/150",
  },
];

export default function EcoStore() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Eco-Friendly Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Card>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold text-green-600">{product.price}</p>
                <Button className="mt-2 w-full">Add to Cart</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
