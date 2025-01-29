// src/pages/professionals/applications/[id]/index.tsx
import { useParams } from 'react-router-dom';
import { ProfessionalApplication } from '@/types/professional';
import { ApplicationView } from '@/components/Professionals/ProfessionalApplication';

export default function ProfessionalApplicationPage() {
  const { id } = useParams();

  // Example data - replace with actual data fetching
  const application: ProfessionalApplication = {
    userId: id || '',
    firstName: 'John',
    lastName: 'Doe',
    imageUrl: '/api/placeholder/150/150',
    email: 'john.doe@example.com',
    resume: 'https://example.com/resume.pdf',
    description: 'Licensed therapist with 5 years of experience in cognitive behavioral therapy.',
    idFront: 'https://example.com/id-front.jpg',
    idBack: 'https://example.com/id-back.jpg',
    applicationDate: '2024-01-15',
    status: 'pending'
  };

  const handleApprove = (userId: string) => {
    // Implement approval logic
    console.log('Approving application:', userId);
  };

  const handleDeny = (userId: string) => {
    // Implement denial logic
    console.log('Denying application:', userId);
  };

  return (
    <ApplicationView
      application={application}
      onApprove={handleApprove}
      onDeny={handleDeny}
    />
  );
}