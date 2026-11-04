import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ArrowUpRight, ArrowRight, Check, MapPin, Clock3, ShieldCheck, Satellite, Mail } from 'lucide-react';

const PHONE = '0681934255';
const DISPLAY_PHONE = '068 193 4255';
const EMAIL = 'bntinstallation@gmail.com';
const wa = (message = "Hi B.N.T DSTV Installers, I'd like to enquire about your services.") => `https://wa.me/27${PHONE.slice(1)}?text=${encodeURIComponent(message)}`;

const services = [
  { image: 'https://images.surferseo.art/2d400ffb-ea86-4670-8669-a26b63a8b8c7.png', title: 'New DStv installation', text: 'Professional satellite dish and decoder setup for homes and properties.' },
  { image: 'https://images.surferseo.art/325c2ce9-0218-4425-9d45-22a7391e7d2f.png', title: 'Signal troubleshooting', text: 'Help diagnosing signal loss, reception interruptions and E48-32 errors.' },
  { image: 'https://images.surferseo.art/325c2ce9-0218-4425-9d45-22a7391e7d2f.png', title: 'Dish alignment', text: 'Dish positioning and realignment to help restore a stable signal.' },
  { image: 'https://images.surferseo.art/3b0883c2-22de-4b96-b6b3-02e0c71bd39e.png', title: 'Explora & decoder setup', text: 'Decoder installation, connection, configuration and basic troubleshooting.' },
  { image: 'https://cdnimg.co/fdf62a4c-c14c-4562-8ff0-8e4269b8772e/126a7b3a-2d03-428c-974d-de6557cd18fe/how-to-connect-dstv-decoder-to-tv-decoder-connections.jpg', title: 'ExtraView & extra points', text: 'Multi-room viewing connections and additional viewing points.' },
  { image: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A/assets.cdn.filesafe.space/Px9mRypHOLI3QQCnq19f/media/69c6d1445eea833b163f8d81.png', title: 'TV wall mounting', text: 'TV bracket installation, secure mounting and neat cable arrangement.' },
  { image: 'https://cdnimg.co/fdf62a4c-c14c-4562-8ff0-8e4269b8772e/126a7b3a-2d03-428c-974d-de6557cd18fe/how-to-connect-dstv-decoder-to-tv-decoder-connections.jpg', title: 'LNB & cabling assistance', text: 'Satellite cable checks, connection repairs and compatible LNB assistance.' },
  { image: 'https://images.surferseo.art/3b0883c2-22de-4b96-b6b3-02e0c71bd39e.png', title: 'Upgrades & reconnections', text: 'Assistance with compatible system upgrades, reconnections and equipment changes.' },
  { image: 'https://images.surferseo.art/2d400ffb-ea86-4670-8669-a26b63a8b8c7.png', title: 'Residential & business setups', text: 'Satellite TV and television setup assistance for homes and business premises.' },
];

const areas = ['Walmer', 'Lorraine', 'Newton Park', 'Summerstrand', 'Mount Pleasant', 'Central', 'Mill Park', 'Kabega Park', 'Framesby', 'Kariega and surrounding areas'];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location]);
  return <header className="header"><div className="container nav-wrap">
    <Link to="/" className="brand"><img src="/bnt-mark.svg" alt="B.N.T DSTV Installers logo"/><span><b>B.N.T</b><small>DSTV INSTALLERS</small></span></Link>
    <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav open' : 'nav'}>
      <NavLink to="/" end>Home</NavLink><NavLink to="/services">Services & Contact</NavLink>
      <a className="nav-call" href={`tel:+27${PHONE.slice(1)}`}><Phone size={16}/> Call us</a>
      <a className="nav-cta" href={wa()}>WhatsApp us <ArrowUpRight size={16}/></a>
    </nav>
  </div></header>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link to="/" className="brand footer-brand"><img src="/bnt-mark.svg" alt=""/><span><b>B.N.T</b><small>DSTV INSTALLERS</small></span></Link><p>Satellite TV installation, signal support and TV mounting across Gqeberha and surrounding suburbs.</p></div>
    <div><h4>Explore</h4><Link to="/">Home</Link><Link to="/services">Services & Contact</Link></div>
    <div><h4>Get in touch</h4><a href={`tel:+27${PHONE.slice(1)}`}><Phone size={15}/> {DISPLAY_PHONE}</a><a href={`mailto:${EMAIL}`}><Mail size={15}/> {EMAIL}</a><span><MapPin size={15}/> Gqeberha, Eastern Cape</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} B.N.T DSTV Installers. All rights reserved.</span><span>Independent installation service provider.</span></div></footer>;
}

