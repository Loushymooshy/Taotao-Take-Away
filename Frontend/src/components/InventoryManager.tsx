'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useToast } from '@/hooks/use-toast';
import { AddItemModal } from './AddItemModal'

export default function InventoryManager() {
  const [inventory, setInventory] = useState([
    { id: '1', name: 'Item 1', quantity: 10, unit: 'pcs' },
    { id: '2', name: 'Item 2', quantity: 5, unit: 'pcs' },
  ])
  const { toast } = useToast()

  const handleRemoveItem = async (formData: FormData) => {
    const id = formData.get('id')
    setInventory(inventory.filter(item => item.id !== id))
    toast({
      title: 'Success',
      description: 'Item removed successfully',
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Inventory List</h2>
        <AddItemModal />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>
                <form onSubmit={(e) => { e.preventDefault(); handleRemoveItem(new FormData(e.currentTarget)) }}>
                  <input type="hidden" name="id" value={item.id} />
                  <Button type="submit" className="bg-themeRed" size="sm">
                    Remove
                  </Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}