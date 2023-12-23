import React from 'react'

import { Button, Text } from 'sharki'
import 'sharki/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <h2>Examples</h2>
      <div className='innerContainer'>
        <Button text='Primary Button' type='primaryButton' />
        <Button text='Default Button' type='defaultButton' />
        <Button text='Dashed Button' type='dashedButton' />
        <Button text='Text Button' type='textButton' />
        <Button text='Link Button' type='linkButton' />
      </div>
      <div className='innerContainer'>
        <h4>Type</h4>
        <Text
          text='There are primary button, default button, dashed button, text button, and text button
        and link button in antd'
        />
      </div>
      <div>
        <code>
          {`
           ReactDom.render(
          <Button text='Primary Button' type='primaryButton' />
          <Button text='Default Button' type='defaultButton' />
          <Button text='Dashed Button' type='dashedButton' />
          <Button text='Text Button' type='textButton' />
          <Button text='Link Button' type='linkButton' />
          );
            `}
        </code>
      </div>
    </div>
  )
}

export default App
