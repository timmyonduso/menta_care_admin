// src/pages/clients/[id]/index.tsx
import { ClientProfilePage } from '@/components/Clients/ClientProfilePage';
import { useParams } from 'react-router-dom';

export default function ClientProfile() {
  const { id } = useParams();
  
  if (!id) return <div>Client ID not found</div>;
  
  return <ClientProfilePage clientId={id} />;
}