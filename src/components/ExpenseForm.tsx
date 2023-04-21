import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ExpenseFormProps {
  categories: string[];
  onSubmit: (model: FieldValues) => void;
}

const schema = z.object({
  description: z
    .string({
      invalid_type_error: "Description should be at least 3 characters",
      required_error: "Description should be at least 3 characters",
    })
    .min(3, { message: "Description should be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z
    .string({ invalid_type_error: "Category is required" })
    .min(2, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ categories, onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          id="description"
          className={
            errors.description ? "form-control is-invalid" : "form-control"
          }
          type="text"
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          className={errors.amount ? "form-control is-invalid" : "form-control"}
          type="number"
        />
        {errors.amount && (
          <div className="invalid-feedback">{errors.amount.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          {...register("category", { value: undefined })}
          id="category"
          className={
            errors.category ? "form-control is-invalid" : "form-control"
          }
        >
          <option key={0} value={0}></option>
          {categories.map((category, index) => (
            <option value={category} key={index + 1}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <div className="invalid-feedback">{errors.category.message}</div>
        )}
      </div>
      <br />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
