// src/components/Pages/LiveData.jsx
import React, { useState, useEffect } from "react";
import { FiMapPin, FiUser, FiNavigation, FiClock } from 'react-icons/fi';

function LiveData() {
  const [liveRides, setLiveRides] = useState([]);

  useEffect(() => {
    // Simulate live data
    const rides = [
      { id: 1, customer: "John Doe", driver: "Mike Johnson", location: "Downtown", status: "On the way", eta: "5 min" },
      { id: 2, customer: "Jane Smith", driver: "Sarah Wilson", location: "City Center", status: "Pickup", eta: "2 min" },
      { id: 3, customer: "Bob Brown", driver: "Alex Chen", location: "Airport", status: "Completed", eta: "0 min" }
    ];
    setLiveRides(rides);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Live Data Tracking</h1>
        <p style={styles.subtitle}>Real-time monitoring of active rides and deliveries</p>
      </div>

      <div style={styles.liveStats}>
        <div style={styles.liveStat}>
          <FiNavigation style={styles.liveStatIcon} />
          <div>
            <h3 style={styles.liveStatValue}>24</h3>
            <p style={styles.liveStatLabel}>Active Rides</p>
          </div>
        </div>
        <div style={styles.liveStat}>
          <FiUser style={styles.liveStatIcon} />
          <div>
            <h3 style={styles.liveStatValue}>156</h3>
            <p style={styles.liveStatLabel}>Online Drivers</p>
          </div>
        </div>
        <div style={styles.liveStat}>
          <FiClock style={styles.liveStatIcon} />
          <div>
            <h3 style={styles.liveStatValue}>3.2 min</h3>
            <p style={styles.liveStatLabel}>Avg. Wait Time</p>
          </div>
        </div>
      </div>

      <div style={styles.liveRides}>
        <h2 style={styles.sectionTitle}>Active Rides</h2>
        <div style={styles.ridesGrid}>
          {liveRides.map(ride => (
            <div key={ride.id} style={styles.rideCard}>
              <div style={styles.rideHeader}>
                <FiMapPin style={styles.rideIcon} />
                <span style={styles.rideId}>Ride #{ride.id}</span>
              </div>
              <div style={styles.rideDetails}>
                <div style={styles.detail}>
                  <span style={styles.detailLabel}>Customer:</span>
                  <span style={styles.detailValue}>{ride.customer}</span>
                </div>
                <div style={styles.detail}>
                  <span style={styles.detailLabel}>Driver:</span>
                  <span style={styles.detailValue}>{ride.driver}</span>
                </div>
                <div style={styles.detail}>
                  <span style={styles.detailLabel}>Location:</span>
                  <span style={styles.detailValue}>{ride.location}</span>
                </div>
                <div style={styles.detail}>
                  <span style={styles.detailLabel}>ETA:</span>
                  <span style={styles.detailValue}>{ride.eta}</span>
                </div>
              </div>
              <div style={{
                ...styles.statusBadge,
                backgroundColor: 
                  ride.status === "Completed" ? '#10b98120' : 
                  ride.status === "On the way" ? '#f59e0b20' : '#6366f120',
                color: 
                  ride.status === "Completed" ? '#10b981' : 
                  ride.status === "On the way" ? '#f59e0b' : '#6366f1'
              }}>
                {ride.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f8fafc',
    minHeight: '100vh'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#64748b',
    fontSize: '1rem'
  },
  liveStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  liveStat: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  liveStatIcon: {
    fontSize: '2rem',
    color: '#6366f1'
  },
  liveStatValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0
  },
  liveStatLabel: {
    color: '#64748b',
    margin: 0
  },
  liveRides: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  ridesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem'
  },
  rideCard: {
    border: '1px solid #e2e8f0',
    borderRadius: '0.5rem',
    padding: '1rem',
    position: 'relative'
  },
  rideHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  rideIcon: {
    color: '#6366f1'
  },
  rideId: {
    fontWeight: '600',
    color: '#1e293b'
  },
  rideDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  detail: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  detailLabel: {
    color: '#64748b',
    fontSize: '0.875rem'
  },
  detailValue: {
    color: '#1e293b',
    fontWeight: '500'
  },
  statusBadge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  }
};

export default LiveData;



// // src/components/Pages/LiveData.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FiMapPin,
//   FiUser,
//   FiNavigation,
//   FiClock,
//   FiTruck,
//   FiActivity,
//   FiRefreshCw,
//   FiArrowRight,
//   FiCheckCircle,
//   FiAlertCircle
// } from 'react-icons/fi';
// import Sidebar from '../Sidebar';

// function LiveData() {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [error, setError] = useState(null);

//   // Live stats
//   const [liveStats, setLiveStats] = useState({
//     activeRides: 0,
//     onlineDrivers: 0,
//     avgWaitTime: '0 min',
//     totalRides: 0
//   });

//   // Rides data
//   const [activeRides, setActiveRides] = useState([]);
//   const [totalRides, setTotalRides] = useState([]);

//   // Fetch live data from backend
//   const fetchLiveData = async (isRefresh = false) => {
//     try {
//       if (isRefresh) {
//         setRefreshing(true);
//       } else {
//         setLoading(true);
//       }
//       setError(null);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         navigate('/');
//         return;
//       }

//       // Fetch live statistics
//       const statsResponse = await fetch('https://backend-besafe.onrender.com/api/rides/live-stats', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!statsResponse.ok) {
//         throw new Error('Failed to fetch live statistics');
//       }

//       const statsData = await statsResponse.json();

//       if (statsData.success) {
//         setLiveStats({
//           activeRides: statsData.data.activeRides || 0,
//           onlineDrivers: statsData.data.onlineDrivers || 0,
//           avgWaitTime: statsData.data.avgWaitTime || '0 min',
//           totalRides: statsData.data.totalRides || 0
//         });
//       }

//       // Fetch active rides (last 3)
//       const activeRidesResponse = await fetch('https://backend-besafe.onrender.com/api/rides/active?limit=3', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (activeRidesResponse.ok) {
//         const activeRidesData = await activeRidesResponse.json();
//         if (activeRidesData.success) {
//           setActiveRides(activeRidesData.data || []);
//         }
//       }

//       // Fetch total rides (last 3 completed)
//       const totalRidesResponse = await fetch('https://backend-besafe.onrender.com/api/rides/recent?limit=3', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (totalRidesResponse.ok) {
//         const totalRidesData = await totalRidesResponse.json();
//         if (totalRidesData.success) {
//           setTotalRides(totalRidesData.data || []);
//         }
//       }

//     } catch (err) {
//       console.error('Error fetching live data:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   useEffect(() => {
//     fetchLiveData();

//     // Auto-refresh every 30 seconds
//     const interval = setInterval(() => {
//       fetchLiveData(true);
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleRefresh = () => {
//     fetchLiveData(true);
//   };

//   const formatDateTime = (dateString) => {
//     if (!dateString) return 'N/A';
//     const date = new Date(dateString);
//     return date.toLocaleString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const getStatusColor = (status) => {
//     const statusLower = status?.toLowerCase() || '';
//     if (statusLower.includes('completed') || statusLower.includes('delivered')) {
//       return { bg: '#10b98120', color: '#10b981' };
//     } else if (statusLower.includes('active') || statusLower.includes('progress') || statusLower.includes('way')) {
//       return { bg: '#f59e0b20', color: '#f59e0b' };
//     } else if (statusLower.includes('pickup') || statusLower.includes('assigned')) {
//       return { bg: '#6366f120', color: '#6366f1' };
//     } else {
//       return { bg: '#64748b20', color: '#64748b' };
//     }
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

//       <div style={{
//         ...styles.mainContent,
//         marginLeft: sidebarOpen ? '250px' : '0',
//         width: sidebarOpen ? 'calc(100% - 250px)' : '100%'
//       }}>
//         <div style={styles.container}>
//           {/* Header */}
//           <div style={styles.header}>
//             <div>
//               <h1 style={styles.title}>
//                 <FiActivity style={styles.titleIcon} />
//                 Live Data Tracking
//               </h1>
//               <p style={styles.subtitle}>Real-time monitoring of active rides and deliveries</p>
//             </div>
//             <button
//               onClick={handleRefresh}
//               style={styles.refreshButton}
//               disabled={refreshing}
//             >
//               <FiRefreshCw style={{
//                 ...styles.refreshIcon,
//                 animation: refreshing ? 'spin 1s linear infinite' : 'none'
//               }} />
//               {refreshing ? 'Refreshing...' : 'Refresh'}
//             </button>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div style={styles.errorBox}>
//               <FiAlertCircle style={styles.errorIcon} />
//               <span>Error loading data: {error}</span>
//             </div>
//           )}

//           {/* Loading State */}
//           {loading ? (
//             <div style={styles.loadingContainer}>
//               <div style={styles.spinner}></div>
//               <p style={styles.loadingText}>Loading live data...</p>
//             </div>
//           ) : (
//             <>
//               {/* Live Statistics Cards */}
//               <div style={styles.statsGrid}>
//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconContainer, backgroundColor: '#6366f120' }}>
//                     <FiNavigation style={{ ...styles.statIcon, color: '#6366f1' }} />
//                   </div>
//                   <div style={styles.statContent}>
//                     <h3 style={styles.statValue}>{liveStats.activeRides}</h3>
//                     <p style={styles.statLabel}>Active Rides</p>
//                   </div>
//                   <div style={styles.statPulse}></div>
//                 </div>

//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconContainer, backgroundColor: '#10b98120' }}>
//                     <FiUser style={{ ...styles.statIcon, color: '#10b981' }} />
//                   </div>
//                   <div style={styles.statContent}>
//                     <h3 style={styles.statValue}>{liveStats.onlineDrivers}</h3>
//                     <p style={styles.statLabel}>Online Drivers</p>
//                   </div>
//                   <div style={{ ...styles.statPulse, backgroundColor: '#10b981' }}></div>
//                 </div>

//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconContainer, backgroundColor: '#f59e0b20' }}>
//                     <FiClock style={{ ...styles.statIcon, color: '#f59e0b' }} />
//                   </div>
//                   <div style={styles.statContent}>
//                     <h3 style={styles.statValue}>{liveStats.avgWaitTime}</h3>
//                     <p style={styles.statLabel}>Avg. Wait Time</p>
//                   </div>
//                 </div>

//                 <div style={styles.statCard}>
//                   <div style={{ ...styles.statIconContainer, backgroundColor: '#8b5cf620' }}>
//                     <FiTruck style={{ ...styles.statIcon, color: '#8b5cf6' }} />
//                   </div>
//                   <div style={styles.statContent}>
//                     <h3 style={styles.statValue}>{liveStats.totalRides}</h3>
//                     <p style={styles.statLabel}>Total Rides</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Active Rides Section */}
//               <div style={styles.section}>
//                 <div style={styles.sectionHeader}>
//                   <h2 style={styles.sectionTitle}>
//                     <FiNavigation style={styles.sectionTitleIcon} />
//                     Active Rides
//                   </h2>
//                   <a
//                     href="/rides"
//                     style={styles.viewAllLink}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       navigate('/rides');
//                     }}
//                   >
//                     View All
//                     <FiArrowRight style={styles.viewAllIcon} />
//                   </a>
//                 </div>

//                 {activeRides.length === 0 ? (
//                   <div style={styles.emptyState}>
//                     <FiNavigation style={styles.emptyIcon} />
//                     <p style={styles.emptyText}>No active rides at the moment</p>
//                   </div>
//                 ) : (
//                   <div style={styles.ridesGrid}>
//                     {activeRides.map((ride, index) => (
//                       <div key={ride._id || index} style={styles.rideCard}>
//                         <div style={styles.rideCardHeader}>
//                           <div style={styles.rideIdBadge}>
//                             <FiMapPin style={styles.rideIdIcon} />
//                             <span style={styles.rideId}>Ride #{ride.rideNumber || ride._id?.slice(-6) || index + 1}</span>
//                           </div>
//                           <span style={{
//                             ...styles.statusBadge,
//                             backgroundColor: getStatusColor(ride.status).bg,
//                             color: getStatusColor(ride.status).color
//                           }}>
//                             {ride.status || 'In Progress'}
//                           </span>
//                         </div>

//                         <div style={styles.rideDetails}>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Customer:</span>
//                             <span style={styles.detailValue}>
//                               {ride.customerName || ride.customer?.name || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Driver:</span>
//                             <span style={styles.detailValue}>
//                               {ride.driverName || ride.driver?.name || 'Assigning...'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Pickup:</span>
//                             <span style={styles.detailValue}>
//                               {ride.pickupLocation || ride.pickup || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Dropoff:</span>
//                             <span style={styles.detailValue}>
//                               {ride.dropoffLocation || ride.dropoff || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>ETA:</span>
//                             <span style={styles.detailValue}>
//                               {ride.eta || ride.estimatedTime || 'Calculating...'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Time:</span>
//                             <span style={styles.detailValue}>
//                               {formatDateTime(ride.createdAt || ride.startTime)}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Total Rides Section */}
//               <div style={styles.section}>
//                 <div style={styles.sectionHeader}>
//                   <h2 style={styles.sectionTitle}>
//                     <FiCheckCircle style={styles.sectionTitleIcon} />
//                     Recent Completed Rides
//                   </h2>
//                   <a
//                     href="/rides"
//                     style={styles.viewAllLink}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       navigate('/rides');
//                     }}
//                   >
//                     View All
//                     <FiArrowRight style={styles.viewAllIcon} />
//                   </a>
//                 </div>

//                 {totalRides.length === 0 ? (
//                   <div style={styles.emptyState}>
//                     <FiCheckCircle style={styles.emptyIcon} />
//                     <p style={styles.emptyText}>No completed rides yet</p>
//                   </div>
//                 ) : (
//                   <div style={styles.ridesGrid}>
//                     {totalRides.map((ride, index) => (
//                       <div key={ride._id || index} style={styles.rideCard}>
//                         <div style={styles.rideCardHeader}>
//                           <div style={styles.rideIdBadge}>
//                             <FiCheckCircle style={styles.rideIdIcon} />
//                             <span style={styles.rideId}>Ride #{ride.rideNumber || ride._id?.slice(-6) || index + 1}</span>
//                           </div>
//                           <span style={{
//                             ...styles.statusBadge,
//                             backgroundColor: '#10b98120',
//                             color: '#10b981'
//                           }}>
//                             {ride.status || 'Completed'}
//                           </span>
//                         </div>

//                         <div style={styles.rideDetails}>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Customer:</span>
//                             <span style={styles.detailValue}>
//                               {ride.customerName || ride.customer?.name || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Driver:</span>
//                             <span style={styles.detailValue}>
//                               {ride.driverName || ride.driver?.name || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Pickup:</span>
//                             <span style={styles.detailValue}>
//                               {ride.pickupLocation || ride.pickup || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Dropoff:</span>
//                             <span style={styles.detailValue}>
//                               {ride.dropoffLocation || ride.dropoff || 'N/A'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Fare:</span>
//                             <span style={styles.detailValue}>
//                               ${ride.fare || ride.totalFare || '0.00'}
//                             </span>
//                           </div>
//                           <div style={styles.detailRow}>
//                             <span style={styles.detailLabel}>Completed:</span>
//                             <span style={styles.detailValue}>
//                               {formatDateTime(ride.completedAt || ride.endTime)}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }

//           @keyframes pulse {
//             0%, 100% { opacity: 1; }
//             50% { opacity: 0.5; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     minHeight: '100vh',
//     backgroundColor: '#f8fafc'
//   },
//   mainContent: {
//     transition: 'all 0.3s ease',
//     minHeight: '100vh'
//   },
//   container: {
//     padding: '2rem',
//     maxWidth: '1400px',
//     margin: '0 auto'
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: '2rem',
//     flexWrap: 'wrap',
//     gap: '1rem'
//   },
//   title: {
//     fontSize: '2rem',
//     fontWeight: '700',
//     color: '#1e293b',
//     marginBottom: '0.5rem',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.75rem'
//   },
//   titleIcon: {
//     fontSize: '2rem',
//     color: '#6366f1'
//   },
//   subtitle: {
//     color: '#64748b',
//     fontSize: '1rem',
//     margin: 0
//   },
//   refreshButton: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#6366f1',
//     color: 'white',
//     border: 'none',
//     borderRadius: '0.5rem',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'all 0.2s',
//     boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
//   },
//   refreshIcon: {
//     fontSize: '1rem'
//   },
//   errorBox: {
//     backgroundColor: '#fee2e2',
//     border: '1px solid #fecaca',
//     borderRadius: '0.5rem',
//     padding: '1rem',
//     marginBottom: '1.5rem',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.75rem',
//     color: '#991b1b'
//   },
//   errorIcon: {
//     fontSize: '1.25rem',
//     flexShrink: 0
//   },
//   loadingContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '4rem 2rem',
//     gap: '1rem'
//   },
//   spinner: {
//     width: '50px',
//     height: '50px',
//     border: '4px solid #e2e8f0',
//     borderTop: '4px solid #6366f1',
//     borderRadius: '50%',
//     animation: 'spin 1s linear infinite'
//   },
//   loadingText: {
//     color: '#64748b',
//     fontSize: '1rem'
//   },
//   statsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//     gap: '1.5rem',
//     marginBottom: '2rem'
//   },
//   statCard: {
//     backgroundColor: 'white',
//     padding: '1.5rem',
//     borderRadius: '0.75rem',
//     boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '1rem',
//     position: 'relative',
//     overflow: 'hidden',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     cursor: 'default'
//   },
//   statIconContainer: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '0.75rem',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexShrink: 0
//   },
//   statIcon: {
//     fontSize: '1.75rem'
//   },
//   statContent: {
//     flex: 1
//   },
//   statValue: {
//     fontSize: '1.75rem',
//     fontWeight: '700',
//     color: '#1e293b',
//     margin: '0 0 0.25rem 0'
//   },
//   statLabel: {
//     color: '#64748b',
//     fontSize: '0.875rem',
//     margin: 0
//   },
//   statPulse: {
//     position: 'absolute',
//     top: '1rem',
//     right: '1rem',
//     width: '8px',
//     height: '8px',
//     borderRadius: '50%',
//     backgroundColor: '#6366f1',
//     animation: 'pulse 2s ease-in-out infinite'
//   },
//   section: {
//     backgroundColor: 'white',
//     padding: '1.5rem',
//     borderRadius: '0.75rem',
//     boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
//     marginBottom: '2rem'
//   },
//   sectionHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '1.5rem',
//     flexWrap: 'wrap',
//     gap: '1rem'
//   },
//   sectionTitle: {
//     fontSize: '1.25rem',
//     fontWeight: '600',
//     color: '#1e293b',
//     margin: 0,
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem'
//   },
//   sectionTitleIcon: {
//     fontSize: '1.25rem',
//     color: '#6366f1'
//   },
//   viewAllLink: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     color: '#6366f1',
//     textDecoration: 'none',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     transition: 'gap 0.2s',
//     cursor: 'pointer'
//   },
//   viewAllIcon: {
//     fontSize: '1rem',
//     transition: 'transform 0.2s'
//   },
//   emptyState: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '3rem 1rem',
//     gap: '1rem'
//   },
//   emptyIcon: {
//     fontSize: '3rem',
//     color: '#cbd5e1'
//   },
//   emptyText: {
//     color: '#64748b',
//     fontSize: '1rem',
//     margin: 0
//   },
//   ridesGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//     gap: '1.5rem'
//   },
//   rideCard: {
//     border: '1px solid #e2e8f0',
//     borderRadius: '0.75rem',
//     padding: '1.25rem',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     cursor: 'default',
//     backgroundColor: '#fafafa'
//   },
//   rideCardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '1rem',
//     paddingBottom: '0.75rem',
//     borderBottom: '1px solid #e2e8f0'
//   },
//   rideIdBadge: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem'
//   },
//   rideIdIcon: {
//     color: '#6366f1',
//     fontSize: '1.125rem'
//   },
//   rideId: {
//     fontWeight: '600',
//     color: '#1e293b',
//     fontSize: '0.875rem'
//   },
//   statusBadge: {
//     padding: '0.375rem 0.875rem',
//     borderRadius: '9999px',
//     fontSize: '0.75rem',
//     fontWeight: '600',
//     textTransform: 'capitalize'
//   },
//   rideDetails: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '0.75rem'
//   },
//   detailRow: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     gap: '1rem'
//   },
//   detailLabel: {
//     color: '#64748b',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     flexShrink: 0
//   },
//   detailValue: {
//     color: '#1e293b',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     textAlign: 'right'
//   }
// };

// export default LiveData;
