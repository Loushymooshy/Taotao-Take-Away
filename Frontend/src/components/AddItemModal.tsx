'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast';
export function AddItemModal() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const handleAddItem = async (formData: FormData) => {
    // Mock addItem function
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.get('name') as string,
      quantity: Number(formData.get('quantity')),
      unit: formData.get('unit') as string,
    }
    console.log(newItem)
    // Update the inventory state in InventoryManager
    // should be handled by a context or a state management library 
    toast({
      title: 'Success',
      description: 'Item added successfully',
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className=" mt-4 bg-themeGreen text-white px-5 py-1 hover:bg-themeDarkGreen">Add New Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => { e.preventDefault(); handleAddItem(new FormData(e.currentTarget)) }} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" name="quantity" type="number" required />
          </div>
          <div>
            <Label htmlFor="unit">Unit</Label>
            <Input id="unit" name="unit" required />
          </div>
          <Button type="submit">Add Item</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}