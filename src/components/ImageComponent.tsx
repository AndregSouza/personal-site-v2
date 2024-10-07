"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from './ui/button';

export default function ImageComponent({ src, alt, className }: { src: string; alt?: string; className?: string; }) {
    const [isZoomed, setIsZoomed] = useState(false);

    if (!src) return null;

    return (
        <Dialog.Root open={isZoomed} onOpenChange={setIsZoomed}>
            <Dialog.Trigger asChild>
                <motion.div className="relative cursor-pointer" layoutId={src} transition={{ duration: 0.4 }}>
                    <motion.img
                        src={src}
                        alt={alt || ''}
                        sizes="100vw"
                        className={className}
                        width={672}
                        height={482}
                    />
                    <Button size="icon" variant="ghost" className='absolute bottom-4 right-4 bg-background/70 rounded-full'>
                        <ZoomIn className='h-5 w-5' />
                    </Button>
                </motion.div>
            </Dialog.Trigger>
            <AnimatePresence>
                {isZoomed && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay forceMount className="z-50 fixed inset-0 flex items-center justify-center">
                            <motion.div
                                className="fixed inset-0 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <Dialog.Close asChild>
                                <Dialog.Content forceMount asChild className="fixed p-0 max-w-5xl w-full rounded-xl overflow-clip z-50 border-none flex items-center justify-center shadow-xl cursor-pointer">
                                    <motion.div
                                        className='aspect-auto'
                                        layoutId={src}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <VisuallyHidden.Root><Dialog.Title /></VisuallyHidden.Root>
                                        <VisuallyHidden.Root><Dialog.Description /></VisuallyHidden.Root>

                                        <motion.img
                                            src={src}
                                            alt={alt || ''}
                                            className="z-50 transform-none"
                                            width={2400}
                                            height={2400}
                                        />
                                        <Button size="icon" variant="ghost" className='absolute bottom-4 right-4 bg-background/70 z-50 rounded-full'>
                                            <ZoomOut className='h-5 w-5' />
                                        </Button>

                                    </motion.div>
                                </Dialog.Content>
                            </Dialog.Close>
                        </Dialog.Overlay>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}