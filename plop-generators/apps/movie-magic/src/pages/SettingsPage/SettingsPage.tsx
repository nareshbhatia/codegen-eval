import { Avatar } from 'ui-lib';

export const SettingsPage = () => {
  return (
    <div className="p-3">
      <div className="card p-2">
        <h2 className="h5 line-height-none mb-2">Manage your Family Plan</h2>
        <div className="py-4 flex">
          <Avatar
            name="Paul Silva"
            photo="https://images.unsplash.com/photo-1568585105565-e372998a195d?w=256&h=256&fit=crop&crop=entropy"
          />
          <div className="ml-3 flex flex-col">
            <span className="text-sm font-medium text-primary">Paul Silva</span>
            <span className="text-sm text-secondary">paul.silva@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
