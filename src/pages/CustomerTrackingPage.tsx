// @ts-nocheck
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trackingAPI } from '../services/trackingApi';
import {
  Package, Truck, Warehouse, Train, FileText,
  CheckCircle2, ChevronDown, Bell,
  Calendar, MapPin, Search, Share2, Copy, Check,
  ShieldCheck, Weight, Ruler, Plane, Ship,
  ArrowRight, Box, Clock, Phone, User,
  Home, PlusCircle, Headphones, CreditCard, ChevronRight, CheckCircle, Mail,
  AlertTriangle, Info, Sparkles, Building2, ExternalLink
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

  if (orderId && RESERVED_ROUTES.has(orderId.toLowerCase())) {
    window.location.replace(`/${orderId}`);
    return null;
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(trackingParam));
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('My Orders');
  const [expandedOrders, setExpandedOrders] = useState({});
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

  // Combine current order and related orders
  const allOrders = useMemo(() => {
    if (!data) return [];
    const orders = [data, ...(data.relatedOrders || [])];
    // Deduplicate by _id just in case
    const unique = Array.from(new Map(orders.map(o => [o._id, o])).values());
    unique.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return unique;
  }, [data]);

  // Customer Profile Stats
  const profileStats = useMemo(() => {
    if (!data) return { totalOrders: 0, totalSpend: 0, inTransit: 0, delivered: 0 };
    let totalOrders = allOrders.length;
    let totalSpend = 0;
    let inTransit = 0;
    let delivered = 0;

    allOrders.forEach(o => {
      totalSpend += parseFloat(o.value) || 0;
      if (o.orderStatus === 'Delivered' || o.deliveryStatus === 'Delivered') {
        delivered += 1;
      } else if (!['Cancelled', 'Lost', 'Not Interested'].includes(o.orderStatus)) {
        inTransit += 1;
      }
    });

    return { totalOrders, totalSpend, inTransit, delivered };
  }, [allOrders]);

  const getInitials = (name) => {
    if (!name) return 'CU';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const getProgressSteps = (order) => {
    const isDelivered = Boolean(order.delivered || order.orderStatus === 'Delivered' || order.deliveryStatus === 'Delivered');
    const isOutForDelivery = Boolean(order.outForDelivery);
    const isArrivedIndia = Boolean(order.arrivedIndia);
    const isCustomsCleared = Boolean(order.underCustomClearance);
    const isArrivedDest = Boolean(order.arrivedDestinationCountry);
    const isDispatched = Boolean(order.dispatchedFromChina);
    const isReadyToDispatch = Boolean(order.readyToDispatch);

    const steps = [
      { id: 'confirmed', label: 'Order Confirmed', completed: true, date: order.createdAt, icon: FileText, desc: 'Purchase confirmed & consignment prepared' },
      { id: 'ready', label: 'Ready to Dispatch', completed: isReadyToDispatch || isDispatched || isArrivedDest || isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, date: order.chinaLoadingDate || null, icon: Box, desc: order.readyToDispatchMessage || 'Packed, inspected and scheduled for pickup' },
      { id: 'dispatched', label: 'Dispatched from China', completed: isDispatched || isArrivedDest || isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, date: null, icon: Truck, desc: order.dispatchedFromChinaMessage || 'Cargo dispatched from origin facility' },
      { id: 'arrived_dest', label: 'Arrived at Destination', completed: isArrivedDest || isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, date: null, icon: Plane, desc: 'Touched down at national logistics terminal' },
      { id: 'customs', label: 'Customs Clearance', completed: isCustomsCleared || isArrivedIndia || isOutForDelivery || isDelivered, date: order.indiaArrivalDate || null, icon: ShieldCheck, desc: order.underCustomClearanceMessage || 'Under customs clearance & inspection' },
      { id: 'hub', label: 'Arrived at Local Hub', completed: isArrivedIndia || isOutForDelivery || isDelivered, date: null, icon: Warehouse, desc: order.arrivedIndiaMessage || 'Sorted & received at regional delivery depot' },
      { id: 'out', label: 'Out for Delivery', completed: isOutForDelivery || isDelivered, date: null, icon: Truck, desc: order.outForDeliveryMessage || (order.deliveryCourier ? `Handed over to ${order.deliveryCourier}` : 'Dispatched with final mile courier') },
      { id: 'delivered', label: 'Delivered', completed: isDelivered, date: order.deliveryDate || null, icon: Home, desc: order.deliveredMessage || 'Successfully received by consignee' }
    ];

    // Determine current active step (the last completed one)
    let activeIndex = 0;
    steps.forEach((s, i) => { if (s.completed) activeIndex = i; });

    return { steps, activeIndex };
  };

  const toggleOrderExpanded = (orderId) => {
    setExpandedOrders(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  if (loading) {
    return (
      <div 
        className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col items-center justify-center p-4"
        style={{ colorScheme: 'only light' }}
      >
        <Package className="animate-bounce text-[#8C5921] mb-4" size={40} />
        <p className="text-[#8C5921] font-bold uppercase tracking-widest text-sm animate-pulse">Loading Tracking Portal...</p>
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
        className="min-h-[80vh] bg-[#FAF8F5] text-stone-900 flex flex-col items-center justify-center p-4 text-center"
        style={{ colorScheme: 'only light' }}
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F6ECE0] border border-[#ECDDC9] flex items-center justify-center mb-5 text-[#8C5921] shadow-sm">
          <Package size={30} />
        </div>
        <h1 className="text-2xl font-black text-stone-900 tracking-tight">{error ? 'Order Not Found' : 'Track Your Shipment'}</h1>
        <p className="text-stone-600 text-xs mt-2 max-w-sm">
          {error 
            ? `We could not find tracking details for "${trackingParam}". Please check your Order ID or try below.`
            : 'Enter a valid Order ID (e.g. HIRA-100087) to view real-time shipment status & milestones.'
          }
        </p>

        {/* Interactive Search Bar */}
        <form onSubmit={handleInputSubmit} className="mt-6 max-w-sm w-full flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm focus-within:border-[#8C5921] focus-within:ring-2 focus-within:ring-[#8C5921]/10">
          <input 
            type="text" 
            name="lookupId" 
            defaultValue={trackingParam}
            placeholder="e.g. HIRA-100087" 
            className="flex-1 px-3 py-2 text-sm bg-transparent outline-none font-mono text-stone-800 placeholder-stone-400"
            autoFocus
          />
          <button 
            type="submit" 
            className="bg-[#8C5921] hover:bg-[#73491b] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
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
      className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans pb-10 relative selection:bg-[#8C5921] selection:text-white"
      style={{ colorScheme: 'only light', backgroundColor: '#FAF8F5' }}
    >
      {/* Sleek Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DC]">
        <div className="max-w-md sm:max-w-xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8C5921] text-white flex items-center justify-center shadow-md">
              <Package size={18} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-black tracking-wider text-stone-900 uppercase leading-none mb-1">HIRA TRACKING</span>
              <span className="text-[9px] font-medium text-stone-500 uppercase tracking-widest leading-none">Your Global Sourcing Partner</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#8C5921] text-white flex items-center justify-center font-bold text-xs shadow-md">
              {getInitials(data.customerName)}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md sm:max-w-xl mx-auto px-4 pt-5 space-y-4">

        {/* Maintenance / Service Advisory Banner */}
        <div className="rounded-2xl p-3 bg-[#FFFBF0] border border-[#F2DEBA] shadow-sm flex items-start gap-2.5 text-stone-800">
          <Info size={16} className="text-[#B45309] shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed flex-1">
            <span className="font-bold text-[#92400E]">Notice:</span> Our tracking site is currently undergoing scheduled system maintenance. Real-time updates may experience minor delays. We apologize for any temporary inconvenience.
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-br from-white via-[#FCFAF7] to-[#F8F3EC] rounded-3xl p-5 border border-[#EAE5DC] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8C5921]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex gap-4 relative z-10 items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#8C5921] text-white flex items-center justify-center text-2xl font-black shrink-0 shadow-md">
              {getInitials(data.customerName)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h2 className="text-[18px] font-black text-stone-900 truncate tracking-tight">{data.customerName || 'Customer'}</h2>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-extrabold flex items-center gap-1 uppercase tracking-wider">
                  <CheckCircle size={10} strokeWidth={2.5} /> Verified Consignee
                </span>
              </div>
              <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 size={12} className="text-[#8C5921]" />
                Client Account • International Logistics
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#EAE5DC]/70 relative z-10">
            <div className="flex items-center gap-1.5 py-1 px-2.5 bg-white rounded-lg border border-[#EAE5DC] shadow-sm text-[10px] font-bold text-stone-600 tracking-wide">
              <Box size={11} className="text-[#8C5921]" /> Express Cargo
            </div>
            <div className="flex items-center gap-1.5 py-1 px-2.5 bg-white rounded-lg border border-[#EAE5DC] shadow-sm text-[10px] font-bold text-stone-600 tracking-wide">
              <ShieldCheck size={11} className="text-emerald-600" /> Insured Sourcing
            </div>
            <div className="flex items-center gap-1.5 py-1 px-2.5 bg-white rounded-lg border border-[#EAE5DC] shadow-sm text-[10px] font-bold text-stone-600 tracking-wide">
              <Calendar size={11} className="text-stone-400" /> Member Since {data.createdAt ? new Date(data.createdAt).getFullYear() : new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white rounded-2xl p-3 border border-[#EAE5DC] shadow-sm flex flex-col items-center justify-center text-center">
            <Package size={16} className="text-[#8C5921] mb-1" />
            <span className="text-[9px] text-stone-500 font-medium">Total Orders</span>
            <span className="text-sm font-black text-stone-900">{profileStats.totalOrders}</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-[#EAE5DC] shadow-sm flex flex-col items-center justify-center text-center">
            <CreditCard size={16} className="text-emerald-600 mb-1" />
            <span className="text-[9px] text-stone-500 font-medium">Total Spend</span>
            <span className="text-sm font-black text-stone-900">{formatINR(profileStats.totalSpend)}</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-[#EAE5DC] shadow-sm flex flex-col items-center justify-center text-center">
            <Truck size={16} className="text-blue-500 mb-1" />
            <span className="text-[9px] text-stone-500 font-medium">In Transit</span>
            <span className="text-sm font-black text-stone-900">{profileStats.inTransit}</span>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-[#EAE5DC] shadow-sm flex flex-col items-center justify-center text-center">
            <CheckCircle size={16} className="text-teal-500 mb-1" />
            <span className="text-[9px] text-stone-500 font-medium">Delivered</span>
            <span className="text-sm font-black text-stone-900">{profileStats.delivered}</span>
          </div>
        </div>

        {/* Promotional Banner - Refined Layout & Proportion */}
        <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FAF3EC] to-[#F3E7D9] rounded-3xl p-4 sm:p-5 border border-[#EAE5DC] shadow-sm flex items-center justify-between relative overflow-hidden min-h-[125px]">
          <div className="relative z-10 max-w-[58%] pr-2">
            <span className="px-2 py-0.5 rounded-full bg-[#8C5921]/10 text-[#8C5921] text-[8.5px] font-black uppercase tracking-wider mb-1 inline-block">
              Priority Sourcing
            </span>
            <h3 className="text-[15px] sm:text-[17px] font-black text-stone-900 leading-tight tracking-tight">Need more products?</h3>
            <p className="text-[10.5px] text-stone-600 font-medium mt-0.5 mb-2.5 leading-snug">Reorder your favourite items or source new catalog seamlessly.</p>
            <a 
              href="https://wa.me/917845730459" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#83531F] hover:bg-[#6A4319] text-white text-[9.5px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5"
            >
              PLACE NEW ORDER <ArrowRight size={11} strokeWidth={2.5} />
            </a>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none flex items-center justify-end overflow-hidden">
            <img
              src="/images/promo_items_pure.jpg"
              alt="Logistics & Sourcing"
              className="w-full h-full object-cover object-center mix-blend-multiply opacity-90 scale-105"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-px border-b border-[#EAE5DC]/60">
          {['My Orders', 'Addresses', 'Payments', 'Support'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2.5 text-sm font-bold whitespace-nowrap transition-colors relative ${activeTab === tab ? 'text-[#8C5921]' : 'text-stone-400 hover:text-stone-600'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C5921] rounded-t-full" />}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {activeTab === 'My Orders' && (
          <div className="space-y-4 pt-1">
            {allOrders.map((order) => {
              const { steps, activeIndex } = getProgressSteps(order);
              const productName = order.product?.trim() || 'Commercial Goods';
              const isDelivered = order.orderStatus === 'Delivered';
              const isExpanded = Boolean(expandedOrders[order._id]);

              // Map backend statuses to mockup badges
              let badgeColor = 'bg-stone-100 text-stone-600 border-stone-200';
              if (isDelivered) badgeColor = 'bg-teal-50 text-teal-700 border-teal-200';
              else if (order.orderStatus === 'In Transit') badgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
              else if (order.orderStatus === 'At Clearance') badgeColor = 'bg-[#FDF6ED] text-[#D97706] border-[#FDE6D5]';
              else badgeColor = 'bg-[#F6ECE0] text-[#8C5921] border-[#E8D9C8]';

              // Has custom messages
              const hasCustomNotes = Boolean(
                order.outForDeliveryMessage ||
                order.arrivedIndiaMessage ||
                order.underCustomClearanceMessage ||
                order.dispatchedFromChinaMessage ||
                order.readyToDispatchMessage ||
                order.deliveredMessage ||
                order.deliveryCourier
              );

              const rawId = order.orderId || (order._id ? `HIRA-${order._id.slice(-6).toUpperCase()}` : '');
              const formattedOrderId = rawId ? (rawId.startsWith('#') ? rawId : `#${rawId}`) : '#N/A';

              return (
                <div 
                  key={order._id} 
                  className="bg-white rounded-3xl p-4 border border-[#EAE5DC] shadow-sm hover:border-[#8C5921]/30 transition-all"
                >
                  {/* Order Card Header */}
                  <div 
                    className="cursor-pointer group space-y-3"
                    onClick={() => toggleOrderExpanded(order._id)}
                  >
                    {/* Top Row: Prominent Order ID & Status Badge */}
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#EAE5DC]/70">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">Order ID:</span>
                        <span className="text-xs sm:text-[13px] font-black text-stone-900 font-mono tracking-tight select-all">
                          {formattedOrderId}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => handleCopyOrderId(e, formattedOrderId)}
                          className="p-1 rounded-md text-stone-400 hover:text-[#8C5921] hover:bg-[#F6ECE0]/60 transition-colors shrink-0"
                          title="Copy Order ID"
                        >
                          {copiedId === formattedOrderId ? <Check size={12} className="text-teal-600" /> : <Copy size={12} />}
                        </button>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-md border text-[9px] font-extrabold uppercase tracking-wider shrink-0 shadow-2xs ${badgeColor}`}>
                        {order.orderStatus}
                      </span>
                    </div>

                    {/* Product Summary Row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-[#0F1E36] shrink-0 flex items-center justify-center overflow-hidden border border-[#233858] shadow-sm">
                          {order.productImage ? (
                            <img src={order.productImage} alt={productName} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/tracking-preview.jpg'; }} />
                          ) : (
                            <Box size={20} className="text-white opacity-60" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[12px] font-black text-stone-900 uppercase tracking-wider truncate">{productName}</p>
                          <p className="text-[10px] text-stone-500 font-medium mt-0.5 truncate">
                            {order.quantity || 1} Unit • {order.shippingMethod || 'Express Freight'}
                            {order.createdAt && ` • ${new Date(order.createdAt).toLocaleDateString('en-GB')}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[9.5px] text-[#8C5921] font-bold shrink-0">
                        <span className="group-hover:underline">
                          {isExpanded ? 'Hide Milestones' : 'View Milestones'}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-stone-100 group-hover:bg-[#F6ECE0] group-hover:text-[#8C5921] flex items-center justify-center text-stone-400 transition-colors">
                          <ChevronDown size={14} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#8C5921]' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Vertical Milestones Section (Expanded on click) */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-[#EAE5DC] space-y-3 animate-fadeIn">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[11px] font-black uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                          <Clock size={12} className="text-[#8C5921]" /> Shipment Journey & Milestones
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-stone-600 bg-[#FAF4ED] px-2 py-0.5 rounded border border-[#E8D9C8]">
                            {formattedOrderId}
                          </span>
                          {order.deliveryCourier && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1">
                              <Truck size={10} /> {order.deliveryCourier}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Milestone timeline list */}
                      <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#EAE5DC]">
                        {steps.map((step, sIdx) => {
                          const isCompleted = step.completed;
                          const isCurrent = sIdx === activeIndex;

                          return (
                            <div key={step.id} className="relative group">
                              {/* Dot */}
                              <div className={`absolute -left-5 top-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-all
                                ${isCompleted 
                                  ? 'bg-[#8C5921] border-[#8C5921] text-white shadow-xs' 
                                  : 'bg-white border-[#D6D0C4] text-transparent'}`}
                              >
                                {isCompleted && <Check size={7} strokeWidth={4} />}
                              </div>

                              <div className="bg-[#FAF8F5] rounded-xl p-2.5 border border-[#EAE5DC]/80 space-y-1">
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                  <div className="flex items-center gap-1.5">
                                    <step.icon size={12} className={isCompleted ? 'text-[#8C5921]' : 'text-stone-400'} />
                                    <span className={`text-[11px] font-black ${isCompleted ? 'text-stone-900' : 'text-stone-400'}`}>
                                      {step.label}
                                    </span>
                                    {isCurrent && (
                                      <span className="px-1.5 py-0.2 rounded bg-[#8C5921] text-white text-[8px] font-black uppercase tracking-wider">
                                        Current Status
                                      </span>
                                    )}
                                  </div>
                                  {step.date && (
                                    <span className="text-[9.5px] font-bold text-stone-500 font-mono">
                                      {new Date(step.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </span>
                                  )}
                                </div>
                                <p className={`text-[10px] leading-relaxed ${isCompleted ? 'text-stone-600' : 'text-stone-400 italic'}`}>
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Itemized breakdown if multi-product order */}
                      {Array.isArray(order.products) && order.products.length > 1 && (
                        <div className="pt-3 border-t border-[#EAE5DC]/80 space-y-2">
                          <p className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                            Itemized Products in this Consignment ({order.products.length}):
                          </p>
                          <div className="space-y-2">
                            {order.products.map((prod, pIdx) => (
                              <div key={prod._id || pIdx} className="p-2.5 rounded-xl bg-white border border-[#EAE5DC] flex items-center justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-bold text-stone-900 truncate">{prod.name}</span>
                                    {prod.shippingMark && (
                                      <span className="px-1.5 py-0.2 rounded text-[8.5px] font-mono bg-[#F6ECE0] text-[#8C5921] font-bold">
                                        {prod.shippingMark}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[9.5px] text-stone-500 mt-0.5">
                                    Qty: {prod.quantity || 1} {prod.weight ? `• ${prod.weight} kg` : ''} {prod.cbm ? `• ${prod.cbm} CBM` : ''}
                                  </div>
                                </div>
                                <span className={`px-2 py-0.5 rounded text-[8.5px] font-extrabold uppercase shrink-0 ${
                                  prod.delivered ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-stone-100 text-stone-600'
                                }`}>
                                  {prod.delivered ? 'Delivered' : prod.orderStatus || 'In Progress'}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'My Orders' && (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-300 flex items-center justify-center mb-4">
              {activeTab === 'Addresses' ? <MapPin size={24} /> : activeTab === 'Payments' ? <CreditCard size={24} /> : <Headphones size={24} />}
            </div>
            <p className="text-sm font-bold text-stone-800">{activeTab}</p>
            <p className="text-[11px] text-stone-500 mt-1">This section is currently being updated for your account.</p>
          </div>
        )}

      </main>
    </div>
  );
}