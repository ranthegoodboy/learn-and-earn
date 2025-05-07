"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SearchSortToggleProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

const SearchSortToggle = ({ sortBy, onSortChange }: SearchSortToggleProps) => {
  return (
    <ToggleGroup
      type="single"
      value={sortBy}
      onValueChange={(value) => value && onSortChange(value)}
    >
      <ToggleGroupItem value="relevance" size="sm">
        Relevance
      </ToggleGroupItem>
      <ToggleGroupItem value="rating" size="sm">
        Rating
      </ToggleGroupItem>
      <ToggleGroupItem value="price-asc" size="sm">
        Price: Low to High
      </ToggleGroupItem>
      <ToggleGroupItem value="price-desc" size="sm">
        Price: High to Low
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default SearchSortToggle;
