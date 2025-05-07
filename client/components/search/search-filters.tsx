import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React from "react";

interface SearchFiltersProps {
  showOnlyFree: boolean;
  category: string | undefined;
  sortBy: string;
  onPriceToggle: (checked: boolean) => void;
  onCategoryChange: (category: string | undefined) => void;
  onSortByChange: (sortBy: string) => void;
  resetFilters: () => void;
}

const SearchFilters = ({
  showOnlyFree,
  category,
  sortBy,
  onPriceToggle,
  onCategoryChange,
  onSortByChange,
  resetFilters,
}: SearchFiltersProps) => {
  return (
    <Card className="overflow-hidden shadow-sm">
      <CardContent className="p-6">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        <div className="space-y-6">
          {/* Price Filter */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm text-foreground/80">
              Course Price
            </h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="free-courses" className="text-sm cursor-pointer">
                Show only free courses
              </Label>
              <Switch
                id="free-courses"
                checked={showOnlyFree}
                onCheckedChange={onPriceToggle}
              />
            </div>
          </div>

          <Separator />

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm text-foreground/80">
              Categories
            </h3>
            <RadioGroup
              value={category || "all"}
              onValueChange={(value) =>
                onCategoryChange(value === "all" ? undefined : value)
              }
            >
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="all" id="all-categories" />
                <Label
                  htmlFor="all-categories"
                  className="text-sm cursor-pointer"
                >
                  All Categories
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Web Development" id="web-development" />
                <Label
                  htmlFor="web-development"
                  className="text-sm cursor-pointer"
                >
                  Web Development
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Data Science" id="data-science" />
                <Label
                  htmlFor="data-science"
                  className="text-sm cursor-pointer"
                >
                  Data Science
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Design" id="design" />
                <Label htmlFor="design" className="text-sm cursor-pointer">
                  Design
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem
                  value="Mobile Development"
                  id="mobile-development"
                />
                <Label
                  htmlFor="mobile-development"
                  className="text-sm cursor-pointer"
                >
                  Mobile Development
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Marketing" id="marketing" />
                <Label htmlFor="marketing" className="text-sm cursor-pointer">
                  Marketing
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Cloud Computing" id="cloud-computing" />
                <Label
                  htmlFor="cloud-computing"
                  className="text-sm cursor-pointer"
                >
                  Cloud Computing
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />

          {/* Sort options */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm text-foreground/80">Sort By</h3>
            <Select value={sortBy} onValueChange={onSortByChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Reset filters button */}
          <Button variant="outline" className="w-full" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