function FloatingWhatsApp() { return <a className="float-wa" href={wa()} aria-label="Chat with B.N.T on WhatsApp"><MessageCircle/><span>Chat to us</span></a>; }

function ServiceCard({ item, index }) {
  return <article className="service-card"><div className="service-photo"><img src={item.image} alt={item.title} loading="lazy"/></div><div className="service-card-body"><span className="service-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><a href={wa(`Hi B.N.T, I'm enquiring about ${item.title.toLowerCase()}.`)} className="text-link">Enquire about this <ArrowUpRight size={16}/></a></div></article>
}

function HomePage() {
  return <>
    <section className="hero"><div className="hero-glow"></div><div className="container hero-grid">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"></span> LOCAL INSTALLATION SUPPORT · GQEBERHA</div>
        <h1>Great picture.<br/><em>Reliable signal.</em><br/>Expert setup.</h1>
        <p className="hero-lead">Your local team for DStv installation, signal troubleshooting, decoder setup and professional TV mounting across Gqeberha.</p>
        <div className="hero-actions"><a className="btn btn-yellow" href={wa('Hi B.N.T DSTV Installers, I would like to request a quote.')}><MessageCircle size={18}/> Request a quote <ArrowUpRight size={17}/></a><a className="btn btn-outline" href={`tel:+27${PHONE.slice(1)}`}><Phone size={17}/> {DISPLAY_PHONE}</a></div>
        <div className="hero-proof"><span><Check/> Friendly local service</span><span><Check/> Enquiries welcome 24/7</span></div>
      </div>
      <div className="hero-visual"><div className="hero-photo"><img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1100&q=85" alt="Modern television in a neatly arranged living room"/><div className="photo-overlay"></div></div>
        <div className="signal-card"><div className="signal-icon"><Satellite/></div><div><b>Home entertainment, sorted.</b><small>Installation · Setup · Support</small></div><span className="signal-check"><Check/></span></div>
        <div className="hero-stamp"><span>LOCAL</span><b>GQEBERHA</b><small>AND SURROUNDING AREAS</small></div>
      </div>
    </div><div className="hero-bottom container"><span>INSTALLATION</span><i></i><span>SIGNAL SUPPORT</span><i></i><span>TV MOUNTING</span><i></i><span>DECODER SETUP</span></div></section>

    <section className="trust-strip"><div className="container trust-grid"><div><ShieldCheck/><span><b>Practical solutions</b><small>Help with your TV setup</small></span></div><div><MapPin/><span><b>Local coverage</b><small>Gqeberha and surrounds</small></span></div><div><Clock3/><span><b>24/7 enquiries</b><small>Service times confirmed on request</small></span></div></div></section>

    <section className="section services-preview"><div className="container"><div className="section-heading"><div><div className="eyebrow dark">WHAT WE CAN HELP WITH</div><h2>Everything for a better<br/><em>viewing experience.</em></h2></div><p>From a new satellite installation to a TV mounted neatly on your wall, get in touch and tell us what you need.</p></div>
      <div className="services-grid">{services.slice(0,6).map((s,i)=><ServiceCard key={s.title} item={s} index={i}/>)}</div>
      <div className="center-action"><Link className="btn btn-dark" to="/services">Explore all services <ArrowRight size={17}/></Link></div>
    </div></section>

    <section className="feature-band"><div className="container feature-grid"><div className="feature-image"><img src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=85" alt="Large television mounted in a contemporary living room"/></div><div className="feature-copy"><div className="eyebrow">A CLEAN, SIMPLE SETUP</div><h2>Make your space work<br/>for <em>entertainment.</em></h2><p>Need help getting your decoder connected, sorting out a signal issue or mounting your television? B.N.T can help you find the right solution for your setup.</p><ul className="check-list"><li><Check/> Installation and reconnection assistance</li><li><Check/> Decoder and viewing-point setup</li><li><Check/> TV mounting and cable arrangement</li></ul><a className="btn btn-yellow" href={wa('Hi B.N.T, please help me with my home TV setup.')} >Tell us what you need <ArrowUpRight size={17}/></a></div></div></section>

    <section className="section areas-section"><div className="container areas-grid"><div><div className="eyebrow dark">PROUDLY SERVING GQEBERHA</div><h2>Local service,<br/><em>across the city.</em></h2><p>We cover Gqeberha (Port Elizabeth) and surrounding suburbs. Contact us with your location and we'll confirm availability for your area.</p><a href={wa('Hi B.N.T, do you service my area?')} className="text-link">Check service availability <ArrowUpRight size={16}/></a></div><div className="area-cloud">{areas.map(a=><span key={a}><MapPin size={14}/>{a}</span>)}</div></div></section>

    <section className="cta-section"><div className="container cta-inner"><div><div className="eyebrow">LET'S GET YOU CONNECTED</div><h2>Need an installer?<br/><em>Let's talk.</em></h2><p>Send us a WhatsApp message for enquiries and quotations. We'll discuss your setup and confirm availability.</p></div><div className="cta-buttons"><a className="btn btn-yellow" href={wa('Hi B.N.T DSTV Installers, I would like to enquire about an installation.')}><MessageCircle/> WhatsApp B.N.T <ArrowUpRight/></a><a className="btn btn-light-outline" href={`tel:+27${PHONE.slice(1)}`}><Phone/> Call {DISPLAY_PHONE}</a></div></div></section>
  </>;
}

