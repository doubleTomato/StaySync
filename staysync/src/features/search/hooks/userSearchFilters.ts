import { useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { searchSchema, type SearchParams } from "@/lib/schemas/search";

export const useUserSearchFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getVaildFilters = useCallback((): SearchParams => {
    const params = Object.fromEntries(searchParams.entries());
    const result = searchSchema.safeParse(params);
    
    if (!result.success) {
      return searchSchema.parse({});
    }
    return result.data;
    }, [searchParams]);
    
    const updateFilters = useCallback((newFilters: Partial<SearchParams>) => {
        const currentFilters = new URLSearchParams(Array.from(searchParams.entries()));


        Object.entries(newFilters).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                currentFilters.delete(key);
            }else{
                currentFilters.set(key, String(value));
            }
        });
        const query = currentFilters.toString();
        const url = query ?`${pathname}?${query}` : pathname;
        router.push(url);
    }, [ pathname, router, searchParams]);

    return {
        filters: getVaildFilters,
        updateFilters,
};
    
}