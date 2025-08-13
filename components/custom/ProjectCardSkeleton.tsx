export function ProjectCardSkeleton() {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm animate-pulse">
            <div className="relative z-0">
                {/* Skeleton da imagem */}
                <div className="relative h-44 overflow-hidden bg-gray-700/50">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent" />
                </div>

                <div className="p-5 relative z-10">
                    {/* Skeleton do título */}
                    <div className="h-6 bg-gray-600/50 rounded-md mb-2 w-3/4"></div>

                    {/* Skeleton da descrição */}
                    <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-600/40 rounded w-full"></div>
                        <div className="h-4 bg-gray-600/40 rounded w-2/3"></div>
                    </div>

                    {/* Skeleton das tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-6 bg-gray-600/40 rounded-full w-16"></div>
                        <div className="h-6 bg-gray-600/40 rounded-full w-20"></div>
                        <div className="h-6 bg-gray-600/40 rounded-full w-14"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
