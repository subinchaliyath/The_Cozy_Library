import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal-root') as HTMLElement

const Modal: React.FC<React.ReactNode> = ({ children }) => {
  const el = useRef(document.createElement('div'))

  useEffect(() => {
    const current = el.current
    modalRoot?.appendChild(current)
    return () => void modalRoot?.removeChild(current)
  }, [])

  return createPortal(children, el.current)
}

export default Modal
