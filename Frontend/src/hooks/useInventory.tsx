

// import { useState, useEffect } from 'react'
// import { getInventory, addItem, removeItem } from 

// interface InventoryItem {
//   id: string;
//   name: string;
//   quantity: number;
//   unit: string;
// }

// export function useInventory() {
//   const [inventory, setInventory] = useState<InventoryItem[]>([])

//   useEffect(() => {
//     const fetchInventory = async () => {
//       const items = await getInventory()
//       setInventory(items)
//     }
//     fetchInventory()
//   }, [])

//   const addItemToInventory = async (formData: FormData) => {
//     const result = await addItem(formData)
//     if (result.success) {
//       const items = await getInventory()
//       setInventory(items)
//     }
//     return result
//   }

//   const removeItemFromInventory = async (formData: FormData) => {
//     const result = await removeItem(formData)
//     if (result.success) {
//       const items = await getInventory()
//       setInventory(items)
//     }
//     return result
//   }

//   return { inventory, addItemToInventory, removeItemFromInventory }
// }