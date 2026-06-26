export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Appointment {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceType: string;
  message: string;
  status: 'Pending' | 'Confirmed';
  createdAt: string;
}
