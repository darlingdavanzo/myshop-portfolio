// src/components/IrregularGrid/IrregularGrid.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Tile } from '../../types';
import { fetchAllTiles } from '../../services/tiles';

const IrregularGrid: React.FC = () => {
    const [tiles, setTiles] = useState<Tile[]>([]);

    useEffect(() => {
        fetchAllTiles().then(setTiles);
    }, []);

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    {tiles.map(({ id, title, image, link, className }) => (
                        <motion.div
                            key={id}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className={`relative overflow-hidden group ${className}`}
                        >
                            {/* Background image */}
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                            {/* Text & Button */}
                            <div className="absolute bottom-4 left-4 z-10 text-white">
                                <h3 className="text-lg font-bold">{title}</h3>
                                <a
                                    href={link}
                                    className="mt-2 inline-block bg-emerald-600 hover:bg-emerald-700 text-sm font-medium py-1 px-4 rounded transition"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IrregularGrid;
