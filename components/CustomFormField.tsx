"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormFieldType } from "./forms/PatientForm";
import { Control } from "react-hook-form";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string,
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;

}

const RenderField = ({ field, props }: {field:any; props: CustomProps}) => {
    return (
        <Input 
            type="text"
            placeholder="John Doe"
        />
    )
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => 
      <FormItem>
        {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
        )}

        <RenderField field={field} props={props}/>

        <FormMessage  className="shad-error"/>
      </FormItem>}
    />
  );
};

export default CustomFormField;