function ServicesPage() {
  const [form,setForm] = useState({name:'',area:'',service:'',details:''});
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => { e.preventDefault(); const msg = `Hi B.N.T DSTV Installers, I'd like to request a quote.\nName: ${form.name}\nArea: ${form.area}\nService: ${form.service}\nDetails: ${form.details || 'Please contact me to discuss.'}`; window.open(wa(msg),'_blank','noopener,noreferrer'); };
  return <>
    <section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-dot"></span> HOW WE CAN HELP</div><h1>Services & <em>support.</em></h1><p>Tell us what you need. From satellite installation and signal support to decoder setup and TV mounting, we're ready to discuss your project.</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span> Services & Contact</div></div></section>
    <section className="section all-services"><div className="container"><div className="section-heading"><div><div className="eyebrow dark">OUR SERVICES</div><h2>One team for your<br/><em>TV setup needs.</em></h2></div><p>Every home and installation is different. Contact us with your requirements so we can discuss the right service and availability.</p></div><div className="services-grid">{services.map((s,i)=><ServiceCard key={s.title} item={s} index={i}/>)}</div></div></section>
    <section className="contact-section"><div className="container contact-grid"><div className="contact-info"><div className="eyebrow">GET A QUOTE</div><h2>Let's get your<br/><em>setup sorted.</em></h2><p>Complete the enquiry and we'll open a WhatsApp message with your details ready to send. No online booking is required at this stage.</p><div className="contact-method"><span><Phone/></span><div><small>CALL US</small><a href={`tel:+27${PHONE.slice(1)}`}>{DISPLAY_PHONE}</a></div></div><div className="contact-method"><span><Mail/></span><div><small>EMAIL US</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div><div className="contact-method"><span><MapPin/></span><div><small>OUR SERVICE AREA</small><b>Gqeberha & surrounding suburbs</b></div></div><div className="availability-note"><Clock3/><span><b>Enquiries welcome 24/7</b><small>Installation times are arranged and confirmed directly.</small></span></div></div>
      <form className="enquiry-form" onSubmit={submit}><div className="form-heading"><span>01 / SEND AN ENQUIRY</span><h3>Request a quotation</h3><p>Share a few details and we'll take it from there.</p></div><label>Your name<input name="name" value={form.name} onChange={update} placeholder="e.g. Thando" required/></label><label>Your suburb / area<input name="area" value={form.area} onChange={update} placeholder="e.g. Walmer" required/></label><label>What do you need?<select name="service" value={form.service} onChange={update} required><option value="">Choose a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}<option>Something else / not sure</option></select></label><label>Tell us a little more<textarea name="details" value={form.details} onChange={update} rows="4" placeholder="Describe the installation or issue (optional)"/></label><button className="btn btn-yellow submit-btn" type="submit"><MessageCircle/> Continue on WhatsApp <ArrowUpRight/></button><small className="form-note">Your message is sent to WhatsApp for you to review before sending.</small></form>
    </div></section>
  </>;
}

export default function App() {
  return <><Header/><main><Routes><Route path="/" element={<HomePage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="*" element={<HomePage/>}/></Routes></main><Footer/><FloatingWhatsApp/></>;
}