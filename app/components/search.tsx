import {Link} from '@remix-run/react'
import {lazy, useEffect} from 'react'
import {siteConfig} from 'siteConfig'
import cn from 'classnames'

export interface SearchProps {
  appId?: string
  apiKey?: string
  indexName?: string
  searchParameters?: any
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

function Hit({hit, children}: any) {
  return <Link to={hit.url.replace()}>{children}</Link>
}

function isEditingContent(event: any) {
  var element = event.target
  var tagName = element.tagName
  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}

function useDocSearchKeyboardEvents({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) {
  useEffect(() => {
    function onKeyDown(event: any) {
      function open() {
        // Comprobamos que no se está mostrando ningún otro modal DocSearch antes de abrir
        // otro.
        if (!document.body.classList.contains('DocSearch--active')) {
          onOpen()
        }
      }
      if (
        (event.keyCode === 27 && isOpen) ||
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (!isEditingContent(event) && event.key === '/' && !isOpen)
      ) {
        event.preventDefault()
        if (isOpen) {
          onClose()
        } else if (!document.body.classList.contains('DocSearch--active')) {
          open()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return function () {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onOpen, onClose])
}

const options = {
  appId: siteConfig.google.appId,
  apiKey: siteConfig.google.apiKey,
  indexName: siteConfig.google.indexName,
}

/*export function Search({
  isOpen,
  onOpen,
  onClose,
  searchParameters = {
    hitsPerPage = 5,
  },
}: SearchProps) {
  return <></>
}*/
