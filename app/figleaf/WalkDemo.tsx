'use client'
import { useState } from 'react'
import s from './walk.module.css'
import base from './figleaf.module.css'

export const walkStops = [
  { id: 'gate', place: 'South gate', title: 'Where a place begins', chapter: 'Enter', question: 'What makes a settlement more than a collection of buildings?', story: 'Begin at the threshold. In this imagined settlement, the gateway introduces the question that holds the walk together: how does a place support the people who live in it? Before looking for an answer, notice what an entrance lets you see—and what it keeps out of view.', notice: 'Look for a boundary: a change in surface, height, or direction.', deeper: 'An entrance can invite discussion of access and movement. In a real site, claims about trade, defence, or social status would need evidence specific to that gate and period.', next: 'The next chapter asks how everyday needs shaped shared space.' },
  { id: 'water', place: 'Water courtyard', title: 'The work of everyday life', chapter: 'Connect', question: 'What would you need here every single day?', story: 'Imagine pausing in a shared courtyard. Water gives this fictional walk a thread between architecture and daily life. A structure may survive while the routines around it disappear from view. This chapter asks what material evidence can tell us—and where imagination must remain a question.', notice: 'Consider the effort of carrying water. What would that change about a daily routine?', deeper: 'A basin alone does not establish who used it or how. A real narrative would separate observed features, published interpretations, and open questions, with references for each claim.', next: 'The final chapter widens the view from the settlement to its landscape.' },
  { id: 'terrace', place: 'Terrace path', title: 'A landscape still becoming', chapter: 'Reflect', question: 'Where does the historic site end?', story: 'The walk ends by looking outward. In this illustrative landscape, the path connects built remains with the living world around them. The closing invitation is to see the place as something that continues to change, and to ask whose care will shape what visitors encounter next.', notice: 'Pause and look beyond the nearest structure. What else belongs in the story?', deeper: 'Nature and heritage can share a route, but ecological claims need their own sources and specialist review. Seasonal advice and access conditions also need dated checks.', next: 'Carry one new question into the rest of your visit.' },
]

