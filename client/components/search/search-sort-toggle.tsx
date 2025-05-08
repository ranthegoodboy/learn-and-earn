"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SearchSortToggleProps {
  sortBy: string | undefined;
  onSortChange: (value: string) => void;
}

const SearchSortToggle = ({ sortBy, onSortChange }: SearchSortToggleProps) => {
  return (
    <ToggleGroup
      className="bg-secondary text-white"
      type="single"
      value={sortBy}
      onValueChange={(value) => value && onSortChange(value)}
    >
      <ToggleGroupItem
        value="newest"
        className="max-w-fit cursor-pointer hover:bg-accent"
      >
        Newest
      </ToggleGroupItem>
      <ToggleGroupItem value="price_asc" className="max-w-fit cursor-pointer">
        Price: Low to High
      </ToggleGroupItem>
      <ToggleGroupItem value="price_desc" className="max-w-fit cursor-pointer">
        Price: High to Low
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default SearchSortToggle;
