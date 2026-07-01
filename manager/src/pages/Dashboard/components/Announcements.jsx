import React from 'react';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { LuCheck, LuCalendar, LuUsers } from 'react-icons/lu';
import { BsExclamationCircle, BsPencil, BsTrash, BsArrowRightCircle } from 'react-icons/bs';

const Announcements = ({ data }) => {
  const [announcements, setAnnouncements] = React.useState([]);

  React.useEffect(() => {
    if (data) {
      setAnnouncements(data);
    }
  }, [data]);

  const handleMarkAllRead = () => {
    setAnnouncements(prev => prev.map(item => ({ ...item, read: true })));
  };

  if (!announcements || announcements.length === 0) return null;

  const getIconAndColor = (item) => {
    if (item.type === 'urgent') {
      return { Icon: BsExclamationCircle, color: '#dc2626', bg: '#fef2f2', border: '#dc2626' };
    }
    
    let Icon = BsArrowRightCircle;
    if (item.title.includes('Team')) Icon = LuUsers;
    if (item.title.includes('Holiday')) Icon = LuCalendar;

    return { Icon, color: '#2b5cff', bg: '#f0f4f8', border: '#2b5cff' };
  };

  return (
    <Card className="mt-4 p-0 overflow-hidden">
      <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
        <div>
          <h5 className="m-0 fw-bold">Announcements</h5>
          <span className="text-muted text-sm">Stay updated with company news</span>
        </div>
        <Button outline size="sm" icon={LuCheck} onClick={handleMarkAllRead}>
          Mark All Read
        </Button>
      </div>
      
      <div className="p-4">
        {announcements.map((item, idx) => {
          const { Icon, color, bg, border } = getIconAndColor(item);
          return (
            <div 
              key={item.id} 
              className="d-flex align-items-start gap-3 p-3 mb-3 rounded-3 position-relative"
              style={{ 
                border: '1px solid #e2e8f0',
                borderLeft: `4px solid ${border}`,
                backgroundColor: item.read ? '#fff' : '#fafafa'
              }}
            >
              <div 
                className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ width: '40px', height: '40px', backgroundColor: bg, color: color }}
              >
                <Icon size={18} />
              </div>
              
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h6 className="m-0 fw-bold">{item.title}</h6>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted" style={{ fontSize: '11px' }}>{item.timeAgo}</span>
                    {!item.read && (
                      <span className="rounded-circle bg-primary" style={{ width: '6px', height: '6px' }}></span>
                    )}
                  </div>
                </div>
                <p className="text-muted m-0 text-sm mb-2">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted" style={{ fontSize: '11px' }}>
                    By {item.author} • Expires: {item.expires}
                  </span>
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-sm btn-light border text-muted px-2 py-1">
                      <BsPencil size={14} />
                    </button>
                    <button type="button" className="btn btn-sm btn-light border text-muted px-2 py-1">
                      <BsTrash size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  );
};

export default Announcements;
