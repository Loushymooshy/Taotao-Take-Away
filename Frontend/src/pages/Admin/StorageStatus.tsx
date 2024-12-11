import { Suspense } from 'react'
import InventoryManager from '../../components/InventoryManager';

const StorageStatus: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Restaurant Storage</h1>
    <Suspense fallback={<div>Loading inventory...</div>}>
      <InventoryManager />
    </Suspense>
  </div>
  );
};

export default StorageStatus;
