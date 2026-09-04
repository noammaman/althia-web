import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mythia — mythology bedtime stories for sleep'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 82px',
          background: '#0A0A0A',
          color: '#F5F0E8',
          border: '14px solid #6E5520',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '15px',
              border: '2px solid #C4B49A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '34px',
              color: '#F1E0B5',
              fontFamily: 'Georgia',
            }}
          >
            M
          </div>
          <div style={{ fontFamily: 'Georgia', fontSize: '36px' }}>Mythia</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '980px' }}>
          <div style={{ fontFamily: 'Georgia', fontSize: '76px', lineHeight: 1.05 }}>Sleep inside a myth.</div>
          <div style={{ fontSize: '28px', color: '#C4B49A', lineHeight: 1.4 }}>
            200 bedtime stories across ten world mythologies, narrated for the end of your day.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
