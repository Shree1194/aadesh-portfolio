'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
export function Reveal({children,className=''}:{children:ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.6,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
export function Magnetic({children}:{children:ReactNode}){const ref=useRef<HTMLDivElement>(null);const reduced=useReducedMotion();return <div ref={ref} className="magnetic" onPointerMove={e=>{if(reduced||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.12}px)`;}} onPointerLeave={e=>{e.currentTarget.style.transform='translate(0,0)'}}>{children}</div>}
