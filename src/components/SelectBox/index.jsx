import {Select, SelectItem} from "@nextui-org/react";

const options = [
    {key: "100", label: "T1"},
    {key: "200", label: "T2"},
    {key: "300", label: "T3"},
    {key: "400", label: "T4"},
    {key: "500", label: "T5"},
    {key: "600", label: "T6"},
];
export default function index() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select
                // size = [ "sm", "md", "lg"]
                // variants = ["flat", "bordered", "underlined", "faded"]
                //radius = ["full","lg","md","sm","none",];
                radius="lg"
                defaultSelectedKeys={"100"}
                color="default"
                variant="flat"
                size="md"
                label="Select an option" 
                placeholder="T1"
                className="max-w">
            {options.map((animal) => (
              <SelectItem key={animal.key}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      );
}