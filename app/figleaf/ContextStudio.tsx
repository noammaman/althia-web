'use client'
import { useState } from 'react'
import s from './vision.module.css'
import base from './figleaf.module.css'
import { WalkEditor } from './WalkDemo'
import ManagerWorkspace from './ManagerWorkspace'
const insightStops=[
 {name:'South gate',reach:96,questions:34,gaps:4,topic:'Dates & construction',example:'How do we know when this was built?',action:'Add an accessible explanation of the dating evidence, with citations and uncertainty.',caution:'Questions about dating may indicate curiosity rather than confusion.'},
 {name:'Water courtyard',reach:72,questions:28,gaps:5,topic:'Daily life & water',example:'Who would have used this space?',action:'Ask a specialist to strengthen the daily-life layer and distinguish evidence from interpretation.',caution:'Do not infer the identity of historic users from the structure alone.'},
 {name:'Terrace path',reach:42,questions:15,gaps:2,topic:'Access & landscape',example:'Is there another way to reach this stop?',action:'Review route accessibility and signage on site; provide a dated alternative where one is confirmed.',caution:'Lower reach could reflect route length, access, time limits, or preferences—not low interest.'},
]
export default function ContextStudio(){
 const [tab,setTab]=useState('Context workspace'),[insight,setInsight]=useState(0)
 const current=insightStops[insight]
 return <section id="studio" className={base.studio}>
  <div className={base.sectionHead}><div><p className={base.eyebrow}>03 / FOR SITES, EXPERTS & AUTHORITIES</p><h2>Better context.<br/>Better visits. Better insight.</h2></div><p>The site is a customer and potential contributor.<br/>Start with a place, add evidence, and build its context.</p></div>
  <div className={s.studioTabs} aria-label="Institution workspace views">{['Context workspace','Journey rules','Visitor insights'].map(x=><button key={x} onClick={()=>setTab(x)} aria-pressed={tab===x}>{x}</button>)}</div>
  <div hidden={tab!=='Context workspace'}><ManagerWorkspace/></div>
  <div className={tab==='Context workspace'?undefined:s.studioPanel}>
  {tab==='Journey rules'&&<><div className={s.governance}><strong>From context to personalized visits</strong><p>A curated sequence is a useful seed. The proposed AI can choose relevant stops and adapt explanations within validated route constraints, time budgets, language support, and access needs. It must not invent safe paths or silently turn uncertain interpretations into facts.</p></div><WalkEditor/></>}
  {tab==='Visitor insights'&&<><div className={s.panelHeader}><h3>What could improve the next visit?</h3><span className={s.badge}>Synthetic sample data · no tracking</span></div><p>An example of the customer value: connect stop-level reach and question themes to editorial and operational decisions. All numbers and questions below are invented for this prototype.</p><div className={s.metrics}><div><strong>120</strong><small>Opted-in sample visits</small></div><div><strong>77</strong><small>Sample questions</small></div><div><strong>11</strong><small>Questions without coverage</small></div></div><div className={s.insightLayout}><div><h4>Stop reach</h4><p className={base.small}>Share of the 120 opted-in sample visits with a recorded stop encounter. One visit can include several stops.</p><ul className={s.bars}>{insightStops.map((item,i)=><li key={item.name}><button onClick={()=>setInsight(i)} aria-pressed={insight===i}><span className={s.barLabel}><span>{item.name}</span><strong>{item.reach} / 120 · {Math.round(item.reach/120*100)}%</strong></span><span className={s.barTrack}><span className={s.barFill} style={{width:`${item.reach/120*100}%`}}/></span></button></li>)}</ul></div><div className={s.insightCard} aria-live="polite"><small>SELECTED STOP / {current.name.toUpperCase()}</small><h4>{current.topic}</h4><p>{current.questions} sample questions · {current.gaps} uncovered</p><p><em>“{current.example}”</em></p><strong>Possible action</strong><p>{current.action}</p><p className={base.small}>{current.caution}</p></div></div><details><summary>Consent, privacy & interpretation</summary><p>Proposed default: the guide works with analytics off. Opted-in events can be queued locally and synced after reconnection. Prefer aggregated stop events and question themes; avoid precise movement trails, raw voice, and unredacted question text by default. Apply retention limits and suppress small groups before reporting.</p><p>Visitors who opt in are not necessarily representative of everyone. Device positioning and background restrictions affect coverage. A location encounter does not prove attention, and dwell time does not prove enjoyment. Reports must disclose the sample and limitations.</p></details></>}

  </div>
 </section>
}
