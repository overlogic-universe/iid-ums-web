import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { selectContent } from "@/constants/competition-category-constants";
import { Input } from "@/components/ui/input";
import { ZodConstants } from "@/constants/zod-constants";
import { useForm, Controller, FieldValues, FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props<TFieldValues extends FieldValues> {
  index: number;
  label: string;
  key: FieldPath<TFieldValues>;
  field: {
    value: any;
    onChange: (value: any) => void;
    onBlur: () => void;
    name: string;
    ref: (instance: HTMLInputElement | null) => void;
  };
}

const InputField: FC<Props<any>> = ({ index, label, key, field }) => {
  return index === 6 || index === 7 ? (
    <Select
      {...field}
      onValueChange={(e) => {
        field.onChange(e);
      }}
    >
      <SelectTrigger className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main-300 focus:outline-none focus-visible:ring-main-300">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="w-3">
        {selectContent[key as keyof typeof selectContent].map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ) : (
    <Input
      className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main-300 focus:outline-none focus-visible:ring-main-300"
      placeholder={label}
      {...field}
    />
  );
};

const FormComponent: FC = () => {
  const formSchema = ZodConstants.formSchema;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ZodConstants.formDefaulValue,
  });

  return (
    // You can map through your fields and render InputField components here
    // Example:
    <>
      {Object.keys(ZodConstants.formDefaulValue).map((key, index) => (
        <Controller
          key={key}
          name={key as FieldPath<z.infer<typeof formSchema>>}
          control={form.control}
          render={({ field }) => (
            <InputField
              index={index}
              label={`Label for ${key}`}
              key={key}
              field={field}
            />
          )}
        />
      ))}
    </>
  );
};

export default FormComponent;
