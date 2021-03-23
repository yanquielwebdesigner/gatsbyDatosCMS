import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

const SkillPreview = ({dato}) => {

  const { titulo, descripcion, slug} = dato;


  return (
    <div css={css`
    
    margin-bottom: 1rem;
    font-size: 1.6rem;
    `}>
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
    </div>
  )
}

export default SkillPreview;
