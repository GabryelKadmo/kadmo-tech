"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface AlertDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description: string
    confirmText?: string
    cancelText?: string
    onConfirm: () => void
    variant?: "default" | "destructive"
}

export function AlertDialog({
    open,
    onOpenChange,
    title,
    description,
    confirmText = "Confirmar",
    cancelText = "Cancelar",
    onConfirm,
    variant = "default"
}: AlertDialogProps) {
    const handleConfirm = () => {
        onConfirm()
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-gray-900 border border-gray-700 shadow-2xl text-white max-w-md">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                        {variant === "destructive" ? (
                            <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        ) : (
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        )}
                        <DialogTitle className="text-lg font-semibold text-white">{title}</DialogTitle>
                    </div>
                    <DialogDescription className="text-gray-300 text-left pl-0 ml-13">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 justify-end mt-6">
                    <Button
                        variant="secondary"
                        onClick={() => onOpenChange(false)}
                        className="px-6 py-2 rounded-lg font-medium"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        className={variant === "destructive"
                            ? "bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:scale-105 transition-all"
                        }
                    >
                        {confirmText}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
