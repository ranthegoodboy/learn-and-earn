import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";
import { Options } from "nuqs";
import React from "react";

interface SearchFiltersProps {
  priceFilter: string | undefined;
  onPriceFilterChange: (
    value: string | ((old: string) => string | null) | null,
    options?: Options
  ) => Promise<URLSearchParams>;
  level: string | undefined;
  rating: string | undefined;
  onLevelChange: (
    value: string | ((old: string) => string | null) | null,
    options?: Options
  ) => Promise<URLSearchParams>;
  onRatingChange: (
    value: string | ((old: string) => string | null) | null,
    options?: Options
  ) => Promise<URLSearchParams>;
  setCurrentPage: (
    value: string | ((old: string) => string | null) | null,
    options?: Options
  ) => Promise<URLSearchParams>;
}

const SearchFilters = ({
  priceFilter,
  level,
  rating,
  onPriceFilterChange,
  onLevelChange,
  onRatingChange,
  setCurrentPage,
}: SearchFiltersProps) => {
  const resetPagination = () => {
    setCurrentPage("1");
  };

  const activeFilterCount =
    [priceFilter, level, rating].filter((f) => f !== "all").length || 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={`border border-gray-300 h-9`}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {activeFilterCount > 0 && <span>({activeFilterCount})</span>}
            <span></span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          <div className="flex gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-sm text-foreground/80">
                Course Price
              </h3>
              <RadioGroup
                value={priceFilter || "all"}
                onValueChange={(value) => {
                  onPriceFilterChange(value === "all" ? null : value);
                  resetPagination();
                }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="price-all" />
                  <Label htmlFor="price-all" className="text-sm cursor-pointer">
                    All
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="free" id="price-free" />
                  <Label
                    htmlFor="price-free"
                    className="text-sm cursor-pointer"
                  >
                    Free
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paid" id="price-paid" />
                  <Label
                    htmlFor="price-paid"
                    className="text-sm cursor-pointer"
                  >
                    Paid
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator orientation="vertical" className="h-auto" />

            <div className="space-y-3">
              <h3 className="font-medium text-sm text-foreground/80">Level</h3>
              <RadioGroup
                value={level || "all"}
                onValueChange={(value) => {
                  onLevelChange(value === "all" ? null : value);
                  resetPagination();
                }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="level-all" />
                  <Label htmlFor="level-all" className="text-sm cursor-pointer">
                    All Levels
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="level-beginner" />
                  <Label
                    htmlFor="level-beginner"
                    className="text-sm cursor-pointer"
                  >
                    Beginner
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="intermediate"
                    id="level-intermediate"
                  />
                  <Label
                    htmlFor="level-intermediate"
                    className="text-sm cursor-pointer"
                  >
                    Intermediate
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="level-advanced" />
                  <Label
                    htmlFor="level-advanced"
                    className="text-sm cursor-pointer"
                  >
                    Advanced
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator orientation="vertical" className="h-auto" />

            <div className="space-y-3">
              <h3 className="font-medium text-sm text-foreground/80">Rating</h3>
              <RadioGroup
                value={rating || "all"}
                onValueChange={(value) => {
                  onRatingChange(value === "all" ? null : value);
                  resetPagination();
                }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="rating-all" />
                  <Label
                    htmlFor="rating-all"
                    className="text-sm cursor-pointer"
                  >
                    All Ratings
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4.5" id="rating-4.5" />
                  <Label
                    htmlFor="rating-4.5"
                    className="text-sm cursor-pointer"
                  >
                    4.5 & up
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4.0" id="rating-4.0" />
                  <Label
                    htmlFor="rating-4.0"
                    className="text-sm cursor-pointer"
                  >
                    4.0 & up
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3.5" id="rating-3.5" />
                  <Label
                    htmlFor="rating-3.5"
                    className="text-sm cursor-pointer"
                  >
                    3.5 & up
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 cursor-pointer"
              onClick={() => {
                onPriceFilterChange(null);
                onLevelChange(null);
                onRatingChange(null);
                resetPagination();
              }}
            >
              Reset Filters
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchFilters;
