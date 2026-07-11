import {For, NativeSelect} from "@chakra-ui/react";
import * as React from "react";

interface DropDownProps {
    defaultMessage?: string;
    dropDownItems: string[];
    selectedItems?: string[];
    multipleSelection?: boolean;
    onChange?: (values: string[]) => void;
}

export const DropDown = ({
                             defaultMessage = "Select an option",
                             dropDownItems,
                             selectedItems = [],
                             multipleSelection = false,
                             onChange,
                         }: DropDownProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!onChange) return;

        if (multipleSelection) {
            const values = Array.from(e.target.selectedOptions).map((o) => o.value);
            onChange(values);
        } else {
            onChange([e.target.value]);
        }
    };

    return (
        <NativeSelect.Root>
            <NativeSelect.Field
                name="dropdown"
                multiple={multipleSelection}
                value={multipleSelection ? selectedItems : selectedItems[0] ?? ""}
                onChange={handleChange}
            >
                {!multipleSelection && (
                    <option value="" disabled>
                        {defaultMessage}
                    </option>
                )}
                <For each={dropDownItems}>
                    {(item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    )}
                </For>
            </NativeSelect.Field>
            <NativeSelect.Indicator/>
        </NativeSelect.Root>
    );
};