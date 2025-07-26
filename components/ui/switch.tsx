import * as React from "react"

export interface SwitchProps {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    id?: string
    className?: string
}

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, id, className }) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            tabIndex={0}
            id={id}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${checked ? "bg-purple-600" : "bg-gray-600"} ${className || ""}`}
            onClick={() => onCheckedChange(!checked)}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`}
            />
        </button>
    )
}
