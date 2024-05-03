import ColorPallete from '@/components/ColorPallete'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <h1>dark mode: </h1>
      <ColorPallete title='background'  hexColor='#003C43'/>
      <ColorPallete title='foreground'  hexColor='#E3FEF7'/>
      <ColorPallete title='primary'  hexColor='#77B0AA'/>
      <ColorPallete title='secondary'  hexColor='#135D66'/>
      <ColorPallete title='muted'  hexColor='#719995'/>
      <ColorPallete title='border'  hexColor='#687f87'/>
    
      <h1>light mode</h1>
      <ColorPallete title='background'  hexColor='#EEF5FF'/>
      <ColorPallete title='foreground'  hexColor='#176B87'/>
      <ColorPallete title='primary'  hexColor='#86B6F6'/>
      <ColorPallete title='secondary'  hexColor='#B4D4FF'/>
      <ColorPallete title='muted'  hexColor='#418197'/>
      <ColorPallete title='border'  hexColor='#687f87'/>
    
    </div>
  )
}

export default page