export default function WalkDemo() {
  const [view, setView] = useState<'choose'|'route'|'story'|'finish'>('choose')
  const [stop, setStop] = useState(0)
  const [visited, setVisited] = useState<string[]>([])
  const current = walkStops[stop]
  function finishStop() {
    setVisited(v => v.includes(current.id) ? v : [...v, current.id])
    if (stop === walkStops.length - 1) setView('finish')
    else { setStop(stop + 1); setView('route') }
  }
  function restart() { setVisited([]); setStop(0); setView('choose') }
  return <section id="experience" className={base.experience}>
    <div className={base.sectionHead}><div><p className={base.eyebrow}>01 / THE VISITOR EXPERIENCE</p><h2>A place unfolds.<br/>One chapter at a time.</h2></div><p>Choose a curated walk. Arrive at a stop.<br/>Discover its story, then follow the thread.</p></div>
    <div className={s.stage}>
      <div className={s.outline}>
        <p className={base.eyebrow}>THE WALK / OLIVE HILL</p>
        <h3>Water, work &amp;<br/>the living hill.</h3>
        <p>One question connects three places: <em>what makes a place live?</em> The curator sets the sequence and story arc. Visitors set their pace.</p>
        <div className={s.routeDrawing} aria-hidden="true"><svg viewBox="0 0 530 170"><path d="M20 140 Q65 10 160 75 T340 75 T510 35" fill="none" stroke="#bdc7ac" strokeWidth="40"/><path d="M20 140 Q65 10 160 75 T340 75 T510 35" fill="none" stroke="#687c5c" strokeWidth="2" strokeDasharray="5 7"/>{[[80,63],[265,102],[450,60]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="19" fill={stop===i&&view!=='choose'?'#775069':'#263b30'}/><text x={x} y={y+5} textAnchor="middle" fill="white" fontSize="13">{i+1}</text></g>)}</svg><span>A story sequence, not a navigation map</span></div>
        <ol className={s.chapters}>{walkStops.map((item,i)=><li key={item.id}><button onClick={()=>{setStop(i);setView('route')}} aria-current={view!=='choose'&&stop===i?'step':undefined}><span className={s.number}>{visited.includes(item.id)?'✓':`0${i+1}`}</span><span><small>{item.chapter} / {item.place}</small><strong>{item.title}</strong></span><span aria-hidden="true">↗</span></button></li>)}</ol>
        <p className={base.small}>Fictional site and narrative, written to test the experience. No historical claims, real route, or institution are represented. Try the walk in the screen beside this outline.</p>
      </div>
      <div className={s.device}>
        <div className={s.deviceBar}><span>Figleaf</span><span>INTERACTIVE SCREEN STUDY</span></div>
        <div className={s.screen}>
          {view==='choose'&&<><p className={s.kicker}>OLIVE HILL / CURATED WALKS</p><div className={s.cover}><span>01 — 03</span><div className={s.coverLine}/><span>ENTER · CONNECT · REFLECT</span></div><h3>Water, work &amp;<br/>the living hill.</h3><p>Three places. One connected story about the things that sustain a settlement.</p><div className={s.facts}><span>3 stops</span><span>≈25 min · example</span><span>Read at your pace</span></div><details><summary>Before you begin</summary><p>Route distance, steps, surface, rest points, and closures would be checked by the site team. Access has not been surveyed for this fictional walk. A seated or remote reading option should remain available.</p><p>Proposed: download a reviewed pack before arrival. This prototype does not download content or use your location.</p></details><button className={s.cta} onClick={()=>setView('route')}>Start demo walk <span>→</span></button></>}
          {view==='route'&&<><p className={s.kicker}>YOUR WALK / CHAPTER {stop+1} OF 3</p><div className={s.progress} aria-label={`${visited.length} of 3 stories read`}>{walkStops.map(item=><span key={item.id} className={visited.includes(item.id)?s.done:''}/>)}</div><h3>{current.place}</h3><p className={s.subheading}>{current.title}</p><div className={s.arrival}><span>{String(stop+1).padStart(2,'0')}</span><p>{current.question}</p></div><p>At the site, a location suggestion or a stop code could help you find this chapter. You choose when the story opens.</p><p className={s.caption}>Demo: no live position, directions, or safe-route guidance.</p><button className={s.cta} onClick={()=>setView('story')}>I’m at this stop · open story <span>→</span></button><button className={s.quiet} onClick={()=>setView('choose')}>View walk details</button></>}
          {view==='story'&&<><p className={s.kicker}>{current.place.toUpperCase()} / {current.chapter.toUpperCase()}</p><h3>{current.title}</h3><p className={s.label}>Illustrative story · text mode</p><p>{current.story}</p><blockquote><small>A MOMENT TO NOTICE</small>{current.notice}</blockquote><details><summary>Go a little deeper</summary><p>{current.deeper}</p></details><details><summary>Sources &amp; uncertainty</summary><p>This is an invented design example; no archaeological sources are attached. A real chapter would show claim-level citations, author and reviewer attribution, era/date bounds, rights, and uncertainty. An optional deeper layer would retain those references.</p></details><p className={s.bridge}>{current.next}</p><button className={s.cta} onClick={finishStop}>{stop===2?'Finish the demo walk':'Mark read & continue'} <span>→</span></button><button className={s.quiet} onClick={()=>setView('route')}>Back to this stop</button></>}
          {view==='finish'&&<><p className={s.kicker}>YOUR WALK / A MOMENT TO REFLECT</p><div className={s.finishMark}>⌁</div><h3>The walk ends.<br/>The questions stay.</h3><p>You opened {visited.length} of 3 stories. From an entrance to daily routines to a living landscape, each chapter offers another way to notice a place.</p><blockquote>What would you look for differently on your next visit?</blockquote><p>Proposed next steps: revisit a chapter, explore its sources, or choose another institution-curated walk.</p><button className={s.cta} onClick={restart}>Explore the walk again <span>↺</span></button><a className={s.quiet} href="#questions">Share feedback on the concept ↗</a></>}
        </div>
        <div className={s.deviceFooter}>Prototype · progress resets on reload · no audio playback</div>
      </div>
    </div>
    <div className={base.three}><article><b>A story with a beginning and an end</b><p>The route has a question, a sequence, and a closing reflection. Every stop earns its place in the story.</p></article><article><b>Depth without losing the thread</b><p>A short core narrative keeps the walk moving. Optional evidence, eras, and perspectives sit beneath each chapter.</p></article><article><b>The visitor controls the pace</b><p>Manual stop selection, rereading, and pauses are part of the concept. Audio, transcripts, offline packs, and alternative routes need separate validation.</p></article></div>
  </section>
}

