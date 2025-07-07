import { Steps } from 'antd'

interface IProps {
  current: number
}

const RegisterStep = ({ current }: IProps) => {
  return (
    <Steps
      current={current}
      items={[
        {
          title: 'Register',
        },
        {
          title: 'Complete your registration',
          // description: 'Please fill up this information',
        },
        {
          title: 'Select Card Design',
        },
        {
          title: 'Card Active',
        },
      ]}
    />
  )
}

export default RegisterStep
