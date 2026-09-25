import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Althia — Mythia and Senthia, audio apps for sleep and reflection'
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
          padding: '76px 84px',
          background: '#EEF3F0',
          color: '#203C34',
          borderTop: '18px solid #285E4D',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <div
            style={{
              width: '62px',
              height: '62px',
              borderRadius: '14px',
              background: '#111111',
              color: '#F1E0B5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontFamily: 'Georgia',
            }}
          >
            A
          </div>
          <div style={{ fontSize: '30px', letterSpacing: '4px', textTransform: 'uppercase' }}>Althia</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '920px' }}>
          <div style={{ fontFamily: 'Georgia', fontSize: '70px', lineHeight: 1.08 }}>
            A little more room for your mind.
          </div>
          <div style={{ fontSize: '28px', color: '#555555', lineHeight: 1.4 }}>
            Mythia & Senthia. Audio apps for sleep, relaxation, and reflection.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
