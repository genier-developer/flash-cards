import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from '@/components/ui/radio-group/radio-group.module.scss'

type RadioGroupType = {
  disabled?: boolean
  name?: string
  onChangeValue?: (newValue: number) => void
  value?: number | string
} & ComponentPropsWithoutRef<'div'>

export const RadioGroupUI = (props: RadioGroupType) => {
  const handleValueChange = (newValue: string) => {
    props.onChangeValue && props.onChangeValue(Number(newValue))
  }

  return (
    <form>
      <RadioGroup.Root
        aria-label={'View density'}
        className={s.RadioGroupRoot}
        defaultValue={'default'}
        onValueChange={handleValueChange}
      >
        <div className={s.RadioGroupItemBox}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'r1'} value={'1'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <Typography htmlFor={'r1'} variant={'body2'}>
            Did not know
          </Typography>
        </div>
        <div className={s.RadioGroupItemBox}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'r2'} value={'2'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <Typography htmlFor={'r2'} variant={'body2'}>
            Forgot
          </Typography>
        </div>
        <div className={s.RadioGroupItemBox}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'r3'} value={'3'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <Typography htmlFor={'r3'} variant={'body2'}>
            A lot of though
          </Typography>
        </div>
        <div className={s.RadioGroupItemBox}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'r4'} value={'4'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <Typography htmlFor={'r4'} variant={'body2'}>
            Confused
          </Typography>
        </div>
        <div className={s.RadioGroupItemBox}>
          <RadioGroup.Item className={s.RadioGroupItem} id={'r5'} value={'5'}>
            <RadioGroup.Indicator className={s.RadioGroupIndicator} />
          </RadioGroup.Item>
          <Typography htmlFor={'r5'} variant={'body2'}>
            Knew the answer
          </Typography>
        </div>
      </RadioGroup.Root>
    </form>
  )
}
