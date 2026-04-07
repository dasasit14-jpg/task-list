import React from 'react';
import { ArrowLeft, BellRing, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { notifications } from '../../data/dummyData';

export default function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-white px-6 pt-10 pb-4 shadow-sm sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-gray-900 text-lg">Alerts</h1>
        </div>
        <button className="text-gray-500 h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          <Settings size={20} />
        </button>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-6 space-y-3">
        {notifications.map((note) => (
          <div 
            key={note.id} 
            className={`card p-4 transition-colors ${note.unread ? 'bg-primary-50/50 border-primary-100' : 'bg-white'}`}
          >
            <div className="flex gap-4">
              <div className={`mt-0.5 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${note.unread ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'}`}>
                <BellRing size={20} />
              </div>
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className={`font-semibold text-sm ${note.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                    {note.title}
                  </h3>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap">{note.date}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{note.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
