import { getImagePrefix } from '@/utils/util'
import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/NexCardify.png`}
        alt="logo"
        width={160}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
      />
      {/* NexCardify */}
    </Link>
  )
}

export default Logo
