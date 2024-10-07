"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from './ui/button';

type VideoComponentProps = React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
    src: string;
};

export default function VideoComponent({ src, className, ...props }: VideoComponentProps) {
    const [isZoomed, setIsZoomed] = useState(false);

    if (!src) return null;

    return (
        <div className={`${isZoomed ? 'static' : 'relative'}`}>
            <div className='max-w-4xl rounded-lg bg-background'>
                <video className="w-full h-auto invisible " src={src} {...props} />
            </div>
            {isZoomed ? (
                <motion.div
                    className={`fixed inset-0 backdrop-blur-sm ${isZoomed ? "z-50" : ""} `}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
            ) : null}

            <motion.div
                className={`absolute top-0 left-0 inset-0 flex items-center justify-center } ${isZoomed ? "z-50" : ""}`}
                onClick={() => setIsZoomed(!isZoomed)}
            >

                <motion.div className="relative w-full max-w-4xl cursor-pointer rounded-lg shadow-md" layout transition={{ duration: 4 }} >
                    <video className=" w-full h-full my-0 border-none " src={src} autoPlay loop muted playsInline {...props} />

                    <Button size="icon" variant="ghost" asChild
                        className="absolute bottom-4 right-4 bg-background/70 shadow-md rounded-full"
                        onClick={() => {
                            setIsZoomed(!isZoomed);

                        }}
                    >
                        <motion.button>
                            {isZoomed ? (
                                <ZoomOut className='h-5 w-5' />
                            ) : (
                                <ZoomIn className='h-5 w-5' />
                            )}
                        </motion.button>
                    </Button>
                </motion.div>


            </motion.div>
        </div>
    );
}