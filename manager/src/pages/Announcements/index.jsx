import React, { useState, useEffect } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import announcementService from '../../services/announcementService';
import { 
  LuBell, LuMail, LuClipboardList, 
  LuSearch, LuListFilter, LuEye, LuCalendar, LuUsers, LuClock, LuArrowLeft,
  LuCalendarCheck, LuCheckCheck
} from 'react-icons/lu';
import { BsExclamationCircle, BsThreeDotsVertical, BsArrowRightCircle, BsExclamationTriangle, BsDiagram3, BsCheckCircle } from 'react-icons/bs';

const AnnouncementsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [activeSort, setActiveSort] = useState('Newest First');
  const [selectedItem, setSelectedItem] = useState(null);
  const sortOptions = ['Newest First', 'Oldest First', 'Recently Updated', 'Priority', 'Unread First'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await announcementService.getAnnouncementsPageData();
        setData(response.data);
      } catch (error) {
        console.error("Failed to load announcements page data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMarkAllRead = () => {
    if (data) {
      setData(prev => ({
        ...prev,
        list: prev.list.map(item => ({ ...item, read: true }))
      }));
    }
  };

  const handleItemRead = (id) => {
    if (data) {
      setData(prev => ({
        ...prev,
        list: prev.list.map(item => item.id === id ? { ...item, read: true } : item)
      }));
    }
  };

  const getIconAndColor = (item) => {
    if (item.type === 'leave') return { Icon: LuCalendarCheck, color: '#2b5cff', bg: '#eff6ff', border: '#2b5cff' };
    if (item.type === 'urgent') return { Icon: BsExclamationCircle, color: '#dc2626', bg: '#fef2f2', border: '#dc2626' };
    if (item.type === 'project') return { Icon: BsArrowRightCircle, color: '#2b5cff', bg: '#eff6ff', border: '#2b5cff' };
    if (item.type === 'event') return { Icon: LuUsers, color: '#2b5cff', bg: '#eff6ff', border: '#2b5cff' };
    if (item.type === 'holiday') return { Icon: LuCalendar, color: '#2b5cff', bg: '#eff6ff', border: '#2b5cff' };
    
    return { Icon: BsArrowRightCircle, color: '#2b5cff', bg: '#eff6ff', border: '#2b5cff' };
  };

  if (loading) return <div className="p-4">Loading Announcements...</div>;
  if (!data) return <div className="p-4">No data available</div>;

  const filters = ['All', 'General', 'Emergency', 'Events', 'Policies'];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-4 d-flex justify-content-between align-items-start">
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-1 text-sm">
              <li className="breadcrumb-item"><span className="text-muted">Dashboard</span></li>
              <li className="breadcrumb-item active fw-medium" aria-current="page">Announcements</li>
            </ol>
          </nav>
          <h3 className="fw-bold mb-1">Company Announcements</h3>
          <p className="text-muted text-sm mb-0">Leave requests, tasks, messages and system alerts</p>
        </div>
        {selectedItem && (
          <button 
            type="button" 
            className="btn btn-sm bg-white border text-dark d-flex align-items-center gap-2 px-3 py-1 fw-semibold rounded-2"
            style={{ fontSize: '13px' }}
            onClick={() => setSelectedItem(null)}
          >
            <LuArrowLeft size={14} /> Back to List
          </button>
        )}
      </div>

      {selectedItem ? (
        <Card className="p-4 shadow-sm border-0">
          <div className="d-flex align-items-start gap-3 mb-4">
            {(() => {
              const { Icon, color, bg } = getIconAndColor(selectedItem);
              return (
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '48px', height: '48px', backgroundColor: bg, color: color }}
                >
                  <Icon size={24} />
                </div>
              );
            })()}
            <div>
              <h4 className="fw-bold mb-1 text-dark">{selectedItem.title}</h4>
              <div className="d-flex align-items-center gap-3 text-muted" style={{ fontSize: '13px' }}>
                <span className="d-flex align-items-center gap-1"><LuClock size={14} /> 10 min ago</span>
                <span className="d-flex align-items-center gap-1"><BsDiagram3 size={14} /> {selectedItem.type.toUpperCase()}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-light rounded-3 p-4 mb-4" style={{ border: '1px solid #e2e8f0' }}>
            <div className="text-muted fw-bold mb-3" style={{ fontSize: '10px', letterSpacing: '1px' }}>MESSAGE CONTENT</div>
            {selectedItem.message ? selectedItem.message.split('\n').map((line, i) => (
              <p key={i} className="mb-0" style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', minHeight: line ? 'auto' : '1.6em' }}>
                {line}
              </p>
            )) : (
              <p className="mb-0" style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6' }}>
                {selectedItem.description}
              </p>
            )}
          </div>

          <div>
            <button 
              type="button" 
              className="btn btn-primary px-3 py-2 text-sm d-inline-flex align-items-center gap-2 rounded-2" 
              style={{ backgroundColor: '#2b5cff', border: 'none' }}
              onClick={() => {
                handleItemRead(selectedItem.id);
                setSelectedItem(null);
              }}
            >
              <BsCheckCircle size={16} /> Mark as Read
            </button>
          </div>
        </Card>
      ) : (
        <>
          {/* Metrics Row */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <Card className="p-3 d-flex align-items-center justify-content-between h-100">
            <div>
              <h4 className="fw-bold mb-0 text-dark">{data.metrics.total}</h4>
              <span className="text-muted text-sm">Total</span>
            </div>
            <div className="rounded-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#fef2f2', color: '#2b5cff' }}>
              <LuBell size={20} />
            </div>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="p-3 d-flex align-items-center justify-content-between h-100">
            <div>
              <h4 className="fw-bold mb-0" style={{ color: '#2b5cff' }}>{data.metrics.unread}</h4>
              <span className="text-muted text-sm">Unread</span>
            </div>
            <div className="rounded-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#fef2f2', color: '#2b5cff' }}>
              <LuMail size={20} />
            </div>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="p-3 d-flex align-items-center justify-content-between h-100">
            <div>
              <h4 className="fw-bold mb-0 text-danger">{data.metrics.systemAlerts}</h4>
              <span className="text-muted text-sm">System Alerts</span>
            </div>
            <div className="rounded-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#fef2f2', color: '#ef4444' }}>
              <BsExclamationTriangle size={20} />
            </div>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="p-3 d-flex align-items-center justify-content-between h-100">
            <div>
              <h4 className="fw-bold mb-0 text-warning">{data.metrics.pendingAction}</h4>
              <span className="text-muted text-sm">Pending Action</span>
            </div>
            <div className="rounded-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#f3f4f6', color: '#f59e0b' }}>
              <LuClipboardList size={20} />
            </div>
          </Card>
        </div>
      </div>

      {/* Filter Bar */}
      <Card className="mb-4">
        <div className="p-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex gap-2 flex-wrap">
            {filters.map(filter => (
              <button
                key={filter}
                type="button"
                className={`btn btn-sm rounded-pill px-3 py-1 ${activeFilter === filter ? 'btn-primary' : 'btn-light border bg-white text-muted'}`}
                onClick={() => setActiveFilter(filter)}
                style={{ fontSize: '13px' }}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="d-flex align-items-center gap-2 position-relative">
            <div className="input-group input-group-sm" style={{ width: '250px' }}>
              <span className="input-group-text bg-white border-end-0 text-muted px-2">
                <LuSearch size={14} />
              </span>
              <input type="text" className="form-control border-start-0 ps-0" placeholder="Search notifications..." style={{ fontSize: '13px' }} />
            </div>
            <button 
              type="button" 
              className="btn btn-sm btn-light border bg-white d-flex align-items-center justify-content-center" 
              style={{ width: '32px', height: '32px' }}
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <LuListFilter size={16} className={showSortMenu ? "text-primary" : "text-muted"} />
            </button>
            
            {showSortMenu && (
              <div 
                className="position-absolute bg-white border rounded-3 shadow-sm py-2" 
                style={{ top: '100%', right: 0, marginTop: '8px', width: '180px', zIndex: 1000 }}
              >
                {sortOptions.map(option => (
                  <button 
                    key={option}
                    className="w-100 text-start px-3 py-2 bg-transparent border-0"
                    style={{ 
                      fontSize: '13px', 
                      color: activeSort === option ? '#2b5cff' : '#637381',
                      fontWeight: activeSort === option ? 600 : 400
                    }}
                    onClick={() => {
                      setActiveSort(option);
                      setShowSortMenu(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Announcements List Container */}
      <Card>
        <div className="p-4 border-bottom d-flex align-items-center justify-content-between">
          <div>
            <h5 className="m-0 fw-bold">Announcements</h5>
            <span className="text-muted text-sm">Stay updated with company news</span>
          </div>
          <Button outline size="sm" icon={LuCheckCheck} onClick={handleMarkAllRead}>
            Mark All Read
          </Button>
        </div>
        
        <div className="p-4 bg-light">
          {data.list.map((item) => {
            const { Icon, color, bg, border } = getIconAndColor(item);
            return (
              <div 
                key={item.id} 
                className="d-flex align-items-start gap-3 p-3 mb-3 bg-white rounded-3 shadow-sm position-relative"
                style={{ 
                  border: '1px solid #e2e8f0',
                  borderLeft: `4px solid ${border}`,
                  opacity: item.read ? 0.7 : 1
                }}
              >
                <div 
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '40px', height: '40px', backgroundColor: bg, color: color }}
                >
                  <Icon size={18} />
                </div>
                
                <div className="flex-grow-1">
                  <h6 className="mb-1 fw-bold text-dark">{item.title}</h6>
                  <p className="text-muted mb-2 text-sm" style={{ fontSize: '13px' }}>
                    {item.description}
                  </p>
                  <span className="text-muted text-xs" style={{ fontSize: '11px' }}>
                    By {item.author} • Expires: {item.expires}
                  </span>
                </div>
                
                <div className="d-flex flex-column align-items-end gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <button type="button" className="btn btn-sm btn-light text-muted p-1 border-0" onClick={() => setSelectedItem(item)}>
                      <LuEye size={16} />
                    </button>
                    <button type="button" className="btn btn-sm btn-light text-muted p-1 border-0" onClick={() => console.log('Options', item.id)}>
                      <BsThreeDotsVertical size={16} />
                    </button>
                  </div>
                  {item.actionRequired && !item.read && (
                    <button 
                      type="button" 
                      className="btn btn-sm bg-white border text-dark d-flex align-items-center gap-1 mt-1 rounded-2" 
                      style={{ fontSize: '11px', padding: '3px 10px' }}
                      onClick={(e) => { e.stopPropagation(); handleItemRead(item.id); }}
                    >
                      <LuCheckCheck size={14} /> Mark All Read
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
        </>
      )}
    </div>
  );
};

export default AnnouncementsPage;
