import { ProjectCardSkeleton } from "@/components/custom/ProjectCardSkeleton";

export function PortfolioPageSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
            {Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
            ))}
        </div>
    );
}
