interface CategoryFilterProps {
  categories: string[];
  onSelect: (selectedCategory: string) => void;
}

const CategoryFilter = ({ categories, onSelect }: CategoryFilterProps) => {
  return (
    <select
      className="form-control"
      onChange={(event) => onSelect(event.target.value)}
    >
      <option value={""}>All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
