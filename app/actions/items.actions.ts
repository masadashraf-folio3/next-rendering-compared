import { revalidatePath } from "next/cache";
import { ListItem } from "../interfaces/item.interface";

const addedItems: ListItem[] = [];

export const addItemToList = async (formData: FormData) => {
  "use server";
  const text = formData.get("itemText") as string;
  addedItems.push({
    text,
    id: Number(Date.now()),
  });
   revalidatePath("/");
  console.log(formData);
};

export const getItemById = async (
  id: number
): Promise<ListItem | undefined> => {
  const items = await getItems();
  const item = items.find((item) => item.id === id);
  return item;
};

export const getItems = async (): Promise<ListItem[]> => {
  console.log('THIS IS SERVER FUNCTION')
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1500);
  });
  // get domain of deployed server
  const resp = [
    { "id": 1, "text": "Item 1" },
    { "id": 2, "text": "Item 2" },
    { "id": 3, "text": "Item 3" },
    { "id": 4, "text": "Item 4" },
    { "id": 5, "text": "Item 5" },
    { "id": 8, "text": "Item 8" },
    { "id": 6, "text": "Item 6" }
  ]


//  await fetch("http://localhost:3000/items.json");
  const items = resp as ListItem[];
  return [...items, ...addedItems];
};
