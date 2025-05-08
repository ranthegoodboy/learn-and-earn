import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
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

  return (
    <Card className="overflow-hidden shadow-sm">
      <CardContent className="px-6">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        <div className="space-y-6">
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
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="price-all" />
                <Label htmlFor="price-all" className="text-sm cursor-pointer">
                  All
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="price-free" />
                <Label htmlFor="price-free" className="text-sm cursor-pointer">
                  Free
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="price-paid" />
                <Label htmlFor="price-paid" className="text-sm cursor-pointer">
                  Paid
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator />
          <div className="space-y-3">
            <h3 className="font-medium text-sm text-foreground/80">Level</h3>
            <RadioGroup
              value={level || "all"}
              onValueChange={(value) => {
                onLevelChange(value === "all" ? null : value);
                resetPagination();
              }}
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
                <RadioGroupItem value="intermediate" id="level-intermediate" />
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

          <Separator />
          <div className="space-y-3">
            <h3 className="font-medium text-sm text-foreground/80">Rating</h3>
            <RadioGroup
              value={rating || "all"}
              onValueChange={(value) => {
                onRatingChange(value === "all" ? null : value);
                resetPagination();
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="rating-all" />
                <Label htmlFor="rating-all" className="text-sm cursor-pointer">
                  All Ratings
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4.5" id="rating-4.5" />
                <Label htmlFor="rating-4.5" className="text-sm cursor-pointer">
                  4.5 & up
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="4.0" id="rating-4.0" />
                <Label htmlFor="rating-4.0" className="text-sm cursor-pointer">
                  4.0 & up
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="3.5" id="rating-3.5" />
                <Label htmlFor="rating-3.5" className="text-sm cursor-pointer">
                  3.5 & up
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
