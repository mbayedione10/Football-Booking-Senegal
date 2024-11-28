interface FieldContactProps {
  manager: {
    name: string;
    phone: string;
    email: string;
  };
}

export default function FieldContact({ manager }: FieldContactProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Contact du gestionnaire</h3>
      <div className="space-y-2">
        <p className="font-medium">{manager.name}</p>
        <p className="text-gray-600">{manager.phone}</p>
        <p className="text-gray-600">{manager.email}</p>
      </div>
    </div>
  );
}