import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'

const Container = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.3);
`

const modalRoot = document.querySelector('#modal-root') as HTMLElement

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  const el = useRef(document.createElement('div'))

  useEffect(() => {
    const current = el.current
    modalRoot?.appendChild(current)
    return () => void modalRoot?.removeChild(current)
  }, [])

  return createPortal(<Container>{children}</Container>, el.current)
}

export default Modal
