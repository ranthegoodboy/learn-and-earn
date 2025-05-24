"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchSortToggleProps {
  sortBy: string | undefined;
  onSortChange: (value: string) => void;
}

const SearchSortToggle = ({ sortBy, onSortChange }: SearchSortToggleProps) => {
  return (
    <Select
      defaultValue="newest"
      value={sortBy}
      onValueChange={(value) => onSortChange(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>
        <SelectItem value="price_asc">Price: Low to High</SelectItem>
        <SelectItem value="price_desc">Price: High to Low</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchSortToggle;
