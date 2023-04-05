import React from "react";
//Add the imports here
import FormField from "./FormField";

const FormItem = ({ id, name, qty, price, onDeleteItem, onEdtiItem }) => {
    //Add the functions here

    const deleteItemHandler = () => {
        onDeleteItem(id);
      };

  return (
    <tr>
      {/* #ItemNameSection */}
      <td className="w-full">
        <FormField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            placeholder: 'Item name',
            type: 'text',
            name: 'name',   
            id: id,
            value: name,
          }}
        />
      </td>
      {/* #ItemQuantitySection */}
      <td className="min-w-[65px] md:min-w-[80px]">
        <FormField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            type: "number",
            min: "1",
            name: "qty",
            id: id,
            value: qty,
          }}
        />
      </td>
      {/* #ItemPriceSection */}
      <td className="min-w-[100px] md:min-w-[150px]">
        <FormField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className: "text-right",
            type: "number",
            min: "0.01",
            step: "0.01",
            name: "price",
            id: id,
            value: price,
          }}
        />
      </td>
      {/* #ItemActionSection */}
      <td className="flex items-center justify-center">
        <button
          className="rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600"
          onClick={deleteItemHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default FormItem;