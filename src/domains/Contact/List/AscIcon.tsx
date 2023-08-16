import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'

export function AscIcon({ asc }: { asc: boolean }) {
  if (asc) {
    return <BarsArrowUpIcon style={{ width: '1.3rem', height: '1.3rem' }} />
  }
  return <BarsArrowDownIcon style={{ width: '1.3rem', height: '1.3rem' }} />
}
