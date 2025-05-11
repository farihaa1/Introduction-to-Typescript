### Example 2: Constraints keyOf

```ts
type Vehicle = {
  bike: string;
  car: string;
};

type Owner = "bike" | "car" | "ship";
type Owner2 = keyof Vehicle;

const person1: Owner2 = "car";

const user = {
  name: "Mr. persian",
  age: 26,
  address: "ctg",
};
user["name"];
const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const result = getPropertyValue(user, "name");
```
