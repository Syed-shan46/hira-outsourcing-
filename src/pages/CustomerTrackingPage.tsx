// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { trackingAPI } from '../services/trackingApi';
import {
  Package, Truck, Warehouse,
  ChevronDown,
  Calendar, MapPin, Copy, Check,
  ShieldCheck, Plane, Ship,
  ArrowRight, Box, Clock,
  Headphones, CreditCard, CheckCircle,
  Info, Building2
} from 'lucide-react';
// toast optional

const RESERVED_ROUTES = new Set([
  'login', 'leads', 'overview', 'kanban', 'pipeline', 'followups',
  'repeat-customers', 'public-leads', 'performance', 'migrated-leads',
  'team', 'delivered-leads', 'change-password', 'admin', 'employee',
  'feedback', 'tracking', 'team-report', 'staff-report'
]);

const formatDateTime = (dateInput) => {
  if (!dateInput) return null;
  const d = new Date(dateInput);
  if (isNaN(d.getTime())) return null;
  const day = d.toLocaleDateString('en-GB', { day: 'numeric' });
  const month = d.toLocaleDateString('en-GB', { month: 'short' });
  return `${day} ${month}`;
};

export default function CustomerTrackingPage() {
  const { token, orderId } = useParams();
  const navigate = useNavigate();

  const trackingParam = (orderId || token || '').trim();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(trackingParam));
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('My Orders');
  const [expandedOrders, setExpandedOrders] = useState({});
  const [selectedProductByOrder, setSelectedProductByOrder] = useState<Record<string, number | 'all'>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyOrderId = (e: React.MouseEvent, idToCopy: string) => {
    e.stopPropagation();
    if (!idToCopy) return;
    const cleanId = idToCopy.replace(/^#/, '');
    navigator.clipboard.writeText(cleanId);
    setCopiedId(idToCopy);
    setTimeout(() => setCopiedId(null), 2000);
  };

  useEffect(() => {
    if (orderId && RESERVED_ROUTES.has(orderId.toLowerCase())) {
      window.location.replace(`/${orderId}`);
    }
  }, [orderId]);

  useEffect(() => {
    if (!trackingParam) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchTracking = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await trackingAPI.getByToken(trackingParam);
        if (isMounted) {
          setData(res.data);
          // By default, open the primary order milestones
          if (res.data?._id) {
            setExpandedOrders({ [res.data._id]: true });
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || 'Order tracking not found.');
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTracking();
    return () => {
      isMounted = false;
    };
  }, [trackingParam]);

// Helper to identify strictly confirmed orders (excluding pre-sales / discussion leads)
const isConfirmedOrder = (order: any) => {
  if (!order || !order.orderStatus) return false;
  const status = String(order.orderStatus).trim().toLowerCase();

  // Explicitly excluded pre-order / negotiation / inquiry statuses
  const excluded = [
    'live',
    'in discussion',
    'price given',
    'shipping charge given',
    'interested',
    'not now',
    'not interested',
    'price high',
    'no response',
    'lost',
    'cancelled'
  ];
  if (excluded.includes(status)) {
    return false;
  }

  // Accepted confirmed logistics & order statuses
  const confirmed = [
    'order confirmed',
    'processing',
    'loaded from warehouse',
    'at clearance',
    'in transit',
    'delivered',
    'ready to dispatch',
    'dispatched from china',
    'arrived in india',
    'out for delivery'
  ];

  return confirmed.includes(status) || Boolean(order.delivered || order.deliveryStatus === 'Delivered');
};

  // Combine current order and related orders, filtered strictly to confirmed orders
  const allOrders = useMemo(() => {
    if (!data) return [];
    const orders = [data, ...(data.relatedOrders || [])];
    // Deduplicate by _id just in case
    const unique = Array.from(new Map(orders.map(o => [o._id, o])).values());
    const confirmedOnly = unique.filter(isConfirmedOrder);
    confirmedOnly.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return confirmedOnly;
  }, [data]);

  // Expand the first confirmed order by default
  useEffect(() => {
    if (allOrders.length > 0) {
      setExpandedOrders(prev => {
        const hasAnyExpanded = Object.values(prev).some(Boolean);
        if (!hasAnyExpanded && allOrders[0]?._id) {
          return { [allOrders[0]._id]: true };
        }
        return prev;
      });
    }
  }, [allOrders]);

  // Customer Profile Stats (calculated strictly from confirmed orders)
  const profileStats = useMemo(() => {
    if (!data) return { totalOrders: 0, totalSpend: 0, inTransit: 0, delivered: 0 };
    let totalOrders = 0;
    let totalSpend = 0;
    let inTransit = 0;
    let delivered = 0;

    allOrders.forEach(o => {
      totalSpend += parseFloat(o.value) || 0;
      if (Array.isArray(o.products) && o.products.length > 1) {
        totalOrders += o.products.length;
        o.products.forEach(p => {
          if (p.delivered || p.orderStatus === 'Delivered') {
            delivered += 1;
          } else {
            inTransit += 1;
          }
        });
      } else {
        totalOrders += 1;
        if (o.orderStatus === 'Delivered' || o.deliveryStatus === 'Delivered') {
          delivered += 1;
        } else {
          inTransit += 1;
        }
      }
    });

    return { totalOrders, totalSpend, inTransit, delivered };
  }, [allOrders]);

  const getInitials = (name) => {
    if (!name) return 'CU';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const getProgressSteps = (item, parentOrder = {}) => {
    const isDelivered = Boolean(
      item?.delivered || 
      item?.orderStatus === 'Delivered' || 
      item?.deliveryStatus === 'Delivered' ||
      parentOrder?.delivered ||
      parentOrder?.deliveryStatus === 'Delivered'
    );
    const isOutForDelivery = Boolean(item?.outForDelivery || parentOrder?.outForDelivery);
    const isArrivedIndia = Boolean(item?.arrivedIndia || parentOrder?.arrivedIndia);
    const isCustomsCleared = Boolean(item?.underCustomClearance || parentOrder?.underCustomClearance);
    const isArrivedDest = Boolean(item?.arrivedDestinationCountry || parentOrder?.arrivedDestinationCountry);
    const isDispatched = Boolean(item?.dispatchedFromChina || parentOrder?.dispatchedFromChina);
    const isReadyToDispatch = Boolean(
      item?.readyToDispatch || 
      item?.supplierPaymentDone ||
      item?.warehouseStatus === 'ready to dispatch' ||
      parentOrder?.readyToDispatch
    );

    const steps = [
      { 
        id: 'confirmed', 
        label: 'Order Confirmed', 
        completed: true, 
        date: item?.createdAt || parentOrder?.createdAt, 
        icon: FileText, 
        desc: 'Purchase confirmed & consignment prepared' 
      },
      { 
        id: 'ready', 
        label: 'Ready to Dispatch', 
        completed: isReadyToDispatch || isDispatched || isArrivedDest || isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, 
        date: item?.chinaLoadingDate || parentOrder?.chinaLoadingDate || null, 
        icon: Box, 
        desc: item?.readyToDispatchMessage || parentOrder?.readyToDispatchMessage || (item?.warehouseName ? `Stored at ${item.warehouseName} warehouse` : 'Packed, inspected and scheduled for pickup') 
      },
      { 
        id: 'dispatched', 
        label: 'Dispatched from China', 
        completed: isDispatched || isArrivedDest || isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, 
        date: null, 
        icon: Truck, 
        desc: item?.dispatchedFromChinaMessage || parentOrder?.dispatchedFromChinaMessage || 'Cargo dispatched from origin facility' 
      },
      { 
        id: 'arrived_dest', 
        label: 'Arrived at Destination', 
        completed: isArrivedDest || isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, 
        date: null, 
        icon: Plane, 
        desc: item?.arrivedDestinationCountryMessage || parentOrder?.arrivedDestinationCountryMessage || 'Touched down at national logistics terminal' 
      },
      { 
        id: 'customs', 
        label: 'Customs Clearance', 
        completed: isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, 
        date: item?.indiaArrivalDate || parentOrder?.indiaArrivalDate || null, 
        icon: ShieldCheck, 
        desc: item?.underCustomClearanceMessage || parentOrder?.underCustomClearanceMessage || 'Under customs clearance & inspection' 
      },
      { 
        id: 'hub', 
        label: 'Arrived at Local Hub', 
        completed: isArrivedIndia || isOutForDelivery || isDelivered, 
        date: null, 
        icon: Warehouse, 
        desc: item?.arrivedIndiaMessage || parentOrder?.arrivedIndiaMessage || 'Sorted & received at regional delivery depot' 
      },
      { 
        id: 'out', 
        label: 'Out for Delivery', 
        completed: isOutForDelivery || isDelivered, 
        date: null, 
        icon: Truck, 
        desc: item?.outForDeliveryMessage || parentOrder?.outForDeliveryMessage || ((item?.deliveryCourier || parentOrder?.deliveryCourier) ? `Handed over to ${item?.deliveryCourier || parentOrder?.deliveryCourier}` : 'Dispatched with final mile courier') 
      },
      { 
        id: 'delivered', 
        label: 'Delivered', 
        completed: isDelivered, 
        date: item?.deliveryDate || parentOrder?.deliveryDate || null, 
        icon: Home, 
        desc: item?.deliveredMessage || parentOrder?.deliveredMessage || 'Successfully received by consignee' 
      }
    ];

    // Determine current active step (the last completed one)
    let activeIndex = 0;
    steps.forEach((s, i) => { if (s.completed) activeIndex = i; });

    return { steps, activeIndex };
  };

  const renderMilestoneTimeline = (steps, activeIndex) => (
    <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#EAEAEA]">
      {steps.map((step, sIdx) => {
        const isCompleted = step.completed;
        const isCurrent = sIdx === activeIndex;

        return (
          <div key={step.id} className="relative group">
            {/* Dot */}
            <div className={`absolute -left-5 top-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-all
              ${isCompleted 
                ? 'bg-[#111111] border-[#111111] text-white shadow-xs' 
                : 'bg-white border-[#EAEAEA] text-transparent'}`}
            >
              {isCompleted && <Check size={7} strokeWidth={4} />}
            </div>

            <div className="bg-[#FAFAFA] rounded-md p-2.5 border border-[#EAEAEA] space-y-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <step.icon size={12} className={isCompleted ? 'text-[#111111]' : 'text-[#888888]'} />
                  <span className={`text-[11px] font-medium ${isCompleted ? 'text-[#111111]' : 'text-[#888888]'}`}>
                    {step.label}
                  </span>
                  {isCurrent && (
                    <span className="px-1.5 py-0.2 rounded bg-[#111111] text-white text-[8px] font-medium uppercase tracking-wider">
                      Current Status
                    </span>
                  )}
                </div>
                {step.date && (
                  <span className="text-[9.5px] font-medium text-[#666666] font-mono">
                    {new Date(step.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                )}
              </div>
              <p className={`text-[10px] leading-relaxed ${isCompleted ? 'text-[#666666]' : 'text-[#888888] italic'}`}>
                {step.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

  const toggleOrderExpanded = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  if (loading) {
    return (
      <div 
        className="min-h-screen bg-white text-[#111111] flex flex-col items-center justify-center p-4"
        style={{ colorScheme: 'only light' }}
      >
        <Package className="animate-bounce text-[#111111] mb-4" size={36} />
        <p className="text-[#111111] font-medium uppercase tracking-widest text-xs animate-pulse">Loading Tracking Portal...</p>
      </div>
    );
  }

  if (error || !data) {
    const handleInputSubmit = (e) => {
      e.preventDefault();
      const val = e.target.elements.lookupId.value.trim();
      if (val) {
        navigate(`/${val}`);
      }
    };

    return (
      <div 
        className="min-h-[80vh] bg-white text-[#111111] flex flex-col items-center justify-center p-4 text-center"
        style={{ colorScheme: 'only light' }}
      >
        <div className="w-14 h-14 mx-auto rounded-md bg-[#FAFAFA] border border-[#EAEAEA] flex items-center justify-center mb-5 text-[#111111]">
          <Package size={26} />
        </div>
        <h1 className="text-2xl font-normal sm:font-medium text-[#111111] tracking-tight">{error ? 'Order Not Found' : 'Track Your Shipment'}</h1>
        <p className="text-[#666666] text-xs mt-2 max-w-sm leading-relaxed">
          {error 
            ? `We could not find tracking details for "${trackingParam}". Please check your Order ID or try below.`
            : 'Enter a valid Order ID (e.g. HIRA-100087) to view real-time shipment status & milestones.'
          }
        </p>

        {/* Interactive Search Bar */}
        <form onSubmit={handleInputSubmit} className="mt-6 max-w-sm w-full flex items-center gap-2 bg-white p-1.5 rounded-md border border-[#EAEAEA] focus-within:border-[#111111]">
          <input 
            type="text" 
            name="lookupId" 
            defaultValue={trackingParam}
            placeholder="e.g. HIRA-100087" 
            className="flex-1 px-3 py-2 text-sm bg-transparent outline-none font-mono text-[#111111] placeholder-[#888888]"
            autoFocus
          />
          <button 
            type="submit" 
            className="bg-[#111111] hover:bg-black text-white px-4 py-2 rounded-md font-medium text-xs uppercase tracking-wider transition-colors"
          >
            Track
          </button>
        </form>
      </div>
    );
  }

  // Formatting currency
  const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div 
      className="min-h-screen bg-white text-[#111111] font-sans pb-16 relative selection:bg-[#111111] selection:text-white"
      style={{ colorScheme: 'only light', backgroundColor: '#FFFFFF' }}
    >
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAEAEA]">
        <div className="max-w-md sm:max-w-xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/hira_logo_white_to_black_precise.png" 
              alt="Hira Outsourcing" 
              className="h-8 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center font-medium text-xs">
              {getInitials(data.customerName)}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md sm:max-w-xl mx-auto px-4 pt-5 space-y-4">

        {/* Maintenance / Service Advisory Banner */}
        <div className="rounded-md p-3 bg-[#FAFAFA] border border-[#EAEAEA] flex items-start gap-2.5 text-[#111111]">
          <Info size={16} className="text-[#111111] shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed flex-1 text-[#666666]">
            <span className="font-medium text-[#111111]">Notice:</span> Our tracking site is currently undergoing scheduled system maintenance. Real-time updates may experience minor delays.
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg p-5 border border-[#EAEAEA] relative overflow-hidden">
          <div className="flex gap-4 relative z-10 items-center">
            <div className="w-14 h-14 rounded-md bg-[#111111] text-white flex items-center justify-center text-xl font-medium shrink-0">
              {getInitials(data.customerName)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h2 className="text-[17px] font-medium text-[#111111] truncate tracking-tight">{data.customerName || 'Customer'}</h2>
                <span className="px-2 py-0.5 rounded bg-[#FAFAFA] text-[#111111] border border-[#EAEAEA] text-[9px] font-medium flex items-center gap-1 uppercase tracking-wider">
                  <CheckCircle size={10} strokeWidth={2} /> Verified Consignee
                </span>
              </div>
              <p className="text-[11px] font-normal text-[#666666] tracking-wider flex items-center gap-1.5">
                <Building2 size={12} className="text-[#111111]" />
                Client Account &bull; International Logistics
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#EAEAEA] relative z-10 text-[10px] text-[#666666]">
            <div className="flex items-center gap-1.5 py-1 px-2.5 bg-[#FAFAFA] rounded border border-[#EAEAEA]">
              <Box size={11} className="text-[#111111]" /> Express Cargo
            </div>
            <div className="flex items-center gap-1.5 py-1 px-2.5 bg-[#FAFAFA] rounded border border-[#EAEAEA]">
              <ShieldCheck size={11} className="text-emerald-600" /> Insured Sourcing
            </div>
            <div className="flex items-center gap-1.5 py-1 px-2.5 bg-[#FAFAFA] rounded border border-[#EAEAEA]">
              <Calendar size={11} className="text-[#888888]" /> Member Since {data.createdAt ? new Date(data.createdAt).getFullYear() : new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white rounded-lg p-3 border border-[#EAEAEA] flex flex-col items-center justify-center text-center">
            <Package size={15} className="text-[#111111] mb-1" />
            <span className="text-[9px] text-[#888888] font-normal">Total Orders</span>
            <span className="text-sm font-medium text-[#111111]">{profileStats.totalOrders}</span>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#EAEAEA] flex flex-col items-center justify-center text-center">
            <CreditCard size={15} className="text-[#111111] mb-1" />
            <span className="text-[9px] text-[#888888] font-normal">Total Spend</span>
            <span className="text-sm font-medium text-[#111111]">{formatINR(profileStats.totalSpend)}</span>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#EAEAEA] flex flex-col items-center justify-center text-center">
            <Truck size={15} className="text-[#111111] mb-1" />
            <span className="text-[9px] text-[#888888] font-normal">In Transit</span>
            <span className="text-sm font-medium text-[#111111]">{profileStats.inTransit}</span>
          </div>
          <div className="bg-white rounded-lg p-3 border border-[#EAEAEA] flex flex-col items-center justify-center text-center">
            <CheckCircle size={15} className="text-[#111111] mb-1" />
            <span className="text-[9px] text-[#888888] font-normal">Delivered</span>
            <span className="text-sm font-medium text-[#111111]">{profileStats.delivered}</span>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-[#FAFAFA] rounded-lg p-4 sm:p-5 border border-[#EAEAEA] flex items-center justify-between relative overflow-hidden min-h-[110px]">
          <div className="relative z-10 max-w-[62%] pr-2">
            <span className="px-2 py-0.5 rounded bg-white text-[#111111] border border-[#EAEAEA] text-[8.5px] font-medium uppercase tracking-wider mb-1.5 inline-block">
              Priority Sourcing
            </span>
            <h3 className="text-[15px] font-medium text-[#111111] leading-tight tracking-tight">Need more products?</h3>
            <p className="text-[10.5px] text-[#666666] font-normal mt-0.5 mb-2.5 leading-snug">Reorder your favourite items or source new catalog seamlessly.</p>
            <a 
              href="https://wa.me/917845730459" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#111111] hover:bg-black text-white text-[9.5px] font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-md transition-colors inline-flex items-center gap-1.5"
            >
              PLACE NEW ORDER <ArrowRight size={11} />
            </a>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none flex items-center justify-end overflow-hidden opacity-60">
            <img
              src="/images/promo_items_pure.jpg"
              alt="Logistics & Sourcing"
              className="w-full h-full object-cover object-center filter grayscale-[20%]"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-px border-b border-[#EAEAEA]">
          {['My Orders', 'Addresses', 'Payments', 'Support'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 text-xs font-medium whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#111111]' : 'text-[#888888] hover:text-[#111111]'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#111111]" />}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {activeTab === 'My Orders' && (
          <div className="space-y-4 pt-1">
            {allOrders.length === 0 ? (
              <div className="py-12 bg-white rounded-lg border border-[#EAEAEA] text-center p-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-md bg-[#FAFAFA] border border-[#EAEAEA] flex items-center justify-center text-[#111111]">
                  <Box size={24} />
                </div>
                <h4 className="text-base font-medium text-[#111111] tracking-tight">No Confirmed Orders in Tracking</h4>
                <p className="text-[#666666] text-xs max-w-sm mx-auto leading-relaxed">
                  Only confirmed consignments appear in live shipment tracking. Once your quotation is confirmed, its full journey and milestones will be visible here.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://wa.me/919072014777" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#111111] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Contact Sourcing Team
                  </a>
                </div>
              </div>
            ) : (
              allOrders.map((order) => {
              const hasMultipleProducts = Array.isArray(order.products) && order.products.length > 1;
              const { steps, activeIndex } = getProgressSteps(order);
              const productName = order.product?.trim() || 'Commercial Goods';
              const isDelivered = order.orderStatus === 'Delivered';
              const isExpanded = Boolean(expandedOrders[order._id]);

              // Map backend statuses to mockup badges
              let badgeColor = 'bg-[#FAFAFA] text-[#111111] border-[#EAEAEA]';
              if (isDelivered) badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
              else if (order.orderStatus === 'In Transit') badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
              else if (order.orderStatus === 'At Clearance') badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
              else badgeColor = 'bg-[#FAFAFA] text-[#111111] border-[#EAEAEA]';

              const rawId = order.orderId || (order._id ? `HIRA-${order._id.slice(-6).toUpperCase()}` : '');
              const formattedOrderId = rawId ? (rawId.startsWith('#') ? rawId : `#${rawId}`) : '#N/A';

              const activeFilter = selectedProductByOrder[order._id] ?? 'all';
              const productsToRender = hasMultipleProducts
                ? (activeFilter === 'all'
                    ? order.products.map((p, i) => ({ ...p, originalIndex: i }))
                    : (order.products[activeFilter] ? [{ ...order.products[activeFilter], originalIndex: activeFilter }] : []))
                : [];

              return (
                <div 
                  key={order._id} 
                  className="bg-white rounded-lg p-5 border border-[#EAEAEA] hover:border-[#111111] transition-colors"
                >
                  {/* Order Card Header */}
                  <div 
                    className="cursor-pointer group space-y-3"
                    onClick={() => toggleOrderExpanded(order._id)}
                  >
                    {/* Top Row: Order ID & Status Badge */}
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#EAEAEA]">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[10px] font-medium uppercase tracking-wider text-[#888888]">Order ID:</span>
                        <span className="text-xs sm:text-[13px] font-medium text-[#111111] font-mono tracking-tight select-all">
                          {formattedOrderId}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handleCopyOrderId(e, formattedOrderId)}
                          className="p-1 rounded-md text-[#888888] hover:text-[#111111] transition-colors shrink-0"
                          title="Copy Order ID"
                        >
                          {copiedId === formattedOrderId ? <Check size={12} className="text-teal-600" /> : <Copy size={12} />}
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {hasMultipleProducts && (
                          <span className="px-2 py-0.5 rounded bg-[#FAFAFA] text-[#111111] border border-[#EAEAEA] text-[9px] font-medium uppercase tracking-wider">
                            {order.products.length} Products
                          </span>
                        )}
                        <span className={`px-2.5 py-0.5 rounded border text-[9px] font-medium uppercase tracking-wider shrink-0 ${badgeColor}`}>
                          {order.orderStatus}
                        </span>
                      </div>
                    </div>

                    {/* Product Summary Row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-11 h-11 rounded-md bg-[#FAFAFA] shrink-0 flex items-center justify-center overflow-hidden border border-[#EAEAEA]">
                          {order.productImage ? (
                            <img src={order.productImage} alt={productName} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/tracking-preview.jpg'; }} />
                          ) : (
                            <Box size={18} className="text-[#888888]" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          {hasMultipleProducts ? (
                            <div>
                              <p className="text-[12px] font-medium text-[#111111] uppercase tracking-wider truncate">
                                {order.products.length} Products in Consignment
                              </p>
                              <p className="text-[10px] text-[#666666] font-normal mt-0.5 truncate">
                                {order.products.map(p => p.name).join(' • ')}
                              </p>
                              <p className="text-[9.5px] text-[#888888] font-normal mt-0.5 truncate">
                                Total: {order.quantity || order.products.reduce((s, p) => s + (p.quantity || 1), 0)} Units • {order.weight || order.products.reduce((s, p) => s + (p.weight || 0), 0)} kg • {order.shippingMethod || 'Sea'} Freight
                                {order.createdAt && ` • ${new Date(order.createdAt).toLocaleDateString('en-GB')}`}
                              </p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-[12px] font-medium text-[#111111] uppercase tracking-wider truncate">{productName}</p>
                              <p className="text-[10px] text-[#888888] font-normal mt-0.5 truncate">
                                {order.quantity || 1} Unit • {order.shippingMethod || 'Express Freight'}
                                {order.createdAt && ` • ${new Date(order.createdAt).toLocaleDateString('en-GB')}`}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[9.5px] text-[#111111] font-medium shrink-0">
                        <span className="group-hover:underline">
                          {isExpanded ? 'Hide' : 'Milestones'}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] flex items-center justify-center text-[#111111] transition-colors">
                          <ChevronDown size={13} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Vertical Milestones Section */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-[#EAEAEA] space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                          <Clock size={12} className="text-[#111111]" /> Shipment Journey &amp; Milestones
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-medium text-[#111111] bg-[#FAFAFA] px-2 py-0.5 rounded border border-[#EAEAEA]">
                            {formattedOrderId}
                          </span>
                          {order.deliveryCourier && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#FAFAFA] text-[#111111] border border-[#EAEAEA] flex items-center gap-1">
                              <Truck size={10} /> {order.deliveryCourier}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* MULTI-PRODUCT CONSIGNMENT TRACKING */}
                      {hasMultipleProducts ? (
                        <div className="space-y-4">
                          {/* Product Selector Bar */}
                          <div className="bg-[#FAFAFA] p-3 rounded-md border border-[#EAEAEA] space-y-2.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-medium uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                                <Package size={13} className="text-[#111111]" /> Select Product ({order.products.length}):
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProductByOrder(prev => ({ ...prev, [order._id]: 'all' }));
                                }}
                                className={`px-2.5 py-1 rounded-md text-[9.5px] font-medium transition-all cursor-pointer ${
                                  (selectedProductByOrder[order._id] === 'all' || selectedProductByOrder[order._id] === undefined)
                                    ? 'bg-[#111111] text-white'
                                    : 'bg-white text-[#666666] hover:bg-[#FAFAFA] border border-[#EAEAEA]'
                                }`}
                              >
                                View All ({order.products.length})
                              </button>
                            </div>

                            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                              {order.products.map((prod, pIdx) => {
                                const isSelected = selectedProductByOrder[order._id] === pIdx;
                                return (
                                  <button
                                    key={prod._id || pIdx}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedProductByOrder(prev => ({ ...prev, [order._id]: pIdx }));
                                    }}
                                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2 shrink-0 border cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#111111] text-white border-[#111111]'
                                        : 'bg-white text-[#666666] border-[#EAEAEA] hover:border-[#111111]'
                                    }`}
                                  >
                                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-medium ${
                                      isSelected ? 'bg-white/20 text-white' : 'bg-[#FAFAFA] text-[#111111]'
                                    }`}>
                                      {pIdx + 1}
                                    </span>
                                    <span className="max-w-[130px] truncate">{prod.name}</span>
                                    {prod.shippingMark && (
                                      <span className={`text-[8.5px] px-1.5 py-0.2 rounded font-mono font-medium ${
                                        isSelected ? 'bg-white/20 text-white' : 'bg-[#FAFAFA] text-[#111111]'
                                      }`}>
                                        {prod.shippingMark}
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Individual Product Cards */}
                          <div className="space-y-4">
                            {productsToRender.map(({ originalIndex: pIdx, ...prod }) => {
                              const { steps: prodSteps, activeIndex: prodActiveIndex } = getProgressSteps(prod, order);
                              const prodIsDelivered = Boolean(prod.delivered || prod.orderStatus === 'Delivered');

                              let prodBadgeColor = 'bg-[#FAFAFA] text-[#111111] border-[#EAEAEA]';
                              if (prodIsDelivered) prodBadgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
                              else if (prod.orderStatus === 'In Transit') prodBadgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
                              else if (prod.orderStatus === 'At Clearance') prodBadgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
                              else prodBadgeColor = 'bg-[#FAFAFA] text-[#111111] border-[#EAEAEA]';

                              return (
                                <div key={prod._id || pIdx} className="p-4 rounded-md bg-white border border-[#EAEAEA] space-y-3">
                                  {/* Product Header */}
                                  <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-[#EAEAEA]">
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <span className="w-5 h-5 rounded-md bg-[#111111] text-white flex items-center justify-center text-[10px] font-medium">
                                          {pIdx + 1}
                                        </span>
                                        <h4 className="text-xs sm:text-[13px] font-medium text-[#111111] uppercase tracking-tight">
                                          {prod.name}
                                        </h4>
                                        {prod.shippingMark && (
                                          <span className="px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-[#FAFAFA] text-[#111111] border border-[#EAEAEA]">
                                            {prod.shippingMark}
                                          </span>
                                        )}
                                      </div>

                                      {/* Cargo Specifications Pills */}
                                      <div className="flex items-center gap-1.5 flex-wrap mt-2">
                                        <span className="px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-[#666666] text-[9.5px] font-medium">
                                          Qty: {prod.quantity || 1} Units
                                        </span>
                                        {prod.weight ? (
                                          <span className="px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-[#666666] text-[9.5px] font-medium">
                                            {prod.weight} kg
                                          </span>
                                        ) : null}
                                        {prod.cbm ? (
                                          <span className="px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-[#666666] text-[9.5px] font-medium">
                                            {prod.cbm} CBM
                                          </span>
                                        ) : null}
                                        <span className="px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-[#666666] text-[9.5px] font-medium flex items-center gap-1">
                                          {(prod.shippingMethod || order.shippingMethod) === 'Air' ? <Plane size={10} /> : <Ship size={10} />}
                                          {prod.shippingMethod || order.shippingMethod || 'Sea'} Freight
                                        </span>
                                        {(prod.warehouseName || order.warehouseName) && (
                                          <span className="px-2 py-0.5 rounded bg-white border border-[#EAEAEA] text-[#666666] text-[9.5px] font-medium flex items-center gap-1">
                                            <Warehouse size={10} /> {prod.warehouseName || order.warehouseName}
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    <span className={`px-2 py-0.5 rounded text-[8.5px] font-medium uppercase shrink-0 border ${prodBadgeColor}`}>
                                      {prod.delivered ? 'Delivered' : prod.orderStatus || 'Order Confirmed'}
                                    </span>
                                  </div>

                                  {/* Dedicated Product Milestones Timeline */}
                                  <div className="pt-1">
                                    <p className="text-[10px] font-medium uppercase tracking-wider text-[#888888] mb-2.5 flex items-center gap-1">
                                      <Clock size={11} className="text-[#111111]" /> Logistics Journey for {prod.name}:
                                    </p>
                                    {renderMilestoneTimeline(prodSteps, prodActiveIndex)}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        /* Single Product Order Timeline */
                        <div className="space-y-3">
                          {renderMilestoneTimeline(steps, activeIndex)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'My Orders' && (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-md bg-[#FAFAFA] border border-[#EAEAEA] text-[#888888] flex items-center justify-center mb-4">
              {activeTab === 'Addresses' ? <MapPin size={22} /> : activeTab === 'Payments' ? <CreditCard size={22} /> : <Headphones size={22} />}
            </div>
            <p className="text-sm font-medium text-[#111111]">{activeTab}</p>
            <p className="text-[11px] text-[#666666] mt-1">This section is currently being updated for your account.</p>
          </div>
        )}

      </main>
    </div>
  );
}