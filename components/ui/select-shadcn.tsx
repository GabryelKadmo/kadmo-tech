import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const SelectContext = React.createContext<any>(null)

export function Select({ value, onValueChange, children, ...props }: any) {
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(value)

    React.useEffect(() => {
        setSelected(value)
    }, [value])

    return (
        <SelectContext.Provider value={{ selected, setSelected, onValueChange, setOpen }}>
            <div className="relative" tabIndex={0} onBlur={() => setOpen(false)}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full bg-gray-800/80 border border-gray-700 text-white rounded-lg px-4 py-2 shadow focus:border-pink-500 focus:ring-2 focus:ring-pink-400/30"
                    onClick={() => setOpen((o) => !o)}
                >
                    <span>
                        {children.find((child: any) => child.props.value === selected)?.props.children || "Selecione"}
                    </span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                </button>
                {open && (
                    <div className="absolute z-20 mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                        {React.Children.map(children, (child: any) =>
                            React.cloneElement(child, { onClick: () => { setSelected(child.props.value); onValueChange(child.props.value); setOpen(false) }, selected })
                        )}
                    </div>
                )}
            </div>
        </SelectContext.Provider>
    )
}

export function SelectItem({ value, children, onClick, selected }: any) {
    return (
        <div
            className={cn(
                "px-4 py-2 cursor-pointer hover:bg-purple-700/30 text-white flex items-center gap-2",
                selected === value && "bg-purple-700/60 font-bold"
            )}
            onClick={onClick}
        >
            {selected === value && <Check className="w-4 h-4 text-purple-400" />} {children}
        </div>
    )
}