export function WalkEditor() {
  const [order,setOrder]=useState(walkStops.map(x=>x.id))
  const [name,setName]=useState('Water, work & the living hill')
  const [audience,setAudience]=useState('Curious adults')
  function move(index:number,offset:number) { const next=[...order]; const target=index+offset; [next[index],next[target]]=[next[target],next[index]];setOrder(next) }
  return <div className={s.walkEditor}>
    <p className={s.kicker}>CURATED EXPERIENCE / DRAFT</p><h3>Build the thread between places.</h3>
    <div className={s.fields}><label>Walk title<input value={name} onChange={e=>setName(e.target.value)}/></label><label>Primary audience<select value={audience} onChange={e=>setAudience(e.target.value)}><option>Curious adults</option><option>Families with children</option><option>Specialist visitors</option></select></label></div>
    <label>The question this walk explores<textarea defaultValue="What makes a place live—and whose work and care sustain it?"/></label>
    <p className={s.kicker}>CHAPTER ORDER / TRY REARRANGING</p>
    <ol className={s.editorStops}>{order.map((id,i)=>{const item=walkStops.find(x=>x.id===id)!;return <li key={id}><span className={s.number}>{i+1}</span><div><strong>{item.place}</strong><small>{item.chapter} · {item.title}</small></div><div className={s.reorder}><button disabled={i===0} aria-label={`Move ${item.place} earlier`} onClick={()=>move(i,-1)}>↑</button><button disabled={i===order.length-1} aria-label={`Move ${item.place} later`} onClick={()=>move(i,1)}>↓</button></div></li>})}</ol>
    <div className={s.routePreview} aria-live="polite"><small>SEQUENCE PREVIEW / {audience.toUpperCase()}</small><strong>{name.trim()||'Untitled walk'}</strong><p>{order.map(id=>walkStops.find(x=>x.id===id)!.place).join(' → ')}</p></div>
    <div className={s.fields}><label>Language &amp; review<select defaultValue="English draft"><option>English draft</option><option>Hebrew — translation needed</option><option>Arabic — translation needed</option></select></label><label>Route access status<select defaultValue="Not surveyed"><option>Not surveyed</option><option>Survey in progress</option></select></label></div>
    <details><summary>Route-level QA before publishing</summary><p>Check each transition on site: walking time, distance, surface, gradient, closures, safe stopping points, and an alternative experience for visitors unable to follow the route. Reordering chapters requires a fresh continuity and route check.</p><p>Approve the core story, optional layers, translations, transcripts, citations, and media rights. Pin the selected narrative revisions to a route version so future edits do not silently change an approved walk.</p></details>
    <p className={s.caption}>Working mockup: title, audience, and ordering update this preview only. No route is published, translated, or certified accessible. Changes reset when you leave this tab or reload; the visitor demo remains the original authored walk.</p>
  </div>
}
