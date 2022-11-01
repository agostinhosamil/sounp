import Link from 'next/link'
import * as Icon from 'react-icons/sl'

import { HeaderMenuItemLink } from './styles'

export function HeaderMenuItem ({ label, icon, href }) {
  const HeaderMenuIcon = Icon[icon] || Fragment

  return (
    <HeaderMenuItemLink>
      <Link href={href || '/'}>
        <a>
          <HeaderMenuIcon />

          <span>
            { label }
          </span>
        </a>
      </Link>
    </HeaderMenuItemLink>
  )
}
