import {Portal, Select, createListCollection} from "@chakra-ui/react";
import {useMemo} from "react";

interface DropDownProps {
    defaultMessage?: string;
    dropDownItems: string[];
    selectedItems: string[];
    multipleSelection?: boolean;
    disabled?: boolean;
    onSelectionChange?: (value: string[]) => void;
}

export const DropDown = ({
                             defaultMessage = "Select an option",
                             dropDownItems,
                             selectedItems,
                             multipleSelection = false,
                             disabled = false,
                             onSelectionChange,
                         }: DropDownProps) => {

    const collection = useMemo(
        () => createListCollection({
            items: dropDownItems.map((item) => ({label: item, value: item})),
        }),
        [dropDownItems]
    );

    return (
        <Select.Root
            collection={collection}
            multiple={multipleSelection}
            value={selectedItems}
            disabled={disabled}
            closeOnSelect={!multipleSelection}
            onValueChange={(e) => onSelectionChange?.(e.value)}
            width="100%"
        >
            <Select.HiddenSelect/>
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder={defaultMessage}/>
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator/>
                    <Select.ClearTrigger/>
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {collection.items.map((item) => (
                            <Select.Item item={item} key={item.value}>
                                {item.label}
                                <Select.ItemIndicator/>
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
};